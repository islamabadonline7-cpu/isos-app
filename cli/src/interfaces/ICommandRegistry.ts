import { ICommand } from "./ICommand.js";

export interface ICommandRegistry {
  register(command: ICommand): void;

  unregister(name: string): boolean;

  get(name: string): ICommand | undefined;

  getAll(): ICommand[];

  has(name: string): boolean;
}