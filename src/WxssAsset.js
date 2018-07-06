import Asset from "parcel-bundler/src/Asset";
import CSSAsset from "parcel-bundler/src/assets/CSSAsset";
import Debug from "debug";

const debug = Debug("WxssAsset");

export default class WxssAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = "wxss";
    this.delegate = new CSSAsset(name, options);
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
