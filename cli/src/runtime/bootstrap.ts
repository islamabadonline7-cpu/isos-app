import ServiceContainer from "./container.js";
import Runtime from "../core/runtime.js";

export class Bootstrap {

  static async boot(): Promise<void> {

    const container = new ServiceContainer();

    const runtime = new Runtime(container);

    await runtime.start();

  }

}

export default Bootstrap;