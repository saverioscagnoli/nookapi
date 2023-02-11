import { BaseClient } from "./BaseClient";

export class SeaCreatureClient extends BaseClient {
  constructor() {
    super("https://nook-api.vercel.app/api/");
  }

  private _checkID(id: number) {
    if (id < 1 || id > 40) {
      throw new Error("The sea creature id must be between 1 and 40.");
    }
    return true;
  }

  public async SeaCreatureById(id: number) {
    this._checkID(id);
    let s = await this._fetch("data", "sea-creature", id);
    return s;
  }

  public async SeaCreatureByName(name: string) {
    let s = await this._fetch("data", "sea-creature", name);
    return s;
  }

  public async renderById(id: number) {
    this._checkID(id);
    let b = await this._fetchImage("render", "sea-creature", id);
    return b;
  }

  public async renderByName(name: string) {
    let b = await this._fetchImage("icon", "sea-creature", name);
    return b;
  }

  public async iconById(id: number) {
    this._checkID(id);
    let b = await this._fetchImage("icon", "sea-creature", id);
    return b;
  }

  public async iconByName(name: string) {
    let b = await this._fetchImage("icon", "sea-creature", name);
    return b;
  }
}
