import {
  defineConfig,
  loadEnv,
} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import {
  writeFileSync,
} from "node:fs";
import {
  generateLlmsTxt,
  generateRobotsTxt,
  generateSitemapXml,
  getIndexableRoutes,
} from "./src/lib/seo-files.js";

export default defineConfig(
  ({ mode }) => {
    const env = loadEnv(
      mode,
      process.cwd(),
      "",
    );

    const siteUrl =
      env.VITE_SITE_URL?.trim();

    const googleSiteVerification =
      env.VITE_GOOGLE_SITE_VERIFICATION?.trim();

    const bingSiteVerification =
      env.VITE_BING_SITE_VERIFICATION?.trim();

    const optionalEnvValue = (
      value: string | undefined,
    ) =>
      value?.trim() || undefined;

    const seoFilesPlugin = {
      name: "sscss-seo-files",

      buildStart() {
        if (!siteUrl) {
          throw new Error(
            "VITE_SITE_URL is required to generate production SEO files.",
          );
        }

        const sitemap =
          generateSitemapXml(
            siteUrl,
          );

        const sitemapEntryCount =
          (
            sitemap.match(
              /<loc>/g,
            ) ?? []
          ).length;

        const expectedCount =
          getIndexableRoutes().length;

        if (
          sitemapEntryCount !==
          expectedCount
        ) {
          throw new Error(
            "Generated sitemap entry count does not match the indexable route count.",
          );
        }

        writeFileSync(
          path.resolve(
            __dirname,
            "public/sitemap.xml",
          ),
          sitemap,
        );

        writeFileSync(
          path.resolve(
            __dirname,
            "public/robots.txt",
          ),
          generateRobotsTxt(
            siteUrl,
          ),
        );

        writeFileSync(
          path.resolve(
            __dirname,
            "public/llms.txt",
          ),
          generateLlmsTxt({
            name: optionalEnvValue(
              env.VITE_SITE_NAME,
            ),
            shortName:
              optionalEnvValue(
                env.VITE_SITE_SHORT_NAME,
              ),
            primaryServiceArea:
              optionalEnvValue(
                env.VITE_PRIMARY_SERVICE_AREA,
              ),
            secondaryServiceArea:
              optionalEnvValue(
                env.VITE_SECONDARY_SERVICE_AREA,
              ),
          }),
        );
      },

      transformIndexHtml(
        html: string,
      ) {
        let result = html;

        if (googleSiteVerification) {
          result = result.replace(
            '<meta name="viewport"',
            `<meta name="google-site-verification" content="${googleSiteVerification}" />\n    <meta name="viewport"`,
          );
        }

        if (bingSiteVerification) {
          result = result.replace(
            '<meta name="viewport"',
            `<meta name="msvalidate.01" content="${bingSiteVerification}" />\n    <meta name="viewport"`,
          );
        }

        return result;
      },
    };

    return {
      plugins: [
        react(),
        tailwindcss(),
        seoFilesPlugin,
      ],

      resolve: {
        alias: {
          "@": path.resolve(
            __dirname,
            "./src",
          ),
        },
      },

      build: {
        target: "esnext",
        reportCompressedSize: false,
        chunkSizeWarningLimit: 900,

        rollupOptions: {
          output: {
            manualChunks(id: string) {
              if (
                !id.includes(
                  "node_modules",
                )
              ) {
                return undefined;
              }

              if (
                id.includes("react") ||
                id.includes(
                  "react-dom",
                ) ||
                id.includes(
                  "react-router",
                ) ||
                id.includes(
                  "scheduler",
                ) ||
                id.includes(
                  "tw-animate-css",
                )
              ) {
                return "vendor-react";
              }

              if (
                id.includes(
                  "framer-motion",
                ) ||
                id.includes(
                  "motion/react",
                ) ||
                id.includes(
                  "motion-dom",
                ) ||
                id.includes(
                  "motion-utils",
                )
              ) {
                return "vendor-motion";
              }

              if (
                id.includes(
                  "lucide-react",
                )
              ) {
                return "vendor-icons";
              }

              if (
                id.includes("clsx") ||
                id.includes(
                  "tailwind-merge",
                ) ||
                id.includes(
                  "class-variance-authority",
                )
              ) {
                return "vendor-utils";
              }

              return "vendor-other";
            },
          },
        },
      },
    };
  },
);