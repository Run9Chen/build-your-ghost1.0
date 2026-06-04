export type ScoreTag =
  | 'lazy'
  | 'anxious'
  | 'social'
  | 'lonely'
  | 'romantic'
  | 'chaotic'
  | 'ambitious'
  | 'cyber'
  | 'unlucky'
  | 'funny'
  | 'dark'
  | 'rational';

export type ScoreMap = Record<ScoreTag, number>;

export type QuizOption = {
  id: string;
  text: string;
  detail: string;
  scores: Partial<ScoreMap>;
};

export type QuizQuestion = {
  id: number;
  scene: string;
  prompt: string;
  options: QuizOption[];
};

export type GhostResult = {
  key: string;
  name: string;
  headline: string;
  analysis: string;
  keywords: string[];
  verdict: string;
  opening: string;
};

export const tagLabels: Record<ScoreTag, string> = {
  lazy: '摆烂浓度',
  anxious: '焦虑浓度',
  social: '社交浓度',
  lonely: '孤魂浓度',
  romantic: '上头浓度',
  chaotic: '混乱浓度',
  ambitious: '野心浓度',
  cyber: '赛博浓度',
  unlucky: '倒霉浓度',
  funny: '整活浓度',
  dark: '阴气浓度',
  rational: '判官浓度',
};

