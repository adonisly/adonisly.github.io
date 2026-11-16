---
title: 荷马史诗地图，现在也能切换中英文
description: 为荷马史诗开源地图加入英文人物详情、谱系和亲属称谓，记录内容边界、关系方向与双语维护的处理方式。
titleEn: Bringing English to the Homeric Epic Map
descriptionEn: Adding bilingual character notes, genealogies and kinship labels while preserving the shared graph and its public boundaries.
date: 2026-11-16
tags: [开源, 荷马史诗, 国际化, 知识图谱]
lang: zh-CN
draft: false
---

[阅读路书 ReadMap](https://readmap.inklinks.io/) 是我围绕主题阅读搭建的项目，通过阅读路径和知识图谱，把书、人物与相关背景连接起来。此前，我把其中的[荷马史诗脉络图拆出来开源](/blog/open-sourcing-homeric-epic-map/)，作为阅读《伊利亚特》《奥德赛》和希腊神话时的一张人物地图。

继[西方哲学地图的双语版本](/blog/bilingual-western-philosophy-map/)之后，这次也为荷马地图加入了英文。可以直接打开 **[English website](https://homeric-epic.inklinks.io/en/)**，也可以继续使用原来的[中文网站](https://homeric-epic.inklinks.io/)。源码、数据与翻译仍放在[同一个 GitHub 仓库](https://github.com/adonisly/homeric-epic-map)。

![荷马史诗地图英文版：神祇、角色身份与阵营关系](/images/blog/homeric-epic-map/overview-en.jpg)

## 不只是把人物名换成英文

原来的数据已经包含英文名和部分罗马名，例如 Odysseus 和 Ulysses。真正需要补齐的是围绕这些名字的阅读体验：神职、称号、简介、异说、类别、搜索提示，以及亲属关系图里的父母、祖父母、子女和配偶。

现在，英文版可以在 Family view、Full genealogy 和 Factions 三种视图之间切换。可以搜索英文名，也可以输入中文或拼音首字母；从英文人物卡片进入详情，再沿亲属关系继续探索。

语言切换也加入了人物详情面板。因为详情是一个模态面板，只把切换入口放在背后的标题栏，会让正在读人物简介的人无法直接切换。现在切换时保留视图、焦点、类别、搜索词和已打开的人物，分享链接也保留语言。

## 让关系标签说清“谁对谁做了什么”

这次发现一个比文案长短更重要的问题：详情里的定向关系需要从当前人物的角度表达。

同样是 `kills` 关系，查看阿基琉斯时，应当区分 **Kills Hector** 与 **Killed by Paris**。如果都使用正向标签，就容易把事件的主客体读反。修正的是显示标签，人物 ID、关系端点与方向仍按原数据保留。

亲属称谓也按性别和方向选择。例如查看阿基琉斯，Thetis 是 Mother，Neoptolemus 是 Son；切回中文后，仍显示对应的中文称谓。两种语言共用同一套结构，而不是维护两份可能逐渐不同的谱系。

## 翻译没有扩大公开范围

公开快照仍是 **208 位人物、9 个类别、328 条关系**。英文内容按稳定 ID 单独维护，每个字段保留对应原文与审核状态。原文变化后，旧译文不能只靠更新标记就继续发布；缺失或过期内容会被检查出来，界面也有明确的原文回退说明。

首次开源时排除的内容继续排除：现代译本的整份专名索引、未经审核的图片、主站用户与运营数据，都没有因为增加英文而被带进公开版本。

首批内容采用机器辅助翻译。我整理了类别、分组、亲属称谓、部分神职，以及宙斯、阿基琉斯、奥德修斯等核心人物的英文摘要，也修正了转写说明中一些不自然的表达。但一般简介、异说和历史判断仍是待校对草稿，并没有完成逐条学术审核。

尤其是希腊神话有多个传统，辅助阅读的后世谱系不应一律当作荷马正文。英文也需要保留“某一说法”“后世传统”等限定，而不能让翻译把不确定性抹掉。

## 把双语做成可以继续维护的版本

这次增加了[英文 README](https://github.com/adonisly/homeric-epic-map/blob/main/README.en.md)和[翻译维护说明](https://github.com/adonisly/homeric-epic-map/blob/main/docs/TRANSLATING.md)。中英文 README 保持相同的 13 章结构，既说明如何使用和运行，也保留来源项目 ReadMap 的介绍与入口。

英文站有自己的 HTML 入口、[静态人物索引](https://homeric-epic.inklinks.io/en/explore/)、标题、描述和分享封面。索引不需要 JavaScript，可以先按类别浏览人物，再进入图谱。页面继续静态部署，浏览者不需要数据库、账号或翻译 API key。

我也检查了桌面、320px 与 375px 手机布局、三种视图、搜索、分享恢复、亲属跳转和双向语言切换。项目原创代码继续采用 AGPL-3.0-only，数据公开边界和第三方声明沿用现有安排。这个双语阶段作为 v0.2.0 发布，Tag 和 GitHub Release 与已验证的源码提交对应。

## 继续在 ReadMap 探索

可以从[阿基琉斯的英文人物页](https://homeric-epic.inklinks.io/en/?view=tree&mode=ego&focus=achilles&figure=achilles)开始，或者查看[奥德修斯](https://homeric-epic.inklinks.io/en/?view=tree&mode=ego&focus=odysseus&figure=odysseus)。如果发现译名、简介或关系有误，欢迎到 [GitHub Issues](https://github.com/adonisly/homeric-epic-map/issues) 附可靠来源提出修订。

想继续找阅读方向，可以回到[阅读路书 ReadMap](https://readmap.inklinks.io/)，查看[主题阅读路径](https://readmap.inklinks.io/reading-paths)、[更多知识图谱](https://readmap.inklinks.io/knowledge-graphs)，或在[主站荷马史诗图谱](https://readmap.inklinks.io/knowledge-graphs/homeric-epic)继续探索。主站这些入口目前仍主要是中文内容。
