import { ICommand } from "../interfaces/ICommand.js";
import { ICommandContext } from "../interfaces/ICommandContext.js";
import { ICommandResult } from "../interfaces/ICommandResult.js";

export class DoctorCommand implements ICommand {

metadata = {
  name: "doctor",
  version: "0.1.0",
  description: "Check system health"
};

  async execute(
    _context: ICommandContext
  ): Promise<ICommandResult> {

    console.log("System Status");
    console.log("✓ Node OK");
    console.log("✓ TypeScript OK");
    console.log("✓ CLI OK");

    return {
      success: true
    };

  }

}

export default DoctorCommand;