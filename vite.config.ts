import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { writeFileSync } from "node:fs";
import { generateLlmsTxt, generateRobotsTxt, generateSitemapXml, getIndexableRoutes } from "./src/lib/seo-files.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = env.VITE_SITE_URL;
  const googleSiteVerification = env.VITE_GOOGLE_SITE_VERIFICATION;
  const bingSiteVerification = env.VITE_BING_SITE_VERIFICATION;
  const seoFilesPlugin = {
    name: "sscss-seo-files",
    buildStart() {
      if (!siteUrl) throw new Error("VITE_SITE_URL is required to generate production SEO files.");
      const sitemap = generateSitemapXml(siteUrl);
      const sitemapEntryCount = (sitemap.match(/<loc>/g) ?? []).length;
      if (sitemapEntryCount !== getIndexableRoutes().length) throw new Error("Generated sitemap entry count does not match the indexable route count.");
      writeFileSync(path.resolve(__dirname, "public/sitemap.xml"), sitemap);
      writeFileSync(path.resolve(__dirname, "public/robots.txt"), generateRobotsTxt(siteUrl));
      writeFileSync(path.resolve(__dirname, "public/llms.txt"), generateLlmsTxt());
    },
    transformIndexHtml(html: string) {
      // Inject webmaster verification meta tags ONLY when the
      // corresponding environment variable is set. Nothing is
      // hardcoded — all tokens come from the environment.
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
  plugins: [react(), tailwindcss(), seoFilesPlugin],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});
