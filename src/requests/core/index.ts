import type { Methods as Course } from "./course";
import type { Methods as Enrol } from "./enrol";
import type { Methods as Group } from "./group";

export type Methods = (
  | Course
  | Enrol
  | Group
);

export * as course from "./course";
export * as enrol from "./enrol";
export * as group from "./group";
