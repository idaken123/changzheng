const longMarchData = [
    {
        id: 1,
        date: '1934年10月',
        event: '中央红军开始长征',
        location: '江西瑞金、于都一带',
        coordinates: [25.85, 115.67],
        army: 'red1',
        description: '第五次反“围剿”失利后，中央红军主力撤离中央革命根据地，开始战略转移。',
        significance: '长征由此展开，中国革命进入极其艰难而关键的转折阶段。',
        details: '1934年10月，中共中央、中革军委率中央红军主力和中央机关从江西瑞金、于都等地出发，踏上长征道路。出发时部队携带大量辎重，行军组织复杂，沿途需要连续突破国民党军封锁线。',
        stats: [
            { label: '出发时间', value: '1934年10月' },
            { label: '出发地区', value: '赣南' },
            { label: '性质', value: '战略转移' }
        ],
        quote: '红军不怕远征难，万水千山只等闲。'
    },
    {
        id: 2,
        date: '1934年11月-12月',
        event: '湘江战役',
        location: '广西全州、兴安、灌阳一带',
        coordinates: [25.60, 110.90],
        army: 'red1',
        description: '中央红军突破湘江封锁线，付出重大牺牲，是长征初期最惨烈的战役之一。',
        significance: '惨重损失促使党和红军重新思考军事指挥与战略方向，为遵义会议的召开提供了历史背景。',
        details: '湘江战役发生在中央红军突破第四道封锁线的过程中。部队在湘江两岸与优势敌军激战，最终渡过湘江，但兵力锐减。战役暴露了“左”倾冒险主义军事路线的严重危害。',
        stats: [
            { label: '战役阶段', value: '1934年末' },
            { label: '战场', value: '湘江两岸' },
            { label: '影响', value: '损失严重' }
        ],
        quote: '湘江之战，是长征途中极为沉重的一课。'
    },
    {
        id: 3,
        date: '1935年1月',
        event: '遵义会议',
        location: '贵州遵义',
        coordinates: [27.70, 106.92],
        army: 'red1',
        description: '中共中央政治局在遵义召开扩大会议，集中解决军事和组织问题。',
        significance: '遵义会议是党的历史上一个生死攸关的转折点，开始形成以毛泽东同志为主要代表的马克思主义正确路线在党中央的领导地位。',
        details: '1935年1月，中央政治局在遵义召开扩大会议。会议总结第五次反“围剿”和长征初期军事指挥上的经验教训，改组中央领导机构，事实上确立了毛泽东在党中央和红军中的领导地位。',
        stats: [
            { label: '召开时间', value: '1935年1月' },
            { label: '地点', value: '贵州遵义' },
            { label: '地位', value: '转折点' }
        ],
        quote: '遵义会议挽救了党、挽救了红军、挽救了中国革命。'
    },
    {
        id: 4,
        date: '1935年1月-3月',
        event: '四渡赤水',
        location: '贵州、四川、云南交界地区',
        coordinates: [28.45, 105.42],
        army: 'red1',
        description: '中央红军在赤水河流域机动作战，调动和迷惑敌军，摆脱重兵围追堵截。',
        significance: '四渡赤水体现了灵活机动的战略战术，是长征中极为精彩的军事行动。',
        details: '遵义会议后，中央红军围绕赤水河多次往返机动。通过声东击西、避实击虚，红军在强敌环伺中争取主动，最终改变被动局面。',
        stats: [
            { label: '区域', value: '赤水河流域' },
            { label: '特点', value: '机动作战' },
            { label: '结果', value: '摆脱围堵' }
        ],
        quote: '四渡赤水出奇兵。'
    },
    {
        id: 5,
        date: '1935年5月',
        event: '巧渡金沙江',
        location: '云南皎平渡一带',
        coordinates: [26.85, 102.73],
        army: 'red1',
        description: '中央红军渡过金沙江，跳出了国民党军的包围圈。',
        significance: '巧渡金沙江使红军取得战略转移中的关键主动，摆脱了被围歼的危险。',
        details: '1935年5月，红军在皎平渡等渡口组织渡江。部队利用少量船只连续输送，快速通过金沙江，使追敌扑空。',
        stats: [
            { label: '时间', value: '1935年5月' },
            { label: '地点', value: '皎平渡' },
            { label: '结果', value: '跳出包围' }
        ],
        quote: '金沙水拍云崖暖。'
    },
    {
        id: 6,
        date: '1935年5月',
        event: '飞夺泸定桥',
        location: '四川泸定',
        coordinates: [29.92, 102.23],
        army: 'red1',
        description: '红军突击队冒着枪火夺取泸定桥，为北上打开通道。',
        significance: '飞夺泸定桥成为长征中英勇顽强、敢打硬仗的典型事件。',
        details: '泸定桥横跨大渡河。红军先头部队急行军赶到泸定，突击队沿铁索向对岸冲击，在后续部队配合下夺占桥头，保障主力继续前进。',
        stats: [
            { label: '桥长', value: '约百米' },
            { label: '战斗方式', value: '突击夺桥' },
            { label: '意义', value: '打开通道' }
        ],
        quote: '大渡桥横铁索寒。'
    },
    {
        id: 7,
        date: '1935年6月',
        event: '翻越夹金山',
        location: '四川夹金山',
        coordinates: [30.67, 102.35],
        army: 'red1',
        description: '中央红军翻越长征中的第一座大雪山，面临严寒、缺氧和道路险峻等考验。',
        significance: '红军战胜恶劣自然环境，展现出坚定意志和组织纪律。',
        details: '夹金山海拔高、气候变化大。红军将士衣着单薄、粮食不足，仍克服严寒和高山反应，完成翻越。',
        stats: [
            { label: '地形', value: '高山雪岭' },
            { label: '困难', value: '严寒缺氧' },
            { label: '精神', value: '坚韧不拔' }
        ],
        quote: '更喜岷山千里雪，三军过后尽开颜。'
    },
    {
        id: 8,
        date: '1935年8月',
        event: '穿越草地',
        location: '川西北若尔盖草地',
        coordinates: [33.58, 102.96],
        army: 'red1',
        description: '红军穿越沼泽密布、气候恶劣、补给极端困难的草地。',
        significance: '过草地是长征中对生命、信念和集体互助的极限考验。',
        details: '草地表面看似平坦，实则沼泽密布，天气多变。红军在缺粮、缺衣、缺医药的情况下艰难前进，许多指战员牺牲在草地上。',
        stats: [
            { label: '区域', value: '川西北' },
            { label: '风险', value: '沼泽缺粮' },
            { label: '主题', value: '信念互助' }
        ],
        quote: '官兵一致同甘苦，革命理想高于天。'
    },
    {
        id: 9,
        date: '1935年9月',
        event: '突破腊子口',
        location: '甘肃迭部腊子口',
        coordinates: [34.15, 103.23],
        army: 'red1',
        description: '红军攻克天险腊子口，打开北上甘南、进入陕甘地区的通道。',
        significance: '突破腊子口为中央红军进入陕北奠定了军事条件。',
        details: '腊子口地势险要，两侧峭壁夹峙，敌军据险防守。红军采取正面牵制与侧翼攀援相结合的战术，最终突破天险。',
        stats: [
            { label: '地势', value: '峡谷天险' },
            { label: '战术', value: '正侧配合' },
            { label: '结果', value: '打开通道' }
        ],
        quote: '险隘挡不住北上的脚步。'
    },
    {
        id: 10,
        date: '1935年10月',
        event: '吴起镇会师',
        location: '陕北吴起镇',
        coordinates: [36.93, 108.18],
        army: 'red1',
        description: '中央红军到达陕北吴起镇，与陕北红军会师。',
        significance: '中央红军长征胜利结束，中国革命重心转向西北。',
        details: '1935年10月，中央红军到达陕北吴起镇，与陕北红军会师。红军找到了新的落脚点，为后来建立抗日民族统一战线和开创新局面创造条件。',
        stats: [
            { label: '时间', value: '1935年10月' },
            { label: '地点', value: '陕北吴起' },
            { label: '意义', value: '主力到达陕北' }
        ],
        quote: '到陕北去，开辟新的革命根据地。'
    },
    {
        id: 11,
        date: '1936年10月',
        event: '三大主力会宁会师',
        location: '甘肃会宁、将台堡一带',
        coordinates: [35.70, 105.08],
        army: 'red1',
        description: '红一、红二、红四方面军三大主力胜利会师，长征胜利结束。',
        significance: '三大主力会师标志着红军长征胜利结束，保存和锻炼了中国革命的骨干力量。',
        details: '1936年10月，红一、红二、红四方面军在甘肃会宁、宁夏将台堡一带先后会师。长征保存了党和红军的基干力量，也铸就了伟大的长征精神。',
        stats: [
            { label: '时间', value: '1936年10月' },
            { label: '地点', value: '会宁等地' },
            { label: '结果', value: '胜利结束' }
        ],
        quote: '长征是宣言书，长征是宣传队，长征是播种机。'
    }
];

