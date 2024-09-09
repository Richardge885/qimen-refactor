"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paipan = paipan;
const sizhu_1 = require("./sizhu");
const dingJu_1 = require("./dingJu");
;
function main() {
    console.log(paipan({
        paipanMethod: '飞盘',
        date: '2024/9/9',
        time: '17:35',
        baoshuMethod: '',
        baoshu: 0,
        dun: '',
        ziXuanJu: ''
    }));
}
function paipan({ paipanMethod = '转盘', date, time, baoshuMethod = '', baoshu = 0, dun = '', chaiBu = true, ziXuanJu = '' }) {
    const timeData = (0, sizhu_1.timeInfo)(date, time, baoshuMethod, baoshu);
    let dingJuData = (0, dingJu_1.dingJu)({
        jieqi: timeData.jieqi,
        rizhu: timeData.ri,
        baoshuQiJuMethod: baoshuMethod,
        baoshu: baoshu,
        chaiBu: chaiBu,
        ziXuanJu: ziXuanJu,
    });
    switch (paipanMethod) {
        default:
            break;
        case '飞盘':
            break;
        case '张氏':
            break;
        case '星飞门转':
            break;
    }
    return {
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
}
main();
