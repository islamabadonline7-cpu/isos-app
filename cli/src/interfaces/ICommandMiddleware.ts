import { ICommandContext } from "./ICommandContext.js";
import { ICommandResult } from "./ICommandResult.js";

export interface ICommandMiddleware {
    handle(
        context: ICommandContext,
        next: () => Promise<ICommandResult>
    ): Promise<ICommandResult>;
}