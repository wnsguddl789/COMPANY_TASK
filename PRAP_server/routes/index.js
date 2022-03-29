var express = require('express');
var router = express.Router();
const ALL = [
  {
    id: 1,
    comp_src: null,
    img_src: 'https://dbm9jhyrx0h6k.cloudfront.net/service/1643001563143-8c31e5b6-3abd-4860-a6f6-db345d0c951d.png',
    tag: ['조각투자'],
    value: '17억',
    isOpen: false,
    isUp: false,
    isInvest: true,
    OpenDate: '2월 18일',
    content: 'Angel',
  },
  {
    id: 1,
    comp_src: null,
    img_src:
      'https://kream-phinf.pstatic.net/MjAyMTA5MTdfNTgg/MDAxNjMxODQ5NjQ2MDQ2.cW8a0oX0RTWNHU-IJ2tIqRatPkpPIILlC0urxaungJIg.dUUsVMlldknPQ3yCz3yI-c4GnOComGVCmc1PSJH5_S0g.PNG/a_63ed7e3eb3a14d0e835c7b48e6033676.png',
    tag: ['스니커즈 리셀'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: false,
    stock: [
      {
        label: null,
        value: 719000,
      },
      {
        label: null,
        value: null,
      },
      {
        label: null,
        value: null,
      },
    ],
    content: '나이키 x 사카이 x 장 폴 고티에 베이퍼와플 블랙 화이트',
  },
  {
    id: 1,
    comp_src: null,
    img_src:
      'https://prap-assets.s3.ap-northeast-2.amazonaws.com/unlistedLogo/%E1%84%87%E1%85%B5%E1%84%87%E1%85%A1%E1%84%85%E1%85%B5%E1%84%91%E1%85%A5%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1.png',
    tag: ['비상장주식'],
    value: '17억',
    isOpen: true,
    isUp: true,
    isInvest: false,
    stock: [
      {
        label: 10,
        value: 110000,
      },
      {
        label: 54,
        value: 111400,
      },
      {
        label: 8,
        value: 111500,
      },
    ],
    content: '비바리퍼블리카',
  },
];

const NFT = [
  {
    id: 1,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/SRLogo.png',
    img_src: 'https://ipfs.pixura.io/ipfs/QmY9kfC3qqmnN97WHfZkC9tmMXNDoCJN3UfkVXkhkj8PVc/MarcThumbnail1.jpg',
    content: 'Marc-O-Matic - The Garden of Worldly Respite',
    isInvest: false,
    isOpen: true,
    tag: ['NFT'],
  },
  {
    id: 1,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/MPLogo.png',
    img_src: 'https://mkpcdn.com/500x/4b17aa47e11d0bd2e244d81bff3ce5a9_473803.jpg',
    content: 'Never-Ending Search',
    isInvest: false,
    isOpen: true,
    tag: ['NFT'],
  },
  {
    id: 1,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/SRLogo.png',
    img_src: 'https://ipfs.pixura.io/ipfs/QmY9kfC3qqmnN97WHfZkC9tmMXNDoCJN3UfkVXkhkj8PVc/MarcThumbnail1.jpg',
    content: 'Marc-O-Matic - The Garden of Worldly Respite',
    isInvest: false,
    isOpen: true,
    tag: ['NFT'],
  },
];

const SHOOES = [
  {
    id: 0,
    comp_src: null,
    img_src:
      'https://kream-phinf.pstatic.net/MjAyMTA3MjhfMjIg/MDAxNjI3NDQxMDA1NjE5.HOgIYywGZaaBJDqUzx2OnX9HAxoOWPvuWHqUn_LZGcgg.VYIuOfA5_GgjBGRowv6dmQuAOPtUvmAxbGpOyUCOCtYg.PNG/p_9d8ed1a74d2540ab9842e63363607bf4.png',
    tag: ['스니커즈 리셀'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: false,
    stock: [
      {
        label: 310,
        value: 264000,
      },
      {
        label: 295,
        value: 267000,
      },
      {
        label: 305,
        value: 259000,
      },
    ],
    content: '나이키 덩크 로우 레트로 블랙',
  },
  {
    id: 1,
    comp_src: null,
    img_src:
      'https://kream-phinf.pstatic.net/MjAyMTA3MjhfMjIg/MDAxNjI3NDQxMDA1NjE5.HOgIYywGZaaBJDqUzx2OnX9HAxoOWPvuWHqUn_LZGcgg.VYIuOfA5_GgjBGRowv6dmQuAOPtUvmAxbGpOyUCOCtYg.PNG/p_9d8ed1a74d2540ab9842e63363607bf4.png',
    tag: ['스니커즈 리셀'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: false,
    stock: [
      {
        label: 310,
        value: 264000,
      },
      {
        label: 305,
        value: 266000,
      },
      {
        label: 260,
        value: 268000,
      },
    ],
    content: '나이키 덩크 로우 레트로 블랙',
  },
  {
    id: 1,
    comp_src: null,
    img_src:
      'https://kream-phinf.pstatic.net/MjAyMTEwMDFfMTE4/MDAxNjMzMDY5MTgzNTM4.skTCbRmcupSkpz883doo0M3vSs91XA6-8QoXr0YDlZwg.t6RHfkTF8Bcq2ZUAk57uNfYkl2lEcE0E_wvI_qmOyTEg.PNG/a_98fb205910c84fc99288edf58039e05f.png',
    tag: ['스니커즈 리셀'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: false,
    stock: [
      {
        label: null,
        value: 259000,
      },
      {
        label: null,
        value: null,
      },
      {
        label: null,
        value: null,
      },
    ],
    content: '조던 1 로우 브레드 토',
  },
];

const PIECE = [
  {
    id: 0,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/tessaLogo.png',
    img_src: 'https://dbm9jhyrx0h6k.cloudfront.net/service/1643001563143-8c31e5b6-3abd-4860-a6f6-db345d0c951d.png',
    tag: ['조각투자', '57일 남음'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: true,
    comp_name: '리우 예',
    investPrice: 844000,
    goalPrice: 1190000000,
    content: 'Angel',
  },
  {
    id: 1,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/treasurerLogo.png',
    img_src: 'https://treasurer-source.s3.ap-northeast-2.amazonaws.com/trade-item-image/RLX0035/1.png',
    tag: ['조각투자'],
    value: null,
    isOpen: false,
    OpenDate: '3월 2일',
    isUp: false,
    isInvest: true,
    comp_name: 'Rolex',
    stock: null,
    content: "Rolex Explorer II 226570 'Polar'",
  },
  {
    id: 1,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/tessaLogo.png',
    img_src: 'https://dbm9jhyrx0h6k.cloudfront.net/service/1643878417703-ca9bc859-9304-4814-afa3-229fb17cb59a.png',
    tag: ['조각투자', '57일 남음'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: true,
    comp_name: '아모아코 보아포',
    investPrice: 437385000,
    goalPrice: 1254500000,
    content: 'Red Nail Polish',
  },
];

const P2P = [
  {
    id: 0,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/eightpercentLogo.png',
    img_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/defaultIndividual.jpg',
    tag: ['P2P 투자'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: true,
    investPrice: 2355000,
    goalPrice: 2600000,
    interestRate: 15.49,
    month: 12,
    content: '대환대출',
  },
  {
    id: 1,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/eightpercentLogo.png',
    img_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/defaultIndividual.jpg',
    tag: ['P2P 투자'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: true,
    investPrice: 5195000,
    goalPrice: 5200000,
    interestRate: 14.99,
    month: 36,
    content: '개인자금',
  },
  {
    id: 1,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/honestfundLogo.png',
    img_src: 'https://d11l490t345f7g.cloudfront.net/deal/10855/hf_1611809456135.jpg',
    tag: ['P2P 투자'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: true,
    investPrice: 123120000,
    goalPrice: 130000000,
    interestRate: 15.5,
    month: 9,
    content: '서울 디지털 산업단지 인근 초역세권 오피스텔 신축 3호 32차',
  },
];

const STARTUP = [
  {
    id: 0,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/funding4uLogo.png',
    img_src: 'https://i.vimeocdn.com/video/1358285867-8d5c5c332a631294b46f5c7e86d74d186b6a628bef7e514587607c1e57749e1d-d_640',
    tag: ['스타트업 펀딩', '2일 남음'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: true,
    comp_name: '주식회사 현대에이아이티',
    investPrice: 54960000,
    goalPrice: 80000000,
    interestRate: null,
    month: null,
    content: '차세대 펫 케어 의료기기 시장의 Key Player, (주)현대에이아이티',
  },
  {
    id: 1,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/wadizLogo.png',
    img_src: 'https://cdn.wadiz.kr/ft/images/green001/2022/0128/20220128165657076_6085.jpg',
    tag: ['스타트업 펀딩', '11일 남음'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: true,
    comp_name: '레츠프레소',
    investPrice: 160600250,
    goalPrice: 50015100,
    interestRate: null,
    month: null,
    content: '폴바셋,맥널티,노브랜드에 캡슐커피 공급 ㅣ생산공장 확장이전',
  },
  {
    id: 1,
    comp_src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/funding4uLogo.png',
    img_src: 'https://i.vimeocdn.com/video/1358285867-8d5c5c332a631294b46f5c7e86d74d186b6a628bef7e514587607c1e57749e1d-d_640',
    tag: ['스타트업 펀딩', '2일 남음'],
    value: null,
    isOpen: true,
    isUp: false,
    isInvest: true,
    comp_name: '주식회사 현대에이아이티',
    investPrice: 54960000,
    goalPrice: 80000000,
    interestRate: null,
    month: null,
    content: '차세대 펫 케어 의료기기 시장의 Key Player, (주)현대에이아이티',
  },
];

const INVEST = [
  {
    id: 0,
    comp_src: null,
    img_src:
      'https://prap-assets.s3.ap-northeast-2.amazonaws.com/unlistedLogo/OCI%E1%84%89%E1%85%B3%E1%84%91%E1%85%A6%E1%84%89%E1%85%A7%E1%86%AF%E1%84%90%E1%85%B5.png',
    tag: ['비상장주식'],
    value: null,
    isOpen: true,
    isUp: true,
    upAmount: 10,
    isInvest: false,
    comp_value: '5억',
    stock: [
      {
        label: 5000,
        value: 165,
      },
      {
        label: 1000,
        value: 170,
      },
      {
        label: 10000,
        value: 170,
      },
    ],
    content: 'OCI스페셜티',
  },
  {
    id: 1,
    comp_src: null,
    img_src:
      'https://prap-assets.s3.ap-northeast-2.amazonaws.com/unlistedLogo/%E1%84%87%E1%85%B5%E1%84%87%E1%85%A1%E1%84%85%E1%85%B5%E1%84%91%E1%85%A5%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1.png',
    tag: ['비상장주식'],
    value: null,
    isOpen: true,
    isUp: false,
    upAmount: null,
    isInvest: false,
    comp_value: '17조 9,584억',
    stock: [
      {
        label: 10,
        value: 110000,
      },
      {
        label: 52,
        value: 111400,
      },
      {
        label: 198,
        value: 111400,
      },
    ],
    content: '비바리퍼블리카',
  },
  {
    id: 1,
    comp_src: null,
    img_src:
      'https://prap-assets.s3.ap-northeast-2.amazonaws.com/unlistedLogo/%E1%84%87%E1%85%B5%E1%84%87%E1%85%A1%E1%84%85%E1%85%B5%E1%84%91%E1%85%A5%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1.png',
    tag: ['비상장주식'],
    value: null,
    isOpen: true,
    isUp: false,
    upAmount: null,
    isInvest: false,
    comp_value: '18조 232억',
    stock: [
      {
        label: 50,
        value: 110000,
      },
      {
        label: 39,
        value: 110000,
      },
      {
        label: 30,
        value: 110000,
      },
    ],
    content: '비바리퍼블리카',
  },
];

const SLIDE = [
  {
    id: 0,
    mention: '3일간 새로 등록된 상품',
    number: 59,
    src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/calendar.png',
  },
  {
    id: 1,
    mention: '3일간 마감된 투자 상품',
    number: 27,
    src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/rocket.png',
  },
  {
    id: 2,
    mention: '프랩에서 투자상품을 조회한 횟수',
    number: 788800,
    src: 'https://msr-assets.s3.ap-northeast-2.amazonaws.com/letter.png',
  },
];
/**
 * @path {GET} http://localhost:3000/api/all
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
router.get('/api/all', (req, res) => {
  //유저 정보 반환
  res.json({ ok: true, data: ALL });
});

/**
 * @path {GET} http://localhost:3000/api/nft
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
router.get('/api/nft', (req, res) => {
  //유저 정보 반환
  res.json({ ok: true, data: NFT });
});

/**
 * @path {GET} http://localhost:3000/api/shooes
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
router.get('/api/shooes', (req, res) => {
  //유저 정보 반환
  res.json({ ok: true, data: SHOOES });
});

/**
 * @path {GET} http://localhost:3000/api/piece
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
router.get('/api/piece', (req, res) => {
  //유저 정보 반환
  res.json({ ok: true, data: PIECE });
});

/**
 * @path {GET} http://localhost:3000/api/p2p
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
router.get('/api/p2p', (req, res) => {
  //유저 정보 반환
  res.json({ ok: true, data: P2P });
});

/**
 * @path {GET} http://localhost:3000/api/startup
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
router.get('/api/startup', (req, res) => {
  //유저 정보 반환
  res.json({ ok: true, data: STARTUP });
});

/**
 * @path {GET} http://localhost:3000/api/invest
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
router.get('/api/invest', (req, res) => {
  //유저 정보 반환
  res.json({ ok: true, data: INVEST });
});

/**
 * @path {GET} http://localhost:3000/api/slide
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
router.get('/api/slide', (req, res) => {
  //유저 정보 반환
  res.json({ ok: true, data: SLIDE });
});

module.exports = router;
