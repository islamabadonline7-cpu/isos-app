export interface ICommandContext {
  cwd: string;
  args: string[];
  env: NodeJS.ProcessEnv;
}