# Audit remediation record

Original audit: 2026-10-12. This record maps the original finding IDs to changes in the new maintenance baseline. Historical facts retain their provenance limitations; code changes do not retrospectively authenticate old dates or commit titles.

## Repository policy

The maintained branch uses the `Verify` CI check. Branch policy requires PRs, zero additional approvals for the single maintainer, resolved conversations and a current passing CI check, and rejects force pushes/deletion. Remote enforcement and exact new commit/CI IDs are verified after the audit push and recorded in the delivered cross-repository report. Security scan language scope is in `docs/SECURITY_SCAN_SCOPE.md`.

## GIT-001 — 六个默认分支均无保护规则或仓库 ruleset

Original evidence: GitHub branches API 对六个默认分支返回 protected=false；rulesets API 均返回空数组。分支保护 API 的 404 与这两个成功响应交叉印证。

Changes: Remote branch rules described above are enabled after the successful audit CI run.

Source references: workflow/configuration and history documents.

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## GIT-002 — 远端没有验证项目代码的自定义 CI 工作流

Original evidence: 六个默认分支均没有已跟踪的 .github/workflows 文件。DolphinPort Actions 中的动态 Dependabot Updates 不构成 Flutter/Rust/Android 构建验证；其余仓库 workflows 列表为空。DolphinPort 本地有被忽略的工作流，详见 DP-GIT-002。

Changes: 六仓库提交固定action SHA/Node/npm/pnpm/Go/Rust/Flutter/Foundry版本的可运行CI; CI包含构建、安全回归、官方依赖审计和Android APK原生payload检查

Source references: workflow/configuration and history documents.

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## GIT-003 — 安全告警 API 存在权限或功能缺口，不能以“无告警”判定安全

Original evidence: 六个仓库 Dependabot alerts 查询均失败，响应包含功能未启用和权限要求；多个 code-scanning/secret-scanning 查询返回 403/404。evm-patterns、MiniEVM 的 secret-scanning 查询成功且返回空列表，code-scanning 返回 no analysis found。逐接口状态在各项目远端表中完整列出。

Changes: 使用各仓库实际owner凭据消除安全告警读取权限缺口，启用Dependabot/secret scanning/push protection; 提交固定SHA CodeQL Actions/JS/Go/Rust扫描，明确Solidity/Dart不在CodeQL覆盖范围，区分404未配置与200无告警

Source references: workflow/configuration and history documents.

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## DEP-ENV-001 — 默认 npm 镜像不支持本次 audit 接口

Original evidence: 初次 npm audit 使用本机 registry.npmmirror.com，返回 404 Not Found / NOT_IMPLEMENTED。切换官方 registry.npmjs.org 后得到实际漏洞结果。该配置属于本机环境，不是六个项目均写入了此设置。

Changes: npm用户默认registry改官方npmjs，六仓库提交.npmrc并由CI显式审计; 移除冲突用户级GOROOT，默认go1.25.12与机器GOROOT一致；服务CI和本地验证显式使用Go1.26.5

Source references: workflow/configuration and history documents.

Validation: 默认go version/ go env GOROOT一致; npm config get registry=https://registry.npmjs.org/

## ENV-GO-001 — 默认 Go 可执行文件与 GOROOT 不匹配

Original evidence: 默认 go 是 1.25.12，但本机 GOROOT 指向 1.26.5，导致标准库 compile: version mismatch。改用 1.25.12 的目录后又出现标准库源码缺失。使用 C:\Dev\Go\1.26.5\bin\go.exe 并匹配 GOROOT 后，HerbTable API 和 UI captcha 后端 go vet 成功，HerbTable captcha 的未使用 import 被明确检出。

Changes: npm用户默认registry改官方npmjs，六仓库提交.npmrc并由CI显式审计; 移除冲突用户级GOROOT，默认go1.25.12与机器GOROOT一致；服务CI和本地验证显式使用Go1.26.5

Source references: workflow/configuration and history documents.

Validation: 默认go version/ go env GOROOT一致; npm config get registry=https://registry.npmjs.org/

