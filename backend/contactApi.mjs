import { createRateLimiter } from "./rateLimiter.mjs";

const limiter = createRateLimiter({ windowMs: 15 * 60 * 1000, maxRequests: 5 });
const CONTROL_CHAR_PATTERN = /[\u0000-\u001F\u007F]/;
const HTML_TAG_PATTERN = /<\/?(?:a|abbr|acronym|b|blockquote|br|code|div|em|form|h1|h2|h3|h4|h5|h6|hr|i|img|li|ol|p|pre|script|span|strong|table|tbody|td|th|tr|ul)\b[^>]*>/i;
const SCRIPT_PATTERN = /(?:<\s*script|javascript:|on\w+\s*=)/i;

function normalizeText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function isValidIndianPhone(phone) {
  const cleaned = phone.replace(/[\s\-()]/g, "");
  return /^(\+91)?[6-9]\d{9}$/.test(cleaned);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validateContactPayload(payload) {
  const errors = {};
  const name = normalizeText(payload.name);
  const company = normalizeText(payload.company);
  const phone = normalizeText(payload.phone);
  const email = normalizeText(payload.email).toLowerCase();
  const service = normalizeText(payload.service);
  const message = normalizeText(payload.message);

  if (!name || name.length < 2) {
    errors.name = "Name is required";
  } else if (name.length > 200) {
    errors.name = "Name must be at most 200 characters";
  } else if (CONTROL_CHAR_PATTERN.test(name) || HTML_TAG_PATTERN.test(name) || SCRIPT_PATTERN.test(name)) {
    errors.name = "Input contains unsupported content";
  }

  if (company && company.length > 200) {
    errors.company = "Company name must be at most 200 characters";
  }

  if (!phone || !isValidIndianPhone(phone)) {
    errors.phone = "Please enter a valid 10-digit Indian phone number";
  }

  if (!email || !isValidEmail(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!service) {
    errors.service = "Service is required";
  }

  if (!message || message.length < 10 || message.length > 2000) {
    errors.message = "Message must be between 10 and 2000 characters";
  } else if (CONTROL_CHAR_PATTERN.test(message) || HTML_TAG_PATTERN.test(message) || SCRIPT_PATTERN.test(message)) {
    errors.message = "Input contains unsupported content";
  }

  return {
    ok: Object.keys(errors).length === 0,
    errors,
  };
}

export function createContactHandler() {
  return async function handleContact(req, res) {
    if (req.method !== "POST") {
      res.writeHead(405, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: false, message: "Method not allowed" }));
      return;
    }

    const clientIp = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
    if (!limiter.allow(clientIp)) {
      res.writeHead(429, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: false, message: "Too many requests" }));
      return;
    }

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const payload = JSON.parse(body || "{}");
        const validation = validateContactPayload(payload);

        if (!validation.ok) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: false, message: "Validation failed", errors: validation.errors }));
          return;
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: true, message: "Inquiry received" }));
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: false, message: "Invalid JSON body" }));
      }
    });
  };
}
