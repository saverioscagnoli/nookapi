import { fetch } from "undici";
import { Endpoint, Categories } from "../typings/Enpoint";

export class BaseClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  protected async _fetch<T extends keyof Categories>(
    ep: Endpoint,
    cat: T,
    id: number | string
  ): Promise<Categories[T]> {
    try {
      console.log(this.baseUrl + ep + "/" + cat + "/" + id);
      let req = await fetch(this.baseUrl + ep + "/" + cat + "/" + id);
      let data = await req.json();
      return data as Categories[T];
    } catch (err) {
      throw new Error("Something went wrong! " + err);
    }
  }

  protected async _fetchImage<T extends keyof Categories>(
    ep: Endpoint,
    cat: T,
    id: number | string
  ) {
    let req = await fetch(this.baseUrl + ep + "/" + cat + "/" + id);
    let blob = await req.blob();
    return blob;
  }
}
