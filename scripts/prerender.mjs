import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { chromium } from "playwright";

const routes = [
  "/",
  "/about",
  "/compliance",
  "/services",
  "/industries",
  "/clients",
  "/gallery",
  "/faqs",
  "/contact",
  "/services/security-guards",
  "/services/corporate-security",
  "/services/industrial-security",
  "/services/residential-security",
  "/services/housekeeping",
  "/services/front-office-management",
  "/services/skilled-labour",
  "/services/unskilled-labour",
  "/services/corporate-staffing",
  "/services/ex-army-security-guards",
  "/services/event-security",
  "/services/background-verification",
  "/services/private-detective-services",
  "/services/integrated-facility-management-services",
];

const host = "127.0.0.1";
const port = 4173;
const baseUrl = `http://${host}:${port}`;

const previewCommand =
  process.platform === "win32"
    ? process.env.ComSpec ?? "cmd.exe"
    : "npm";

const previewArgs =
  process.platform === "win32"
    ? [
        "/d",
        "/s",
        "/c",
        `npm run preview -- --host ${host} --port ${port}`,
      ]
    : [
        "run",
        "preview",
        "--",
        "--host",
        host,
        "--port",
        String(port),
      ];

const preview = spawn(
  previewCommand,
  previewArgs,
  {
    stdio: "pipe",
    env: process.env,
  },
);

let previewOutput = "";

preview.stdout.on("data", (chunk) => {
  previewOutput += chunk.toString();
});

preview.stderr.on("data", (chunk) => {
  previewOutput += chunk.toString();
});

function stopPreview() {
  if (preview.killed) return;

  preview.kill("SIGTERM");

  setTimeout(() => {
    if (!preview.killed) {
      preview.kill("SIGKILL");
    }
  }, 1000);
}

process.on("exit", stopPreview);
process.on("SIGINT", () => {
  stopPreview();
  process.exit(130);
});
process.on("SIGTERM", () => {
  stopPreview();
  process.exit(143);
});

async function waitForServer(url, timeout = 30_000) {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        return;
      }
    } catch {
      // Preview server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(
    `Vite preview server did not start.\n${previewOutput}`,
  );
}

await waitForServer(baseUrl);

const browser = await chromium.launch();

try {
  const page = await browser.newPage({
    viewport: {
      width: 1440,
      height: 900,
    },
  });

  for (const route of routes) {
    const url = `${baseUrl}${route}`;

    await page.goto(url, {
      waitUntil: "networkidle",
    });

    await page.waitForFunction(
      () => document.title.trim().length > 0,
    );

    // Give client-side SEO effects a moment to finish.
    await page.waitForTimeout(100);

    const html = await page.content();

    const outputPath =
      route === "/"
        ? path.resolve("dist", "index.html")
        : path.resolve(
            "dist",
            route.replace(/^\/|\/$/g, ""),
            "index.html",
          );

    await fs.mkdir(path.dirname(outputPath), {
      recursive: true,
    });

    await fs.writeFile(outputPath, html, "utf8");

    console.log(`Prerendered: ${route}`);
  }
} finally {
  await browser.close();
  stopPreview();
  process.exit(0);
}