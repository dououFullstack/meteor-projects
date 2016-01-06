if (Projects.find().count() === 0) {

  var logoArr = [
    "http://7xojrr.com1.z0.glb.clouddn.com/777533757810423084.jpg",
    "http://7xojrr.com1.z0.glb.clouddn.com/533244139143231816.jpg",
    "http://7xojrr.com1.z0.glb.clouddn.com/201350956296080038.jpg",
    "http://7xojrr.com1.z0.glb.clouddn.com/260356084249990250.jpg",
    "http://7xojrr.com1.z0.glb.clouddn.com/613967670368883248.jpg",
    "http://7xojrr.com1.z0.glb.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20151224170931.png",
    "http://7xojrr.com1.z0.glb.clouddn.com/DNA%E5%88%9B%E4%B8%9A%E5%9F%BA%E9%87%91logo2_%E5%89%AF%E6%9C%AC.png",
    "http://7xojrr.com1.z0.glb.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20151224170511.png",
    "http://7xojrr.com1.z0.glb.clouddn.com/848048680000936592.jpg",
    "http://7xojrr.com1.z0.glb.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20151224170102.png",
  ];

  var nameArr = [
    '高考圈',
    '八度阳光',
    'AOD 3D打印',
    '彩丞科技',
    '方舟万宝',
    '易净星',
    '昊一航空无人机',
    '复朗施',
    '燃点运动',
    '艺妙神州',
  ];

  var descArr = [
    '高考圈是一个为中学生提供更接地气的升学服务及择校规划在线教育公司。高考圈专注于构建高中与大学之间的桥梁，汇聚国内外上千所高校大学生及专家，提供最优质、最实用的咨询服务、问答服务以及高考志愿填报服务。项目主要用户群是高中生及家长； 我们汇聚国内外上千所高校大学生及专家，结合互联网大数据和人工智能技术，为高中生提供升学及择校服务。',
    '本项目基于已设计成功的“家用新型阵列式热电联供聚光太阳能系统”，该系统已取得国家专利。本项目还涉及可以穿戴的掌上微电网系统，主要包括太阳能背包、太阳能手机后盖等。家用新型阵列式热电联供聚光太阳能系统外形美观，平均每天发电8千瓦时，并提供热水和采暖；太阳能背包解决了外出的旅行者的充电问题；太阳能后盖能够延长续航时间30%左右。面向普通家庭和智能手机用户。',
    "AOD由清华大学博士、硕士团队创建，清华大学x-lab和清华科技园共同孵化，专注于智能3D打印机的研发以及综合性3D打印教育解决方案的提供。AOD致力于成为中国创新教育先行者以及科技教育的推动者。2013年12月15日，AOD在清华大学召开产品发布会，正式推出自主研发的全球首款智能3D打印机，随后创下一日内众筹近500万元的国内记录。目前AOD已获中国青年天使会逾千万元天使投资，获得国家科技部创新基金、清华大学TOP10全校创新奖、新华都商学院创业大赛百万金奖等多项荣誉，多次受到刘延东、刘云山等国家领导人、清华大学领导接见，受到中央电视台CCTV2\CCTV10\CCTV13、中央人民广播电台、人民日报、参考消息、新浪、腾讯等数百家主流媒体广泛报道。\n AOD 1.0   做产品：做 3D 打印机，卖 3D 打印机 \n AOD 2.0   多元化：卖 3D 打印行业解决方案\n AOD 3.0   做垂直：聚焦于 3D 打印创新教育（中小学B端客户)\n AOD 4.0   做性感模式：小悟空，全球一亿儿童的k12科技学习社区",
    '彩丞科技是世界领先的3D光学材料及其应用技术开发商，是全球少数能够从事3D技术基础研究、3D光学材料生产、3D图像设计完稿与数据处理的新锐高科技公司，经过多年的不断积累与发展，在该技术领域已处于世界领先水平。\n彩丞依托完全自主专利技术，现已开发出了多款开创性的3D光学产品，广泛应用于包装、防伪技术、广告、装饰材料及文教用品等多个领域。不仅如此，我们还帮助越来越多的企业，以彩丞的3D材料技术作为基础，不断开发其所在行业的创新产品与应用。\n 目前彩丞正致力于第三代3D光学材料及其应用技术的研究与开发。',
    '“方舟万宝” 是全球首款能同时以实时、无扰、连续的方式，对人体重要生理参数手腕检测—云端存贮分析响应的系统。其中，该系统的硬件部分是轻触佩戴在手腕上的微型仪器，拥有17大项独有发明技术和5工艺设计。 “方舟万宝”对人体四大生理体征参数及血糖、血氧的连续、实时、无扰监测，数据不仅仅可以与智能手机相连，还可借助云存储技术将监测数据通过云端进行存储和分析。 “方舟万宝”作未来移动互联新的入口，最大的潜力不在于硬件本身，而在于通过硬件粘住客户，在于硬件背后收集到的医疗云端“大数据”，以及由此衍生出的商业模式：利用医疗云端“大数据”为用户提供个性化的远程服务、为企业进行精准的广告投放、为临床外包机构提供研发服务、为医院提供自动分诊服务、为医生提供应用性极强的再教育服务、以及和保险公司合作绑定客户群。',
    '北京易净星科技有限公司孕育于清华大学，正式成立于2014年3月，是一家集研发、定制和销售为一体的新材料公司。目前旗下有易净星和朗视星两大主要业务。易净星系列产品全面覆盖（超）疏水纳米材料，具有防水、防尘、防油等功效。朗视星系列产品 针对超亲水材料，具有防雾清洁功效，产品可广泛应用于电力、建筑、汽车、光伏等领域。易净星拥有一支高素质的团队，核心团队成员均毕业于清华、北大和中科院三所国内顶尖学府。易净星坚持“绿色生产，环保使用”的原则，致力于将前沿科技成果产业化，创造出更加安全、环保、高效的新型材料产品，用5-10年的时间努力发展成为一家世界领先的新材料公司。',
    '北京昊一航空科技有限公司是一家崇尚创新的高科技企业，目前储备的专利已有30多个，2015年5月份估值6700万元，已获得赛伯乐、云研社、清华校友创业基金、清华x-lab四家知名创投机构的投资，同时获得了联想、红杉、和君资本、清华启迪等知名投资机构关注。',
    '复朗施纳米科技（Flance  Nanotechnology）于2013 年8 月由法国留学生崔建勋创办。公司核心价值，即研发并生产世界第一台工业化稳定量产的金属纳米机，突破金属纳米材料领域多年来产量瓶颈，具里程碑式意义，国际领先、国内唯一。项目参加江苏南通“智慧城市”国际创业大赛，荣获二等奖。目前已经完成与江苏南通产业化落地与生产基金建立的前期谈判，建立“复朗施—南通创 源---南通经济开发区”三方合作框架。',
    '燃点运动致力于通过互联网的方式改造运动产业，希望能促进全民运动。 初期通过搭建运动O2O平台，聚集教练资源，为用户提供量身定制的上门服务。 后期将扩大到运动社区，增加问答、社交、运动用品电商等服务。已合作情况：, 企业：百度、滴滴、优办、住百家、涂鸦科技等创业空间：优客工场、腾讯众创空间、启迪孵化器、她本营、纳什空间、无界空间、HX加速器等装备：供应商UA、Lululemon、JoinFit, 健康食品：纯悦生活、乐纯、蜂二姨, 场馆：火动吧、小熊快跑、超级猩猩, 医疗平台：美中宜和、育果医生, 女性平台：容么么、妳的、私席, 其它平台：凤凰网、嘀一科技、zank、到位、请出价',
    '为广大癌症患者提供安全有效的治疗方案：CAR-T，以血液肿瘤为核心的CAR-T产品线。项目有多项自主创新和专利授权，完整的技术体系，对癌细胞的杀伤率相对其他竞争对手有显著优势。项目目前即将启动临床试验。',
  ];

  var typesArr = [
    '教育',
    '节能环保 ',
    '科技产品',
    '新材料',
    '穿戴设备',
    '新材料',
    '人工智能（机器人、无人机）',
    '新材料',
    '互联网与信息技术',
    '医疗健康',
  ];

  var roundsArr = [
    '天使轮',
    '天使轮',
    'A轮',
    'A轮',
    'A轮',
    'A轮',
    'Pre-A轮',
    'A轮',
    'A轮',
    'A轮',
  ];

  var addArr = [
    '北京',
    '北京海淀清华同方科技大厦d座503',
    '北京市海淀区双清路学研大厦B座700',
    '上海市松江区洞业路999号2栋',
    '北京',
    '北京市海淀区中关村北大街123号科方孵化器四楼2418',
    '北京',
    '北京市海淀区三虎桥南路17号院（北院）6号楼',
    '北京',
    '北京市昌平区生命科学园生命园路8号',
  ];

  var teamArr = [
    '15人',
    '15人',
    '高考100人圈',
    '100人',
    '20人',
    '20人',
    '20人',
    '30人',
    '30人及以上',
    '11人',
  ];

  for (var index = 0; index < logoArr.length; index++) {
    var element = logoArr[index];
    var fileObj = new FS.File();
    console.log(element + " downloading ...");
    var result = request.getSync(element, {encoding: null, rejectUnauthorized: false});
    var buffer = result.body;
    console.log(result.response.headers);
    fileObj.attachData(buffer, {type: result.response.headers['content-type']});
    var logo = Pictures.insert(fileObj);

    Meteor.call("insertData",
      nameArr[index],
      descArr[index],
      typesArr[index],
      roundsArr[index],
      addArr[index],
      teamArr[index],
      logo._id
    );
  }
}
