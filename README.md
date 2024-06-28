# Meowdle - An purrfect API wrapper for Moodle (WebServices, AJAX and scrapping)

A simple wrapper around [Moodle](https://github.com/moodle/moodle) : [WebServices](https://docs.moodle.org/404/en/Web_services) (REST only), [AJAX](https://moodledev.io/docs/4.4/guides/javascript/ajax) and scrapping directly the HTML (using [Cheerio](https://cheerio.js.org/)).

> This project is not affiliated with [Moodle](https://github.com/moodle) in any way.

## Installation

Use your favorite package manager to install [Meowdle from NPM](https://www.npmjs.com/package/meowdle).

```bash
# pnpm
pnpm add meowdle

# Yarn
yarn add meowdle

# npm
npm install meowdle
```

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

## Documentation & Guides

You can find the documentation, some guides and small examples at [literate.ink/meowdle](https://literate.ink/meowdle) for more information about the API and how to use it.

If you need complete examples, then we got **a lot** of those in the [`examples`](https://github.com/LiterateInk/Meowdle/tree/js/examples) folder, hoping you can find your joy in there.

If none of those are helpful, you can always [open an issue](https://github.com/LiterateInk/Meowdle/issues) to ask for help.

You can also join [LiterateInk's Discord server](https://literate.ink/discord) to talk about Meowdle, get help and be notified about the latest updates !
