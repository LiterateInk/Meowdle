# Meowdle

## Note about the current implemented requests

Please, note that all the web services requests **are not implemented yet**.

So if any of the web services you need is not implemented, please let us know
by either opening an issue or sending a pull request.

## Status

- [x] `core_auth_is_age_digital_consent_verification_enabled` ([example](./examples/webservice/core_auth_is_age_digital_consent_verification_enabled.ts))
- [x] `core_auth_is_minor` ([example](./examples/webservice/core_auth_is_minor.ts))

- [x] `core_course_get_recent_courses` ([example](./examples/webservice/core_course_get_recent_courses.ts))

- [x] `core_enrol_get_enrolled_users` ([example](./examples/webservice/core_enrol_get_enrolled_users.ts))

- [x] `core_group_get_course_groups` ([example](./examples/webservice/core_group_get_course_groups.ts))
- [x] `core_group_get_course_user_groups` ([example](./examples/webservice/core_group_get_course_user_groups.ts))

*More requests to come...*

Also, you can add custom requests, see [the `custom_request` example](./examples/webservice/custom_request.ts) for more information.

## Resources

- <https://docs.moodle.org/dev/Web_service_API_functions>
- <https://moodledev.io/docs/4.5/guides/javascript/ajax>
- <https://github.com/moodle/moodle>
