import { ICommand } from "../interfaces/ICommand.js";
import { ICommandFactory } from "../interfaces/ICommandFactory.js";

export class CommandFactory implements ICommandFactory {

  async create(name: string): Promise<ICommand> {
    throw new Error(`Command not implemented: ${name}`);
  }

}

export default CommandFactory;