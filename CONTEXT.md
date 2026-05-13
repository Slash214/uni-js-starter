# 领域上下文（CONTEXT）

> 由团队与 AI 在迭代中补充。术语请保持**稳定、可检索**；重大架构决策写到 `docs/adr/`。

## 项目

| 术语       | 含义 |
| ---------- | ---- |
| **宿主端** | 小程序运行平台（默认微信小程序，见 `manifest.json` / `pages.json`） |
| **启动模板** | 本仓库提供的目录结构 + `api/request` + Pinia + composables 约定 |

## 技术栈（摘要）

- uni-app 3、Vue 3 Composition API、Vite、Pinia（本仓库为 **JavaScript**，无 `src/types`）

## 待补充

- 业务领域名词表
- 与后端错误码、登录态相关的约定
