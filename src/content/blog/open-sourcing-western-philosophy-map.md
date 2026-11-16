---
title: 把西方哲学思想脉络图，从 ReadMap 拆出来开源
description: 从独立运行、双仓同步到许可证、搜索发现与演示，记录一个知识图谱成为开源项目的过程。
titleEn: Open-sourcing the Western Philosophy Map
descriptionEn: Taking a knowledge graph from ReadMap to a standalone project, with lessons on licensing, maintenance, and discovery.
date: 2026-11-16
tags: [开源, 技术, 西方哲学, 知识图谱]
lang: zh-CN
draft: false
---

读哲学史时，我经常遇到一个问题：记住了某位哲学家的观点，却很难说清他与前后思想家的联系。按时代读是一条线，按流派读又是另一条线。我想把这些线索放到同一张可以搜索和探索的地图上。

这就是 **[阅读路书 ReadMap](https://readmap.inklinks.io/)** 里的「西方哲学思想脉络图」。ReadMap 是我围绕主题阅读和知识联系搭建的项目：通过阅读路径和交互式知识图谱，把哲学、历史、音乐等领域的书与思想连接起来，帮助读者找到下一步想了解的内容。

最近，看到 [DeanChensj 开源的中国历史地图](https://github.com/DeanChensj/jiangshan-map)，我也决定把这个功能从主站拆出来，让别人可以直接使用、自己部署，也能参与完善。[ReadMap 中的西方哲学图谱](https://readmap.inklinks.io/knowledge-graphs/western-philosophy)也继续保留，方便从哲学探索延伸到更多阅读主题。

现在可以在 **[西方哲学思想脉络图](https://western-philosophy.inklinks.io/)** 体验，源码在 **[GitHub](https://github.com/adonisly/western-philosophy-map)**。下面记录这次拆分中值得留下的经验。

## 先看看它能做什么

当前公开数据快照包含 413 位人物、115 个流派、131 条已录入关系。这些数字表示目前的整理范围，并不意味着穷尽了西方哲学史。

你可以搜索「苏格拉底」或拼音首字母「sgld」，定位人物卡片，阅读主要思想与著作，再沿着连线追踪思想的继承和影响。也可以切换世纪、流派或传承布局，换一个角度看同一组人物。

下面是 52 秒的实际操作演示，带中文字幕：

<video controls playsinline preload="none" width="1280" height="832" style="display:block;width:100%;height:auto;border-radius:5px" poster="/images/blog/western-philosophy-map/demo-poster.jpg" aria-label="西方哲学思想脉络图操作演示，中文字幕，无音轨">
  <source src="/images/blog/western-philosophy-map/demo.mp4" type="video/mp4" />
  你的浏览器暂不支持视频播放，可下载下方的 MP4 文件观看。
</video>

[下载操作演示（MP4，约 2.6 MB）](/images/blog/western-philosophy-map/demo.mp4)。也可以直接从[苏格拉底的思想传承](https://western-philosophy.inklinks.io/?layout=lineage&philosopher=socrates_1760717560724)开始探索。

## 拆出来之后，别人能不能独立运行？

ReadMap 有多个功能，图谱原来处在一个更大的应用里。直接把页面所在目录复制出去，会留下数据接口、框架组件和主站能力之间的依赖。别人拿到代码后，仍然可能缺数据库、环境变量或访问权限。

这次我先划定公开版的范围：交付完整的图谱浏览体验；主站的评论、统计和管理能力由主站继续提供。

实现上，图谱核心负责人物卡片、连线、搜索、筛选和布局，通过数据源接口读取内容。独立站用仓库内的公开 JSON 快照提供数据，主站通过适配器接入自己的数据接口。核心基于 React、TypeScript 和 React Flow，独立运行不需要数据库、登录或 API key。

这也回答了我一开始担心的问题：**没有数据库，能不能做出相同的效果？** 对于这类以读取为主的图谱，同一份数据和同一版本核心可以使用相同的布局与渲染逻辑。但静态快照不会实时接收主站更新，主站评论和全站统计也不会随之出现。两边的内容更新时间与反馈方式需要说清楚。

公开前还要检查导出的字段。可公开的人物资料与内部管理字段应当分开，不能因为前端没有显示，就默认构建产物、JSON 或附件里没有带出去。

## 两个仓库，核心只维护一份

独立开源后，最容易增加维护负担的是：公开版修一次，主站再手工修一次，过一段时间两边就变得不同。

我选择让公开仓库成为图谱核心的主要维护源。社区的代码修改先在公开仓库审核合并，主站再通过 Git subtree 引入已确认的版本；与主站有关的反馈入口、统计等能力，通过适配接口提供。subtree 只是代码同步工具，不能代替接口设计、版本验收或许可审查。

资料更新还要另走一条流程。公开快照中的人物或关系被修正后，应审核来源，并按记录差异导回生产数据，核对旧值、处理并发修改、保留编辑历史。把整个公开 JSON 覆盖到生产库，会丢失主站上的其他更新。

因此，代码和资料都需要同步，但同步单位和审核方式不同。先明确哪个仓库维护核心、谁审核资料、发布时记录哪个版本，比先写一段自动同步脚本更有用。

## 许可证要在公开之前想清楚

这次项目原创代码选择了 **AGPL-3.0-only**，第三方组件保留各自适用的许可与声明。我的考虑是：允许他人使用和改进，也希望修改后的服务使用者能获得对应源码。

按照 [AGPL 第 13 条](https://www.gnu.org/licenses/agpl-3.0.html#section13)，修改后的程序通过网络与用户交互时，需要向这些用户提供获取该版本对应源码的机会。源码分发等情形还有其他条款；我在页面上保留了许可和实际部署版本的源码入口。

AGPL 允许遵守条款的商用，也不要求别人必须给原仓库提交 PR。它的约束需要结合实际使用方式理解，不能简单写成「禁止商用」或「修改就必须贡献回来」。

对于我自己的主站，是否能够复用某段代码，也要看权利归属和实际组合。特别是将来接收社区贡献后，维护者并不会自动获得贡献者代码的额外闭源授权。分目录、加接口或用 subtree，都不能自行解决授权问题。

以后再开源其他内容，我会在首次公开前就确定代码、数据和素材的许可，并检查第三方声明。许可决定应该进入项目设计，而不只是发布前补一个 LICENSE 文件。

## 独立站上线后，还有一批小事

域名最终用了 `western-philosophy.inklinks.io`。它沿用现有域名，也给以后可能的中国哲学项目留下了命名空间。部署到 GitHub Pages 后，还需要把自定义域名、DNS 和 HTTPS 证书配置连起来，确认 HTTPS 可以正常访问，再启用强制 HTTPS。最初浏览器出现的「不安全」提示，也提醒我：页面能打开，只完成了上线的一部分。

界面也不能只在桌面上看。我遇到过手机搜索栏被反馈按钮挤窄的问题；修复手机布局后，又需要回头检查桌面的布局按钮。最终要把搜索、筛选、详情、分享等实际路径，在不同宽度下走一遍。

分享功能同样需要定义清楚：人物链接能直接打开对应详情，视图链接可以恢复布局、搜索和筛选，拖动位置与缩放比例则不保存。链接只携带明确允许的图谱状态，避免顺手带出宿主页面其他参数。

## 让人找到它，也让人看懂它

刚开始我关注的是关键词：别人搜索「西方哲学」「西方哲学史」「思想脉络图」时，怎样找到这个项目？

后来把工作分成了两部分。GitHub 仓库需要在简介、Topics 和 README 中自然说明项目是什么、能做什么、如何运行；网站则需要自己的标题、分享封面、可读取内容、canonical、sitemap 和 robots 配置。

这里有一个容易误解的细节：根据 [GitHub 的仓库搜索文档](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)，默认仓库搜索匹配名称、简介和 Topics；搜索 README 内容时，搜索者需要使用 `in:readme`。它是搜索语法，不能由仓库作者「开启」。因此，不能把所有关键词都塞进 README，就期待默认搜索排名上涨。

我补充了真实截图、上手步骤、资料纠错入口和版本说明，也分别配置了 GitHub 的分享封面与网站的 Open Graph。独立站增加了[人物与流派索引](https://western-philosophy.inklinks.io/explore/)，让用户和搜索引擎都能读取静态文字，再进入交互图谱。

Search Console 中，主站和独立站分别完成了资源验证与 sitemap 提交。但验证通过、站点地图被读取、页面被收录、搜索排名提高，是不同的状态。这次完成的是前面的接入工作，后面的表现还需要持续观察。

这些优化之外，我也补了一段真实操作演示。与一串功能名称相比，看到一次搜索、定位和展开详情的过程，更容易判断这个工具是否适合自己。

## 把这次经验留给下一次

这次最值得保留的是一套顺序：先划定公开范围与权利，准备独立代码和公开数据，验证别人能运行，再完成部署、文档、演示和维护安排。

我把详细步骤整理成了内部开源操作标准，供以后拆分其他功能时复用。以后每次开源任务完成，也会在这个主页新增一篇博客，留下公开成果、关键决定和实际踩坑；内部检查记录与对外文章分别维护。

图谱本身仍是持续整理的学习工具。结构检查通过，不等于每条年代、译名和思想关系都完成了史料审核。如果你发现资料有误，欢迎到 [Issues](https://github.com/adonisly/western-philosophy-map/issues) 附上来源，也欢迎通过 [Pull Request](https://github.com/adonisly/western-philosophy-map/pulls) 改进代码和内容。

希望它能成为读哲学史时可以随手打开的一张地图。带着一个人物或问题进去，沿着联系慢慢读下去。

## 继续在 ReadMap 探索

西方哲学图谱是 [阅读路书 ReadMap](https://readmap.inklinks.io/) 的一个起点。如果你想从思想脉络走向更完整的主题阅读，可以继续看看：

- **[主题阅读路径](https://readmap.inklinks.io/reading-paths)**：从感兴趣的问题出发，寻找可以逐步读下去的书单与阅读路线。
- **[更多知识图谱](https://readmap.inklinks.io/knowledge-graphs)**：继续探索西方音乐史、佛教史、中国历史朝代等主题，观察人物、时代与思想之间的联系。
- **[主站西方哲学图谱](https://readmap.inklinks.io/knowledge-graphs/western-philosophy)**：在 ReadMap 中继续探索本文的哲学地图，并使用主站的评论与反馈入口。

欢迎把 [ReadMap](https://readmap.inklinks.io/) 收藏为阅读时的一个入口，也欢迎把你希望看到的阅读主题和使用建议告诉我。