## UI-GIT-001 — chart-kit 的 TypeScript 引用配置和锁文件没有提交

Original evidence: tsconfig.json 已跟踪，但其 references 指向的 tsconfig.app.json/tsconfig.node.json 都 untracked；pnpm-lock.yaml、.gitignore、README 等同样未跟踪。隔离副本因包含本地 untracked 配置而能通过 typecheck，不能代表 GitHub 克隆。

Changes: chart-kit TypeScript引用配置纳入Git，选择单一npm@11.19.0完整锁并成功npm ci/build；原pnpm未跟踪锁由此替代（初始内容保存在本次备份）

Source references: `chart-kit/tsconfig.json`, `chart-kit/tsconfig.app.json`, `chart-kit/tsconfig.node.json`, `chart-kit/pnpm-lock.yaml`

Validation: original Git object/metadata evidence is preserved; see HISTORY_PROVENANCE.md.

## UI-GIT-002 — 多个依赖发布日期晚于提交日期，Go pseudo-version 也位于未来历史

Original evidence: 历史 npm package.json 与官方时间存在27条矛盾；captcha-check 的2026-03-10提交要求 altcha ^3.2.1（2026-07-12发布）；其 Go 依赖 pseudo-version 带2026-05-12时间，晚于UI末次提交2026-03-15。

Changes: 逐仓库提交历史可信边界/维护与发布基线文档，不改写或美化旧时间戳; Dolphin master唯一维护分支、旧main只读与新tag来源检查；EVM悬空commit建立本地保留ref; 疑点原因仍未知，不伪造迁移说明；未来开发事实以修复commit/CI/产物校验为据

Source references: workflow/configuration and history documents.

Validation: original Git object/metadata evidence is preserved; see HISTORY_PROVENANCE.md.

## UI-BUILD-001 — auth-login 的 package-lock 缺少 45 个平台包，npm ci 失败

