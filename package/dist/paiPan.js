"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paipan = paipan;
const lunarLibrary_1 = require("./common-methods/lunarLibrary");
const dingJu_1 = require("./common-methods/dingJu/dingJu");
const feiPanMain_1 = require("./feiPan/feiPanMain");
function paipan({ paipanMethod = "飞盘", time, baoshuMethod = "", baoshu = 0, chaiBu = true, ziXuanJu = "", additionalSettings, }) {
    if (baoshu === 0) {
        baoshuMethod = "";
    }
    const timeData = (0, lunarLibrary_1.getTimeInfo)(time, baoshuMethod, baoshu);
    let paipanResult;
    let dingJuData = (0, dingJu_1.dingJu)({
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
            paipanResult = (0, feiPanMain_1.paiFeiPan)(fullTimeInformation, additionalSettings);
            break;
        case "转盘":
            break;
    }
    return paipanResult;
}
