---
title: 让西方哲学地图，也能用英文探索
description: 为开源西方哲学地图加入中英双语，记录语言切换、内容翻译、稳定标识与后续校对的处理方式。
titleEn: Making the Western Philosophy Map bilingual
descriptionEn: Adding English to the open-source map while sharing graph structure and keeping translations reviewable.
date: 2026-11-16
tags: [开源, 西方哲学, 国际化, 知识图谱]
lang: zh-CN
draft: false
---

[阅读路书 ReadMap](https://readmap.inklinks.io/) 是我围绕主题阅读搭建的项目，把阅读路径与哲学、历史、音乐等知识图谱放在一起。此前，我把其中的西方哲学思想脉络图[拆出来开源](/blog/open-sourcing-western-philosophy-map/)，让它可以独立运行，也方便别人参与修订。

这次继续做了一步：为这个开源地图加入英文版。现在可以打开 **[English website](https://western-philosophy.inklinks.io/en/)**，也可以使用原来的[中文网站](https://western-philosophy.inklinks.io/)，在标题栏切换语言。源码和翻译文件仍在[同一个 GitHub 仓库](https://github.com/adonisly/western-philosophy-map)。

![西方哲学地图英文版：人物卡片、思想传承与苏格拉底详情](/images/blog/western-philosophy-map/overview-en.jpg)

## 从英文姓名，到完整的英文使用流程

原来的地图已经能搜索英文姓名，但按钮、流派、思想摘要和人物详情仍主要是中文。对于英文读者，能搜到 Socrates，并不意味着能够顺利读下去。

这次把语言覆盖到搜索建议、人物卡片、详情、流派与年代筛选、五种布局、分享弹窗，以及加载和失败提示。英文卡片以英文名为主，保留中文名辅助对照；两种界面都可以搜索中文、英文和拼音。

英文入口是独立的 `/en/`，也有可以直接阅读的[英文人物与流派索引](https://western-philosophy.inklinks.io/en/explore/)。从索引点击姓名，就能进入相应人物的图谱。分享英文页面时，接收者打开的也会是英文。

## 两种语言，共用一张图

我没有为英文另建一套人物关系或另开一个仓库。当前快照仍是 413 位人物、115 个流派、131 条已录入关系，两种语言使用相同的人物 ID、关系端点、颜色和布局参数。

这件事有个容易忽略的地方：一些筛选逻辑原来直接依赖中文流派名称。如果把数据里的中文流派整体替换成英文，筛选和旧分享链接都可能失效。

因此，内部标识保持稳定，显示文字再按语言选择。切换语言时，把当前人物、布局、搜索与筛选写入目标链接；拖动位置和缩放仍按原来的约定，不包含在分享状态中。

页面和内容继续静态部署。浏览者不需要数据库、登录或翻译 API key，也不会在阅读时把输入发送到翻译服务。

## 有译文，不等于已经完成校对

英文内容按人物和流派的稳定 ID 单独存放，每个字段保存对应中文原文、译文与审核状态。如果中文内容变动，旧译文不能继续被静默当作当前版本；发布检查会提示需要更新，运行时也有明确的原文回退说明。

首批英文内容采用机器辅助翻译。我人工整理了流派与国家／地区名称、两个缺失的英文姓名，以及部分常见哲学术语和书名。但一般生平、思想摘要与引语仍是待校对的草稿，并没有完成全库的学术审核。

引语尤其要谨慎：从中文笔记转译出的英文，不应该被当成已经核对过的原著原句。因此，页面会说明它属于转译材料。后续修订应结合可信出处、作品与版本，而不只是让句子读起来更顺。

我把这些维护规则写进了[翻译贡献说明](https://github.com/adonisly/western-philosophy-map/blob/main/docs/TRANSLATING.md)。如果你熟悉某位哲学家或某个传统，欢迎针对具体字段提出修订。

## 英文也需要能被直接打开和分享

英文版不仅在浏览器中换文字，还输出独立的 HTML 入口、英文索引、标题、描述和分享封面。中英文页面互相标注语言版本，站点地图包含对应的正式地址。这些配置帮助说明页面的语言与用途，不代表已经获得搜索收录或排名提升。

文档也新增了[英文 README](https://github.com/adonisly/western-philosophy-map/blob/main/README.en.md)，与中文版保持相同的 13 章结构，继续介绍项目来自 ReadMap，以及如何独立运行、贡献和复用。现有操作视频仍是中文界面与字幕，在英文说明中如实标注。

这次还实际走了一遍语言切换、搜索、布局、筛选、人物分享和索引入口。320px 手机宽度暴露出一个小问题：英文布局按钮比中文长，会略微撑出页面。改成限制宽度并允许横向滚动后，窄屏也能保留全部布局选择。

项目原创代码继续使用 AGPL-3.0-only，许可与第三方声明沿用仓库现有安排。双语功能没有改变这一点。

## 继续在 ReadMap 探索

可以先从[苏格拉底的英文人物页](https://western-philosophy.inklinks.io/en/?layout=lineage&philosopher=socrates_1760717560724)开始，也欢迎到 [GitHub Issues](https://github.com/adonisly/western-philosophy-map/issues) 附来源提交资料或译文纠错。

如果想继续找下一步阅读方向，可以回到[阅读路书 ReadMap](https://readmap.inklinks.io/)，查看[主题阅读路径](https://readmap.inklinks.io/reading-paths)、[更多知识图谱](https://readmap.inklinks.io/knowledge-graphs)，或在[主站西方哲学图谱](https://readmap.inklinks.io/knowledge-graphs/western-philosophy)继续探索。主站这些入口目前主要是中文内容。
