/// <reference types="node" />
import { BaseClient } from "./BaseClient";
export declare class FishClient extends BaseClient {
    constructor();
    private _checkID;
    FishById(id: number): Promise<import("..").Fish>;
    FishByName(name: string): Promise<import("..").Fish>;
    renderById(id: number): Promise<import("buffer").Blob>;
    renderByName(name: string): Promise<import("buffer").Blob>;
    iconById(id: number): Promise<import("buffer").Blob>;
    iconByName(name: string): Promise<import("buffer").Blob>;
}
