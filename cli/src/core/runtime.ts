import { ICommandContext } from "../interfaces/ICommandContext.js";

import ServiceContainer from "../runtime/container.js";

export class Runtime {

  constructor(
    private readonly container: ServiceContainer
  ) {}

  async start(): Promise<void> {

    const commandName = process.argv[2] ?? "help";

    const command = await this.container.factory.create(commandName);

    const context: ICommandContext = {

      cwd: process.cwd(),

      args: process.argv.slice(2),

      env: process.env,

    };

    await this.container.runner.run(command, context);

  }

}

export default Runtime;