export function createEmptyScores(): ScoreMap {
  return {
    lazy: 0,
    anxious: 0,
    social: 0,
    lonely: 0,
    romantic: 0,
    chaotic: 0,
    ambitious: 0,
    cyber: 0,
    unlucky: 0,
    funny: 0,
    dark: 0,
    rational: 0,
  };
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    scene: '周末突然空出来',
    prompt: '周末突然空出来一整天，你最像哪种鬼？',
    options: [
      {
        id: '1a',
        text: '拉窗帘，回床上，今天谁也别审判我。',
        detail: '先躺平，让灵魂断联一会儿。',
        scores: { lazy: 2, lonely: 1, dark: 1 },
      },
      {
        id: '1b',
        text: '临时摇人，出去吃点、逛点、热闹一点。',
        detail: '没计划，但不能浪费这条命。',
        scores: { social: 2, funny: 1, chaotic: 1 },
      },
      {
        id: '1c',
        text: '列一个“今天终于能推进”的小清单。',
        detail: '想把空档变成升级窗口。',
        scores: { ambitious: 2, rational: 1, cyber: 1 },
      },
    ],
  },
  {
    id: 2,
    scene: '消息两小时没回',
    prompt: '朋友很久没回消息，你第一反应是什么？',
    options: [
      {
        id: '2a',
        text: '开始复盘我上一句是不是哪里怪了。',
        detail: '先把自己审一遍。',
        scores: { anxious: 2, romantic: 1, lonely: 1 },
      },
      {
        id: '2b',
        text: '也许他在忙，我先去做别的事。',
        detail: '表面平静，内心先放过自己。',
        scores: { rational: 2, ambitious: 1 },
      },
      {
        id: '2c',
        text: '立刻切到别的窗口继续网上冲浪。',
        detail: '注意力像一只逃跑的小鬼。',
        scores: { cyber: 2, chaotic: 1, funny: 1 },
      },
    ],
  },
  {
    id: 3,
    scene: '深夜失眠',
    prompt: '深夜睡不着时，你脑子里最多出现什么？',
    options: [
      {
        id: '3a',
        text: '已经发生过的尴尬和遗憾。',
        detail: '旧事会在夜里回来敲门。',
        scores: { anxious: 2, dark: 1, lonely: 1 },
      },
      {
        id: '3b',
        text: '如果我再努力一点，会不会完全不一样？',
        detail: '一半焦虑，一半野心。',
        scores: { ambitious: 2, anxious: 1, rational: 1 },
      },
      {
        id: '3c',
        text: '刷到凌晨三点，灵魂像挂在信号塔上。',
        detail: '困但不想下线。',
        scores: { cyber: 2, chaotic: 1, dark: 1 },
      },
    ],
  },
  {
    id: 4,
    scene: '新机会出现',
    prompt: '面对一个新机会，你通常先出现哪种情绪？',
    options: [
      {
        id: '4a',
        text: '兴奋，先冲了再说。',
        detail: '没准就起飞了。',
        scores: { ambitious: 2, social: 1, chaotic: 1 },
      },
      {
        id: '4b',
        text: '害怕，脑子里先出现一百种翻车方式。',
        detail: '我不是不想要，我是怕接不住。',
        scores: { anxious: 2, rational: 1, dark: 1 },
      },
      {
        id: '4c',
        text: '先研究清楚规则，看值不值得投入。',
        detail: '做决定前先当自己的判官。',
        scores: { rational: 2, ambitious: 1, cyber: 1 },
      },
    ],
  },
  {
    id: 5,
    scene: '给未来留一句话',
    prompt: '如果可以留下一句话给未来的自己，你会写什么类型的话？',
    options: [
      {
        id: '5a',
        text: '别怕，你已经比那天强很多了。',
        detail: '想安抚未来也安抚现在。',
        scores: { anxious: 1, lonely: 1, romantic: 1, dark: 1 },
      },
      {
        id: '5b',
        text: '记得继续升级，别活成一张过期截图。',
        detail: '哪怕累，也想往前。',
        scores: { ambitious: 2, cyber: 1, rational: 1 },
      },
      {
        id: '5c',
        text: '希望你至少学会了按时睡觉。',
        detail: '话是这么说，今晚还是不睡。',
        scores: { cyber: 1, lazy: 1, funny: 1, chaotic: 1 },
      },
    ],
  },
  {
    id: 6,
    scene: '群聊突然热闹',
    prompt: '一个很热闹的群聊突然炸了，你更可能？',
    options: [
      {
        id: '6a',
        text: '火速下场整两句，能接梗就接梗。',
        detail: '弹幕体质自动上线。',
        scores: { social: 2, funny: 2 },
      },
      {
        id: '6b',
        text: '默默看完，不一定说，但全都记住了。',
        detail: '我的灵魂习惯在旁边飘着看。',
        scores: { lonely: 2, dark: 1, rational: 1 },
      },
      {
        id: '6c',
        text: '看到 99+ 就先退，晚点再审。',
        detail: '信息量一大，我的魂就想离场。',
        scores: { anxious: 1, lonely: 1, rational: 1 },
      },
    ],
  },
  {
    id: 7,
    scene: 'deadline 快到了',
    prompt: '事情快到 deadline 了，你最像哪种操作？',
    options: [
      {
        id: '7a',
        text: '前面都在飘，最后一晚突然通灵。',
        detail: '临门一脚型求生。',
        scores: { lazy: 2, chaotic: 2, cyber: 1 },
      },
      {
        id: '7b',
        text: '早拆成几块，一块块做掉。',
        detail: '不想被命运卡脖子。',
        scores: { rational: 2, ambitious: 2 },
      },
      {
        id: '7c',
        text: '边慌边做，像马在高速路上狂奔。',
        detail: '焦虑就是我的推进器。',
        scores: { anxious: 2, ambitious: 1, chaotic: 1 },
      },
    ],
  },
  {
    id: 8,
    scene: '看到喜欢的人',
    prompt: '遇到喜欢的人，你的灵魂会先发生什么？',
    options: [
      {
        id: '8a',
        text: '脑内已经播完八十集，但现实一句没说。',
        detail: '上头在心里，沉默在脸上。',
        scores: { romantic: 2, lonely: 1, anxious: 1 },
      },
      {
        id: '8b',
        text: '先试探，能撩一点是一点。',
        detail: '喜欢当然要让空气知道。',
        scores: { romantic: 2, social: 1, funny: 1 },
      },
      {
        id: '8c',
        text: '先观察气场和危险程度。',
        detail: '心动可以，翻车不行。',
        scores: { rational: 1, dark: 1, anxious: 1 },
      },
    ],
  },
  {
    id: 9,
    scene: '倒霉事发生',
    prompt: '一件倒霉事又砸到你头上，你通常会？',
    options: [
      {
        id: '9a',
        text: '先骂一句“果然又是我”。',
        detail: '我和命运有旧仇。',
        scores: { unlucky: 2, funny: 1, dark: 1 },
      },
      {
        id: '9b',
        text: '先解决，不然会更倒霉。',
        detail: '骂可以晚点再骂。',
        scores: { rational: 2, ambitious: 1 },
      },
      {
        id: '9c',
        text: '立刻开始怀疑今天是不是不该出门。',
        detail: '阴气值瞬间飙高。',
        scores: { unlucky: 2, anxious: 1, dark: 1 },
      },
    ],
  },
  {
    id: 10,
    scene: '刷到别人成功',
    prompt: '半夜刷到别人又做成了一件厉害的事，你会？',
    options: [
      {
        id: '10a',
        text: '被刺激到，关掉手机立刻想做点东西。',
        detail: '嫉妒会被我转成燃料。',
        scores: { ambitious: 2, cyber: 1, rational: 1 },
      },
      {
        id: '10b',
        text: '先叹气，再继续刷，顺便更睡不着。',
        detail: '人没动，心先碎了。',
        scores: { anxious: 2, cyber: 1, dark: 1 },
      },
      {
        id: '10c',
        text: '发给朋友：这也太离谱了吧。',
        detail: '一个人震惊不如一起震惊。',
        scores: { social: 1, funny: 2, cyber: 1 },
      },
    ],
  },
  {
    id: 11,
    scene: '桌面和房间',
    prompt: '你的房间或桌面，最接近下面哪一张图景？',
    options: [
      {
        id: '11a',
        text: '乱中有乱，我只认得自己的玄学摆法。',
        detail: '别人看是废墟，我看是生态系统。',
        scores: { chaotic: 2, lazy: 1, funny: 1 },
      },
      {
        id: '11b',
        text: '基本归位，不然我心里像闹鬼。',
        detail: '秩序是我最后的护身符。',
        scores: { rational: 2, dark: 1 },
      },
      {
        id: '11c',
        text: '桌上最显眼的是耳机、充电线和发光设备。',
        detail: '我的魂有一半住在屏幕里。',
        scores: { cyber: 2, lonely: 1, dark: 1 },
      },
    ],
  },
  {
    id: 12,
    scene: '一个人走夜路',
    prompt: '一个人走在夜路上时，你最像哪种状态？',
    options: [
      {
        id: '12a',
        text: '开始脑补各种剧情，脚步自动加快。',
        detail: '脑子先被地府接管。',
        scores: { anxious: 2, dark: 2 },
      },
      {
        id: '12b',
        text: '戴着耳机发呆，觉得夜晚有点像自己的地盘。',
        detail: '孤独但挺自由。',
        scores: { lonely: 2, dark: 1, cyber: 1 },
      },
      {
        id: '12c',
        text: '顺手拍一张路灯照，发给熟人说“像电影”。',
        detail: '人还在路上，内容已经发出去了。',
        scores: { funny: 1, social: 1, cyber: 1, romantic: 1 },
      },
    ],
  },
  {
    id: 13,
    scene: '聚会喝一点',
    prompt: '聚会里气氛刚刚好时，你通常会变成什么？',
    options: [
      {
        id: '13a',
        text: '越喝越会说，甚至开始输出人生感悟。',
        detail: '微醺就是社交外挂。',
        scores: { social: 2, funny: 1, dark: 1 },
      },
      {
        id: '13b',
        text: '表面平静，心里其实已经想回家了。',
        detail: '在人间营业，魂在撤退。',
        scores: { lonely: 2, anxious: 1 },
      },
      {
        id: '13c',
        text: '专门观察谁在上头，回家还能复盘。',
        detail: '我的娱乐是看大家一起做鬼。',
        scores: { rational: 1, funny: 1, dark: 1 },
      },
    ],
  },
  {
    id: 14,
    scene: '突然被夸',
    prompt: '别人认真夸你一句时，你的第一反应是？',
    options: [
      {
        id: '14a',
        text: '嘴上说没有啦，心里已经偷偷存档。',
        detail: '这种话我会回味很久。',
        scores: { romantic: 1, anxious: 1, lonely: 1 },
      },
      {
        id: '14b',
        text: '接住它，然后更想把事情做大。',
        detail: '我会把认可当启动资金。',
        scores: { ambitious: 2, social: 1, rational: 1 },
      },
      {
        id: '14c',
        text: '我会顺手整一句，别让气氛太正经。',
        detail: '被夸也要留点弹幕感。',
        scores: { funny: 2, social: 1 },
      },
    ],
  },
  {
    id: 15,
    scene: '如果 AI 记住你',
    prompt: '如果 AI 能长期记住你，你最想留下什么？',
    options: [
      {
        id: '15a',
        text: '我那些不方便对真人说的话。',
        detail: '想把脆弱交给不评判我的东西。',
        scores: { lonely: 2, dark: 1, cyber: 1 },
      },
      {
        id: '15b',
        text: '我做过的选择，以及我是怎么变的。',
        detail: '想让成长被看见。',
        scores: { ambitious: 1, rational: 2, cyber: 1 },
      },
      {
        id: '15c',
        text: '我的瞬间上头、发疯、整活和截图。',
        detail: '我希望自己被完整记录，而不是被总结。',
        scores: { chaotic: 1, funny: 1, romantic: 1, cyber: 1 },
      },
    ],
  },
  {
    id: 16,
    scene: '收到地府判词',
    prompt: '如果地府给你发来一张人格判词，你最希望它写你什么？',
    options: [
      {
        id: '16a',
        text: '“此魂很累，但一直没彻底放弃。”',
        detail: '至少别说我白活。',
        scores: { lazy: 1, dark: 1, ambitious: 1, anxious: 1 },
      },
      {
        id: '16b',
        text: '“此魂有点怪，但很会在人间留下痕迹。”',
        detail: '我宁愿特别，也不要无聊。',
        scores: { cyber: 1, funny: 1, social: 1, ambitious: 1 },
      },
      {
        id: '16c',
        text: '“此魂嘴硬心软，夜里会偷偷发光。”',
        detail: '看起来冷，实际心里很吵。',
        scores: { dark: 1, romantic: 1, lonely: 1, rational: 1 },
      },
    ],
  },
];

