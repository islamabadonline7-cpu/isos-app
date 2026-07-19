import readline from "node:readline";
import { run } from "./router.js";

export function startShell() {
  console.log("=========================================");
  console.log("        AVA Enterprise AI OS");
  console.log("=========================================");
  console.log("");
  console.log("Type 'help' to see available commands.");
  console.log("Type 'exit' to quit.");
  console.log("");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "ava> "
  });

  rl.prompt();

  rl.on("line", (line) => {
    const command = line.trim();

    if (command === "exit") {
      rl.close();
      return;
    }

    if (command.length > 0) {
      run(command);
    }

    console.log("");
    rl.prompt();
  });

  rl.on("close", () => {
    console.log("Goodbye.");
    process.exit(0);
  });
}