import { ICommand } from "../interfaces/ICommand.js";
import { ICommandContext } from "../interfaces/ICommandContext.js";
import { ICommandExecutor } from "../interfaces/ICommandExecutor.js";
import { ICommandResult } from "../interfaces/ICommandResult.js";

export class CommandExecutor implements ICommandExecutor {

  async execute(
    command: ICommand,
    context: ICommandContext
  ): Promise<ICommandResult> {

    return await command.execute(context);

  }

}

export default CommandExecutor;