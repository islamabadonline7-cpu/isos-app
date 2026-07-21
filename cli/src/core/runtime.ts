import { ICommandContext } from "../interfaces/ICommandContext.js";

import CommandFactory from "./command-factory.js";
import CommandRunner from "./command-runner.js";

export class Runtime {

  static async execute(commandName: string): Promise<void> {

    const factory = new CommandFactory();

    const runner = new CommandRunner();

    const command = await factory.create(commandName);

    const context: ICommandContext = {

      cwd: process.cwd(),

      args: process.argv.slice(2),

      env: process.env,

    };

    await runner.run(command, context);

  }

}

export default Runtime;