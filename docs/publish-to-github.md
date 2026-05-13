# 首次发布到 GitHub（维护者）

本机需已安装 **GitHub CLI**（`winget install GitHub.cli`）。**推送前必须先登录一次**：

```powershell
gh auth login
```

按提示选 GitHub.com、HTTPS、浏览器或 Token 完成授权。

然后在**各模板根目录**执行（会**创建同名空仓库并推送**；若远端已存在会报错，需换名或删远端后重试）：

```powershell
cd e:\uni-app\uni-ts-starter
gh repo create uni-ts-starter --public --source=. --remote=origin --push --description "uni-app 3 + TypeScript + Vite + Pinia starter"

cd e:\uni-app\uni-js-starter
gh repo create uni-js-starter --public --source=. --remote=origin --push --description "uni-app 3 + JavaScript + Vite + Pinia starter"
```

仓库会出现在你当前 `gh` 登录账号下，例如 `https://github.com/<你的用户名>/uni-ts-starter`。

若你更习惯 **SSH** 或 **纯 git + 网页建空仓库**，可先网页创建空仓库，再：

```powershell
git remote add origin https://github.com/<用户名>/<仓库名>.git
git push -u origin main
```
