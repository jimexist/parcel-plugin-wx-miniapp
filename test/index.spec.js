const WxPlugin = require("../src/index");
const assertBundleTree = require("parcel-assert-bundle-tree");
const Bundler = require("parcel-bundler/src/Bundler");
const path = require("path");

describe("plugin", () => {
  it("should transpile .wxjs file", async () => {
    const input = ``;
    const options = {};
    const bundler = new Bundler(
      input,
      Object.assign(
        {
          outDir: path.join(__dirname, "dist"),
          watch: false,
          cache: false,
          hmr: false,
          logLevel: 3
        },
        options
      )
    );
    await WxPlugin(bundler);
    const bundle = await bundler.bundle();
    assertBundleTree(bundle, {
      name: "index.html"
    });
  });
});
