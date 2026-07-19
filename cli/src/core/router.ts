/**
 * ============================================================
 * AVA Enterprise OS
 * Router
 * ------------------------------------------------------------
 * Package : E006.1-P01
 * Author  : Islamabad Online Services®
 * ============================================================
 */

import { helpCommand } from "../commands/help.js";
import { versionCommand } from "../commands/version.js";
import { doctorCommand } from "../commands/doctor.js";
import { initCommand } from "../commands/init.js";

export function run(command: string): void {
  switch (command.trim().toLowerCase()) {
    case "help":
      helpCommand();
      break;

    case "version":
      versionCommand();
      break;

    case "doctor":
      doctorCommand();
      break;

    case "init":
      initCommand();
      break;

    case "about":
      console.log("AVA Enterprise AI OS");
      console.log("Developed by Islamabad Online Services®");
      break;

    case "clear":
      console.clear();
      break;

    default:
      console.log(`Unknown command: ${command}`);
      console.log("Run: ava help");
      break;
  }
}