const ghostResults: Record<string, GhostResult> = {
  bailan: {
    key: 'bailan',
    name: '摆烂鬼',
    headline: '你不是彻底放弃，你只是先把灵魂平放一会儿。',
    analysis:
      '你很懂得在世界过于吵闹的时候把自己收回来。你不是没有想法，而是常常在“想做”和“懒得动”之间横着漂。别人看你像在躺，其实你只是在用自己的方式保命。',
    keywords: ['慢半拍生存', '舒适优先', '情绪自保'],
    verdict: '地府评语：此魂不爱内卷，但很会在崩溃边缘给自己按暂停。',
    opening: '今天先留一句最真实的话吧：我现在最想逃离什么？',
  },
  aoye: {
    key: 'aoye',
    name: '熬夜鬼',
    headline: '你最活跃的那一部分灵魂，通常在凌晨才上线。',
    analysis:
      '你白天也许正常营业，但一到夜里，思绪、灵感、焦虑和冲动会一起开机。你不是单纯不睡，你是在夜色里寻找一个更像自己的频道。你的问题不是没电，而是舍不得关机。',
    keywords: ['夜晚人格', '屏幕幽灵', '迟迟不下线'],
    verdict: '地府评语：此魂与月亮签过长期合同，建议谨慎续约。',
    opening: '把你最近一个凌晨时分的念头留给未来的自己。',
  },
  danxiao: {
    key: 'danxiao',
    name: '胆小鬼',
    headline: '你不是胆小，你只是把后果想得过于完整。',
    analysis:
      '你对风险、眼神和微妙变化都很敏感。别人刚开始做一件事，你已经在脑子里演完了失败、尴尬和心碎的分支剧情。你不是没有勇气，你只是需要比别人更久才能说服自己往前迈一步。',
    keywords: ['高风险感知', '夜间复盘', '谨慎心动'],
    verdict: '地府评语：此魂自带预警系统，常年误把风声当审判。',
    opening: '写一句给胆怯的自己：哪件事其实没有你想得那么可怕？',
  },
  heiwuchang: {
    key: 'heiwuchang',
    name: '黑无常',
    headline: '你不一定温柔，但你很能扛，也很会把事做成。',
    analysis:
      '你不爱废话，边界清楚，执行力也够狠。很多人只看到你的冷，却没看到你是怎么默不作声地把局面扛住。你不是没情绪，你只是习惯先处理问题，再处理自己。',
    keywords: ['高执行', '冷面靠谱', '边界清晰'],
    verdict: '地府评语：此魂阴气很稳，适合在混乱时出来维持秩序。',
    opening: '留下一句今天你默默扛住了、但没有对任何人说的事。',
  },
  baiwuchang: {
    key: 'baiwuchang',
    name: '白无常',
    headline: '你像一盏冷白色的灯，安静，但能照见很多东西。',
    analysis:
      '你带一点疏离，也带一点温柔。你可能不算最热闹的人，但你擅长看清楚关系、情绪和时间留下的痕迹。别人以为你冷，其实你只是比很多人更早接受了“很多事会过去”。',
    keywords: ['清醒共情', '安静透彻', '冷白光感'],
    verdict: '地府评语：此魂看透很多事，但仍愿意对世界留一点光。',
    opening: '写一句你最近终于想明白的事。',
  },
  niutou: {
    key: 'niutou',
    name: '牛头',
    headline: '你很能扛，但别总把自己当天生就该扛的人。',
    analysis:
      '你习惯往前顶，习惯把事情做完，也习惯在累的时候说“还行”。你的可靠感是真的，可你的消耗也是真的。你常常像一台不停机的老机器，一边发热，一边继续拉着生活往前走。',
    keywords: ['高承压', '沉默推进', '硬撑型可靠'],
    verdict: '地府评语：此魂力气很大，但需要有人提醒它也可以歇一会儿。',
    opening: '留下一句今天你其实很累、但还是做完了什么。',
  },
  mamian: {
    key: 'mamian',
    name: '马面',
    headline: '你表面镇定，内心已经跑完八百里加急件。',
    analysis:
      '你行动快、反应快、焦虑也来得快。你不是松弛挂的鬼，你是那种一边心跳加速、一边还能把事情推进的人。很多时候，是紧张感在驱动你向前，也是它让你很难真正停下来。',
    keywords: ['高速运转', '焦虑推进', '随时待命'],
    verdict: '地府评语：此魂属于一边喊累一边继续赶路的类型。',
    opening: '写一句你最近为什么一直在跑。',
  },
  diaosi: {
    key: 'diaosi',
    name: '吊死鬼',
    headline: '你不是放不下所有事，你只是会被某些东西挂住太久。',
    analysis:
      '你对关系、遗憾和细节格外认真。一个眼神、一句没说完的话、一个本该更好的结局，都可能在你心里停留很久。你并不脆弱，你只是很难对真正看重的东西潦草收尾。',
    keywords: ['高执念', '旧事回响', '慢慢松手'],
    verdict: '地府评语：此魂会在夜里反复回看同一段剧情，建议适量更新版本。',
    opening: '留下一句你还没完全放下的话。',
  },
  guhun: {
    key: 'guhun',
    name: '孤魂野鬼',
    headline: '你不一定属于哪里，但你很会和自己待在一起。',
    analysis:
      '你身上有很重的漂浮感。你也许能融进人群，但真正舒服的时候，往往是在一个人的时候。你不是不需要连接，你只是更习惯把灵魂放在安静一点、慢一点、不必解释的地方。',
    keywords: ['精神游牧', '独处充电', '安静漂浮'],
    verdict: '地府评语：此魂常在边缘地带出没，但自由度很高。',
    opening: '写一句你一个人时最像自己的瞬间。',
  },
  segui: {
    key: 'segui',
    name: '色鬼',
    headline: '你对吸引力很诚实，心动这件事在你这里从不装死。',
    analysis:
      '你对氛围、身体语言、暧昧和张力有天然雷达。你不是肤浅，你只是比别人更快承认：有些感觉一出现，灵魂就会自己往前凑。你会被人吸引，也会被“被吸引的自己”吸引。',
    keywords: ['高心动雷达', '暧昧敏感', '诚实欲望'],
    verdict: '地府评语：此魂闻到一点喜欢的味道就会自动上线。',
    opening: '留下一句最近让你心动的细节。',
  },
  jiugui: {
    key: 'jiugui',
    name: '酒鬼',
    headline: '你未必真的爱酒，你只是太懂那种“终于可以松一点”的感觉。',
    analysis:
      '你喜欢的是卸下防备后的自己：会说话、会共鸣、会觉得世界没那么硬。你平时可能收着，但一旦气氛对了，你就会变得很松、很真，也很容易在热闹之后突然想起一点孤独。',
    keywords: ['微醺人格', '情绪放生', '热闹后遗症'],
    verdict: '地府评语：此魂适合在微醺边缘说真话，但不适合第二天回看聊天记录。',
    opening: '写一句你在放松时最想说、平时却不常说的话。',
  },
  daomei: {
    key: 'daomei',
    name: '倒霉鬼',
    headline: '命运总爱来找你麻烦，但你也因此练出了一种古怪的韧性。',
    analysis:
      '你很容易觉得自己像随机事件高发区。明明已经够谨慎了，怪事还是会拐弯落到你头上。可你最厉害的地方是：你会骂、会无语、会怀疑人生，但最后还是会继续活下去。',
    keywords: ['黑色幽默', '命运针对', '意外耐受'],
    verdict: '地府评语：此魂与厄运关系复杂，但竟然越活越能讲笑话。',
    opening: '留下一句最近最荒谬的倒霉瞬间。',
  },
  jiling: {
    key: 'jiling',
    name: '机灵鬼',
    headline: '你脑子转得快，空气里稍微有点缝你就能钻出花来。',
    analysis:
      '你擅长临场反应，也很会在尴尬、混乱或沉闷里突然拎出一个好点子。你不一定永远最努力，但你常常是那个最会找到巧路的人。别人以为你轻松，其实你的脑子一直在高速转弯。',
    keywords: ['反应快', '整活聪明', '缝隙求生'],
    verdict: '地府评语：此魂适合负责灵机一动，不适合负责长期无聊。',
    opening: '写一句你最近突然冒出来的怪点子。',
  },
  lianai: {
    key: 'lianai',
    name: '恋爱脑鬼',
    headline: '你不是没见过世面，你只是很容易认真地相信心动。',
    analysis:
      '你对关系、暗示和情绪流向都很敏锐。别人只是随口一句，你可能已经在心里排演了后续剧情。你会因为一点温柔记很久，也会因为一句冷淡瞬间掉线。你的灵魂对“被在意”这件事非常诚实。',
    keywords: ['高关系敏感', '细节上头', '心软型深情'],
    verdict: '地府评语：此魂心跳声过大，建议远离会已读不回的人间生物。',
    opening: '留一句你很想发出去、但最终没有发的消息。',
  },
  moyu: {
    key: 'moyu',
    name: '摸鱼鬼',
    headline: '你不是纯摆烂，你只是很会在缝隙里偷偷给灵魂放风。',
    analysis:
      '你对“偷一点时间给自己”这件事有天赋。你会在任务之间给自己留一个喘息口，也会把很多无聊时刻变成精神逃生通道。别人看到的是摸鱼，你自己知道那其实叫“维持人格完整”。',
    keywords: ['缝隙逃生', '精神滑水', '摸鱼天赋'],
    verdict: '地府评语：此魂有点懒，但特别懂得在高压里偷回一点活气。',
    opening: '写一句你今天偷回来的那一点自由是什么。',
  },
  fafeng: {
    key: 'fafeng',
    name: '发疯鬼',
    headline: '你看起来还正常，其实灵魂已经在内场连续翻滚很多次。',
    analysis:
      '你不是每天都发疯，但你很容易在压力、情绪和混乱堆起来时突然进入“我真的不管了”的状态。你会胡思乱想，也会一边失控一边继续做事。某种意义上，你是靠边崩边活撑到今天的。',
    keywords: ['边崩边活', '高压失控', '情绪爆闪'],
    verdict: '地府评语：此魂内心弹幕过多，偶尔需要静音处理。',
    opening: '把你最近最想原地发疯的一刻留档下来。',
  },
  xianyanbao: {
    key: 'xianyanbao',
    name: '显眼包鬼',
    headline: '你一出现，空气就像自动加载了弹幕层。',
    analysis:
      '你可能并不是故意抢镜，但你的表达欲、接梗速度和存在感会自然把你推到画面中央。你会让场子活，也会让无聊时刻突然有戏。你身上那种“我来都来了，不如顺手闪一下”的气质，很难藏住。',
    keywords: ['高存在感', '热场体质', '人群发光'],
    verdict: '地府评语：此魂不一定安静，但很适合在人间制造记忆点。',
    opening: '写一句今天你最像主角的瞬间。',
  },
  saibogui: {
    key: 'saibogui',
    name: '赛博鬼',
    headline: '你的灵魂可能已经提前上传了一半，只剩肉身还在缓慢同步。',
    analysis:
      '你天然适合互联网、截图、AI、存档、人格版本这种东西。你会把很多情绪和想法留给屏幕，也会在数字空间里比在线下更像自己。你不是冷漠，你只是很早就学会了和赛博世界共享灵魂。',
    keywords: ['数字自我', '屏幕居所', '未来人格'],
    verdict: '地府评语：此魂与服务器兼容度极高，非常适合生成自己的数字幽灵。',
    opening: '写下你想让数字幽灵永久记住的第一句话。',
  },
};

