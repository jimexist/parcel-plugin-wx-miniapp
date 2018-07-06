module.exports = bundler => {
  bundler.addAssetType("wxss", require.resolve("./WxssAsset"));
  bundler.addAssetType("wxjs", require.resolve("./WxjsAsset"));
  bundler.addPackager(
    "wxss",
    require.resolve("parcel-bundler/src/packager/RawPackager")
  );
  bundler.addPackager(
    "wxjs",
    require.resolve("parcel-bundler/src/packager/RawPackager")
  );
};
