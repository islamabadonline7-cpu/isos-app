import { ICommandContext } from "./ICommandContext.js";
import { ICommandResult } from "./ICommandResult.js";
import { ICommandMetadata } from "./ICommandMetadata.js";

export interface ICommand {
  readonly metadata: ICommandMetadata;

  execute(
    context: ICommandContext
  ): Promise<ICommandResult>;

  validate?(context: ICommandContext): Promise<boolean>;
}