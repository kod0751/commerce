import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getRandom = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const sneakers = [
  {
    name: 'Sneakers 1',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Sneakers!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220304_142%2F1646370635622XhtWM_JPEG%2F47506415345958254_1940472648.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Sneakers 2',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Sneakers!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220925_100%2F1664070136497imIlj_JPEG%2F65205970317930798_1684824693.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Sneakers 3',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Sneakers!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220225_29%2F1645778506169JT3dD_JPEG%2F46914348860333088_806930291.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Sneakers 4',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Sneakers!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220709_33%2F1657328203880FarUa_JPEG%2F58464031704866680_383022353.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Sneakers 5',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Sneakers!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220304_195%2F1646370707043jGeKJ_JPEG%2F47506486763867687_669575347.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Sneakers 6',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Sneakers!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220315_270%2F1647327857200Y0j22_JPEG%2F48463702913456454_364046822.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Sneakers 7',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Sneakers!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220222_93%2F1645538411736qitAK_JPEG%2F46674300405103997_85354140.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Sneakers 8',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Sneakers!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201214_83%2F1607912914999jBQfj_JPEG%2F10037_1398190_4941669.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Sneakers 9',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Sneakers!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220304_37%2F16463706354864na9b_JPEG%2F47506415209684597_23653229.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Sneakers 10',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Sneakers!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_3603522%2F36035227803.20221124060014.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
];

const tShirt = [
  {
    name: 'T-Shirt 1',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a T-Shirt!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220119_215%2F1642577776483FpjHg_JPEG%2FS20220119123401343861e786a9b689d_4.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'T-Shirt 2',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a T-Shirt!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220119_169%2F1642577781180g0kBL_JPEG%2FS20220119123454343861e786de7791b_2.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'T-Shirt 3',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a T-Shirt!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220127_22%2F1643288695372004W7_PNG%2F44424529178970645_494483790.png&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'T-Shirt 4',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a T-Shirt!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220217_226%2F1645072547568X2vT1_JPEG%2F145049_mainiamge4.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'T-Shirt 5',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a T-Shirt!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220401_78%2F1648739506556OoTOl_JPEG%2F49875402292841368_1467992357.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'T-Shirt 6',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a T-Shirt!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220421_140%2F1650508422116ajqEv_JPEG%2F51644320817109298_701572209.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'T-Shirt 7',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a T-Shirt!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201001_241%2F1601556180311Ko8XQ_JPEG%2F2692008135754389_1814622947.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'T-Shirt 8',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a T-Shirt!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200821_163%2F1597972445329QtPft_JPEG%2F35335833829349641_333914438.JPG&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'T-Shirt 9',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a T-Shirt!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200307_150%2F1583565284819If9Mg_JPEG%2F20926827424741884_1959295094.JPG&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'T-Shirt 10',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a T-Shirt!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20221010_162%2F1665382641396tkgPd_JPEG%2F66518540101503779_896418374.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
];

const pants = [
  {
    name: 'Pants 1',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Pants!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3581507%2F35815079427.20221113162405.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Pants 2',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Pants!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3514771%2F35147715885.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Pants 3',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Pants!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210804_210%2F1628065665216XKFcY_JPEG%2F210804_610a4f76c15e7-1.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Pants 4',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Pants!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211007_20%2F1633545827205HxHBw_JPEG%2F34681715919018193_602183476.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Pants 5',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Pants!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220610_217%2F16548443164051s72t_JPEG%2F62308841235593847_1147595980.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Pants 6',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Pants!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220803_268%2F1659516227292VDF29_JPEG%2F60652011001854002_876030552.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Pants 7',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Pants!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200820_243%2F1597934291725Ylx6b_JPEG%2F35294126255696766_123676904.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Pants 8',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Pants!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200406_255%2F1586181728925MxFGH_JPEG%2F23544062490528689_1579576927.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Pants 9',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Pants!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20221020_62%2F1666197743858XCyy5_JPEG%2F67333571672539773_1133232348.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Pants 10',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Pants!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220922_294%2F1663825373226uk5Sz_JPEG%2F71290083347902702_1211703035.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
];

const cap = [
  {
    name: 'Cap 1',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Cap!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210811_56%2F1628652269422sRQHC_JPEG%2FS20210809212611274261111ee3346b3_2.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Cap 2',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Cap!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210811_92%2F1628652267052ahdd3_JPEG%2FS20210809212730274261111f321cc1a_4.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Cap 3',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Cap!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220625_161%2F1656128963213KkodM_JPEG%2F57264797029214941_290723779.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Cap 4',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Cap!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210811_172%2F1628608213195lJw2j_JPEG%2FS2021080920454827426111156c949ce_2.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Cap 5',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Cap!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210811_65%2F1628652275885RYCnv_JPEG%2FS20210809212737274261111f39d8849_6.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Cap 6',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Cap!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210811_269%2F1628652264140u2Hh5_JPEG%2FS20210809212545274261111ec915dd0_6.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Cap 7',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Cap!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211114_17%2F16368856337045I3dw_JPEG%2F38021522413898851_1446737175.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Cap 8',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Cap!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_2599904%2F25999048741.20210215190400.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Cap 9',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Cap!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200818_17%2F15977584691087XGB9_JPEG%2F35120802705618902_1165294764.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Cap 10',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Cap!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210811_131%2F1628652276353OVCPf_JPEG%2FS20210809212904274261111f902c836_2.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
];

const hoodie = [
  {
    name: 'Hoodie 1',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Hoodie!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220918_48%2F1663455859375tfu9g_JPEG%2F64591693195888032_154801849.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Hoodie 2',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Hoodie!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220918_162%2F1663454931042AipB5_JPEG%2F64590764841458596_569392890.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Hoodie 3',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Hoodie!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200402_1%2F15858256258131uOC1_JPEG%2F7wq8y0l_20204211164853296.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Hoodie 4',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Hoodie!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20221004_85%2F16648544679836Ypod_JPEG%2F65990301758827315_1825003085.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Hoodie 5',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Hoodie!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20221004_227%2F1664854407613vWD6u_JPEG%2F65990296253585589_582147953.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Hoodie 6',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Hoodie!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20221006_113%2F1665054969280KkVXH_JPEG%2F6cp1q0o_202210611734727667.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Hoodie 7',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Hoodie!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220323_18%2F1648024741025AO9h3_JPEG%2FS20220320225823521623732ff83ffe_3.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Hoodie 8',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Hoodie!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20221020_266%2F1666246328949tT92Q_JPEG%2F11989997773471050_796011292.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Hoodie 9',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Hoodie!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_3561297%2F35612976453.20221103065027.jpg&type=a340',
    price: getRandom(30000, 10000),
  },
  {
    name: 'Hoodie 10',
    contents:
      '{"blocks":[{"key":"fngrr","text":"This is a Hoodie!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220918_255%2F1663468128780GRf9O_JPEG%2F64604027469623183_653348399.jpeg&type=a340',
    price: getRandom(30000, 10000),
  },
];

const productData: Prisma.productsCreateInput[] = [
  ...sneakers,
  ...tShirt,
  ...pants,
  ...cap,
  ...hoodie,
];

async function main() {
  const CATEGORIES = ['SENAKERS', 'T-SHIRT', 'PANTS', 'CAP', 'HOODIE'];
  CATEGORIES.forEach(async (c, i) => {
    const product = await prisma.categories.upsert({
      where: {
        id: i + 1,
      },
      update: {
        name: c,
      },
      create: {
        name: c,
      },
    });
    console.log(`Upsert category id: ${product.id}`);
  });

  await prisma.products.deleteMany({});

  for (const p of productData) {
    const product = await prisma.products.create({
      data: p,
    });
    console.log(`Create id: ${product.id}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
