import { Names } from "./Names";

export interface Fish {
  id: number;
  names: Names;
  seasonality: {
    northern: number[];
    southern: number[];
  };
  time_day: number[];
  shadow_size: number | string;
  sell_prices: {
    nook: number;
    CJ: number;
  };
  blathers: string;
  rarity: string;
  render: string;
}
