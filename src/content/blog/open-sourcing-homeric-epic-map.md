---
title: 把荷马史诗的人物关系，做成一张可以开源的地图
description: 从诸神谱系到特洛伊战争，记录荷马史诗脉络图的独立开源，以及这次对内容范围、维护和分享的取舍。
titleEn: Open-sourcing the Homeric Epic Map
descriptionEn: A standalone map of gods, heroes, lineages and Trojan War factions, with lessons on data boundaries, licensing and shared maintenance.
date: 2026-11-16
tags: [开源, 阅读, 荷马史诗, 知识图谱]
lang: zh-CN
draft: false
---

读《伊利亚特》和《奥德赛》，有时最先拦住阅读的，是一串人物名字：谁是谁的父亲，谁属于哪个阵营，这位神为什么又出现在另一个家族里？遇到不同译名，刚认熟的人物也可能变得陌生。

我在 **[阅读路书 ReadMap](https://readmap.inklinks.io/)** 里做了「荷马史诗脉络图」，想给这样的阅读过程提供一个随手查找的入口。ReadMap 通过主题阅读路径和知识图谱，把书、人物、时代与思想之间的联系放在一起。荷马史诗图谱是其中一个文学主题。

继[西方哲学思想脉络图开源](/blog/open-sourcing-western-philosophy-map/)之后，这次也把它拆成了独立项目：**[在线体验荷马史诗脉络图](https://homeric-epic.inklinks.io/)**，或到 **[GitHub 获取源码](https://github.com/adonisly/homeric-epic-map)**。ReadMap 中的[原有入口](https://readmap.inklinks.io/knowledge-graphs/homeric-epic)继续保留。

## 三种方式，进入同一组人物

当前公开快照包含 **208 位人物、9 个类别、328 条关系**。它结合史诗人物与辅助理解的希腊神话谱系，并不意味着所有关系都直接出自荷马正文，也不穷尽神话的不同版本。

默认打开的是「人物谱系」，从宙斯开始看直系祖先、同辈、配偶与后代。换一个焦点人物，就可以把问题缩小到他的家族。

「全景谱系」把更多人物按代际展开，适合观察家族之间的交错。「阵营关系图」则把视线转到特洛伊战争：希腊联军、特洛伊一方，以及态度和立场不同的诸神。

搜索支持中文名、外文名、罗马名、别名、拼音与首字母。比如输入 `adxs`，就可以找到奥德修斯，再打开简介和亲属关系。下面是约 21 秒的真实操作演示，字幕放在独立区域：

<video controls playsinline preload="none" width="1280" height="816" style="display:block;width:100%;height:auto;border-radius:5px" poster="/images/blog/homeric-epic-map/demo-poster.jpg" aria-label="荷马史诗脉络图实际操作演示，中文字幕，无音轨">
  <source src="/images/blog/homeric-epic-map/demo.mp4" type="video/mp4" />
  你的浏览器暂不支持视频播放，可以下载下方 MP4 观看。
</video>

[下载演示（MP4，约 1 MB）](/images/blog/homeric-epic-map/demo.mp4)。也可以直接打开[宙斯家系](https://homeric-epic.inklinks.io/?view=tree&mode=ego&focus=zeus)、[阿基琉斯](https://homeric-epic.inklinks.io/?view=tree&mode=ego&focus=achilles&figure=achilles)或[奥德修斯](https://homeric-epic.inklinks.io/?view=tree&mode=ego&focus=odysseus&figure=odysseus)。

## 这次先检查内容，再复制代码

上一次拆分西方哲学图谱时，我整理了一份开源操作标准。这次沿用同一套顺序，但没有把上一个项目的文件清单直接套过来。

一个差别是内容来源。主站的荷马页面还包含现代译本的专名索引。代码可以由我决定如何授权，却不能因此替其他材料授予再发布权。

这次没有找到整份索引可供再发布的授权依据，因此公开包没有带上它的原文与全部释义。独立站的静态人物目录由已审核的公开人物快照生成，人物名称和别名搜索继续保留；主站原有内容也没有因拆分被删除。

同样，未经审核的图片没有进入公开快照。我在 README 中明确写了这些差异，避免把独立版说成主站所有资料和服务的完整镜像。

这一步给我的提醒很具体：每拆一个功能，都要重新判断代码、整理资料、译文、图片各自的来源与公开范围。某份内容能在页面上读到，并不等于可以把它整体放进一个可复制的开源仓库。

## 没有数据库，也能浏览完整图谱核心

荷马图谱的核心是 React 与 TypeScript 组件，谱系与连线使用定制布局。独立入口读取仓库自带的 JSON，安装后就可以运行，不需要数据库、账号或 API key。

主站继续从自己的数据层提供图谱，通过可选回调接入热搜和搜索统计；独立版只保留本机搜索历史，不调用主站的这些服务。公开包也不包含用户记录、评论、编辑历史或生产写入工具。

公开快照按字段白名单导出，检查了人物、类别、关系端点和关系类型，并保存记录数与 SHA-256。这样的检查能发现漏数据、悬空关系或意外字段，但不能证明每条神话关系都已完成史料审校。

如果你想自己部署，可以从仓库 README 的 `npm ci`、`npm run dev` 开始。构建产物是静态文件，托管方式也比较容易替换。

## 两边继续维护，核心只改一份

这次仍然让公开仓库维护图谱核心，ReadMap 通过 Git subtree 引入经过审核的版本。主站保留薄薄一层适配，类型、搜索、亲属称谓和配色也复用同一份实现。

社区贡献先在公开仓库审核。代码合并之后，主站检查新增作者、依赖和授权，再引入对应版本。人物资料则需要另外核对来源、旧值和并发修改，按记录处理差异，不能把公开 JSON 整表覆盖到生产数据库。

原创代码从首次公开起采用 **[AGPL-3.0-only](https://github.com/adonisly/homeric-epic-map/blob/main/LICENSE)**，第三方依赖保留各自声明。修改后的网络交互版本，应按适用条款向用户提供对应源码；许可允许遵守条款的商用，也不强制向原仓库提交 PR。主站复用社区贡献时仍需核对实际授权，维护者身份本身不会带来额外的闭源使用权。

## 把探索过程分享出去

「分享当前视图」保存展示模式、焦点人物、打开的详情与搜索词。对方打开链接，可以从同一个问题继续探索；缩放、滚动和本机搜索历史不放进链接。

分享参数采用白名单，避免把宿主页面无关的查询参数一起带出去。网站也准备了[静态人物索引](https://homeric-epic.inklinks.io/explore/)、分享封面和 sitemap，让读者在交互画布之外，还有一个可以直接阅读和进入人物的目录。

这些入口与文档，是项目交付的一部分。别人首先需要判断它能帮助解决什么阅读问题，然后才会决定是否收藏、部署或贡献。

## 继续在 ReadMap 里读下去

如果这张图让你想继续读荷马史诗，或从文学转向其他主题，可以回到 **[阅读路书 ReadMap](https://readmap.inklinks.io/)**：

- [主站荷马史诗图谱](https://readmap.inklinks.io/knowledge-graphs/homeric-epic)：继续探索人物，也可以使用主站原有的专名检索范围。
- [主题阅读路径](https://readmap.inklinks.io/reading-paths)：从感兴趣的问题出发，找一条可以逐步读下去的路线。
- [更多知识图谱](https://readmap.inklinks.io/knowledge-graphs)：看看哲学、历史、音乐等主题之间，还有哪些值得追问的联系。

图谱会随着阅读和校订继续完善。发现译名、亲属关系或阵营判断有问题，欢迎到 [Issues](https://github.com/adonisly/homeric-epic-map/issues) 附上具体来源；也欢迎在 [GitHub](https://github.com/adonisly/homeric-epic-map) 改进代码和资料。
