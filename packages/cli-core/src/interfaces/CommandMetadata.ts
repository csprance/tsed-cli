import {CommandArg, CommandOptions, CommandParameters} from "./CommandParameters";

export interface CommandMetadata extends CommandParameters {
  /**
   * CommandProvider arguments
   */
  args: {
    [key: string]: CommandArg;
  };
  /**
   * CommandProvider options
   */
  options: {
    [key: string]: CommandOptions;
  };

  allowUnknownOption: boolean;

  enableFeatures: string[];

  disableReadUpPkg: boolean;
}
