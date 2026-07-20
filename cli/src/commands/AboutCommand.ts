import { ICommand } from "../interfaces/ICommand.js";
import { ICommandContext } from "../interfaces/ICommandContext.js";
import { ICommandResult } from "../interfaces/ICommandResult.js";

export class AboutCommand implements ICommand {

metadata = {
  name: "about",
  version: "0.1.0",
  description: "Display information about AVA Enterprise AI OS"
};

  async execute(
    _context: ICommandContext
  ): Promise<ICommandResult> {

    console.log("");
    console.log("AVA Enterprise AI OS");
    console.log("--------------------");
    console.log("Developer : Islamabad Online Services®");
    console.log("Version   : 0.1.0");
    console.log("");

    return {
      success: true
    };

  }

}

export default AboutCommand;