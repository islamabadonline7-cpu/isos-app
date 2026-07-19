export interface ICommandMetadata {
  name: string;
  description: string;
  version: string;
  author?: string;
  aliases?: string[];
  category?: string;
}