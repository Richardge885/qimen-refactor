import { paiDiPanGan, zhaoXunShou, dingFuShi, paiAnGanZhi } from './commonPaipanFunctions';
import { liushijiazi } from './commonInfo';

interface FullTimeInformation {
    date: string,
    time: string,
    nianzhu: string,
    yuezhu: string,
    rizhu: string,
    shizhu: string,
    jieqi: string,
    dun: string,
    jushu: string,
}

interface PanJuInformation {
    allTimeInformation: FullTimeInformation,
    zhiFu: string,
    zhiShi: string,
    panJuResult: {
        gong1: {
            gongWangShuai: string;
            tianPanShen: string,
            diPanShen: string,
            xing: string,
            men: string,
            tianPanGan: string,
            diPanGan: string,
            anGan: string,
            anZhi: string,
            ZhengGe: string,
            ZhengGeExplnation: string,
            FuGe: string,
            FuGeExplnation: string,
            shenSha: [];
        },
        gong2: {
            gongWangShuai: string;
            tianPanShen: string,
            diPanShen: string,
            xing: string,
            men: string,
            tianPanGan: string,
            diPanGan: string,
            anGan: string,
            anZhi: string,
            ZhengGe: string,
            ZhengGeExplnation: string,
            FuGe: string,
            FuGeExplnation: string,
            shenSha: [];
        },
        gong3: {
            gongWangShuai: string;
            tianPanShen: string,
            diPanShen: string,
            xing: string,
            men: string,
            tianPanGan: string,
            diPanGan: string,
            anGan: string,
            anZhi: string,
            ZhengGe: string,
            ZhengGeExplnation: string,
            FuGe: string,
            FuGeExplnation: string,
            shenSha: [];
        },
        gong4: {
            gongWangShuai: string;
            tianPanShen: string,
            diPanShen: string,
            xing: string,
            men: string,
            tianPanGan: string,
            diPanGan: string,
            anGan: string,
            anZhi: string,
            ZhengGe: string,
            ZhengGeExplnation: string,
            FuGe: string,
            FuGeExplnation: string,
            shenSha: [];
        },
        gong5: {
            gongWangShuai: string;
            tianPanShen: string,
            diPanShen: string,
            xing: string,
            men: string,
            tianPanGan: string,
            diPanGan: string,
            anGan: string,
            anZhi: string,
            ZhengGe: string,
            ZhengGeExplnation: string,
            FuGe: string,
            FuGeExplnation: string,
            shenSha: [];
        },
        gong6: {
            gongWangShuai: string;
            tianPanShen: string,
            diPanShen: string,
            xing: string,
            men: string,
            tianPanGan: string,
            diPanGan: string,
            anGan: string,
            anZhi: string,
            ZhengGe: string,
            ZhengGeExplnation: string,
            FuGe: string,
            FuGeExplnation: string,
            shenSha: [];
        },
        gong7: {
            gongWangShuai: string;
            tianPanShen: string,
            diPanShen: string,
            xing: string,
            men: string,
            tianPanGan: string,
            diPanGan: string,
            anGan: string,
            anZhi: string,
            ZhengGe: string,
            ZhengGeExplnation: string,
            FuGe: string,
            FuGeExplnation: string,
            shenSha: [];
        },
        gong8: {
            gongWangShuai: string;
            tianPanShen: string,
            diPanShen: string,
            xing: string,
            men: string,
            tianPanGan: string,
            diPanGan: string,
            anGan: string,
            anZhi: string,
            ZhengGe: string,
            ZhengGeExplnation: string,
            FuGe: string,
            FuGeExplnation: string,
            shenSha: [];
        },
        gong9: {
            gongWangShuai: string;
            tianPanShen: string,
            diPanShen: string,
            xing: string,
            men: string,
            tianPanGan: string,
            diPanGan: string,
            anGan: string,
            anZhi: string,
            ZhengGe: string,
            ZhengGeExplnation: string,
            FuGe: string,
            FuGeExplnation: string,
            shenSha: [];
        };
    };
}

export function feiPan({
    date,
    time,
    nianzhu,
    yuezhu,
    rizhu,
    shizhu,
    jieqi,
    dun,
    jushu,
}: FullTimeInformation) {

    const diPanGanList = paiDiPanGan(dun, jushu)!; // return array starting from 坎一宫
    const xunShou = zhaoXunShou(shizhu, liushijiazi)!;
    const fuShi = dingFuShi(diPanGanList, xunShou)!;
    const anGanZhi = paiAnGanZhi(xunShou, diPanGanList, dun)!;
    const zhiShiPosition = getZhiShiPosition(anGanZhi, shizhu)!;
    const baMen = paiBaMen(fuShi.zhishi, zhiShiPosition)!;
    const xing = paiXing(fuShi.zhifu, diPanGanList, dun, shizhu)!;
    console.log(anGanZhi)
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

function getZhiShiPosition(anGanZhi: string[], shizhu: string) {
    let position = 0;
    shizhu;
    for (let i = 0; i < 9; i++) {
        if (anGanZhi[i] == shizhu) {
            position = i;
        }
    }
    return position;
}

function paiBaMen(zhiShi: string, zhiShiPosition: number) {
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

function paiXing(zhiFu: string, diPanGanList: string[], dun: string, shizhu: string) {
    let xingList;
    let shigan;
    if (zhiFu == '天蓬') {
        xingList = ['天蓬', '天芮', '天冲', '天辅', '天禽', '天心', '天柱', '天任', '天英'];
    } else if (zhiFu == '天芮') {
        xingList = ['天芮', '天冲', '天辅', '天禽', '天心', '天柱', '天任', '天英', '天蓬'];
    } else if (zhiFu == '天冲') {
        xingList = ['天冲', '天辅', '天禽', '天心', '天柱', '天任', '天英', '天蓬', '天芮'];
    } else if (zhiFu == '天辅') {
        xingList = ['天辅', '天禽', '天心', '天柱', '天任', '天英', '天蓬', '天芮', '天冲'];
    } else if (zhiFu == '天禽') {
        xingList = ['天禽', '天心', '天柱', '天任', '天英', '天蓬', '天芮', '天冲', '天辅'];
    } else if (zhiFu == '天心') {
        xingList = ['天心', '天柱', '天任', '天英', '天蓬', '天芮', '天冲', '天辅', '天禽'];
    } else if (zhiFu == '天柱') {
        xingList = ['天柱', '天任', '天英', '天蓬', '天芮', '天冲', '天辅', '天禽', '天心'];
    } else if (zhiFu == '天任') {
        xingList = ['天任', '天英', '天蓬', '天芮', '天冲', '天辅', '天禽', '天心', '天柱'];
    } else if (zhiFu == '天英') {
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
    // if (dun == '阴') {
    //     switch (position) {
    //         default:
    //             position = 0;
    //             break;
    //         case 1:
    //             position = 8;
    //             break;
    //         case 2:
    //             position = 7;
    //             break;
    //         case 3:
    //             position = 6;
    //             break;
    //         case 4:
    //             position = 5;
    //             break;
    //         case 5:
    //             position = 4;
    //             break;
    //         case 6:
    //             position = 3;
    //             break;
    //         case 7:
    //             position = 2;
    //             break;
    //         case 8:
    //             position = 1;
    //             break;
    //     }
    // }
    let array = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < array.length; i++) {
        const index = (i + position) % array.length;
        array[index] = xingList![count];
        count++;
    }
    return array;
}

function paiTianPanShen() { }

function paiDiPanShen() { }
