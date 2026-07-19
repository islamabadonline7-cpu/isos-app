import { ICommandOptions } from "./ICommandOptions.js";

export interface ICommandParser {
  parse(input: string[]): {
    command: string;
    args: string[];
    options: ICommandOptions;
  };
}