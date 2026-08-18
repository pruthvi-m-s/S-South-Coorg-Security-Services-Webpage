interface ImportMetaEnv {
  readonly [key: string]: string | boolean | undefined;
}

function readEnv(name: string, fallback = ""): string {
  const metaEnv = (import.meta as ImportMeta & { env?: ImportMetaEnv }).env;
  if (!metaEnv) {
    return fallback;
  }
  const value = metaEnv[name];
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : fallback;
  }
  return fallback;
}

export function getEnv(name: string, fallback = ""): string {
  return readEnv(name, fallback);
}

export function getEnvBoolean(name: string, fallback = false): boolean {
  const value = readEnv(name);
  if (!value) return fallback;
  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}