const longMarchStories = [
    {
        id: 1,
        title: '半条被子',
        tag: '军民情谊',
        location: '湖南汝城沙洲村',
        cover: 'pictures/story-01-half-quilt.png',
        excerpt: '三名女红军借宿徐解秀家，临别时把仅有的一条被子剪下一半留给群众。',
        content: '1934年11月，红军长征途经湖南汝城沙洲村，村民徐解秀看到三名衣着单薄的女红军无处落脚，便主动把她们请到自己家暂住。徐家一贫如洗，连一床完整的被子都没有，只能靠稻草和破旧衣物御寒。女红军们看在眼里，记在心里，与徐解秀同吃同住，帮她做家务、照顾孩子，结下了深厚情谊。分别之际，三名女红军决定把自己唯一的一床棉被留给徐解秀，可她坚决不肯收。争执不下时，一位女红军拿出剪刀，将被子剪成两半，把其中一半塞到徐解秀手中，温柔地说：“等革命胜利了，我们一定送你一床新被子！”半条被子虽小，却承载着红军与百姓同甘共苦、血脉相连的深情，成为军民鱼水情最动人的见证。'
    },
    {
        id: 2,
        title: '彝海结盟',
        tag: '民族团结',
        location: '四川冕宁彝海',
        cover: 'pictures/story-02-yihai-alliance.png',
        excerpt: '刘伯承与彝族首领小叶丹歃血为盟，为红军顺利通过彝区创造条件。',
        content: '1935年5月，中央红军挺进大凉山彝族聚居区，当地彝族群众因长期受国民党压迫，对陌生军队充满戒备。红军严格执行民族政策，不进村寨、不拿群众一针一线，耐心向彝族同胞宣讲北上抗日的主张。红军总参谋长刘伯承亲自与彝族果基家支首领小叶丹会面，两人一见如故，坦诚交流。为表达信任与团结，双方决定在彝海边举行结盟仪式：以水代酒，歃血为盟，结为兄弟。小叶丹主动担任红军向导，带领队伍安全通过彝区，还选派彝族青年加入红军。彝海结盟不仅为红军北上扫清了障碍，更谱写了民族团结、互信互助的光辉篇章。'
    },
    {
        id: 3,
        title: '七根火柴',
        tag: '理想信念',
        location: '川西北草地',
        cover: 'pictures/story-03-seven-matches.png',
        excerpt: '生命垂危的战士把党证和七根火柴交给战友，把希望留给队伍。',
        content: '红军穿越川西北草地时，暴雨连绵、寒气刺骨，生火取暖、煮食成了最迫切的需求。一名普通红军战士在行军中不慎陷入沼泽，身体严重冻伤，生命垂危。他用尽最后一丝力气，从贴身的衣袋里掏出一个用油纸仔细包裹的小包，里面是七根干燥的火柴和一本鲜红的党证。他紧紧拉住路过战友的手，颤抖着说：“这是组织的东西，一定要交给部队……火柴能救大家的命。”说完便永远闭上了眼睛。七根火柴微不足道，却在绝境中化作希望的火种，见证了红军战士至死不渝的革命信仰和舍己为集体的崇高精神。'
    },
    {
        id: 4,
        title: '金色的鱼钩',
        tag: '战友情深',
        location: '草地行军途中',
        cover: 'pictures/story-04-golden-fishhook.png',
        excerpt: '老班长用鱼钩为伤病员寻找食物，自己却把困难留给了自己。',
        content: '长征过草地时，一位年近四十的老班长奉命照顾三名生病的小战士。草地荒无人烟，粮食断绝，饥饿和寒冷时刻威胁着生命。老班长把仅有的干粮全部分给小战士，自己却偷偷啃食草根、树皮充饥。为了让伤员补充营养，他用缝衣针弯成一枚鱼钩，趁着休息时悄悄到河边钓鱼。钓来的小鱼他全部煮给小战士吃，自己却一口不尝，只喝剩下的菜汤。日复一日，老班长的身体越来越虚弱，最终在即将走出草地时，因过度劳累和饥饿永远倒下了。那枚普通的鱼钩，虽锈迹斑斑，却闪耀着舍己为人、关爱战友的金色光芒，成为长征精神的永恒象征。'
    },
    {
        id: 5,
        title: '飞夺泸定桥',
        tag: '英勇突击',
        location: '四川泸定',
        cover: 'pictures/story-05-luding-bridge.png',
        excerpt: '突击队冒着枪火攀着铁索冲向对岸，夺取北上通道。',
        content: '1935年5月，中央红军突破大渡河天险的关键一战打响。泸定桥横跨大渡河，是红军北上的唯一通道，国民党军队早已拆去桥上木板，只留下十三根寒光闪闪的铁索，还在对岸构筑工事、架起机枪，妄图把红军消灭在桥头。面对天险和强敌，22名红军勇士组成突击队，主动请缨冲锋。他们腰挎手榴弹、手持冲锋枪，冒着密集的炮火，徒手攀着滚烫的铁索向对岸匍匐前进。身后的战士们一边铺木板，一边火力掩护。勇士们无惧生死，冲破枪林弹雨，率先冲上桥头，与敌军展开肉搏战，最终成功夺取泸定桥。飞夺泸定桥创造了军事史上的奇迹，彰显了红军不怕牺牲、勇往直前的英雄气概。'
    },
    {
        id: 6,
        title: '陈树湘断肠明志',
        tag: '忠诚牺牲',
        location: '湘江战役后',
        cover: 'pictures/story-06-chen-shuxiang.png',
        excerpt: '红三十四师师长陈树湘在掩护主力转移后负伤被俘，宁死不屈。',
        content: '1934年湘江战役中，红三十四师担任全军后卫，奉命掩护中央机关和主力部队渡江。面对数十倍于己的国民党军队疯狂进攻，全师将士浴血奋战，坚守阵地数日，用血肉之躯挡住敌人攻势，最终弹尽粮绝，大部分战士壮烈牺牲。师长陈树湘在激战中腹部中弹，身负重伤，不幸被俘。敌人欣喜若狂，准备把他押去邀功请赏。在押送途中，陈树湘为了坚守革命气节，趁敌人不备，强忍剧痛，亲手绞断自己的肠子，壮烈牺牲，年仅29岁。他用生命践行了“为苏维埃流尽最后一滴血”的誓言，诠释了共产党人绝对忠诚、宁死不屈的英雄本色。'
    },
    {
        id: 7,
        title: '过雪山草地',
        tag: '艰苦卓绝',
        location: '川西北',
        cover: 'pictures/story-07-grassland.jpg',
        excerpt: '红军在严寒、缺氧、缺粮中翻雪山、过草地，完成极限行军。',
        content: '长征途中，川西北的雪山草地是最艰险的征程。夹金山等大雪山终年积雪、空气稀薄、气温低至零下几十摄氏度，红军战士大多衣着单薄、脚穿草鞋，很多人在攀登中被严寒冻伤，甚至永远长眠在雪山上。紧接着的茫茫草地，更是死亡陷阱：沼泽遍布、荒无人烟，稍有不慎就会陷入泥潭无法脱身。战士们没有粮食，就吃野菜、啃树皮、煮皮带充饥；没有帐篷，就露天席地而卧；没有道路，就手拉手艰难前行。在极端恶劣的环境下，红军战士靠着坚定的理想信念、钢铁般的纪律和战友间的相互扶持，翻越了一座座雪山，走出了千里沼泽，完成了人类历史上罕见的极限行军，铸就了不怕任何艰难险阻的长征精神。'
    },
    {
        id: 8,
        title: '一块门板的借据',
        tag: '纪律作风',
        location: '藏区草地',
        cover: 'pictures/story-08-door-plank-receipt.png',
        excerpt: '红军借用群众门板铺路，留下借据，体现严明纪律。',
        content: '红军长征进入藏区草地时，道路泥泞不堪、沼泽密布，部队行军和物资运输极为困难。为了搭建临时通道、保障行军安全，红军需要借用群众的木板、门板铺路。部队严格执行“三大纪律八项注意”，绝不擅自取用群众财物。每借用一块门板、一根木料，战士们都会认真登记，留下清晰的借据，写明借用物品、数量和归还承诺，还会把借据放在群众家中显眼的位置或交给当地族长保管。部队离开前，会尽力归还借用物品，若有损坏，会用仅有的物资折价赔偿。当地藏族群众从最初的戒备，到后来被红军严明的纪律和诚信的作风深深感动，主动拿出木料、粮食支援红军。一块门板、一张借据，生动展现了红军纪律严明、爱护群众、诚信守约的优良作风。'
    }
];

