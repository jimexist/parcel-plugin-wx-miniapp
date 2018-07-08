module.exports = async bundler => {
  bundler.addAssetType("wxss", require.resolve("./WxssAsset"));
  bundler.addAssetType("wxjs", require.resolve("./WxjsAsset"));
};

export default module.exports;
