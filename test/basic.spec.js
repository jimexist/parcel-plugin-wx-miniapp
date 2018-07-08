import path from "path";
import Bundler from "parcel-bundler";
import assertBundleTree from "parcel-assert-bundle-tree";
import WxPlugin from "../lib";

async function setupBundler(input, options) {
  const watch = false;
  const cache = false;
  const hmr = false;
  const logLevel = 2;
  const bundler = new Bundler(
    input,
    Object.assign(
      {
        outDir: path.join(__dirname, "lib"),
        watch,
        cache,
        hmr,
        logLevel,
        publicUrl: "./"
      },
      options
    )
  );
  await WxPlugin(bundler);
  return bundler;
}

jest.setTimeout(10 * 1000); // 10 second timeout

describe("basic", () => {
  describe("wxss", () => {
    const inputPath = path.join(__dirname, "integration/basic/app.wxss");
    it(`should create bundle for ${inputPath}`, async () => {
      const bundler = await setupBundler(inputPath);
      const bundle = await bundler.bundle();
      assertBundleTree(bundle, {
        type: "wxss",
        assets: ["app.wxss"],
        childBundles: []
      });
    });
  });

  describe("wxjs", () => {
    const inputPath = path.join(__dirname, "integration/basic/app.wxjs");
    it(`should create bundle for ${inputPath}`, async () => {
      const bundler = await setupBundler(inputPath);
      const bundle = await bundler.bundle();
      assertBundleTree(bundle, {
        type: "js",
        assets: ["app.wxjs"],
        childBundles: [
          {
            type: "map"
          }
        ]
      });
    });
  });
});
