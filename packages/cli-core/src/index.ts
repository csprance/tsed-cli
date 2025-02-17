import Inquirer from "inquirer";
export * from "@tsed/core";
export * from "@tsed/logger";
export * from "@tsed/normalize-path";
export {
  Inject,
  registerProvider,
  Injectable,
  Constant,
  Value,
  Configuration,
  LocalsContainer,
  TokenProvider,
  InvokeOptions,
  Module,
  Opts,
  UseOpts,
  OverrideProvider,
  InjectorService,
  OnDestroy,
  OnInit,
  Container,
  DITest
} from "@tsed/di";
export * from "./interfaces";
export * from "./decorators";
export * from "./services";
export * from "./utils";
export * from "./CliCore";
export {Inquirer};

import "./utils/patchCommander";
