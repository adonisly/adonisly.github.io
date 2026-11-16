interface Project {
  id: string;
  name: string;
  title: string;
  titleEn: string;
  descriptionEn: string;
  tagsEn: string[];
  line: string;
  description: string;
  url: string;
  domain: string;
  tags: string[];
  repositoryUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'readmap',
    name: 'ReadMap',
    title: '阅读路书',
    titleEn: 'Reading paths',
    descriptionEn: 'Find your next book through connected ideas. Explore curated reading paths and interactive knowledge graphs across philosophy, music, history, and more.',
    tagsEn: ['Reading paths', 'Knowledge graphs', 'Connected ideas'],
    line: '给好奇心，一张可以出发的地图。',
    description: '把书放回知识的脉络里。从主题阅读路径出发，通过哲学、音乐、历史等交互式知识图谱，找到下一本值得读的书。',
    url: 'https://readmap.inklinks.io/',
    domain: 'readmap.inklinks.io',
    tags: ['阅读路径', '知识图谱', '跨学科探索'],
  },
  {
    id: 'western-philosophy',
    name: 'Philosophy Map',
    title: '西方哲学思想脉络图',
    titleEn: 'Western philosophy',
    descriptionEn: 'A Chinese–English open-source map from ReadMap. Search philosophers, explore centuries and schools, and follow intellectual influences. Browse without an account, self-host, or contribute on GitHub.',
    tagsEn: ['Western philosophy', 'Interactive map', 'Open source'],
    line: '沿着思想的来路，读懂西方哲学史。',
    description: '从 ReadMap 独立开源的中英双语西方哲学思想脉络图。搜索人物、切换世纪与流派布局，沿着传承关系梳理西方哲学史；无需登录即可浏览，也可自行部署与贡献。',
    url: 'https://western-philosophy.inklinks.io/',
    domain: 'western-philosophy.inklinks.io',
    repositoryUrl: 'https://github.com/adonisly/western-philosophy-map',
    tags: ['西方哲学史', '交互式图谱', '开源项目'],
  },
  {
    id: 'homeric-epic',
    name: 'Homeric Epic Map',
    title: '荷马史诗脉络图',
    titleEn: 'Homeric epic & mythology',
    descriptionEn: 'An open-source map from ReadMap. Explore gods, heroes, family lineages and Trojan War factions across the Iliad, Odyssey and Greek mythology. Search names, read character details, and share a view. No database or account needed.',
    tagsEn: ['Homeric epic', 'Greek mythology', 'Open source'],
    line: '从诸神到英雄，沿着谱系重读荷马史诗。',
    description: '从 ReadMap 独立开源的荷马史诗脉络图。搜索神祇与英雄，在人物谱系、全景神谱和特洛伊战争阵营间切换，阅读人物与亲属关系；无需数据库或账号，也可自行部署与贡献。',
    url: 'https://homeric-epic.inklinks.io/',
    domain: 'homeric-epic.inklinks.io',
    repositoryUrl: 'https://github.com/adonisly/homeric-epic-map',
    tags: ['荷马史诗', '希腊神话', '开源项目'],
  },
  {
    id: 'bookclub',
    name: 'Bookclub',
    title: '书读经典',
    titleEn: 'Reading together',
    descriptionEn: 'Explore a reading community’s shared journey. Search reading records, look back through monthly and annual reports, and discover connections between readers in Mind Planet.',
    tagsEn: ['Reading community', 'Data visualization', 'Reading records'],
    line: '让一个人的阅读，与更多人相遇。',
    description: '为读书群整理共同阅读的足迹。查询阅读记录，回看月度与年度报告，在「心智星球」里发现彼此的阅读关联。',
    url: 'https://bookclub.inklinks.io/',
    domain: 'bookclub.inklinks.io',
    tags: ['阅读社区', '数据可视化', '阅读记录'],
  },
];
