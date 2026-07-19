/**
 * ============================================================
 * AVA Enterprise OS
 * Enterprise Logger
 * ------------------------------------------------------------
 * Package : E006.1-P01
 * Author  : Islamabad Online Services®
 * ============================================================
 */

import { APP, STATUS } from "./constants.js";

type LogLevel = "INFO" | "SUCCESS" | "WARNING" | "ERROR";

export class Logger {
  private static timestamp(): string {
    return new Date().toLocaleString();
  }

  private static write(level: LogLevel, message: string): void {
    console.log(
      `[${this.timestamp()}] [${APP.SHORT_NAME}] [${level}] ${message}`,
    );
  }

  static info(message: string): void {
    this.write("INFO", message);
  }

  static success(message: string): void {
    this.write("SUCCESS", message);
  }

  static warning(message: string): void {
    this.write("WARNING", message);
  }

  static error(message: string): void {
    this.write("ERROR", message);
  }

  static line(): void {
    console.log("------------------------------------------------------------");
  }

  static banner(): void {
    console.clear();

    console.log("============================================================");
    console.log(` ${APP.NAME}`);
    console.log(` Version : ${APP.VERSION}`);
    console.log(` Company : ${APP.COMPANY}`);
    console.log("============================================================");
  }

  static statusOk(message: string): void {
    console.log(`✓ ${message} (${STATUS.OK})`);
  }

  static statusError(message: string): void {
    console.log(`✗ ${message} (${STATUS.ERROR})`);
  }

  static statusWarning(message: string): void {
    console.log(`! ${message} (${STATUS.WARNING})`);
  }
}

export default Logger;