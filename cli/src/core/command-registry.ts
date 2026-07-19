/**
 * ============================================================
 * AVA Enterprise OS
 * Command Registry
 * ------------------------------------------------------------
 * Package : E006.1-P01
 * ============================================================
 */

import { COMMANDS, type CommandName } from "./constants.js";

export class CommandRegistry {
  static getAll(): readonly CommandName[] {
    return COMMANDS;
  }

  static exists(command: string): boolean {
    return COMMANDS.includes(command as CommandName);
  }

  static print(): void {
    console.log("Available Commands:\n");

    for (const command of COMMANDS) {
      console.log(`  ${command}`);
    }
  }
}

export default CommandRegistry;