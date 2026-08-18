import test from "node:test";
import assert from "node:assert/strict";
import { createRateLimiter } from "./rateLimiter.mjs";
import { validateContactPayload } from "./contactApi.mjs";

test("rate limiter blocks requests after the configured threshold is exceeded", () => {
  const limiter = createRateLimiter({ windowMs: 1000, maxRequests: 2 });

  assert.equal(limiter.allow("203.0.113.10", 1000), true);
  assert.equal(limiter.allow("203.0.113.10", 1001), true);
  assert.equal(limiter.allow("203.0.113.10", 1002), false);
});

test("contact payload validation rejects unsafe content", () => {
  const result = validateContactPayload({
    name: "Example User",
    company: "Demo Co",
    phone: "+919876543210",
    email: "demo@example.com",
    service: "Security",
    message: "<script>alert(1)</script>",
  });

  assert.equal(result.ok, false);
  assert.match(result.errors.message ?? "", /unsupported/i);
});
