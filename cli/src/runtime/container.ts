import { CommandFactory } from "../core/command-factory.js";
import { CommandLoader } from "../core/command-loader.js";
import { CommandRegistry } from "../core/command-registry.js";
import { CommandRunner } from "../core/command-runner.js";
import { CommandExecutor } from "../core/command-executor.js";

export class ServiceContainer {

  readonly registry: CommandRegistry;

  readonly loader: CommandLoader;

  readonly factory: CommandFactory;

  readonly runner: CommandRunner;

  readonly executor: CommandExecutor;

  constructor() {

    this.registry = new CommandRegistry();

    this.loader = new CommandLoader();

    this.factory = new CommandFactory();

    this.runner = new CommandRunner();

    this.executor = new CommandExecutor();

  }

}

export default ServiceContainer;