import { ICommand } from "../interfaces/ICommand.js";
import { ICommandRegistry } from "../interfaces/ICommandRegistry.js";

export class CommandRegistry implements ICommandRegistry {
  private readonly commands = new Map<string, ICommand>();

  register(command: ICommand): void {
    this.commands.set(command.metadata.name, command);
  }

  unregister(name: string): boolean {
    return this.commands.delete(name);
  }

  get(name: string): ICommand | undefined {
    return this.commands.get(name);
  }

  getAll(): ICommand[] {
    return [...this.commands.values()];
  }

  has(name: string): boolean {
    return this.commands.has(name);
  }
}