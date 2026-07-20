import { ICommand } from "./ICommand.js";
import { ICommandContext } from "./ICommandContext.js";
import { ICommandResult } from "./ICommandResult.js";

export interface ICommandRunner {
  run(
    command: ICommand,
    context: ICommandContext
  ): Promise<ICommandResult>;
}