const mediaResources = {
    images: [
        {
            id: 1,
            title: '延安军民生活',
            location: '延安',
            description: '历史真实影像资料，呈现延安时期军民生活场景。',
            cover: 'pictures/media-01-yanan-life.png',
            url: 'https://www.bilibili.com/video/BV1uw4m1U7Gv/?spm_id_from=333.337.search-card.all.click&vd_source=f879f805f24540a10cb4c48adf5a1ab1',
            source: 'Bilibili'
        },
        {
            id: 2,
            title: '毛泽东主席在延安',
            location: '延安',
            description: '毛泽东主席在延安时期的历史影像资料。',
            cover: 'pictures/media-02-mao-yanan.png',
            url: 'https://www.bilibili.com/video/BV1XWPLzdEtj/?spm_id_from=333.337.search-card.all.click&vd_source=f879f805f24540a10cb4c48adf5a1ab1',
            source: 'Bilibili'
        },
        {
            id: 3,
            title: '斯诺镜头下的长征',
            location: '陕北与长征相关地区',
            description: '以斯诺影像视角呈现红军与长征相关历史画面。',
            cover: 'pictures/media-03-snow-long-march.png',
            url: 'https://www.bilibili.com/video/BV1XNtHziEMu/?spm_id_from=333.337.search-card.all.click&vd_source=f879f805f24540a10cb4c48adf5a1ab1',
            source: 'Bilibili'
        },
        {
            id: 4,
            title: '红军长征影像记录',
            location: '长征沿线',
            description: '红军长征相关历史影像记录资料。',
            cover: 'pictures/media-04-long-march-footage.png',
            url: 'https://www.bilibili.com/video/BV1k8411n7Yz?spm_id_from=333.788.videopod.sections&vd_source=f879f805f24540a10cb4c48adf5a1ab1',
            source: 'Bilibili'
        }
    ],
    videos: [
        {
            id: 1,
            title: '纪录片《长征》',
            duration: '专题视频',
            description: '央视网长征相关纪录片与专题视频入口。',
            url: 'https://search.cctv.com/search.php?qtext=%E9%95%BF%E5%BE%81%E7%BA%AA%E5%BD%95%E7%89%87&type=video',
            source: '央视网视频搜索'
        },
        {
            id: 2,
            title: '共产党员网：长征专题视频',
            duration: '学习专题',
            description: '共产党员网收录的长征主题学习视频与党史资料。',
            url: 'https://so.12371.cn/cse/search?q=%E9%95%BF%E5%BE%81%20%E8%A7%86%E9%A2%91&s=2279282705053495348',
            source: '共产党员网搜索'
        },
        {
            id: 3,
            title: '新华社：长征相关报道',
            duration: '新闻与专题',
            description: '新华社关于长征纪念、史实解读和影像资料的报道入口。',
            url: 'https://so.news.cn/#search/0/%E9%95%BF%E5%BE%81/1/',
            source: '新华社搜索'
        }
    ],
    audios: [
        {
            id: 1,
            title: '七律·长征 朗诵与赏析',
            author: '党史学习教育公开资料',
            description: '用于课堂朗诵、诗词赏析和长征精神导入。',
            url: 'https://so.12371.cn/cse/search?q=%E4%B8%83%E5%BE%8B%20%E9%95%BF%E5%BE%81%20%E6%9C%97%E8%AF%B5&s=2279282705053495348',
            source: '共产党员网搜索'
        },
        {
            id: 2,
            title: '长征组歌相关音视频资料',
            author: '中央广播电视总台等公开平台',
            description: '适合查找《长征组歌》演唱、解说和教学素材。',
            url: 'https://search.cctv.com/search.php?qtext=%E9%95%BF%E5%BE%81%E7%BB%84%E6%AD%8C&type=video',
            source: '央视网搜索'
        },
        {
            id: 3,
            title: '长征故事音频检索',
            author: '人民网公开报道',
            description: '用于补充长征故事朗读、讲述类音频素材。',
            url: 'https://search.people.cn/s?keyword=%E9%95%BF%E5%BE%81%20%E9%9F%B3%E9%A2%91',
            source: '人民网搜索'
        }
    ]
};

