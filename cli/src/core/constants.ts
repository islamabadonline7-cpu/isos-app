/**
 * ============================================================
 * AVA Enterprise OS
 * Enterprise Constants
 * ------------------------------------------------------------
 * Package : E006.1-P01
 * Author  : Islamabad Online Services®
 * ============================================================
 */

export const APP = {
  NAME: "AVA Enterprise AI CLI",
  SHORT_NAME: "AVA",
  VERSION: "0.1.0",
  COMPANY: "Islamabad Online Services®",
} as const;

export const SHELL = {
  PROMPT: "ava> ",
  EXIT_COMMAND: "exit",
  HELP_COMMAND: "help",
} as const;

export const PATHS = {
  ROOT: process.cwd(),
  DOCS: "docs",
  CONFIG: ".ava",
  LOGS: ".ava/logs",
  CACHE: ".ava/cache",
  TEMP: ".ava/tmp",
} as const;

export const STATUS = {
  OK: "OK",
  ERROR: "ERROR",
  WARNING: "WARNING",
  INFO: "INFO",
} as const;

export const COMMANDS = [
  "help",
  "version",
  "doctor",
  "init",
  "clear",
  "about",
] as const;

export type CommandName = (typeof COMMANDS)[number];