function sortedTags(scores: ScoreMap) {
  return (Object.keys(scores) as ScoreTag[])
    .map((tag) => ({ tag, score: scores[tag] }))
    .sort((left, right) => right.score - left.score);
}

function pickResultByTopTag(topTag: ScoreTag, scores: ScoreMap): GhostResult {
  switch (topTag) {
    case 'lazy':
      return scores.funny >= 5 ? ghostResults.moyu : ghostResults.bailan;
    case 'anxious':
      return scores.chaotic >= 5 ? ghostResults.fafeng : ghostResults.danxiao;
    case 'social':
      return scores.funny >= 5 ? ghostResults.xianyanbao : ghostResults.segui;
    case 'lonely':
      return scores.cyber >= 5 ? ghostResults.saibogui : ghostResults.guhun;
    case 'romantic':
      return scores.social >= 4 ? ghostResults.segui : ghostResults.lianai;
    case 'chaotic':
      return scores.cyber >= 4 ? ghostResults.aoye : ghostResults.fafeng;
    case 'ambitious':
      return scores.anxious >= 5 ? ghostResults.mamian : ghostResults.niutou;
    case 'cyber':
      return scores.chaotic >= 4 ? ghostResults.aoye : ghostResults.saibogui;
    case 'unlucky':
      return ghostResults.daomei;
    case 'funny':
      return scores.social >= 4 ? ghostResults.xianyanbao : ghostResults.jiling;
    case 'dark':
      return scores.rational >= 5 ? ghostResults.heiwuchang : ghostResults.guhun;
    case 'rational':
      return scores.dark >= 4 ? ghostResults.baiwuchang : ghostResults.niutou;
    default:
      return ghostResults.saibogui;
  }
}