const battleNarrations = [
    {
        id: 1,
        title: '湘江战役',
        time: '1934年11月-12月',
        location: '广西全州、兴安、灌阳一带',
        summary: '中央红军突破湘江封锁线，是长征初期最惨烈的战役之一。',
        link: 'https://www.bilibili.com/video/BV1YA411i72J/?spm_id_from=333.337.search-card.all.click'
    },
    {
        id: 2,
        title: '四渡赤水',
        time: '1935年1月-3月',
        location: '赤水河流域',
        summary: '红军通过灵活机动的作战调动敌军，改变长征初期被动局面。',
        link: 'https://www.bilibili.com/video/BV18A411e7Qj/?spm_id_from=333.337.search-card.all.click&vd_source=f879f805f24540a10cb4c48adf5a1ab1'
    },
    {
        id: 3,
        title: '巧夺金沙江',
        time: '1935年5月',
        location: '云南皎平渡一带',
        summary: '中央红军渡过金沙江，跳出敌军包围圈，取得战略主动。',
        link: 'https://www.bilibili.com/video/BV1BD4y1U7ge/?spm_id_from=333.337.search-card.all.click'
    },
    {
        id: 4,
        title: '飞夺泸定桥',
        time: '1935年5月',
        location: '四川泸定',
        summary: '红军突击队冒着枪火夺取泸定桥，为主力北上打开通道。',
        link: 'https://www.bilibili.com/video/BV1VD4y1m7P7/?spm_id_from=333.337.search-card.all.click'
    },
    {
        id: 5,
        title: '突破腊子口',
        time: '1935年9月',
        location: '甘肃迭部',
        summary: '红军攻克天险腊子口，打开进入陕甘地区的通道。',
        link: 'https://www.bilibili.com/video/BV1gA411E7T2/?spm_id_from=333.337.search-card.all.click'
    }
];

