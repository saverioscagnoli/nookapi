/// <reference types="node" />
import { Endpoint, Categories } from "../typings/Enpoint";
export declare class BaseClient {
    private baseUrl;
    constructor(baseUrl: string);
    protected _fetch<T extends keyof Categories>(ep: Endpoint, cat: T, id: number | string): Promise<Categories[T]>;
    protected _fetchImage<T extends keyof Categories>(ep: Endpoint, cat: T, id: number | string): Promise<import("buffer").Blob>;
}
