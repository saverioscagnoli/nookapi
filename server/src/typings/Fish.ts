import { Day } from "./Day";
import { Hemisphere } from "./Hemisphere";
import { Names } from "./Names";

export interface Fish {
  id: number;
  names: Names;
  seasonality: {
    northern: Hemisphere;
    southern: Hemisphere;
  };
  shadow_size: number | string;
  sell_prices: {
    nook: number;
    CJ: number;
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
