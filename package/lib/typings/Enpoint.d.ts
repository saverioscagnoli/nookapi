import { Bug } from "./Bug";
import { Fish } from "./Fish";
import { SeaCreature } from "./SeaCreature";
export type Endpoint = "data" | "render" | "icon";
export interface Categories {
    fish: Fish;
    bug: Bug;
    "sea-creature": SeaCreature;
}
