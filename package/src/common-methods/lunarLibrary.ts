import { liushijiazi } from "./commonInfo";
import { PaipanTime } from "./timeInterface";
import { Solar } from "lunar-typescript";

export function getTimeInfo(
  time: PaipanTime,
  baoshuMethod: string,
  baoshu: number,
) {
  let solarToLunar;
  if (baoshuMethod == "制筹" || baoshuMethod == "时辰") {
    if (baoshuMethod == "制筹") {
      // 根据六十甲子制筹选时
      const solar = Solar.fromYmdHms(
        time.year,
        time.month,
        time.day,
        time.hour,
        0,
        0,
      );
      solarToLunar = solar.getLunar();
      let shiGanZhi: string;
      if (baoshu % 60 == 0) {
        shiGanZhi = liushijiazi[59];
      } else {
        shiGanZhi = liushijiazi[(baoshu % 60) - 1];
      }
      return {
        nian: solarToLunar.getYearInGanZhiExact(),
        yue: solarToLunar.getMonthInGanZhiExact(),
        ri: solarToLunar.getDayInGanZhiExact(),
        shi: shiGanZhi,
        jieqi: solarToLunar.getPrevJieQi().toString(),
      };
    } else {
      let hour: number;
      // 换时辰
      switch (baoshu % 12) {
        case 1:
          hour = 0;
          break;
        case 2:
          hour = 2;
          break;
        case 3:
          hour = 4;
          break;
        case 4:
          hour = 6;
          break;
        case 5:
          hour = 8;
          break;
        case 6:
          hour = 10;
          break;
        case 7:
          hour = 12;
          break;
        case 8:
          hour = 14;
          break;
        case 9:
          hour = 16;
          break;
        case 10:
          hour = 18;
          break;
        case 11:
          hour = 20;
          break;
        case 0:
          hour = 22;
          break;
      }
      const solar = Solar.fromYmdHms(
        time.year,
        time.month,
        time.day,
        hour!,
        0,
        0,
      );
      solarToLunar = solar.getLunar();
    }
  } else {
    const solar = Solar.fromYmdHms(
      time.year,
      time.month,
      time.day,
      time.hour,
      time.minute,
      0,
    );
    solarToLunar = solar.getLunar();
  }
  return {
    nian: solarToLunar.getYearInGanZhi(),
    yue: solarToLunar.getMonthInGanZhi(),
    ri: solarToLunar.getDayInGanZhiExact(),
    shi: solarToLunar.getTimeInGanZhi(),
    jieqi: solarToLunar.getPrevJieQi().toString(),
  };
}