export function getGhostResult(scores: ScoreMap): GhostResult {
  const top = sortedTags(scores);
  const get = (tag: ScoreTag) => scores[tag];

  if (get('romantic') >= 8 && get('anxious') >= 6) return ghostResults.lianai;
  if (get('romantic') >= 8 && get('dark') >= 5) return ghostResults.diaosi;
  if (get('cyber') >= 8 && get('chaotic') >= 6) return ghostResults.aoye;
  if (get('cyber') >= 8 && (get('lonely') >= 5 || get('rational') >= 5)) return ghostResults.saibogui;
  if (get('social') >= 8 && get('funny') >= 7) return ghostResults.xianyanbao;
  if (get('funny') >= 8 && get('rational') >= 5) return ghostResults.jiling;
  if (get('unlucky') >= 8) return ghostResults.daomei;
  if (get('ambitious') >= 8 && get('dark') >= 5 && get('rational') >= 6) return ghostResults.heiwuchang;
  if (get('ambitious') >= 8 && get('anxious') >= 6) return ghostResults.mamian;
  if (get('ambitious') >= 8 && get('rational') >= 6) return ghostResults.niutou;
  if (get('rational') >= 8 && get('lonely') >= 5) return ghostResults.baiwuchang;
  if (get('lazy') >= 8 && get('funny') >= 5) return ghostResults.moyu;
  if (get('lazy') >= 8 && get('chaotic') >= 6) return ghostResults.bailan;
  if (get('dark') >= 8 && get('lonely') >= 7) return ghostResults.guhun;
  if (get('anxious') >= 8 && get('chaotic') >= 6) return ghostResults.fafeng;
  if (get('anxious') >= 8 && get('lonely') >= 6) return ghostResults.danxiao;
  if (get('social') >= 6 && get('dark') >= 5 && get('funny') >= 4) return ghostResults.jiugui;
  if (get('social') >= 6 && get('romantic') >= 6) return ghostResults.segui;

  return pickResultByTopTag(top[0]?.tag ?? 'cyber', scores);
}