const quizQuestions = [
    {
        question: '中央红军长征开始于哪一年？',
        options: ['1934年', '1935年', '1936年', '1937年'],
        answer: 0,
        explanation: '中央红军主力于1934年10月从江西瑞金、于都等地出发，开始长征。'
    },
    {
        question: '遵义会议在党史上的重要地位通常被概括为？',
        options: ['生死攸关的转折点', '土地革命的起点', '抗战胜利的标志', '新中国成立的准备会议'],
        answer: 0,
        explanation: '遵义会议集中解决军事和组织问题，是党的历史上一个生死攸关的转折点。'
    },
    {
        question: '“金沙水拍云崖暖，大渡桥横铁索寒”涉及哪两处长征节点？',
        options: ['金沙江与泸定桥', '湘江与遵义', '腊子口与吴起镇', '夹金山与会宁'],
        answer: 0,
        explanation: '诗句分别对应巧渡金沙江和飞夺泸定桥。'
    },
    {
        question: '三大主力会师、长征胜利结束的时间是？',
        options: ['1936年10月', '1935年10月', '1934年12月', '1937年7月'],
        answer: 0,
        explanation: '1936年10月，红一、红二、红四方面军在会宁、将台堡一带会师。'
    },
    {
        question: '“半条被子”故事主要体现了什么？',
        options: ['军民情谊', '军事奇袭', '山地侦察', '通信保障'],
        answer: 0,
        explanation: '三名女红军把半条被子留给群众，体现了共产党人与人民群众同甘共苦。'
    },
    {
        question: '四渡赤水最能体现红军怎样的军事特点？',
        options: ['灵活机动', '固定阵地防御', '海上作战', '空中突袭'],
        answer: 0,
        explanation: '四渡赤水通过机动作战调动敌军，是长征中高超军事指挥的典型。'
    }
];

