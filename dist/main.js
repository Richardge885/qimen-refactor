"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paipan = paipan;
const sizhu_1 = require("./sizhu");
const dingJu_1 = require("./dingJu");
const feiPan_1 = require("./feiPan");
function paipan({ paipanMethod = '转盘', date, time, baoshuMethod = '', baoshu = 0, chaiBu = true, ziXuanJu = '', }) {
    const timeData = (0, sizhu_1.timeInfo)(date, time, baoshuMethod, baoshu);
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
        date: timeData.yangli,
        time: timeData.time,
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
            break;
        case '飞盘':
            console.log((0, feiPan_1.feiPan)(fullTimeInformation).panJuResult);
            break;
        case '张氏':
            break;
        case '星飞门转':
            break;
    }
}
paipan({
    paipanMethod: '飞盘',
    date: '2024/9/15',
    time: '22:11',
    baoshuMethod: '制筹',
    baoshu: 21,
    ziXuanJu: '',
});
