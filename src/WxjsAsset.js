import { Asset } from "parcel-bundler";
import logger from "parcel-bundler/src/Logger";
import JsAsset from "parcel-bundler/src/assets/JSAsset";

export default class WxjsAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = "js";
    logger.log(
      `constructor, name: ${name}, options: ${JSON.stringify(options)}`
    );
    this.delegate = new JsAsset(name, options);
  }

  async parse(code) {
    logger.log(`parse, code: ${code}`);
    const result = await this.delegate.parse(code);
    logger.log(`parse, result: ${result}`);
    return result;
  }

  async generate() {
    const result = await this.delegate.generate();
    logger.log(`generate, result: ${result}`);
    return result;
  }
}
