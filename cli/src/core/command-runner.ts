import { ICommand } from "../interfaces/ICommand.js";
import { ICommandContext } from "../interfaces/ICommandContext.js";
import { ICommandResult } from "../interfaces/ICommandResult.js";
import { ICommandRunner } from "../interfaces/ICommandRunner.js";

export class CommandRunner implements ICommandRunner {

  async run(
    command: ICommand,
    context: ICommandContext
  ): Promise<ICommandResult> {

    return await command.execute(context);

  }

}

export default CommandRunner;