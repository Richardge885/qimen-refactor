"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feiPan = feiPan;
const commonPaipanFunctions_1 = require("./commonPaipanFunctions");
const commonInfo_1 = require("./commonInfo");
function feiPan({ date, time, nianzhu, yuezhu, rizhu, shizhu, jieqi, dun, jushu, }) {
    const xunShou = (0, commonPaipanFunctions_1.zhaoXunShou)(shizhu, commonInfo_1.liushijiazi);
    const xunShouGan = (0, commonPaipanFunctions_1.findXunShouGan)(xunShou);
    const diPanGan = (0, commonPaipanFunctions_1.paiDiPanGan)(dun, jushu);
    const fuShi = (0, commonPaipanFunctions_1.dingFuShi)(diPanGan, xunShou);
    const anGanZhi = (0, commonPaipanFunctions_1.paiAnGanZhi)(xunShou, diPanGan, dun);
    const zhiShiPosition = getZhiShiPosition(anGanZhi, shizhu);
    const men = paiBaMen(fuShi.zhishi, zhiShiPosition);
    const xing = paiXing(fuShi.zhifu, diPanGan, shizhu);
    const diPanShen = paiDiPanShen(xunShouGan, dun, diPanGan);
    const tianPanShen = paiTianPanShen(fuShi.zhifu, dun, xing);
    const tianPanGan = paiTianPanGan(fuShi.zhifu, dun, xing, xunShou);
    const gongWeiWangShuai = (0, commonPaipanFunctions_1.gongWangShuai)(jieqi, true);
    const maXing = (0, commonPaipanFunctions_1.getMaXing)(shizhu.charAt(1));
    const kongWang = (0, commonPaipanFunctions_1.getKongWang)(xunShou, true);
    let result = {
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
        xunShou: xunShou,
        zhiFu: fuShi.zhifu,
        zhiShi: fuShi.zhishi,
        huanJu: {
            kanGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            kunGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            zhenGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            xunGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            zhongGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            qianGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            duiGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            genGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            liGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
        },
        panJuResult: {
            kanGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            kunGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            zhenGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            xunGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            zhongGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            qianGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            duiGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            genGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
            liGong: {
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                ZhengGe: [],
                ZhengGeExplnation: [],
                FuGe: [],
                FuGeExplnation: [],
                shenSha: [],
            },
        },
    };
    let i = 0;
    Object.keys(result.panJuResult).forEach((gong) => {
        const gongObject = result.panJuResult[gong];
        gongObject.diPanGan = diPanGan[i];
        gongObject.tianPanGan = tianPanGan[i];
        gongObject.tianPanShen = tianPanShen[i];
        gongObject.diPanShen = diPanShen[i];
        gongObject.men = men[i];
        gongObject.xing = xing[i];
        gongObject.anGan = anGanZhi[i].charAt(0);
        gongObject.anZhi = anGanZhi[i].charAt(1);
        gongObject.gongWangShuai = gongWeiWangShuai[i];
        if (gongObject.diPanGan == kongWang[2]) {
            gongObject.diPanYiKong = true;
        }
        if (gongObject.tianPanGan == kongWang[2]) {
            gongObject.tianPanYiKong = true;
        }
        if (i == kongWang[0] || i == kongWang[1]) {
            gongObject.gongKong = true;
        }
        if (i == maXing) {
            gongObject.maXing = true;
        }
        i++;
    });
    if (shizhu == '甲戌' ||
        shizhu == '甲申' ||
        shizhu == '甲午' ||
        shizhu == '甲辰' ||
        shizhu == '甲寅') {
        const tianPanInformation = gatherTianPanInformation(result.panJuResult, xunShouGan);
        huanJu(result, tianPanInformation, shizhu.charAt(0), diPanGan);
    }
    return result;
}
function huanJu(originalPanJu, tianPanInformation, shigan, diPanGan) {
    let result = originalPanJu;
    let i = 0;
    let rearrangedTianPan;
    let diPanWuPosition = 0;
    for (let j = 0; j < 9; j++) {
        if (diPanGan[j] == '戊') {
            diPanWuPosition = j;
            break;
        }
    }
    switch (diPanWuPosition) {
        default:
            rearrangedTianPan = tianPanInformation;
            break;
        case 1:
            rearrangedTianPan = tianPanInformation
                .slice(8)
                .concat(tianPanInformation.slice(0, 8));
            break;
        case 2:
            rearrangedTianPan = tianPanInformation
                .slice(7)
                .concat(tianPanInformation.slice(0, 7));
            break;
        case 3:
            rearrangedTianPan = tianPanInformation
                .slice(6)
                .concat(tianPanInformation.slice(0, 6));
            break;
        case 4:
            rearrangedTianPan = tianPanInformation
                .slice(5)
                .concat(tianPanInformation.slice(0, 5));
            break;
        case 5:
            rearrangedTianPan = tianPanInformation
                .slice(4)
                .concat(tianPanInformation.slice(0, 4));
            break;
        case 6:
            rearrangedTianPan = tianPanInformation
                .slice(3)
                .concat(tianPanInformation.slice(0, 3));
            break;
        case 7:
            rearrangedTianPan = tianPanInformation
                .slice(2)
                .concat(tianPanInformation.slice(0, 2));
            break;
        case 8:
            rearrangedTianPan = tianPanInformation
                .slice(1)
                .concat(tianPanInformation.slice(0, 1));
            break;
    }
    Object.keys(result.huanJu).forEach((key) => {
        const huanJu = result.huanJu[key];
        const panJu = result.panJuResult[key];
        huanJu.gongWangShuai = panJu.gongWangShuai;
        huanJu.maXing = panJu.maXing;
        huanJu.gongKong = panJu.gongKong;
        huanJu.diPanYiKong = panJu.diPanYiKong;
        huanJu.diPanShen = panJu.diPanShen;
        huanJu.tianPanYiKong = rearrangedTianPan[i].tianPanYiKong;
        huanJu.tianPanShen = rearrangedTianPan[i].tianPanShen;
        huanJu.xing = rearrangedTianPan[i].xing;
        huanJu.tianPanGan = rearrangedTianPan[i].tianPanGan;
        huanJu.men = panJu.men;
        huanJu.diPanGan = panJu.diPanGan;
        huanJu.anGan = panJu.anGan;
        huanJu.anZhi = panJu.anZhi;
        huanJu.ZhengGe = panJu.ZhengGe;
        huanJu.ZhengGeExplnation = panJu.ZhengGeExplnation;
        huanJu.FuGe = panJu.FuGe;
        huanJu.FuGeExplnation = panJu.FuGeExplnation;
        huanJu.shenSha = panJu.shenSha;
        i++;
    });
    return result;
}
function gatherTianPanInformation(panJu, xunShouGan) {
    const result = [];
    let xunShouPosition = 0;
    Object.keys(panJu).forEach((key) => {
        const gong = panJu[key];
        const extractedInfo = {
            tianPanShen: gong.tianPanShen,
            xing: gong.xing,
            tianPanGan: gong.tianPanGan,
            tianPanYiKong: gong.tianPanYiKong,
        };
        result.push(extractedInfo);
    });
    for (let i = 0; i < 9; i++) {
        if (xunShouGan == result[i].tianPanGan) {
            xunShouPosition = i;
            break;
        }
    }
    return result
        .slice(xunShouPosition)
        .concat(result.slice(0, xunShouPosition));
}
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
                '中门',
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
                '中门',
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
                '中门',
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
                '中门',
                '开门',
                '惊门',
                '生门',
                '景门',
                '休门',
                '死门',
                '伤门',
            ];
            break;
        case '中门':
            baMenList = [
                '中门',
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
                '中门',
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
                '中门',
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
                '中门',
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
                '中门',
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
                '中门',
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
