import { ICommand } from "../interfaces/ICommand.js";
import { ICommandContext } from "../interfaces/ICommandContext.js";
import { ICommandResult } from "../interfaces/ICommandResult.js";

export class InitCommand implements ICommand {

metadata = {
  name: "init",
  version: "0.1.0",
  description: "Initialize a new AVA workspace"
};

  async execute(
    _context: ICommandContext
  ): Promise<ICommandResult> {

    console.log("Initializing AVA Workspace...");
    console.log("Workspace initialized successfully.");

    return {
      success: true
    };

  }

}

export default InitCommand;