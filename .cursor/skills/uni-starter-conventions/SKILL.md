---
name: uni-starter-conventions
description: >-
  uni-app 启动模板约定：实现页面/接口/状态前先读 docs/start.md、CONTEXT.md
  与 docs/agents/domain.md；请求走 api/request，跨页状态用 Pinia，复用逻辑放 composables。
---

# uni-starter 约定

在修改或新增 **页面、接口封装、Pinia、composables、多端条件编译** 前：

1. 阅读 `docs/start.md` 中的目录职责。
2. 阅读 `CONTEXT.md` 中的领域词；不确定的术语用 `/grill-with-docs`（见 `docs/mattpocock-skills.md`）对齐后再命名。
3. 涉及架构取舍时，检查 `docs/adr/` 是否已有相关 ADR。

实现要点：

- 网络：`src/api/request.js`，业务按域拆文件。
- 状态：`src/store/`，避免在页面堆全局可变单例。
- 逻辑复用：`src/composables/`。
- 平台差异：优先条件编译（官方文档），其次封装到 composable。