const armyColors = {
    red1: { color: '#b91c1c', name: '红一方面军' },
    red2: { color: '#d97706', name: '红二方面军' },
    red4: { color: '#2563eb', name: '红四方面军' },
    red25: { color: '#059669', name: '红25军' }
};

const armyRoutes = {
    red1: longMarchData.map(item => item.coordinates),
    red2: [
        [26.57, 109.65],
        [27.35, 109.30],
        [27.82, 108.52],
        [28.41, 106.75],
        [28.85, 105.55],
        [29.45, 104.85],
        [30.05, 103.75],
        [31.05, 102.85],
        [32.35, 102.35],
        [33.45, 103.25],
        [34.55, 104.15],
        [35.70, 105.08]
    ],
    red4: [
        [32.05, 107.85],
        [31.45, 106.55],
        [30.85, 105.75],
        [30.15, 104.65],
        [29.75, 103.55],
        [29.45, 102.75],
        [29.15, 102.15],
        [28.85, 101.55],
        [31.85, 101.85],
        [32.95, 102.35],
        [33.85, 102.95],
        [34.65, 103.65],
        [35.70, 105.08]
    ],
    red25: [
        [33.05, 114.35],
        [33.75, 113.15],
        [34.45, 112.05],
        [34.85, 110.75],
        [35.25, 109.65],
        [35.75, 108.95],
        [36.55, 108.25]
    ]
};
