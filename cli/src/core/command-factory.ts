import { ICommand } from "../interfaces/ICommand.js";
import { ICommandFactory } from "../interfaces/ICommandFactory.js";

import { CommandRegistry } from "./command-registry.js";
import CommandLoader from "./command-loader.js";

export class CommandFactory implements ICommandFactory {

  private readonly registry = new CommandRegistry();

  private readonly loader = new CommandLoader();

  private loaded = false;

  private async ensureLoaded(): Promise<void> {

    if (this.loaded) {
      return;
    }

    const commands = await this.loader.load();

    for (const command of commands) {
      this.registry.register(command);
    }

    this.loaded = true;

  }

  async create(name: string): Promise<ICommand> {

    await this.ensureLoaded();

    const command = this.registry.get(name);

    if (!command) {
      throw new Error(`Unknown command: ${name}`);
    }

    return command;

  }

}

export default CommandFactory;