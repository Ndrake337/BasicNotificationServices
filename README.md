<p align="center">
  <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/96/external-markdown-a-lightweight-markup-language-with-plain-text-formatting-syntax-logo-filled-tal-revivo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">BASIC NOTIFICATION SERVICES</h1>
</p>
<p align="center">
    <em><code>A text notification example API, created for the purpose of study Nest.JS</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Ndrake337/BasicNotificationServices?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Ndrake337/BasicNotificationServices?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Ndrake337/BasicNotificationServices?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Ndrake337/BasicNotificationServices?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat&logo=ts-node&logoColor=white" alt="tsnode">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running BasicNotificationServices](#-running-BasicNotificationServices)
>   - [🧪 Tests](#-tests)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

<code>An API focused on generating notification messages, created while studying Nest.JS on the RocketSeat Education Plataform</code>


---

## 📂 Repository Structure

```sh
└── BasicNotificationServices/
    ├── jest.config.ts
    ├── nest-cli.json
    ├── package-lock.json
    ├── package.json
    ├── prisma
    │   ├── dev.db
    │   ├── migrations
    │   │   ├── 20221212234813_create_notifications
    │   │   │   └── migration.sql
    │   │   ├── 20221215010910_add_canceled_at
    │   │   │   └── migration.sql
    │   │   └── migration_lock.toml
    │   └── schema.prisma
    ├── src
    │   ├── app.module.ts
    │   ├── app.service.ts
    │   ├── application
    │   │   ├── entities
    │   │   │   ├── content.spec.ts
    │   │   │   ├── content.ts
    │   │   │   ├── notification.spec.ts
    │   │   │   └── notification.ts
    │   │   ├── repositories
    │   │   │   └── notifications-repository.ts
    │   │   └── use-cases
    │   │       ├── cancel-notification.spec.ts
    │   │       ├── cancel-notification.ts
    │   │       ├── count-recipient-notifications.spec.ts
    │   │       ├── count-recipient-notifications.ts
    │   │       ├── errors
    │   │       │   └── notification-not-found.ts
    │   │       ├── get-recipient-notifications.spec.ts
    │   │       ├── get-recipient-notifications.ts
    │   │       ├── read-notification.spec.ts
    │   │       ├── read-notification.ts
    │   │       ├── send-notification.spec.ts
    │   │       ├── send-notification.ts
    │   │       ├── unread-notification.spec.ts
    │   │       └── unread-notification.ts
    │   ├── helpers
    │   │   ├── Replace.js
    │   │   └── Replace.ts
    │   ├── infra
    │   │   ├── database
    │   │   │   ├── database.module.ts
    │   │   │   └── prisma
    │   │   │       ├── mappers
    │   │   │       ├── prisma.service.ts
    │   │   │       └── repositories
    │   │   └── http
    │   │       ├── controllers
    │   │       │   └── notifications.controller.ts
    │   │       ├── dtos
    │   │       │   └── create-notification-body.ts
    │   │       ├── http.module.ts
    │   │       └── view-models
    │   │           └── notification-view-model.ts
    │   └── main.ts
    ├── test
    │   ├── factories
    │   │   └── notification-factory.ts
    │   ├── jest-e2e.json
    │   └── repositories
    │       └── in-memory-notifications-repository.ts
    ├── tsconfig.build.json
    └── tsconfig.json
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                                          | Summary                         |
| ---                                                                                                           | ---                             |
| [tsconfig.build.json](https://github.com/Ndrake337/BasicNotificationServices/blob/master/tsconfig.build.json) | <code>► INSERT-TEXT-HERE</code> |
| [tsconfig.json](https://github.com/Ndrake337/BasicNotificationServices/blob/master/tsconfig.json)             | <code>► INSERT-TEXT-HERE</code> |
| [jest.config.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/jest.config.ts)           | <code>► INSERT-TEXT-HERE</code> |
| [package.json](https://github.com/Ndrake337/BasicNotificationServices/blob/master/package.json)               | <code>► INSERT-TEXT-HERE</code> |
| [nest-cli.json](https://github.com/Ndrake337/BasicNotificationServices/blob/master/nest-cli.json)             | <code>► INSERT-TEXT-HERE</code> |
| [package-lock.json](https://github.com/Ndrake337/BasicNotificationServices/blob/master/package-lock.json)     | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>test</summary>

| File                                                                                                   | Summary                         |
| ---                                                                                                    | ---                             |
| [jest-e2e.json](https://github.com/Ndrake337/BasicNotificationServices/blob/master/test/jest-e2e.json) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>test.factories</summary>

| File                                                                                                                                 | Summary                         |
| ---                                                                                                                                  | ---                             |
| [notification-factory.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/test/factories/notification-factory.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>test.repositories</summary>

| File                                                                                                                                                                | Summary                         |
| ---                                                                                                                                                                 | ---                             |
| [in-memory-notifications-repository.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/test/repositories/in-memory-notifications-repository.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src</summary>

| File                                                                                                    | Summary                         |
| ---                                                                                                     | ---                             |
| [app.module.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/app.module.ts)   | <code>► INSERT-TEXT-HERE</code> |
| [main.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/main.ts)               | <code>► INSERT-TEXT-HERE</code> |
| [app.service.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/app.service.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.helpers</summary>

| File                                                                                                    | Summary                         |
| ---                                                                                                     | ---                             |
| [Replace.js](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/helpers/Replace.js) | <code>► INSERT-TEXT-HERE</code> |
| [Replace.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/helpers/Replace.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.application.repositories</summary>

| File                                                                                                                                                       | Summary                         |
| ---                                                                                                                                                        | ---                             |
| [notifications-repository.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/repositories/notifications-repository.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.application.entities</summary>

| File                                                                                                                                     | Summary                         |
| ---                                                                                                                                      | ---                             |
| [notification.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/entities/notification.ts)           | <code>► INSERT-TEXT-HERE</code> |
| [content.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/entities/content.ts)                     | <code>► INSERT-TEXT-HERE</code> |
| [notification.spec.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/entities/notification.spec.ts) | <code>► INSERT-TEXT-HERE</code> |
| [content.spec.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/entities/content.spec.ts)           | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.application.use-cases</summary>

| File                                                                                                                                                                        | Summary                         |
| ---                                                                                                                                                                         | ---                             |
| [read-notification.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/read-notification.ts)                                   | <code>► INSERT-TEXT-HERE</code> |
| [send-notification.spec.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/send-notification.spec.ts)                         | <code>► INSERT-TEXT-HERE</code> |
| [get-recipient-notifications.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/get-recipient-notifications.ts)               | <code>► INSERT-TEXT-HERE</code> |
| [get-recipient-notifications.spec.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/get-recipient-notifications.spec.ts)     | <code>► INSERT-TEXT-HERE</code> |
| [send-notification.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/send-notification.ts)                                   | <code>► INSERT-TEXT-HERE</code> |
| [read-notification.spec.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/read-notification.spec.ts)                         | <code>► INSERT-TEXT-HERE</code> |
| [unread-notification.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/unread-notification.ts)                               | <code>► INSERT-TEXT-HERE</code> |
| [count-recipient-notifications.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/count-recipient-notifications.ts)           | <code>► INSERT-TEXT-HERE</code> |
| [count-recipient-notifications.spec.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/count-recipient-notifications.spec.ts) | <code>► INSERT-TEXT-HERE</code> |
| [cancel-notification.spec.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/cancel-notification.spec.ts)                     | <code>► INSERT-TEXT-HERE</code> |
| [cancel-notification.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/cancel-notification.ts)                               | <code>► INSERT-TEXT-HERE</code> |
| [unread-notification.spec.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/unread-notification.spec.ts)                     | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.application.use-cases.errors</summary>

| File                                                                                                                                                       | Summary                         |
| ---                                                                                                                                                        | ---                             |
| [notification-not-found.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/application/use-cases/errors/notification-not-found.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.infra.http</summary>

| File                                                                                                               | Summary                         |
| ---                                                                                                                | ---                             |
| [http.module.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/infra/http/http.module.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.infra.http.view-models</summary>

| File                                                                                                                                                   | Summary                         |
| ---                                                                                                                                                    | ---                             |
| [notification-view-model.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/infra/http/view-models/notification-view-model.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.infra.http.dtos</summary>

| File                                                                                                                                              | Summary                         |
| ---                                                                                                                                               | ---                             |
| [create-notification-body.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/infra/http/dtos/create-notification-body.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.infra.http.controllers</summary>

| File                                                                                                                                                     | Summary                         |
| ---                                                                                                                                                      | ---                             |
| [notifications.controller.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/infra/http/controllers/notifications.controller.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.infra.database</summary>

| File                                                                                                                           | Summary                         |
| ---                                                                                                                            | ---                             |
| [database.module.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/infra/database/database.module.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.infra.database.prisma</summary>

| File                                                                                                                                | Summary                         |
| ---                                                                                                                                 | ---                             |
| [prisma.service.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/infra/database/prisma/prisma.service.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.infra.database.prisma.repositories</summary>

| File                                                                                                                                                                               | Summary                         |
| ---                                                                                                                                                                                | ---                             |
| [prisma-notifications-repository.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/infra/database/prisma/repositories/prisma-notifications-repository.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.infra.database.prisma.mappers</summary>

| File                                                                                                                                                                | Summary                         |
| ---                                                                                                                                                                 | ---                             |
| [prisma-notification-mapper.ts](https://github.com/Ndrake337/BasicNotificationServices/blob/master/src/infra/database/prisma/mappers/prisma-notification-mapper.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>prisma</summary>

| File                                                                                                     | Summary                         |
| ---                                                                                                      | ---                             |
| [schema.prisma](https://github.com/Ndrake337/BasicNotificationServices/blob/master/prisma/schema.prisma) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>prisma.migrations</summary>

| File                                                                                                                            | Summary                         |
| ---                                                                                                                             | ---                             |
| [migration_lock.toml](https://github.com/Ndrake337/BasicNotificationServices/blob/master/prisma/migrations/migration_lock.toml) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>prisma.migrations.20221212234813_create_notifications</summary>

| File                                                                                                                                                    | Summary                         |
| ---                                                                                                                                                     | ---                             |
| [migration.sql](https://github.com/Ndrake337/BasicNotificationServices/blob/master/prisma/migrations/20221212234813_create_notifications/migration.sql) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>prisma.migrations.20221215010910_add_canceled_at</summary>

| File                                                                                                                                               | Summary                         |
| ---                                                                                                                                                | ---                             |
| [migration.sql](https://github.com/Ndrake337/BasicNotificationServices/blob/master/prisma/migrations/20221215010910_add_canceled_at/migration.sql) | <code>► INSERT-TEXT-HERE</code> |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **TypeScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the BasicNotificationServices repository:

```sh
git clone https://github.com/Ndrake337/BasicNotificationServices
```

2. Change to the project directory:

```sh
cd BasicNotificationServices
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running BasicNotificationServices

Use the following command to run BasicNotificationServices:

```sh
npm run build && node dist/main.js
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Ndrake337/BasicNotificationServices/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Ndrake337/BasicNotificationServices/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Ndrake337/BasicNotificationServices/issues)**: Submit bugs found or log feature requests for Basicnotificationservices.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Ndrake337/BasicNotificationServices
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
