/// <reference types="node" />
import { BaseClient } from "./BaseClient";
export declare class SeaCreatureClient extends BaseClient {
    constructor();
    private _checkID;
    SeaCreatureById(id: number): Promise<import("..").SeaCreature>;
    SeaCreatureByName(name: string): Promise<import("..").SeaCreature>;
    renderById(id: number): Promise<import("buffer").Blob>;
    renderByName(name: string): Promise<import("buffer").Blob>;
    iconById(id: number): Promise<import("buffer").Blob>;
    iconByName(name: string): Promise<import("buffer").Blob>;
}
