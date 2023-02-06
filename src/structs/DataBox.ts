import { DataType, Fish } from "../typings";

export class DataBox implements DataType {
  public art: any[];
  public bug: any[];
  public fish: Fish[];
  public sea_creature: any[];
  public song: any[];
  public villager: any[];
  public shadow_size?: any[];

  constructor(p?: { del: (keyof DataBox)[] }) {
    for (let prop in this) {
      this[prop] = [] as this[Extract<keyof this, string>];
    }

    if (p) {
      for (let k of p.del) {
        delete this[k];
      }
    }
  }
}
