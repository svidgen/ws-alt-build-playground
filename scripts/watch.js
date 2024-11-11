import { readFileSync } from "fs";
import concurrently from "concurrently";

const packageJson = JSON.parse(readFileSync("package.json"));

concurrently(packageJson.workspaces.map((ws) => `npm run watch -w ${ws}`));
