const { Asset } = require("parcel-bundler");
const logger = require("parcel-bundler/src/Logger");
const JsAsset = require("parcel-bundler/src/assets/JSAsset");

class WxjsAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = "js";
    logger.log(`constructor ${{ name, options }}`);
    this.delegate = new JsAsset(name, options);
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

module.exports = WxjsAsset;
