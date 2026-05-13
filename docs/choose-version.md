# 克隆前：先确认要 TypeScript 还是 JavaScript

两个仓库的**业务目录约定、Pinia、composables、文档与 mattpocock/skills 配置一致**，唯一差别是语言栈与 `src/types/`（仅 TS 有）。

## 怎么选

| 你的需求 | 请克隆的仓库 | 说明 |
|----------|--------------|------|
| 需要 `lang="ts"`、`vue-tsc`、接口类型推导 | **`uni-ts-starter`**（本系列 TS 仓库） | 含 `npm run type-check` |
| 希望零 TS、仅用 JavaScript | **`uni-js-starter`**（本系列 JS 仓库） | 无 `src/types/`，`.vue` 不写 `lang="ts"` |

## 克隆命令

维护者账号为 **`Slash214`**（与 GitHub 仓库路径一致）。

```bash
# TypeScript 模板
git clone https://github.com/Slash214/uni-ts-starter.git my-app && cd my-app

# JavaScript 模板
git clone https://github.com/Slash214/uni-js-starter.git my-app && cd my-app
```

## 克隆后自检（10 秒）

- 打开本仓库根目录 `package.json`：TS 仓应含 `typescript` / `vue-tsc`；JS 仓不应依赖它们。
- 打开 `src/main.*`：TS 为 `main.ts`，JS 为 `main.js`。

**若已克隆错仓库**：直接换目录重新 `git clone` 对应仓库即可，勿在同一目录里手改栈，以免和模板升级脱节。
