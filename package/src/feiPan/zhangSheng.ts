import { JiuGongXinXi } from "./interfaces";

export function putInZhangSheng(panJu: JiuGongXinXi) {
  let result = panJu;
  let wangGong: string;
  Object.keys(result).forEach((object) => {
    const gong = result[object as keyof typeof result];
    if (gong.gongWangShuai == "旺" && gong.baGua != "中") {
      wangGong = gong.baGua;
    }
  });

  // 提取出格局
  Object.keys(result).forEach((object) => {
    const gong = result[object as keyof typeof result];
    const tianPanGanZhangSheng = getZhangSheng(
      gong.tianPanGan,
      gong.baGua,
      wangGong,
    );
    const diPanGanZhangSheng = getZhangSheng(
      gong.diPanGan,
      gong.baGua,
      wangGong,
    );
    gong.tianPanGanZhangSheng = tianPanGanZhangSheng;
    gong.diPanGanZhangSheng = diPanGanZhangSheng;
  });

  return result;
}

function getZhangSheng(tianGan: string, gong: string, wangGong: string) {
  let result: string = "";
  if (gong == "中") {
    gong = wangGong;
  }
  switch (tianGan) {
    default: // 默认天干为 乙
      switch (gong) {
        case "乾":
          result = "戌：墓\n亥：死";
          break;
        case "坎":
          result = "子：病";
          break;
        case "艮":
          result = "丑：衰\n寅：帝旺";
          break;
        case "震":
          result = "卯：临官";
          break;
        case "巽":
          result = "辰：冠带\n巳：沐浴";
          break;
        case "离":
          result = "午：长生";
          break;
        case "坤":
          result = "未：养\n申：胎";
          break;
        case "兑":
          result = "酉：绝";
          break;
      }
      break;
    case "丙":
      switch (gong) {
        case "乾":
          result = "戌：墓\n亥：绝";
          break;
        case "坎":
          result = "子：胎";
          break;
        case "艮":
          result = "丑：养\n寅：长生";
          break;
        case "震":
          result = "卯：沐浴";
          break;
        case "巽":
          result = "辰：冠带\n巳：临官";
          break;
        case "离":
          result = "午：帝旺";
          break;
        case "坤":
          result = "未：衰\n申：病";
          break;
        case "兑":
          result = "酉：死";
          break;
      }
      break;
    case "丁":
      switch (gong) {
        case "乾":
          result = "戌：养\n亥：胎";
          break;
        case "坎":
          result = "子：绝";
          break;
        case "艮":
          result = "丑：墓\n寅：死";
          break;
        case "震":
          result = "卯：病";
          break;
        case "巽":
          result = "辰：衰\n巳：帝旺";
          break;
        case "离":
          result = "午：临官";
          break;
        case "坤":
          result = "未：冠带\n申：沐浴";
          break;
        case "兑":
          result = "酉：长生";
          break;
      }
      break;
    case "戊":
      switch (gong) {
        case "乾":
          result = "戌：墓\n亥：绝";
          break;
        case "坎":
          result = "子：胎";
          break;
        case "艮":
          result = "丑：养\n寅：长生";
          break;
        case "震":
          result = "卯：沐浴";
          break;
        case "巽":
          result = "辰：冠带\n巳：临官";
          break;
        case "离":
          result = "午：帝旺";
          break;
        case "坤":
          result = "未：衰\n申：病";
          break;
        case "兑":
          result = "酉：死";
          break;
      }
      break;
    case "己":
      switch (gong) {
        case "乾":
          result = "戌：养\n亥：胎";
          break;
        case "坎":
          result = "子：绝";
          break;
        case "艮":
          result = "丑：墓\n寅：死";
          break;
        case "震":
          result = "卯：病";
          break;
        case "巽":
          result = "辰：衰\n巳：帝旺";
          break;
        case "离":
          result = "午：临官";
          break;
        case "坤":
          result = "未：冠带\n申：沐浴";
          break;
        case "兑":
          result = "酉：长生";
          break;
      }
      break;
    case "庚":
      switch (gong) {
        case "乾":
          result = "戌：衰\n亥：病";
          break;
        case "坎":
          result = "子：死";
          break;
        case "艮":
          result = "丑：墓\n寅：绝";
          break;
        case "震":
          result = "卯：胎";
          break;
        case "巽":
          result = "辰：养\n巳：长生";
          break;
        case "离":
          result = "午：沐浴";
          break;
        case "坤":
          result = "未：冠带\n申：临官";
          break;
        case "兑":
          result = "酉：帝旺";
          break;
      }
      break;
    case "辛":
      switch (gong) {
        case "乾":
          result = "戌：冠带\n亥：沐浴";
          break;
        case "坎":
          result = "子：长生";
          break;
        case "艮":
          result = "丑：养\n寅：胎";
          break;
        case "震":
          result = "卯：绝";
          break;
        case "巽":
          result = "辰：墓\n巳：死";
          break;
        case "离":
          result = "午：病";
          break;
        case "坤":
          result = "未：衰\n申：帝旺";
          break;
        case "兑":
          result = "酉：临官";
          break;
      }
      break;
    case "壬":
      switch (gong) {
        case "乾":
          result = "戌：冠带\n亥：临官";
          break;
        case "坎":
          result = "子：帝旺";
          break;
        case "艮":
          result = "丑：衰\n寅：病";
          break;
        case "震":
          result = "卯：死";
          break;
        case "巽":
          result = "辰：墓\n巳：绝";
          break;
        case "离":
          result = "午：胎";
          break;
        case "坤":
          result = "未：养\n申：长生";
          break;
        case "兑":
          result = "酉：沐浴";
          break;
      }
      break;
    case "癸":
      switch (gong) {
        case "乾":
          result = "戌：衰\n亥：帝旺";
          break;
        case "坎":
          result = "子：临官";
          break;
        case "艮":
          result = "丑：冠带\n寅：沐浴";
          break;
        case "震":
          result = "卯：长生";
          break;
        case "巽":
          result = "辰：养\n巳：胎";
          break;
        case "离":
          result = "午：绝";
          break;
        case "坤":
          result = "未：墓\n申：死";
          break;
        case "兑":
          result = "酉：病";
          break;
      }
      break;
  }
  return result;
}
