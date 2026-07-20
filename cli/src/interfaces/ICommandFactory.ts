import { ICommand } from "./ICommand.js";

export interface ICommandFactory {
    create(name: string): Promise<ICommand>;
}