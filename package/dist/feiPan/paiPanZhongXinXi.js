"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paiTianPanGan = paiTianPanGan;
exports.paiTianPanShen = paiTianPanShen;
exports.paiDiPanShen = paiDiPanShen;
exports.getZhiShiPosition = getZhiShiPosition;
exports.paiBaMen = paiBaMen;
exports.paiXing = paiXing;
const commonPaipanFunctions_1 = require("../common-methods/commonPaipanFunctions");
function paiTianPanGan(zhiFu, dun, xing, xunShou) {
    let tianPanGan;
    switch (xunShou) {
        default:
            tianPanGan = ['戊', '己', '庚', '辛', '壬', '癸', '丁', '丙', '乙'];
            break;
        case '甲戌':
            tianPanGan = ['己', '庚', '辛', '壬', '癸', '丁', '丙', '乙', '戊'];
            break;
        case '甲申':
            tianPanGan = ['庚', '辛', '壬', '癸', '丁', '丙', '乙', '戊', '己'];
            break;
        case '甲午':
            tianPanGan = ['辛', '壬', '癸', '丁', '丙', '乙', '戊', '己', '庚'];
            break;
        case '甲辰':
            tianPanGan = ['壬', '癸', '丁', '丙', '乙', '戊', '己', '庚', '辛'];
            break;
        case '甲寅':
            tianPanGan = ['癸', '丁', '丙', '乙', '戊', '己', '庚', '辛', '壬'];
            break;
    }
    let tianPanZhiFuPosition;
    for (let i = 0; i < 9; i++) {
        if (xing[i] == zhiFu) {
            tianPanZhiFuPosition = i;
        }
    }
    return (0, commonPaipanFunctions_1.rearrangeArray)(tianPanGan, tianPanZhiFuPosition, dun);
}
function paiTianPanShen(zhiFu, dun, xing) {
    const yinDunShen = [
        '值符',
        '九天',
        '九地',
        '玄武',
        '太常',
        '白虎',
        '六合',
        '太阴',
        '螣蛇',
    ];
    const yangDunShen = [
        '值符',
        '螣蛇',
        '太阴',
        '六合',
        '勾陈',
        '太常',
        '朱雀',
        '九地',
        '九天',
    ];
    let tianPanXunShouPosition;
    for (let i = 0; i < 9; i++) {
        if (xing[i] == zhiFu) {
            tianPanXunShouPosition = i;
        }
    }
    if (dun == '阳') {
        return (0, commonPaipanFunctions_1.rearrangeArray)(yangDunShen, tianPanXunShouPosition);
    }
    else {
        return (0, commonPaipanFunctions_1.rearrangeArray)(yinDunShen, tianPanXunShouPosition);
    }
}
function paiDiPanShen(xunShouGan, dun, diPanGanList) {
    const yinDunShen = [
        '值符',
        '九天',
        '九地',
        '玄武',
        '太常',
        '白虎',
        '六合',
        '太阴',
        '螣蛇',
    ];
    const yangDunShen = [
        '值符',
        '螣蛇',
        '太阴',
        '六合',
        '勾陈',
        '太常',
        '朱雀',
        '九地',
        '九天',
    ];
    let diPanXunShouPosition;
    for (let i = 0; i < 9; i++) {
        if (diPanGanList[i] == xunShouGan) {
            diPanXunShouPosition = i;
        }
    }
    if (dun == '阳') {
        return (0, commonPaipanFunctions_1.rearrangeArray)(yangDunShen, diPanXunShouPosition);
    }
    else {
        return (0, commonPaipanFunctions_1.rearrangeArray)(yinDunShen, diPanXunShouPosition);
    }
}
function getZhiShiPosition(anGanZhi, shizhu) {
    let position = 0;
    switch (shizhu) {
        default:
            break;
        case '甲子':
            shizhu = '癸酉';
            break;
        case '甲戌':
            shizhu = '癸未';
            break;
        case '甲申':
            shizhu = '癸巳';
            break;
        case '甲午':
            shizhu = '癸卯';
            break;
        case '甲辰':
            shizhu = '癸丑';
            break;
        case '甲寅':
            shizhu = '癸亥';
            break;
    }
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
            baMenList = [
                '休门',
                '死门',
                '伤门',
                '杜门',
                '中五',
                '开门',
                '惊门',
                '生门',
                '景门',
            ];
            break;
        case '死门':
            baMenList = [
                '死门',
                '伤门',
                '杜门',
                '中五',
                '开门',
                '惊门',
                '生门',
                '景门',
                '休门',
            ];
            break;
        case '伤门':
            baMenList = [
                '伤门',
                '杜门',
                '中五',
                '开门',
                '惊门',
                '生门',
                '景门',
                '休门',
                '死门',
            ];
            break;
        case '杜门':
            baMenList = [
                '杜门',
                '中五',
                '开门',
                '惊门',
                '生门',
                '景门',
                '休门',
                '死门',
                '伤门',
            ];
            break;
        case '中五':
            baMenList = [
                '中五',
                '开门',
                '惊门',
                '生门',
                '景门',
                '休门',
                '死门',
                '伤门',
                '杜门',
            ];
            break;
        case '开门':
            baMenList = [
                '开门',
                '惊门',
                '生门',
                '景门',
                '休门',
                '死门',
                '伤门',
                '杜门',
                '中五',
            ];
            break;
        case '惊门':
            baMenList = [
                '惊门',
                '生门',
                '景门',
                '休门',
                '死门',
                '伤门',
                '杜门',
                '中五',
                '开门',
            ];
            break;
        case '生门':
            baMenList = [
                '生门',
                '景门',
                '休门',
                '死门',
                '伤门',
                '杜门',
                '中五',
                '开门',
                '惊门',
            ];
            break;
        case '景门':
            baMenList = [
                '景门',
                '休门',
                '死门',
                '伤门',
                '杜门',
                '中五',
                '开门',
                '惊门',
                '生门',
            ];
            break;
        default:
            baMenList = [
                '休门',
                '死门',
                '伤门',
                '杜门',
                '中五',
                '开门',
                '惊门',
                '生门',
                '景门',
            ];
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
function paiXing(zhiFu, diPanGanList, shizhu) {
    let xingList;
    let shigan;
    if (zhiFu == '天蓬') {
        xingList = [
            '天蓬',
            '天芮',
            '天冲',
            '天辅',
            '天禽',
            '天心',
            '天柱',
            '天任',
            '天英',
        ];
    }
    else if (zhiFu == '天芮') {
        xingList = [
            '天芮',
            '天冲',
            '天辅',
            '天禽',
            '天心',
            '天柱',
            '天任',
            '天英',
            '天蓬',
        ];
    }
    else if (zhiFu == '天冲') {
        xingList = [
            '天冲',
            '天辅',
            '天禽',
            '天心',
            '天柱',
            '天任',
            '天英',
            '天蓬',
            '天芮',
        ];
    }
    else if (zhiFu == '天辅') {
        xingList = [
            '天辅',
            '天禽',
            '天心',
            '天柱',
            '天任',
            '天英',
            '天蓬',
            '天芮',
            '天冲',
        ];
    }
    else if (zhiFu == '天禽') {
        xingList = [
            '天禽',
            '天心',
            '天柱',
            '天任',
            '天英',
            '天蓬',
            '天芮',
            '天冲',
            '天辅',
        ];
    }
    else if (zhiFu == '天心') {
        xingList = [
            '天心',
            '天柱',
            '天任',
            '天英',
            '天蓬',
            '天芮',
            '天冲',
            '天辅',
            '天禽',
        ];
    }
    else if (zhiFu == '天柱') {
        xingList = [
            '天柱',
            '天任',
            '天英',
            '天蓬',
            '天芮',
            '天冲',
            '天辅',
            '天禽',
            '天心',
        ];
    }
    else if (zhiFu == '天任') {
        xingList = [
            '天任',
            '天英',
            '天蓬',
            '天芮',
            '天冲',
            '天辅',
            '天禽',
            '天心',
            '天柱',
        ];
    }
    else if (zhiFu == '天英') {
        xingList = [
            '天英',
            '天蓬',
            '天芮',
            '天冲',
            '天辅',
            '天禽',
            '天心',
            '天柱',
            '天任',
        ];
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
