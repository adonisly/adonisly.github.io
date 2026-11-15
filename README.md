# Inklinks

Chris Wang 的个人网站。Astro + Markdown，网站域名 `https://inklinks.io`。

## 本地开发

Node.js 22.23.4 以上；建议使用最新的 Node.js 24 LTS。

```sh
npm ci
npm run dev -- --port 4321
npm run check
npm run build
npm run preview -- --port 4322
```

## 内容

- 项目：`src/data/projects.ts`。
- 首页每次打开或刷新默认显示中文，可手动切换英文；职位介绍固定为英文，子页面与文章保留各自原文。主页文章摘要可通过 `titleEn`、`descriptionEn` 提供英文。
- 博客：`src/content/blog/*.md`。填写 `title`、`description`、`date`、`tags`；`draft: true` 可隐藏草稿，草稿不会进入页面、RSS 或 sitemap。
- 文章日期使用 `YYYY-MM-DD`；新增技术、阅读或徒步文章后，标签会自动出现在筛选栏和标签页。
- 首篇欢迎文字介绍本站与 ReadMap、Bookclub 两个项目。

## 发布

仓库：`adonisly/adonisly.github.io`。推送到 `main` 后，GitHub Actions 自动检查、构建并发布到 GitHub Pages，也支持手动触发。

- Settings → Pages 的发布方式为 GitHub Actions，自定义域名为 `inklinks.io`。
- Cloudflare 的 `@` 与 `www` 均为 CNAME，指向 `adonisly.github.io`，采用 DNS only。根域名使用 Cloudflare CNAME flattening。
- `www.inklinks.io` 由 GitHub Pages 自动跳转到 `inklinks.io`，证书由 GitHub 管理，已启用 Enforce HTTPS。
- GitHub Actions 发布不依赖 `CNAME` 文件；自定义域名在仓库 Pages 设置中管理。
- ReadMap、Bookclub、图片域名和原有验证记录独立保留。
- 域名所有权在 GitHub 个人 Settings → Pages 验证；验证成功后，应持续保留 Cloudflare 中对应的 TXT 记录。

维护时可使用 `gh run list --repo adonisly/adonisly.github.io` 检查部署，使用 `gh api repos/adonisly/adonisly.github.io/pages` 查看域名与证书状态。

项目内容依据 2026-11-15 可访问的 ReadMap 和 Bookclub 公开页面整理；不复制读书群成员数据。