Original evidence: 隔离副本 npm ci --ignore-scripts 退出1，列出 @esbuild/* 0.21.5、@rollup/* 4.62.2 共45条 Missing from lock file。不能简单解释为直接依赖范围改动，而是锁文件平台条目不完整。

Changes: 固定npm版本，脱离node_modules生成完整官方registry锁，npm ci及构建核验; chart引用配置纳入Git；保留public锁平台元数据修正并重建完整锁；Go tidy声明版本与模块图一致

Source references: `auth-login/package-lock.json`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-001 — EXISTS 后 SET 非原子，标记写入失败仍返回验证成功

Original evidence: verify 先 wasReplay(EXISTS)，再 VerifySolution，最后 markUsed(SET)；没有原子抢占消费，SET error 被丢弃。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `captcha-check/backend/main.go`, `captcha-check/backend/main.go`, `captcha-check/backend/main.go`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-002 — 消费 key 包含客户端 IP，使同一证明可以换 IP 再用

Original evidence: replayKey=client+nonce+derivedKey前缀，挑战本身没有同样的客户端绑定。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `captcha-check/backend/main.go`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-003 — clientIP 信任任意代理头，回退 RemoteAddr 还带端口

Original evidence: 无可信代理判断就采用 X-Real-IP/CF-Connecting-IP；未提供头时直接 r.RemoteAddr，Go 该值通常为 host:port。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `captcha-check/backend/main.go`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-004 — 仅挑战接口限流，昂贵的 verify 没有限流或并发上限

Original evidence: handleChallenge 有 Redis 计数，handleVerify 只有16KiB请求限制和payload范围校验，随后每次执行PBKDF2验证；http.ListenAndServe 也没有显式超时。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `captcha-check/backend/main.go`, `captcha-check/backend/main.go`, `captcha-check/backend/main.go`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-005 — 限流 INCR 与 EXPIRE 分离且忽略过期设置失败

Original evidence: 只有 count==1 时调用 EXPIRE，并忽略其错误。如果首次INCR成功而EXPIRE失败，后续计数不再设置TTL。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `captcha-check/backend/main.go`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-006 — 默认 SDK 连接远程域名，本地 Go 示例没有 CORS 配置

Original evidence: SDK 默认 apiBase 指向 https://api.smartdolphin.top；Go 示例默认127.0.0.1:18080，安全header只有no-store/nosniff，没有CORS响应。默认SDK不是自动指向这个本地服务。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `captcha-check/src/sdk/smartDolphinVerification.ts`, `captcha-check/backend/main.go`, `captcha-check/vite.config.ts`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-007 — 前端 onVerified 是计算完成回调，不能代替服务端业务验证

Original evidence: 前端计算payload后交给调用方；它本身不代表业务后端已验证/消费证明。README 已说明应将payload提交后端，但演示成功状态容易被复用为认证结论。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `captcha-check/src/sdk/smartDolphinVerification.ts`, `captcha-check/src/App.tsx`, `captcha-check/README.md`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-008 — auth-login 也静默删除邮箱/密码的合法字符

Original evidence: 邮箱和密码过滤与Modelnex相似，仅保留狭窄字符集；复杂密码和邮箱别名被改写。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `auth-login/src/pages/Login/index.tsx`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-009 — 松手吸附使用动画中的旧值，快速拖动会吸附到错误档位

Original evidence: onInput 更新 targetValue，sliderValue 通过动画追赶；onMouseUp/onTouchEnd 却 snapToNearest(sliderValue)。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `effort-slider/src/components/EffortCard/hooks/useSliderState.ts`, `effort-slider/src/components/EffortCard/hooks/useSliderState.ts`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-010 — 图表页面读取 response body 后没有再次检查取消标记

Original evidence: cancelled 只在 await Promise.all(fetch) 后检查，随后 await codeRes.text/readmeRes.text 再 setState；路由可在body读取期间变化。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `chart-kit/src/pages/DiagramDetail.tsx`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-011 — 有47个图表目录但清单只含46个，donut缺README和PNG

Original evidence: 实际public/diagrams有47个图表目录，当前清单46项未包含donut。donut只有TSX和preview.html，没有README.md/preview.png；生成脚本会默认引用不存在的README/PNG。当前46项的引用资源均存在且已跟踪。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `chart-kit/src/data/diagrams.json`, `chart-kit/scripts/generate-manifest.mjs`, `chart-kit/public/diagrams/donut/DonutDiagram.tsx`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-012 — 视频/GIF直接存入Git对象，没有独立资产管理

Original evidence: Git历史存在8043771字节demo.mp4、2792416字节demo-final.gif、1613183字节effort demo.gif。文件是合法演示资产，未发现它们是秘密或损坏文件。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `captcha-check/public/demo.mp4`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-DEP-001 — auth-login 有76个 npm 包缺少 integrity/resolved 元数据

Original evidence: 仅针对package-lock.json的packages条目逐个检查，auth-login有76项缺少integrity，且部分同样没有resolved。pnpm条目未解析这些字段，不纳入此数字；其他已提交npm锁没有同类缺项。

Changes: 固定npm版本，脱离node_modules生成完整官方registry锁，npm ci及构建核验; chart引用配置纳入Git；保留public锁平台元数据修正并重建完整锁；Go tidy声明版本与模块图一致

Source references: `auth-login/package-lock.json`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.

## UI-DOC-001 — auth-login 的123456验证码和token均为本地mock

Original evidence: mockLogin仅等待700ms、比较固定totp字符串123456，返回mock_token_时间戳；页面无真实登录API。

Changes: Redis全局SET NX+TTL原子消费、Lua限流、可信代理CIDR/规范IP、并发和HTTP时限; 同源SDK/Vite代理、计算与服务器消费分开显示，登录不破坏字符/可见demo标识; slider目标值吸附、图表AbortController及读取后检查、补齐donut资源/清单验证、资产规则

Source references: `auth-login/src/pages/Login/index.tsx`, `auth-login/README.md`

Validation: applicable local builds/regression checks completed before committing; the committed Audit CI reproduces the build and tests on GitHub. Exact results are in the cross-repository delivery report.
