/// <reference types="node" />
import { BaseClient } from "./BaseClient";
export declare class BugClient extends BaseClient {
    constructor();
    private _checkID;
    BugById(id: number): Promise<import("..").Bug>;
    BugByName(name: string): Promise<import("..").Bug>;
    renderById(id: number): Promise<import("buffer").Blob>;
    renderByName(name: string): Promise<import("buffer").Blob>;
    iconById(id: number): Promise<import("buffer").Blob>;
    iconByName(name: string): Promise<import("buffer").Blob>;
}
