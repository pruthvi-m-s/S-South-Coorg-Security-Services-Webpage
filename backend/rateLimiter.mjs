export function createRateLimiter({ windowMs, maxRequests }) {
  const entries = new Map();

  return {
    allow(identifier, now = Date.now()) {
      const entry = entries.get(identifier) ?? { timestamps: [] };
      const recent = entry.timestamps.filter((timestamp) => now - timestamp < windowMs);
      recent.push(now);
      entries.set(identifier, { timestamps: recent });

      if (recent.length > maxRequests) {
        return false;
      }

      return true;
    },
  };
}
