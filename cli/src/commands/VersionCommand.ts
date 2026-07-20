import { ICommand } from "../interfaces/ICommand.js";
import { ICommandContext } from "../interfaces/ICommandContext.js";
import { ICommandResult } from "../interfaces/ICommandResult.js";

export class VersionCommand implements ICommand {

 metadata = {
  name: "version",
  version: "0.1.0",
  description: "Display CLI version"
};

  async execute(
    _context: ICommandContext
  ): Promise<ICommandResult> {

    console.log("AVA Enterprise AI OS");
    console.log("Version 0.1.0");

    return {
      success: true
    };

  }

}

export default VersionCommand;