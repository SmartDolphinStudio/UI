# History provenance and verifiable maintenance baseline

Audit baseline before remediation: `8e7bf2c6088304f7173896bc7fb80871f4853869`. Audit date: 2026-10-12. Maintained branch: `master`.

Git author/committer dates are user-controlled metadata. They do not independently establish when a project was written or first published. Original commits, tags and parent relationships are preserved. The cause of the discrepancies below is unknown; this document does not invent a migration explanation or attribute intent.

## UI-GIT-001 — chart-kit 的 TypeScript 引用配置和锁文件没有提交

tsconfig.json 已跟踪，但其 references 指向的 tsconfig.app.json/tsconfig.node.json 都 untracked；pnpm-lock.yaml、.gitignore、README 等同样未跟踪。隔离副本因包含本地 untracked 配置而能通过 typecheck，不能代表 GitHub 克隆。

Disposition: current-source errors are fixed in the new audit commit; earlier history is kept as evidence. Dates and titles in these commits must not be quoted as verified development/release events. Future releases identify their exact source commit, tested toolchain and CI run.

## UI-GIT-002 — 多个依赖发布日期晚于提交日期，Go pseudo-version 也位于未来历史

历史 npm package.json 与官方时间存在27条矛盾；captcha-check 的2026-03-10提交要求 altcha ^3.2.1（2026-07-12发布）；其 Go 依赖 pseudo-version 带2026-05-12时间，晚于UI末次提交2026-03-15。

Disposition: current-source errors are fixed in the new audit commit; earlier history is kept as evidence. Dates and titles in these commits must not be quoted as verified development/release events. Future releases identify their exact source commit, tested toolchain and CI run.
