# Inklinks

Chris Wang 的个人网站。Astro + Markdown，目标域名 `https://inklinks.io`。

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
- 首篇欢迎文字属于首版编辑草案，等待网站预览确认后一起发布。

## 发布

首版当前仅供本地预览。工作流只接受手动触发，未启用 GitHub Pages 或修改 DNS。

预览确认后：

1. 在 `adonisly/adonisly.github.io` 的 Settings → Pages 选择 GitHub Actions。
2. 在 GitHub 完成 `inklinks.io` 域名所有权验证，设置自定义域名；往 `public/CNAME` 写入 `inklinks.io`。
3. 在 Cloudflare 按 GitHub 当前文档配置根域名与 `www`，保留 ReadMap、Bookclub 和图片域名的现有记录。
4. 在 GitHub 启用 HTTPS；确认 `www` 跳转到主域名。
5. 为 `.github/workflows/deploy.yml` 加入 `push: { branches: [main] }`，以后推送即自动发布。
6. 将 Profile README 中的 Coming soon 替换为网站链接。

项目内容依据 2026-11-15 可访问的 ReadMap 和 Bookclub 公开页面整理；不复制读书群成员数据。
