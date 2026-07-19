export interface ICommandResult<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: Error;
  exitCode?: number;
}