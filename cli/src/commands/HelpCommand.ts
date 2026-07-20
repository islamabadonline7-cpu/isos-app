import { ICommand } from "../interfaces/ICommand.js";
import { ICommandContext } from "../interfaces/ICommandContext.js";
import { ICommandResult } from "../interfaces/ICommandResult.js";

export class HelpCommand implements ICommand {

  metadata = {
  name: "help",
  version: "0.1.0",
  description: "Display available CLI commands"
};

  async execute(
    _context: ICommandContext
  ): Promise<ICommandResult> {

    console.log("");
    console.log("AVA Enterprise AI OS");
    console.log("====================");
    console.log("");

    console.log("Available Commands");
    console.log("------------------");

    console.log("help");
    console.log("version");
    console.log("doctor");
    console.log("about");
    console.log("init");

    console.log("");

    return {
      success: true
    };

  }

}

export default HelpCommand;