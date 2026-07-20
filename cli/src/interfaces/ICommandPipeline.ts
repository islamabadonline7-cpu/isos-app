import { ICommandContext } from "./ICommandContext.js";
import { ICommandResult } from "./ICommandResult.js";

export interface ICommandPipeline {
    execute(
        context: ICommandContext
    ): Promise<ICommandResult>;
}