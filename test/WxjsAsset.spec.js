import WxjsAsset from "../src/WxjsAsset";

describe("WxjsAsset", () => {
  it("should set the type accordingly", () => {
    const asset = new WxjsAsset(__filename, { rootDir: "/root/dir" });
    expect(asset.type).toEqual("js");
  });
});
