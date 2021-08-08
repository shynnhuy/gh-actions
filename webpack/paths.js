const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const alias = {
  "~root": resolveApp("src"),
  "~core": resolveApp("src/core"),
  "~configs": resolveApp("src/configs"),
  "~layouts": resolveApp("src/layouts"),
  "~redux": resolveApp("src/redux"),
  "~services": resolveApp("src/services"),
  "~utils": resolveApp("src/utils"),
  "~test-utils": resolveApp("src/tests/utils.tsx"),
  "~routes": resolveApp("src/routes.tsx"),
};

module.exports = {
  alias,
  dotenvDev: resolveApp(".env.development"),
  dotenvProd: resolveApp(".env.production"),
  app: resolveApp("."),
  build: resolveApp("build"),
  public: resolveApp("public"),
  src: resolveApp("src"),
  html: resolveApp("public/index.html"),
  entry: resolveApp("src/index.tsx"),
  tsconfig: resolveApp("./tsconfig.json"),
};
