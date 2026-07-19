export interface ICommandValidator {
  validate(args: string[]): boolean;

  getErrors(): string[];
}