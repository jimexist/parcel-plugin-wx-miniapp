const WxPlugin = async bundler => {
  bundler.addAssetType("wxss", require.resolve("./WxssAsset"));
  bundler.addAssetType("wxjs", require.resolve("./WxjsAsset"));
};

export default WxPlugin;
module.exports = WxPlugin;
