import { lstatSync, readdirSync, readFileSync } from "fs";
import { join } from "path";
import { DataBox } from "./structs";

export function recursiveSearch(
  dir: string,
  data: DataBox,
  {
    key,
    parse,
    encoding
  }: {
    key?: keyof DataBox;
    parse?: boolean;
    encoding?: BufferEncoding;
  } = { key: null, parse: true, encoding: "utf8" }
) {
  for (let f of readdirSync(dir)) {
    let j = join(dir, f);
    if (lstatSync(j).isFile()) {
      let imp = readFileSync(j, { encoding });
      data[key]?.push(parse ? JSON.parse(imp) : imp);
    } else {
      recursiveSearch(j, data, { key: f as keyof DataBox, parse, encoding });
    }
  }
}

export function isName(str: string) {
  return isNaN(+str);
}
