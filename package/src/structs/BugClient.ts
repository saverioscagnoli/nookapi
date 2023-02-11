import { BaseClient } from "./BaseClient";

export class BugClient extends BaseClient {
  constructor() {
    super("https://nook-api.vercel.app/api/");
  }

  private _checkID(id: number) {
    if (id < 1 || id > 80) {
      throw new Error("The bug id must be between 1 and 80.");
    }
    return true;
  }

  public async BugById(id: number) {
    this._checkID(id);
    let b = await this._fetch("data", "bug", id);
    return b;
  }

  public async BugByName(name: string) {
    let b = await this._fetch("data", "bug", name);
    return b;
  }

  public async renderById(id: number) {
    this._checkID(id);
    let b = await this._fetchImage("render", "bug", id);
    return b;
  }

  public async renderByName(name: string) {
    let b = await this._fetchImage("icon", "bug", name);
    return b;
  }

  public async iconById(id: number) {
    this._checkID(id);
    let b = await this._fetchImage("icon", "bug", id);
    return b;
  }

  public async iconByName(name: string) {
    let b = await this._fetchImage("icon", "bug", name);
    return b;
  }
}
