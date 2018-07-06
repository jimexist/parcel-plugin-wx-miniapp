const { Asset } = require("parcel-bundler");
const logger = require("parcel-bundler/src/Logger");
const CSSAsset = require("parcel-bundler/src/assets/CSSAsset");

class WxssAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = "wxss";
    logger.log(`constructor ${{ name, options }}`);
    this.delegate = new CSSAsset(name, options);
  }

  async parse(code) {
    logger.log(`parse ${{ code }}`);
    const result = await this.delegate.parse(code);
    logger.log(`parse ${{ result }}`);
    return result;
  }

  async generate() {
    const result = await this.delegate.generate();
    logger.log(`generate ${{ result }}`);
    return result;
  }
}

module.exports = WxssAsset;
