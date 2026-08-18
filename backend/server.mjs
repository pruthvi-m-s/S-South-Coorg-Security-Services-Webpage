import http from "node:http";
import { createContactHandler } from "./contactApi.mjs";

const port = Number(process.env.PORT ?? 3001);
const host = process.env.HOST ?? "127.0.0.1";
const handleContact = createContactHandler();

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (req.url?.startsWith("/api/contact")) {
    handleContact(req, res);
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: false, message: "Not found" }));
});

server.listen(port, host, () => {
  console.log(`Contact API listening on http://${host}:${port}`);
});
