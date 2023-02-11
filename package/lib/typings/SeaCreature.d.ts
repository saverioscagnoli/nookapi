import { Day } from "./Day";
import { Hemisphere } from "./Hemisphere";
import { Names } from "./Names";
export interface SeaCreature {
    id: number;
    names: Names;
    seasonality: {
        northern: Hemisphere;
        southern: Hemisphere;
    };
    shadow_size: number;
    price: number;
    speed: number;
    day: Day;
    phrases: {
        catch: string;
        blathers: string;
    };
    images: {
        render: string;
        icon: string;
    };
}
