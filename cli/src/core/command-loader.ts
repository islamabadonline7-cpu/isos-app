import { ICommand } from "../interfaces/ICommand.js";
import { ICommandLoader } from "../interfaces/ICommandLoader.js";

export class CommandLoader implements ICommandLoader {
  async load(): Promise<ICommand[]> {
    return [];
  }
}