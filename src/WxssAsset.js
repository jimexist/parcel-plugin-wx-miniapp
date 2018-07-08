import { Asset } from "parcel-bundler";
import logger from "parcel-bundler/src/Logger";
import CSSAsset from "parcel-bundler/src/assets/CSSAsset";

class WxssAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = "wxss";
    logger.log(
      `constructor, name: ${name}, options: ${JSON.stringify(options)}`
    );
    this.delegate = new CSSAsset(name, options);
  }

  async parse(code) {
    logger.log(`parse, code: ${code}`);
    const result = await this.delegate.parse(code);
    logger.log(`parse, result: ${JSON.stringify(result)}`);
    return result;
  }

  async pretransform() {
    logger.log(`pretransform`);
    await this.delegate.pretransform();
  }

  async transform() {
    logger.log(`transform`);
    const result = await this.delegate.transform();
    logger.log(`transform, result: ${result}`);
    return result;
  }

  async generate() {
    const result = await this.delegate.generate();
    logger.log(`generate, result: ${result}`);
    return result;
  }
}

module.exports = WxssAsset;
export default module.exports;
