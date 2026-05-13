# MiniApp-JS-Kit（`uni-js-starter`）

> 给人看的入口：`README.md`。本文档侧重 **目录约定 + AI/协作**，与 `AGENTS.md`、`CONTEXT.md`、`docs/mattpocock-skills.md` 一起使用。

**拉错语言栈？** 请先阅读 [选择 TS 或 JS 版本](./choose-version.md)。

## 项目概览

**uni-app 3 小程序启动模板**：JavaScript + Composition API + Pinia + Vite。与同系列的 **TypeScript 模板仓库**目录约定一致，仅去掉 TypeScript 与 `src/types/`。

## 技术栈

- 框架：uni-app 3、Vue 3 Composition API
- 语言：JavaScript（`.vue` 中不写 `lang="ts"`）
- 状态：Pinia（`src/store/`）
- 构建：Vite + `@dcloudio/vite-plugin-uni`

## 目录结构（`src/`）

```
src/
├── pages/
├── components/
├── composables/
├── store/
├── api/            # request.js + 按业务拆分模块
├── utils/
├── assets/
├── env/            # 业务常量；与根目录 .env 区分（见 env/README.md）
├── App.vue
├── pages.json
├── manifest.json
└── main.js
```

## 环境与配置

与 TS 模板相同：根目录 `.env*` 管构建注入；`manifest.json` / `pages.json` 管小程序与路由。

## 使用说明（协作 / AI）

1. **新页面**：`pages/` + `pages.json` 注册。
2. **接口**：使用 `api/request.js`；需要类型时可对模块加 JSDoc `@typedef`。
3. **状态**：`store/*.js`，页面内 `storeToRefs`。
4. **工程化**：见 `docs/mattpocock-skills.md` 与 `docs/adr/`。

## 常用脚本

- `npm run dev:mp-weixin`
- `npm run dev:h5`
- `npm run build:mp-weixin`

## 目标

与 TS 模板一致：快速外包、易协作、Agent 可读。
