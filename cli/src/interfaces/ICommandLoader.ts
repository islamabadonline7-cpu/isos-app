import { ICommand } from "./ICommand.js";

export interface ICommandLoader {
    load(): Promise<ICommand[]>;
}