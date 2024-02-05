const { resolve } = require("path");
const rootPath = resolve(__dirname, "..");

const { build } = require("esbuild");

build({
  entryPoints: ["./src/client/*.ts", "./src/server/*.ts"],
  outdir: resolve(rootPath, "build"),
  bundle: true,
  minify: true,
  platform: "browser",
  target: "es2020",
  logLevel: "info",
}).catch(() => process.exit(1));
