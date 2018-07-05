module.exports = bundler => {
  bundler.addAssetType(
    "wxss",
    require.resolve("parcel-bundler/src/assets/CSSAsset")
  );
  bundler.addPackager(
    "wxss",
    require.resolve("parcel-bundler/src/packager/RawPackager")
  );
};
