import WxssAsset from "../src/WxssAsset";

describe("WxssAsset", () => {
  it("should output type `js`", () => {
    const asset = new WxssAsset(__filename, { rootDir: "/root/dir" });
    expect(asset.type).toEqual("wxss");
  });
});
