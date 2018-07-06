module.exports = function(bundler) {
  bundler.addAssetType("wxss", require.resolve("./WxssAsset"));
  bundler.addAssetType("wxjs", require.resolve("./WxjsAsset"));
};
