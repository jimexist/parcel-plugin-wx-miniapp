import { Asset } from "parcel-bundler";
import logger from "parcel-bundler/src/Logger";
import JsAsset from "parcel-bundler/src/assets/JSAsset";

class WxjsAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = "js";
    this.delegate = new JsAsset(
      name,
      Object.assign({}, options, {
        sourceMaps: false
      })
    );
  }

  mightHaveDependencies() {
    return this.delegate.mightHaveDependencies();
  }

  shouldInvalidate(cacheData) {
    return this.delegate.shouldInvalidate(cacheData);
  }

  generateErrorMessage() {
    return this.delegate.generateErrorMessage();
  }

  collectDependencies() {
    return this.delegate.collectDependencies();
  }

  async parse(code) {
    logger.log(`parse, code: ${code}`);
    const result = await this.delegate.parse(code);
    logger.log(`parse, result: ${JSON.stringify(result)}`);
    return result;
  }

  async pretransform() {
    await this.delegate.pretransform();
  }

  async transform() {
    await this.delegate.transform();
  }

  async generate() {
    const result = await this.delegate.generate();
    logger.log(`generate, result: ${result}`);
    return result;
  }
}

module.exports = WxjsAsset;
export default module.exports;
