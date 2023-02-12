import { Names } from "./Names";

export interface Fossil {
  names: Names;
  price: number;
  phrases: {
    blathers: string;
  };
  render: string;
}
