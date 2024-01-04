# Code Standard / 全局代码规范

## Introduction / 说明

**中文**

本仓库所有子项目、所有编程语言、所有技术框架的代码编写、日常迭代、PR 提交与合并审核，不使用个人自定义规范，全部严格遵循行业顶级官方开源编码规范。

所有代码风格争议、格式冲突、编码判定，均以本文档优先级规则为唯一裁决标准。

**English**

All source code writing, iteration, PR submission and review for all subprojects, programming languages and frameworks in this repository follow official public industry standards strictly. No personal custom rules are applied.

All style disputes and format conflicts are judged solely by the priority rules defined in this document.

---

## 1. Official Specification List / 权威规范引用清单

所有开发必须遵循以下官方规范文档：

All developments must comply with the following official guidelines.

1. Google 全语言通用风格指南（全局基础基准）
   Google Style Guides (Global Base Standard)
   https://google.github.io/styleguide/

2. Airbnb JavaScript & TypeScript 编码规范
   Airbnb JavaScript / TypeScript Style Guide
   https://airbnb.io/javascript/

3. 阿里巴巴前端开发规约
   Alibaba Frontend Specification
   https://github.com/alibaba/f2e-spec

4. 阿里巴巴 Java 工程通用规约 P3C
   Alibaba Java Engineering Specification (P3C)
   https://github.com/alibaba/p3c

5. 百度 EFE 前端编码规范
   Baidu EFE Frontend Specification
   https://github.com/ecomfe/spec

6. 腾讯 TGideas 前端规范
   Tencent TGideas Frontend Specification
   https://tgideas.qq.com/doc/index.html

7. 京东凹凸实验室前端规范
   JD Aotu Lab Frontend Specification
   https://guide.aotu.io/index.html

8. Vue 官方风格指南
   Vue Official Style Guide
   https://v2.cn.vuejs.org/v2/style-guide/

9. Go 官方高效编程规范
   Effective Go
   https://go.dev/doc/effective_go

10. Rust 官方API与代码风格指南
    Rust API Guidelines
    https://rust-lang.github.io/api-guidelines/

11. Python PEP8 官方编码规范
    Python PEP 8 Style Guide
    https://peps.python.org/pep-0008/

12. C# 微软官方编码约定
    Microsoft C# Coding Conventions
    https://learn.microsoft.com/zh-cn/dotnet/csharp/fundamentals/coding-style/coding-conventions

13. PHP PSR 整套标准规范
    PHP-FIG PSR Standards
    https://www.php-fig.org/psr/

14. Dart 官方编码风格规范
    Effective Dart Style Guide
    https://dart.dev/effective-dart/style

---

## 2. Conflict Priority Rules / 规范冲突优先级（从高到低）

**中文**

当多个规范内容冲突时，严格按照以下优先级判定：

1. 项目本地配置最高：ESLint、Prettier、rustfmt、golangci-lint、gofmt 等本地格式化配置优先级大于所有外网规范；
2. 语言/框架官方专属规范 > 通用大厂综合规范；
3. 领域专用规范 > 跨领域通用规范；
4. 代码正确性、安全性、稳定性 > 单纯代码格式美观风格；
5. 同一系列规范内，最新稳定官方版本高于旧版规范。

**English**

In case of conflicts between multiple specifications, priority rules from highest to lowest:

1. Local project lint & format config (eslint, prettier, rustfmt, gofmt etc.) overrides all external guides;
2. Official language/framework specification takes precedence over general company-wide style guides;
3. Domain-specific standards are superior to general cross-domain standards;
4. Code correctness, security and stability are more important than pure formatting style;
5. Within one specification system, latest official stable version supersedes outdated versions.

---

## 3. Annotation Rules / 注释规范

**中文**

1. 命名清晰、逻辑直白、可自解释的常规业务代码，禁止冗余注释；
2. 复杂数学算法、特殊环境兼容、边界兜底逻辑、关键性能优化、晦涩业务约束必须添加注释；
3. 注释只说明设计原因与业务决策（为什么），不重复描述代码执行行为（干什么）；
4. 严禁直译式废话注释、重复注释、过期失效注释。

**English**

1. Self-explanatory clean business code shall not be redundantly commented;
2. Complex algorithms, environment compatibility, edge fallback logic, performance optimizations and obscure business constraints require mandatory comments;
3. Comments explain design decisions (why), instead of repeating what the code does;
4. No trivial, duplicate or obsolete comments allowed.

---

## 4. PR Access Rules / 合并准入规则

**中文**

1. 所有提交代码必须在本仓库技术白名单内，且完全遵循整套引用规范，否则直接关闭拒绝合并；
2. 不允许私自引入未收录编程语言、框架、第三方技术；
3. 如需新增技术语言，必须在PR最顶端写明：`申请新增技术：XXX`，写明使用必要性、替代方案劣势、长期可维护性，审核通过后方可使用。

**English**

1. All submitted code must use whitelisted technologies and fully comply with referenced standards; otherwise PR will be rejected directly;
2. No unapproved programming languages or third-party stacks can be introduced arbitrarily;
3. To request new technology, write on the top of PR description: `Request to add technology: XXX`, with necessity, comparison and long-term maintainability proof.

---

## 5. Unified File Header / 统一文件头部声明

所有源码文件强制放置文件最顶部：

All source files must attach this header at the very beginning:

```
// SPDX-License-Identifier: GPL-2.0-only
// Copyright (C) 2000-2026 Astraeus <SmartDolphinStudio@gmail.com>
```

---

## 6. Final Rule / 最终效力说明

**中文**

本文件是整个总仓库唯一具备约束力的官方代码规范文件，全部子项目、所有外部贡献者均必须严格遵守。

**English**

This document is the sole binding official coding standard for the entire repository, which must be strictly followed by all subprojects and external contributors.
