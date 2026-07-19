export interface ICommandOptions {
  help?: boolean;
  verbose?: boolean;
  debug?: boolean;
  force?: boolean;
  dryRun?: boolean;
  config?: string;
  output?: string;
}