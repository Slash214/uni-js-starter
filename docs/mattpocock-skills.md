# 与 mattpocock/skills 配合使用

[mattpocock/skills](https://github.com/mattpocock/skills) 提供工程化工作流（对齐、分诊、TDD、诊断、架构梳理等）。本仓库已按其中 **`setup-matt-pocock-skills`** 的约定预置：

| 文件 | 作用 |
|------|------|
| `AGENTS.md` | 根说明 + `## Agent skills` 块，指向下方三份配置 |
| `docs/agents/issue-tracker.md` | 默认 **GitHub Issues** + `gh` CLI 约定 |
| `docs/agents/triage-labels.md` | 五个分诊角色与仓库标签名的映射表 |
| `docs/agents/domain.md` | 如何消费 `CONTEXT.md` 与 `docs/adr/` |
| `CONTEXT.md` | 领域词汇表（随项目补充） |
| `docs/adr/` | 架构决策记录 |

## 你本地需要做的事

1. **安装技能包**（在终端执行，按提示选择 Cursor / Claude 等）：

   ```bash
   npx skills@latest add mattpocock/skills
   ```

2. 安装时勾选 **`/setup-matt-pocock-skills`**，或在智能体里对已克隆的本仓库再跑一次该指令，以便按你的习惯覆盖「Issue 在哪、标签叫什么」等（本仓库已给 GitHub + 默认标签名的**起点**，可直接改 `docs/agents/*.md`）。

3. 日常推荐配合使用的指令示例（以各 Agent 内 slash command 为准）：`/grill-with-docs`（对齐需求与术语）、`/tdd`、`/diagnose`、`/improve-codebase-architecture`。

若改用 **Linear / 本地 markdown issue** 等，请改 `docs/agents/issue-tracker.md` 并在 `AGENTS.md` 里保持摘要与之一致。
