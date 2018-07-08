import path from "path";
import Bundler from "parcel-bundler";
import assertBundleTree from "parcel-assert-bundle-tree";
import WxPlugin from "../lib";

async function setupBundler(input, options) {
  const bundler = new Bundler(
    input,
    Object.assign(
      {
        outDir: path.join(__dirname, "dist"),
        watch: false,
        cache: false,
        hmr: false,
        logLevel: 0,
        publicUrl: "./"
      },
      options
    )
  );
  await WxPlugin(bundler);
  return bundler;
}

describe("basic", () => {
  const bundlerPath = path.join(__dirname, "./integration/basic/app.wxjs");

  it("should create bundle", async () => {
    const bundler = await setupBundler(bundlerPath);
    const bundle = await bundler.bundle();
    assertBundleTree(bundle, {
      type: "js",
      assets: [
        "index.js",
        "Demo.svelte",
        "Header.svelte",
        "hot-api.js",
        "index.js",
        "proxy.js",
        "registry.js"
      ],
      childBundles: [
        {
          type: "map"
        }
      ]
    });
  });
});
