import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const output = path.join(root, "assets", "firebase-config.js");
const input = process.env.NOIR_FIREBASE_CONFIG?.trim();
let config = null;

if (input) {
  let parsed;
  try {
    parsed = JSON.parse(input);
  } catch {
    throw new Error("NOIR_FIREBASE_CONFIG must contain a valid JSON object.");
  }
  const required = ["apiKey", "authDomain", "projectId", "appId"];
  if (
    !parsed ||
    typeof parsed !== "object" ||
    Array.isArray(parsed) ||
    required.some(
      (key) => typeof parsed[key] !== "string" || !parsed[key].trim(),
    )
  ) {
    throw new Error(
      "NOIR_FIREBASE_CONFIG requires apiKey, authDomain, projectId and appId.",
    );
  }
  config = {};
  for (const key of [
    ...required,
    "storageBucket",
    "messagingSenderId",
    "measurementId",
  ]) {
    if (typeof parsed[key] === "string") config[key] = parsed[key];
  }
}

fs.mkdirSync(path.dirname(output), { recursive: true });
const serialized = JSON.stringify(config).replace(/</g, "\\u003c");
fs.writeFileSync(
  output,
  `window.NOIR_FIREBASE_CONFIG = ${serialized};\n`,
  "utf8",
);
console.log(
  config
    ? "Firebase browser configuration generated."
    : "Firebase is not configured; local progress remains available.",
);
