"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeInfo = getTimeInfo;
const commonInfo_1 = require("./commonInfo");
const lunar_typescript_1 = require("lunar-typescript");
function getTimeInfo(time, baoshuMethod, baoshu) {
    let solarToLunar;
    if (baoshuMethod == "制筹" || baoshuMethod == "时辰") {
        if (baoshuMethod == "制筹") {
            const solar = lunar_typescript_1.Solar.fromYmdHms(time.year, time.month, time.day, time.hour, 0, 0);
            solarToLunar = solar.getLunar();
            let shiGanZhi;
            if (baoshu % 60 == 0) {
                shiGanZhi = commonInfo_1.liushijiazi[59];
            }
            else {
                shiGanZhi = commonInfo_1.liushijiazi[(baoshu % 60) - 1];
            }
            return {
                nian: solarToLunar.getYearInGanZhiExact(),
                yue: solarToLunar.getMonthInGanZhiExact(),
                ri: solarToLunar.getDayInGanZhiExact(),
                shi: shiGanZhi,
                jieqi: solarToLunar.getPrevJieQi().toString(),
            };
        }
        else {
            let hour;
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
            const solar = lunar_typescript_1.Solar.fromYmdHms(time.year, time.month, time.day, hour, 0, 0);
            solarToLunar = solar.getLunar();
        }
    }
    else {
        const solar = lunar_typescript_1.Solar.fromYmdHms(time.year, time.month, time.day, time.hour, time.minute, 0);
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
