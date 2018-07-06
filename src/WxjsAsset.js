import { Asset } from "parcel-bundler";
import logger from "parcel-bundler/src/Logger";
import JsAsset from "parcel-bundler/src/assets/JSAsset";

export default class WxjsAsset extends Asset {
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
