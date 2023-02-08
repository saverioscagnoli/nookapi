import { Bug, DataType, Fish, SeaCreature } from "../typings";

export class DataBox implements DataType {
  public art: any[];
  public bug: Bug[];
  public fish: Fish[];
  public sea_creature: SeaCreature[];
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
