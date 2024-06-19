import get_course_user_groups from "./get_course_user_groups";
import get_course_groups from "./get_course_groups";

export type Methods = (
  | typeof get_course_user_groups
  | typeof get_course_groups
);

export { get_course_user_groups, get_course_groups };
