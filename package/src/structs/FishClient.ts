import { BaseClient } from "./BaseClient";

export class FishClient extends BaseClient {
  constructor() {
    super("https://nook-api.vercel.app/api/");
  }

  private _checkID(id: number) {
    if (id < 1 || id > 80) {
      throw new Error("The fish id must be between 1 and 80.");
    }
    return true;
  }

  public async FishById(id: number) {
    this._checkID(id);
    let f = await this._fetch("data", "fish", id);
    return f;
  }

  public async FishByName(name: string) {
    let f = await this._fetch("data", "fish", name);
    return f;
  }

  public async renderById(id: number) {
    this._checkID(id);
    let b = await this._fetchImage("render", "fish", id);
    return b;
  }

  public async renderByName(name: string) {
    let b = await this._fetchImage("icon", "fish", name);
    return b;
  }

  public async iconById(id: number) {
    this._checkID(id);
    let b = await this._fetchImage("icon", "fish", id);
    return b;
  }

  public async iconByName(name: string) {
    let b = await this._fetchImage("icon", "fish", name);
    return b;
  }
}
