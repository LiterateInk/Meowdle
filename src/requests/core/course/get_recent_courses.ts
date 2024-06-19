import { type RecentCourseFromAPI, RecentCourse } from "~/models/RecentCourse";

interface Parameters {
  userid: number
  limit: number
}

type Response = Array<RecentCourseFromAPI>;

/**
 * TODO: description
 */
const core_course_get_recent_courses = {
  schema: {} as Parameters,
  name: "core_course_get_recent_courses",
  handle (response: Response): Array<RecentCourse> {
    return response.map(RecentCourse.fromAPI);
  }
};

export default core_course_get_recent_courses;
