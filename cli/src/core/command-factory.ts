import { ICommand } from "../interfaces/ICommand.js";
import { ICommandFactory } from "../interfaces/ICommandFactory.js";

import HelpCommand from "../commands/HelpCommand.js";
import VersionCommand from "../commands/VersionCommand.js";
import DoctorCommand from "../commands/DoctorCommand.js";
import AboutCommand from "../commands/AboutCommand.js";
import InitCommand from "../commands/InitCommand.js";

export class CommandFactory implements ICommandFactory {

  async create(name: string): Promise<ICommand> {

    switch (name.toLowerCase()) {

      case "help":
        return new HelpCommand();

      case "version":
        return new VersionCommand();

      case "doctor":
        return new DoctorCommand();

      case "about":
        return new AboutCommand();

      case "init":
        return new InitCommand();

      default:
        throw new Error(`Unknown command: ${name}`);

    }

  }

}

export default CommandFactory;