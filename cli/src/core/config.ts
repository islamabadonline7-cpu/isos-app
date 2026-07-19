/**
 * ============================================================
 * AVA Enterprise OS
 * Configuration
 * ------------------------------------------------------------
 * Package : E006.1-P01
 * Author  : Islamabad Online Services®
 * ============================================================
 */

import { APP, PATHS } from "./constants.js";

export interface AppConfig {
  appName: string;
  version: string;
  company: string;
  root: string;
  docs: string;
  cache: string;
  logs: string;
}

export const Config: Readonly<AppConfig> = {
  appName: APP.NAME,
  version: APP.VERSION,
  company: APP.COMPANY,

  root: PATHS.ROOT,
  docs: PATHS.DOCS,
  cache: PATHS.CACHE,
  logs: PATHS.LOGS,
};

export default Config;