import { ICommand } from "../interfaces/ICommand.js";
import { ICommandLoader } from "../interfaces/ICommandLoader.js";

import { CommandRegistry } from "./command-registry.js";

import HelpCommand from "../commands/HelpCommand.js";
import VersionCommand from "../commands/VersionCommand.js";
import DoctorCommand from "../commands/DoctorCommand.js";
import AboutCommand from "../commands/AboutCommand.js";
import InitCommand from "../commands/InitCommand.js";

export class CommandLoader implements ICommandLoader {

  async load(): Promise<ICommand[]> {

    const commands: ICommand[] = [

      new HelpCommand(),
      new VersionCommand(),
      new DoctorCommand(),
      new AboutCommand(),
      new InitCommand(),

    ];

    const registry = new CommandRegistry();

    for (const command of commands) {
      registry.register(command);
    }

    return commands;

  }

}

export default CommandLoader;