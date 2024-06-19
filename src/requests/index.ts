import type { Methods as Core } from "./core";

export type Methods = (
  | Core
);

export type MethodMap = {
  [M in Methods as M["name"]]: {
    schema: M["schema"];
    handle: M["handle"];
  }
};

export * as core from "./core";
