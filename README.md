# Inklinks · 阅读、连接与探索

**两个阅读主站，两个独立开源的交互式脉络图。**

[个人主页](https://inklinks.io/) · [阅读路书 ReadMap](https://readmap.inklinks.io/) · [书读经典 Bookclub](https://bookclub.inklinks.io/) · [全部项目](https://inklinks.io/projects/)

这里是 Chris Wang 的个人空间，分享网络工程、阅读与徒步，也记录把兴趣做成可使用、可分享的项目的过程。两大主站分别服务于主题阅读与共同阅读；最新开源的西方哲学、荷马史诗图谱，则让思想与人物关系可以独立探索、部署和完善。

## 两大阅读主站

### ReadMap · 阅读路书

**给好奇心，一张可以出发的地图。**

围绕主题与学科整理系统化、分层次的阅读路径，通过知识图谱把书、人物、时代与思想放回彼此的脉络中，帮助读者找到下一步值得读的内容。

- **阅读路径**：从一个问题或学科出发，沿着有层次的路线逐步阅读。
- **知识图谱**：探索西方哲学、西方音乐、佛教史、荷马史诗与中国历史等主题中的联系。
- **跨学科探索**：在阅读路线与交互图谱之间切换，从感兴趣的人物、思想或时代继续延伸。

[进入阅读路书](https://readmap.inklinks.io/) · [浏览阅读路径](https://readmap.inklinks.io/reading-paths) · [探索知识图谱](https://readmap.inklinks.io/knowledge-graphs)

### Bookclub · 书读经典

**让一个人的阅读，与更多人相遇。**

为读书群整理共同阅读的足迹，用可查询的记录、月度与年度报告，以及阅读关系的可视化，帮助读者回顾自己的阅读，也发现彼此的联系。

- **阅读记录查询**：按时间与读者等条件，查找读过的书和阅读记录。
- **月度与年度报告**：回看共读情况、阅读趋势与书籍类别分布。
- **心智星球**：从阅读类型与领域的联系出发，探索读者之间的阅读关联。

[进入书读经典](https://bookclub.inklinks.io/)

## 最新开源的两个脉络图

两个图谱均从 ReadMap 拆分为独立项目，提供在线浏览、公开源码与仓库自带的数据快照。本地运行和静态部署不需要数据库、账号或 API key；主站对应入口继续保留，独立版与主站的资料范围和服务差异以各仓库说明为准。

### 西方哲学思想脉络图 · Western Philosophy Map

**从古希腊到当代，沿着思想的传承理解西方哲学史。**

- 搜索哲学家，阅读人物生平、主要思想与著作，追踪思想的继承、发展和批判。
- 按流派、时代和层级筛选，在默认、紧凑、流派、世纪与传承五种布局间切换。
- 支持中文、英文名、拼音和首字母搜索，以及人物与视图分享。
- 当前公开快照包含 **413 位哲学家、115 个流派、131 条已录入关系**。

[在线体验](https://western-philosophy.inklinks.io/) · [GitHub 源码与贡献](https://github.com/adonisly/western-philosophy-map) · [人物与流派索引](https://western-philosophy.inklinks.io/explore/) · [开源复盘与演示](https://inklinks.io/blog/open-sourcing-western-philosophy-map/)

<details>
<summary>查看西方哲学图谱的演示封面</summary>

[![西方哲学思想脉络图演示封面：苏格拉底、柏拉图与亚里士多德的思想传承](public/images/blog/western-philosophy-map/demo-poster.jpg)](https://western-philosophy.inklinks.io/)

</details>

### 荷马史诗脉络图 · Homeric Epic Map

**从诸神到英雄，沿着谱系重读《伊利亚特》与《奥德赛》。**

- 在人物谱系、全景谱系和特洛伊战争阵营之间切换，查看神祇、英雄、亲属与阵营关系。
- 搜索中文名、外文名、罗马名、别名、拼音与首字母，打开人物详情并分享当前视图。
- 当前公开快照包含 **208 位人物、9 个类别、328 条已录入关系**，涵盖史诗人物及辅助理解的希腊神话谱系。
- 神话关系可能存在不同版本，资料应结合原著与可靠研究核对；公开版未包含现代译本整份专名索引原文。

[在线体验](https://homeric-epic.inklinks.io/) · [GitHub 源码与贡献](https://github.com/adonisly/homeric-epic-map) · [静态人物索引](https://homeric-epic.inklinks.io/explore/) · [开源复盘与演示](https://inklinks.io/blog/open-sourcing-homeric-epic-map/)

<details>
<summary>查看荷马史诗图谱的演示封面</summary>

[![荷马史诗脉络图演示封面：神祇、英雄、人物谱系与特洛伊战争](public/images/blog/homeric-epic-map/demo-poster.jpg)](https://homeric-epic.inklinks.io/)

</details>

两个图谱的原创代码均采用 **AGPL-3.0-only**，第三方材料遵循各自许可。具体条件分别见[西方哲学图谱许可](https://github.com/adonisly/western-philosophy-map/blob/main/LICENSE)与[荷马史诗图谱许可](https://github.com/adonisly/homeric-epic-map/blob/main/LICENSE)及各仓库的归属声明。

## 本仓库维护什么

本仓库维护 [Inklinks 个人主页](https://inklinks.io/)及博客，使用 **Astro + Markdown** 构建。ReadMap、Bookclub 与两个独立图谱各有自己的站点；图谱代码与资料贡献请前往对应开源仓库。

- [项目总览](https://inklinks.io/projects/)：两大主站与独立开源图谱的统一入口。
- [博客与开源记录](https://inklinks.io/blog/)：项目拆分、维护经验，以及技术、阅读与探索的文字。
- [RSS 订阅](https://inklinks.io/rss.xml)：订阅最新文章。

## 本地开发

Node.js 22.23.4 以上；建议使用最新的 Node.js 24 LTS。

```sh
npm ci
npm run dev -- --port 4321
npm run check
npm run build
npm run preview -- --port 4322
```

## 内容维护

- 项目：`src/data/projects.ts`。
- 新开源项目发布时，同步登记到上述共用列表，填写中英文介绍、在线地址、GitHub 仓库地址（`repositoryUrl`）、标签与对应封面；首页和 `/projects/` 会从同一列表生成，项目数量自动更新；同时更新本 README 的项目介绍、入口与数量。完成检查、构建与桌面／手机页面验证，推送后核验两处正式入口和链接，再将发布结果回填来源项目的开源操作文档。博客发布与项目列表登记分别验收，不互相替代。
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

项目介绍与正式入口于 2026-11-16 根据个人主页、两大主站和独立图谱页面核验；图谱数量为当时的公开快照，后续以各项目最新版本为准。不复制读书群成员数据。
