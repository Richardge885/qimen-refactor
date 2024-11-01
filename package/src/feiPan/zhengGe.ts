import { zhengGe } from "./feiPanGeJu";
import { JiuGongXinXi } from "./interfaces";

/**
 * 返回正格组合
 */
export function putInZhengGe(panJu: JiuGongXinXi) {
  let result = panJu;
  let geJu: string[][] = [];

  // 提取出格局
  Object.keys(result).forEach((object) => {
    const gong = result[object as keyof typeof result];
    geJu.push(getZhengGe(gong.tianPanGan + gong.diPanGan));
  });

  // 把格局导入排盘信息并返回
  let i = 0;
  Object.keys(result).forEach((object) => {
    const gong = result[object as keyof typeof result];
    for (let j = 0; j < geJu[i].length; j++) {
      gong.zhengGe.push(geJu[i][j]);
    }
    i = i + 1;
  });
  return result;
}

function getZhengGe(zuHe: string) {
  let result = [];
  switch (zuHe) {
    default:
      result[0] = zhengGe.fuYin + "\n" + zhengGe.muFuYin;
      break;
    case "甲乙":
      result[0] = zhengGe.jinRu;
      break;
    case "甲丙":
      result[0] = zhengGe.qianJian;
      result[1] = zhengGe.haoQi;
      break;
    case "甲丁":
      result[0] = zhengGe.jiaoYin;
      break;
    case "甲戊":
      result[0] = zhengGe.waiZhi;
      break;
    case "甲己":
      result[0] = zhengGe.shangHe + "\n" + zhengGe.heTu;
      result[1] = zhengGe.waiQin;
      break;
    case "甲庚":
      result[0] = zhengGe.beiChong + "\n" + zhengGe.muChong;
      result[1] = zhengGe.neiZhi;
      break;
    case "甲辛":
      result[0] = zhengGe.neiHai;
      break;
    case "甲壬":
      result[0] = zhengGe.houJian;
      result[1] = zhengGe.chengQuan;
      break;
    case "甲癸":
      result[0] = zhengGe.tuiRu;
      result[1] = zhengGe.deMu;
      break;

    case "乙甲":
      result[0] = zhengGe.tuiRu;
      break;
    case "乙乙":
      result[0] = zhengGe.fuYin;
      break;
    case "乙丙":
      result[0] = zhengGe.jinRu;
      result[1] = zhengGe.jiaoYang;
      break;
    case "乙丁":
      result[0] = zhengGe.qianJian;
      result[1] = zhengGe.duoQuan;
      break;
    case "乙戊":
      result[0] = zhengGe.waiHai;
      break;
    case "乙己":
      result[0] = zhengGe.waiLuan;
      break;
    case "乙庚":
      result[0] = zhengGe.shangHe + "\n" + zhengGe.heJin;
      result[1] = zhengGe.neiQin;
      break;
    case "乙辛":
      result[0] = zhengGe.beiChong + "\n" + zhengGe.muChong;
      result[1] = zhengGe.neiLuan;
      break;
    case "乙壬":
      result[0] = zhengGe.huoFu;
      break;
    case "乙癸":
      result[0] = zhengGe.houJian;
      result[1] = zhengGe.yiShi;
      break;

    case "丙甲":
      result[0] = zhengGe.houJian;
      result[1] = zhengGe.chengQuan;
      break;
    case "丙乙":
      result[0] = zhengGe.tuiRu;
      result[1] = zhengGe.deMu;
      break;
    case "丙丙":
      result[0] = zhengGe.fuYin + "\n" + zhengGe.huoFuYin;
      break;
    case "丙丁":
      result[0] = zhengGe.jinRu;
      break;
    case "丙戊":
      result[0] = zhengGe.qianJian;
      result[1] = zhengGe.haoQi;
      break;
    case "丙己":
      result[0] = zhengGe.jiaoYin;
      break;
    case "丙庚":
      result[0] = zhengGe.waiZhi;
      break;
    case "丙辛":
      result[0] = zhengGe.shangHe + "\n" + zhengGe.heShui;
      result[1] = zhengGe.waiQin;
      break;
    case "丙壬":
      result[0] = zhengGe.beiChong + "\n" + zhengGe.huoChong;
      result[1] = zhengGe.neiZhi;
      break;
    case "丙癸":
      result[0] = zhengGe.neiHai;
      break;

    case "丁甲":
      result[0] = zhengGe.huoFu;
      break;
    case "丁乙":
      result[0] = zhengGe.houJian;
      result[1] = zhengGe.yiShi;
      break;
    case "丁丙":
      result[0] = zhengGe.tuiRu;
      break;
    case "丁丁":
      result[0] = zhengGe.fuYin + "\n" + zhengGe.huoFuYin;
      break;
    case "丁戊":
      result[0] = zhengGe.jinRu;
      result[1] = zhengGe.jiaoYang;
      break;
    case "丁己":
      result[0] = zhengGe.qianJian;
      result[1] = zhengGe.duoQuan;
      break;
    case "丁庚":
      result[0] = zhengGe.waiHai;
      break;
    case "丁辛":
      result[0] = zhengGe.waiLuan;
      break;
    case "丁壬":
      result[0] = zhengGe.shangHe + "\n" + zhengGe.heMu;
      result[1] = zhengGe.neiQin;
      break;
    case "丁癸":
      result[0] = zhengGe.beiChong + "\n" + zhengGe.huoChong;
      result[1] = zhengGe.neiLuan;
      break;

    case "戊甲":
      result[0] = zhengGe.neiZhi;
      break;
    case "戊乙":
      result[0] = zhengGe.neiHai;
      break;
    case "戊丙":
      result[0] = zhengGe.houJian;
      result[1] = zhengGe.chengQuan;
      break;
    case "戊丁":
      result[0] = zhengGe.tuiRu;
      result[1] = zhengGe.deMu;
      break;
    case "戊戊":
      result[0] = zhengGe.fuYin + "\n" + zhengGe.muFuYin;
      break;
    case "戊己":
      result[0] = zhengGe.jinRu;
      break;
    case "戊庚":
      result[0] = zhengGe.qianJian;
      result[1] = zhengGe.haoQi;
      break;
    case "戊辛":
      result[0] = zhengGe.jiaoYin;
      result[1] = zhengGe.zhiPo;
      break;
    case "戊壬":
      result[0] = zhengGe.waiZhi;
      break;
    case "戊癸":
      result[0] = zhengGe.shangHe + "\n" + zhengGe.heHuo;
      result[1] = zhengGe.waiQin;
      break;

    case "己甲":
      result[0] = zhengGe.xiaHe + "\n" + zhengGe.heTu;
      result[1] = zhengGe.neiQin;
      break;
    case "己乙":
      result[0] = zhengGe.neiLuan;
      break;
    case "己丙":
      result[0] = zhengGe.huoFu;
      break;
    case "己丁":
      result[0] = zhengGe.houJian;
      result[1] = zhengGe.yiShi;
      break;
    case "己戊":
      result[0] = zhengGe.tuiRu;
      break;
    case "己己":
      result[0] = zhengGe.fuYin + "\n" + zhengGe.muFuYin;
      break;
    case "己庚":
      result[0] = zhengGe.jinRu;
      result[1] = zhengGe.jiaoYang;
      break;
    case "己辛":
      result[0] = zhengGe.qianJian;
      result[1] = zhengGe.duoQuan;
      break;
    case "己壬":
      result[0] = zhengGe.waiHai;
      result[1] = zhengGe.zhiPo;
      break;
    case "己癸":
      result[0] = zhengGe.waiLuan;
      break;

    case "庚甲":
      result[0] = zhengGe.zhengChong + "\n" + zhengGe.jinChong;
      result[1] = zhengGe.waiZhi;
      break;
    case "庚乙":
      result[0] = zhengGe.xiaHe + "\n" + zhengGe.heJin;
      result[1] = zhengGe.waiQin;
      break;
    case "庚丙":
      result[0] = zhengGe.neiZhi;
      break;
    case "庚丁":
      result[0] = zhengGe.neiHai;
      break;
    case "庚戊":
      result[0] = zhengGe.houJian;
      result[1] = zhengGe.chengQuan;
      break;
    case "庚己":
      result[0] = zhengGe.tuiRu;
      result[1] = zhengGe.deMu;
      break;
    case "庚庚":
      result[0] = zhengGe.fuYin + "\n" + zhengGe.jinFuYin;
      break;
    case "庚辛":
      result[0] = zhengGe.jinRu;
      break;
    case "庚壬":
      result[0] = zhengGe.qianJian;
      result[1] = zhengGe.haoQi;
      break;
    case "庚癸":
      result[0] = zhengGe.jiaoYin;
      result[1] = zhengGe.zhiPo;
      break;

    case "辛甲":
      result[0] = zhengGe.waiHai;
      break;
    case "辛乙":
      result[0] = zhengGe.zhengChong + "\n" + zhengGe.jinChong;
      result[1] = zhengGe.waiLuan;
      break;
    case "辛丙":
      result[0] = zhengGe.xiaHe + "\n" + zhengGe.heShui;
      result[1] = zhengGe.neiQin;
      break;
    case "辛丁":
      result[0] = zhengGe.neiLuan;
      break;
    case "辛戊":
      result[0] = zhengGe.huoFu;
      result[1] = zhengGe.zhiPo;
      break;
    case "辛己":
      result[0] = zhengGe.houJian;
      result[1] = zhengGe.yiShi;
      break;
    case "辛庚":
      result[0] = zhengGe.tuiRu;
      break;
    case "辛辛":
      result[0] = zhengGe.fuYin + "\n" + zhengGe.jinFuYin;
      break;
    case "辛壬":
      result[0] = zhengGe.jinRu;
      result[1] = zhengGe.jiaoYang;
      break;
    case "辛癸":
      result[0] = zhengGe.qianJian;
      result[1] = zhengGe.duoQuan;
      break;

    case "壬甲":
      result[0] = zhengGe.qianJian;
      result[1] = zhengGe.haoQi;
      break;
    case "壬乙":
      result[0] = zhengGe.jiaoYin;
      break;
    case "壬丙":
      result[0] = zhengGe.zhengChong + "\n" + zhengGe.shuiChong;
      result[1] = zhengGe.waiZhi;
      break;
    case "壬丁":
      result[0] = zhengGe.xiaHe + "\n" + zhengGe.heShui;
      result[1] = zhengGe.waiQin;
      break;
    case "壬戊":
      result[0] = zhengGe.neiZhi;
      break;
    case "壬己":
      result[0] = zhengGe.neiHai;
      result[1] = zhengGe.zhiPo;
      break;
    case "壬庚":
      result[0] = zhengGe.houJian;
      result[1] = zhengGe.chengQuan;
      break;
    case "壬辛":
      result[0] = zhengGe.tuiRu;
      result[1] = zhengGe.deMu;
      break;
    case "壬壬":
      result[0] = zhengGe.fuYin + "\n" + zhengGe.shuiFuYin;
      break;
    case "壬癸":
      result[0] = zhengGe.jinRu;
      break;

    case "癸甲":
      result[0] = zhengGe.jinRu;
      result[1] = zhengGe.jiaoYang;
      break;
    case "癸乙":
      result[0] = zhengGe.qianJian;
      result[1] = zhengGe.duoQuan;
      break;
    case "癸丙":
      result[0] = zhengGe.waiHai;
      break;
    case "癸丁":
      result[0] = zhengGe.zhengChong + "\n" + zhengGe.shuiChong;
      result[1] = zhengGe.waiLuan;
      break;
    case "癸戊":
      result[0] = zhengGe.xiaHe + "\n" + zhengGe.heHuo;
      result[1] = zhengGe.neiQin;
      break;
    case "癸己":
      result[0] = zhengGe.neiLuan;
      break;
    case "癸庚":
      result[0] = zhengGe.huoFu;
      result[1] = zhengGe.zhiPo;
      break;
    case "癸辛":
      result[0] = zhengGe.houJian;
      result[1] = zhengGe.yiShi;
      break;
    case "癸壬":
      result[0] = zhengGe.tuiRu;
      break;
    case "癸癸":
      result[0] = zhengGe.fuYin + "\n" + zhengGe.shuiFuYin;
      break;
  }
  return result;
}
