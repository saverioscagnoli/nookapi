import { Day } from "./Day";
import { Hemisphere } from "./Hemisphere";
import { Names } from "./Names";
export interface Bug {
    id: number;
    names: Names;
    seasonality: {
        norhern: Hemisphere;
        southern: Hemisphere;
    };
    sell_prices: {
        nook: number;
        flick: number;
    };
    rarity: string;
    day: Day;
    location: string;
    phrases: {
        catch: string;
        blathers: string;
    };
    images: {
        render: string;
        icon: string;
    };
}
