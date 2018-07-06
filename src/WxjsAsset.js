import Asset from "parcel-bundler/src/Asset";
import JsAsset from "parcel-bundler/src/assets/JSAsset";
import Debug from "debug";
const debug = Debug("WxjsAsset");

export default class WxjsAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = "js";
    debug("constructor", { name, options });
    this.delegate = new JsAsset(name, options);
  }

  async parse(code) {
    debug("parse", { code });
    const result = await this.delegate.parse(code);
    debug("parse", { result });
    return result;
  }

  async generate() {
    const result = await this.delegate.generate();
    debug("generate", { result });
    return result;
  }
}
