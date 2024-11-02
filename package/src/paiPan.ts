import { getTimeInfo } from "./common-methods/lunarLibrary";
import { dingJu } from "./common-methods/dingJu/dingJu";
import { paiFeiPan } from "./feiPan/feiPanMain";
import {
  FullTimeInformation,
  JiuGongXinXi,
  PanJuInformation,
} from "./feiPan/interfaces";
import { PaipanTime } from "./common-methods/timeInterface";

interface PaiPanInput {
  paipanMethod?: string;
  time: PaipanTime;
  baoshuMethod?: string; // 制筹, 时辰, 局数
  baoshu?: number;
  chaiBu?: boolean;
  ziXuanJu?: string;
  additionalSettings: AdditionalSettings;
}

interface AdditionalSettings {
  traditionalCharacters: boolean;
  singleCharacter: boolean;
}

interface PaiPanResult {
  allTimeInformation: FullTimeInformation;
  zhiFu: string;
  zhiShi: string;
  xunShou: string;
  huanJu: JiuGongXinXi;
  panJuResult: JiuGongXinXi;
}

/**
 * paipanMethod = "飞盘",
 * time = {
 *      year: number
 *      month: number
 *      day: number
 *      hour: number
 *      minute: number
 * },
 * baoshuMethod = "", // 制筹, 时辰, 局数
 * baoshu = 0,
 * chaiBu = true,
 * ziXuanJu = "",
 * additionalSettings = {
 *      traditionalCharacters: boolean;
 *      singleCharacter: boolean;
 * },
 * 如果baoshuMethod = '' 和 baoshu == 0 则使用 ziXuanJu
 */
export function paipan({
  paipanMethod = "飞盘",
  time,
  baoshuMethod = "", // 制筹, 时辰, 局数
  baoshu = 0,
  chaiBu = true,
  ziXuanJu = "",
  additionalSettings,
}: PaiPanInput): PaiPanResult {
  if (baoshu === 0) {
    baoshuMethod = "";
  }
  const timeData = getTimeInfo(time, baoshuMethod, baoshu); // 根据Lunar-typescript Library
  let paipanResult: PanJuInformation;

  let dingJuData = dingJu({
    // 提取遁与局数
    jieqi: timeData.jieqi,
    rizhu: timeData.ri,
    baoshuQiJuMethod: baoshuMethod,
    baoshu: baoshu,
    chaiBu: chaiBu,
    ziXuanJu: ziXuanJu,
  });

  const fullTimeInformation = {
    year: time.year,
    month: time.month,
    date: time.day,
    hour: time.hour,
    minute: time.minute,
    nianzhu: timeData.nian,
    yuezhu: timeData.yue,
    rizhu: timeData.ri,
    shizhu: timeData.shi,
    jieqi: timeData.jieqi,
    dun: dingJuData.dun,
    jushu: dingJuData.jushu,
  };

  switch (paipanMethod) {
    default:
      paipanResult = paiFeiPan(fullTimeInformation, additionalSettings);
      break;
    case "转盘": // 默认排盘为转盘
      break;
  }
  return paipanResult!;
}
