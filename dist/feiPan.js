"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feiPan = feiPan;
const commonPaipanFunctions_1 = require("./commonPaipanFunctions");
const commonInfo_1 = require("./commonInfo");
function feiPan({ date, time, nianzhu, yuezhu, rizhu, shizhu, jieqi, dun, jushu, }) {
    const diPanGanList = (0, commonPaipanFunctions_1.paiDiPanGan)(dun, jushu);
    const xunShou = (0, commonPaipanFunctions_1.zhaoXunShou)(shizhu, commonInfo_1.liushijiazi);
    const fuShi = (0, commonPaipanFunctions_1.dingFuShi)(diPanGanList, xunShou);
    const anGanZhi = (0, commonPaipanFunctions_1.paiAnGanZhi)(xunShou, diPanGanList, dun);
    const zhiShiPosition = getZhiShiPosition(anGanZhi, shizhu);
    const baMen = paiBaMen(fuShi.zhishi, zhiShiPosition);
    const xing = paiXing(fuShi.zhifu, diPanGanList, dun, shizhu);
    console.log(anGanZhi);
    console.log(baMen);
    console.log(xing);
    return {
        allTimeInformation: {
            date: date,
            time: time,
            nianzhu: nianzhu,
            yuezhu: yuezhu,
            rizhu: rizhu,
            shizhu: shizhu,
            jieqi: jieqi,
            dun: dun,
            jushu: jushu,
        },
        zhiFu: fuShi.zhifu,
        zhiShi: fuShi.zhishi,
        xunShou: xunShou,
        panJuResult: {
            gong1: {
                diPanGan: diPanGanList[0],
                anGan: anGanZhi[0].charAt(0),
                anZhi: anGanZhi[0].charAt(1),
            },
        }
    };
}
function getZhiShiPosition(anGanZhi, shizhu) {
    let position = 0;
    shizhu;
    for (let i = 0; i < 9; i++) {
        if (anGanZhi[i] == shizhu) {
            position = i;
        }
    }
    return position;
}
function paiBaMen(zhiShi, zhiShiPosition) {
    let baMenList;
    let count = 0;
    switch (zhiShi) {
        case '休门':
            baMenList = ['休门', '死门', '伤门', '杜门', '中门', '开门', '惊门', '生门', '景门'];
            break;
        case '死门':
            baMenList = ['死门', '伤门', '杜门', '中门', '开门', '惊门', '生门', '景门', '休门'];
            break;
        case '伤门':
            baMenList = ['伤门', '杜门', '中门', '开门', '惊门', '生门', '景门', '休门', '死门'];
            break;
        case '杜门':
            baMenList = ['杜门', '中门', '开门', '惊门', '生门', '景门', '休门', '死门', '伤门'];
            break;
        case '中门':
            baMenList = ['中门', '开门', '惊门', '生门', '景门', '休门', '死门', '伤门', '杜门'];
            break;
        case '开门':
            baMenList = ['开门', '惊门', '生门', '景门', '休门', '死门', '伤门', '杜门', '中门'];
            break;
        case '惊门':
            baMenList = ['惊门', '生门', '景门', '休门', '死门', '伤门', '杜门', '中门', '开门'];
            break;
        case '生门':
            baMenList = ['生门', '景门', '休门', '死门', '伤门', '杜门', '中门', '开门', '惊门'];
            break;
        case '景门':
            baMenList = ['景门', '休门', '死门', '伤门', '杜门', '中门', '开门', '惊门', '生门'];
            break;
        default:
            baMenList = ['休门', '死门', '伤门', '杜门', '中门', '开门', '惊门', '生门', '景门'];
            break;
    }
    let array = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < array.length; i++) {
        const index = (i + zhiShiPosition) % array.length;
        array[index] = baMenList[count];
        count++;
    }
    return array;
}
function paiXing(zhiFu, diPanGanList, dun, shizhu) {
    let xingList;
    let shigan;
    if (zhiFu == '天蓬') {
        xingList = ['天蓬', '天芮', '天冲', '天辅', '天禽', '天心', '天柱', '天任', '天英'];
    }
    else if (zhiFu == '天芮') {
        xingList = ['天芮', '天冲', '天辅', '天禽', '天心', '天柱', '天任', '天英', '天蓬'];
    }
    else if (zhiFu == '天冲') {
        xingList = ['天冲', '天辅', '天禽', '天心', '天柱', '天任', '天英', '天蓬', '天芮'];
    }
    else if (zhiFu == '天辅') {
        xingList = ['天辅', '天禽', '天心', '天柱', '天任', '天英', '天蓬', '天芮', '天冲'];
    }
    else if (zhiFu == '天禽') {
        xingList = ['天禽', '天心', '天柱', '天任', '天英', '天蓬', '天芮', '天冲', '天辅'];
    }
    else if (zhiFu == '天心') {
        xingList = ['天心', '天柱', '天任', '天英', '天蓬', '天芮', '天冲', '天辅', '天禽'];
    }
    else if (zhiFu == '天柱') {
        xingList = ['天柱', '天任', '天英', '天蓬', '天芮', '天冲', '天辅', '天禽', '天心'];
    }
    else if (zhiFu == '天任') {
        xingList = ['天任', '天英', '天蓬', '天芮', '天冲', '天辅', '天禽', '天心', '天柱'];
    }
    else if (zhiFu == '天英') {
        xingList = ['天英', '天蓬', '天芮', '天冲', '天辅', '天禽', '天心', '天柱', '天任'];
    }
    switch (shizhu) {
        default:
            shigan = shizhu.charAt(0);
            break;
        case '甲子':
            shigan = '戊';
            break;
        case '甲戌':
            shigan = '己';
            break;
        case '甲申':
            shigan = '庚';
            break;
        case '甲午':
            shigan = '辛';
            break;
        case '甲辰':
            shigan = '壬';
            break;
        case '甲寅':
            shigan = '癸';
            break;
    }
    let count = 0;
    let position = 0;
    for (let i = 0; i < 9; i++) {
        if (diPanGanList[i] == shigan) {
            position = i;
        }
    }
    let array = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < array.length; i++) {
        const index = (i + position) % array.length;
        array[index] = xingList[count];
        count++;
    }
    return array;
}
function paiTianPanShen() { }
function paiDiPanShen() { }
