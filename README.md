# uni-js-starter

uni-app 3 + **JavaScript** + Vue 3 + Vite + Pinia 的小程序启动模板，克隆后即可开发。

> **拉仓库前请先确认栈**  
> - **本仓库 = JavaScript 版**（无 `vue-tsc` / `src/types`）。  
> - 需要 **TypeScript** 版请克隆姊妹仓 **`uni-ts-starter`**。  
> - 详细对照见 [docs/choose-version.md](./docs/choose-version.md)。

## 快速开始

```bash
git clone https://github.com/Slash214/uni-js-starter.git my-app
cd my-app
npm install
npm run dev:mp-weixin
```

使用 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) 导入构建输出目录（见终端提示，一般为 `dist/dev/mp-weixin`）。

## 文档

| 文件 | 说明 |
|------|------|
| [docs/choose-version.md](./docs/choose-version.md) | **先读**：选 TS 还是 JS、克隆命令与自检 |
| [docs/publish-to-github.md](./docs/publish-to-github.md) | 维护者：用 `gh` 创建远端并首次推送 |
| [docs/start.md](./docs/start.md) | 目录约定、技术栈、协作说明 |
| [docs/mattpocock-skills.md](./docs/mattpocock-skills.md) | 与 [mattpocock/skills](https://github.com/mattpocock/skills) 的配合方式 |
| [AGENTS.md](./AGENTS.md) | Cursor / 其它 Agent 的根说明 |
| [CONTEXT.md](./CONTEXT.md) | 领域词汇（随项目补充） |

## 基底说明

本仓库由官方模板 [dcloudio/uni-preset-vue](https://github.com/dcloudio/uni-preset-vue) 的 `vite` 分支生成，并增加了 Pinia、`api/`、`composables/`、`docs/agents/` 等默认结构。

## 姊妹仓库（TypeScript）

需要 **TypeScript + `src/types/`** 时克隆 **`uni-ts-starter`**。
