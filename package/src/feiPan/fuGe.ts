import { fuGe } from './feiPanGeJu';
import { JiuGongXinXi } from './interfaces';

export function putInFuGe(panJu: JiuGongXinXi) {
    let result = panJu;
    Object.keys(result).forEach((object) => {
        const gong = result[object as keyof typeof result];
        const fuGeResult = getFuGe(
            gong.tianPanGan,
            gong.diPanGan,
            gong.men,
            gong.xing,
            gong.baGua,
        );
        gong.fuGe.ganGong = fuGeResult.ganGong;
        gong.fuGe.menGong = fuGeResult.menGong;
        gong.fuGe.xingGong = fuGeResult.xingGong;
    });
    return result;
}

function getFuGe(
    tianPanGan: string,
    diPanGan: string,
    men: string,
    xing: string,
    gong: string,
) {
    let result = {
        ganGong: '',
        menGong: '',
        xingGong: '',
    };

    // 干宫
    if (
        (tianPanGan == '甲' && diPanGan == '乙') ||
        (tianPanGan == '乙' && diPanGan == '甲')
    ) {
        switch (gong) {
            case '乾':
                result.ganGong = fuGe.liFa;
                break;
            case '兑':
                result.ganGong = fuGe.liFa;
                break;
            case '离':
                result.ganGong = fuGe.fenLin;
                break;
            case '震':
                result.ganGong = fuGe.quZhi;
                break;
            case '巽':
                result.ganGong = fuGe.quZhi;
                break;
            case '坎':
                result.ganGong = fuGe.taiXi;
                break;
            case '艮':
                result.ganGong = fuGe.xinChuang;
                break;
            case '坤':
                result.ganGong = fuGe.xinChuang;
                break;
            case '中':
                result.ganGong = fuGe.xinChuang;
                break;
        }
    } else if (
        (tianPanGan == '丙' && diPanGan == '丁') ||
        (tianPanGan == '丁' && diPanGan == '丙')
    ) {
        switch (gong) {
            case '乾':
                result.ganGong = fuGe.douLi;
                break;
            case '兑':
                result.ganGong = fuGe.douLi;
                break;
            case '离':
                result.ganGong = fuGe.yanShang;
                break;
            case '震':
                result.ganGong = fuGe.zengHui;
                break;
            case '巽':
                result.ganGong = fuGe.zengHui;
                break;
            case '坎':
                result.ganGong = fuGe.yanMu;
                break;
            case '艮':
                result.ganGong = fuGe.shiGuang;
                break;
            case '坤':
                result.ganGong = fuGe.shiGuang;
                break;
            case '中':
                result.ganGong = fuGe.shiGuang;
                break;
        }
    } else if (
        (tianPanGan == '戊' && diPanGan == '己') ||
        (tianPanGan == '己' && diPanGan == '戊')
    ) {
        switch (gong) {
            case '乾':
                result.ganGong = fuGe.jueJing;
                break;
            case '兑':
                result.ganGong = fuGe.jueJing;
                break;
            case '离':
                result.ganGong = fuGe.bianXiang;
                break;
            case '震':
                result.ganGong = fuGe.huaiTi;
                break;
            case '巽':
                result.ganGong = fuGe.huaiTi;
                break;
            case '坎':
                result.ganGong = fuGe.poShui;
                break;
            case '艮':
                result.ganGong = fuGe.jiaSe;
                break;
            case '坤':
                result.ganGong = fuGe.jiaSe;
                break;
            case '中':
                result.ganGong = fuGe.jiaSe;
                break;
        }
    } else if (
        (tianPanGan == '庚' && diPanGan == '辛') ||
        (tianPanGan == '辛' && diPanGan == '庚')
    ) {
        switch (gong) {
            case '乾':
                result.ganGong = fuGe.congGe;
                break;
            case '兑':
                result.ganGong = fuGe.congGe;
                break;
            case '离':
                result.ganGong = fuGe.biKou;
                break;
            case '震':
                result.ganGong = fuGe.fengRen;
                break;
            case '巽':
                result.ganGong = fuGe.fengRen;
                break;
            case '坎':
                result.ganGong = fuGe.xiejin;
                break;
            case '艮':
                result.ganGong = fuGe.yangWei;
                break;
            case '坤':
                result.ganGong = fuGe.yangWei;
                break;
            case '中':
                result.ganGong = fuGe.yangWei;
                break;
        }
    } else if (
        (tianPanGan == '壬' && diPanGan == '癸') ||
        (tianPanGan == '癸' && diPanGan == '壬')
    ) {
        switch (gong) {
            case '乾':
                result.ganGong = fuGe.tongGuan;
                break;
            case '兑':
                result.ganGong = fuGe.tongGuan;
                break;
            case '离':
                result.ganGong = fuGe.mieRun;
                break;
            case '震':
                result.ganGong = fuGe.baiYuan;
                break;
            case '巽':
                result.ganGong = fuGe.baiYuan;
                break;
            case '坎':
                result.ganGong = fuGe.runXia;
                break;
            case '艮':
                result.ganGong = fuGe.jueJi;
                break;
            case '坤':
                result.ganGong = fuGe.jueJi;
                break;
            case '中':
                result.ganGong = fuGe.jueJi;
                break;
        }
    }

    // 门宫
    switch (men) {
        default:
            result.menGong = '';
            break;
        case '休门': // 默认休门
            switch (gong) {
                case '乾':
                    result.menGong = fuGe.jieYi;
                    break;
                case '兑':
                    result.menGong = fuGe.jieYi;
                    break;
                case '离':
                    result.menGong = fuGe.fanYin;
                    break;
                case '震':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '巽':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '坎':
                    result.menGong = fuGe.fuYin;
                    break;
                case '艮':
                    result.menGong = fuGe.menShouZhi;
                    break;
                case '坤':
                    result.menGong = fuGe.menShouZhi;
                    break;
                case '中':
                    result.menGong = fuGe.menShouZhi;
                    break;
            }
            break;
        case '死门':
            switch (gong) {
                case '乾':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '兑':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '离':
                    result.menGong = fuGe.jieYi;
                    break;
                case '震':
                    result.menGong = fuGe.menShouZhi;
                    break;
                case '巽':
                    result.menGong = fuGe.menShouZhi;
                    break;
                case '坎':
                    result.menGong = fuGe.menPo;
                    break;
                case '艮':
                    result.menGong = fuGe.fanYin;
                    break;
                case '坤':
                    result.menGong = fuGe.fuYin;
                    break;
                case '中':
                    result.menGong = fuGe.fanYin;
                    break;
            }
            break;
        case '伤门':
            switch (gong) {
                case '乾':
                    result.menGong = fuGe.menShouZhi;
                    break;
                case '兑':
                    result.menGong = fuGe.fanYin;
                    break;
                case '离':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '震':
                    result.menGong = fuGe.fuYin;
                    break;
                case '坎':
                    result.menGong = fuGe.jieYi;
                    break;
                case '艮':
                    result.menGong = fuGe.menPo;
                    break;
                case '坤':
                    result.menGong = fuGe.menPo;
                    break;
                case '中':
                    result.menGong = fuGe.menPo;
                    break;
            }
            break;
        case '杜门':
            switch (gong) {
                case '乾':
                    result.menGong = fuGe.fanYin;
                    break;
                case '兑':
                    result.menGong = fuGe.menShouZhi;
                    break;
                case '离':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '巽':
                    result.menGong = fuGe.fuYin;
                    break;
                case '坎':
                    result.menGong = fuGe.jieYi;
                    break;
                case '艮':
                    result.menGong = fuGe.menPo;
                    break;
                case '坤':
                    result.menGong = fuGe.menPo;
                    break;
                case '中':
                    result.menGong = fuGe.menPo;
                    break;
            }
            break;
        case '开门':
            switch (gong) {
                case '乾':
                    result.menGong = fuGe.fuYin;
                    break;
                case '离':
                    result.menGong = fuGe.menShouZhi;
                    break;
                case '震':
                    result.menGong = fuGe.menPo;
                    break;
                case '巽':
                    result.menGong = fuGe.fanYin;
                    break;
                case '坎':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '艮':
                    result.menGong = fuGe.jieYi;
                    break;
                case '坤':
                    result.menGong = fuGe.jieYi;
                    break;
                case '中':
                    result.menGong = fuGe.jieYi;
                    break;
            }
            break;
        case '惊门':
            switch (gong) {
                case '兑':
                    result.menGong = fuGe.fuYin;
                    break;
                case '离':
                    result.menGong = fuGe.menShouZhi;
                    break;
                case '震':
                    result.menGong = fuGe.menPo;
                    break;
                case '巽':
                    result.menGong = fuGe.menPo;
                    break;
                case '坎':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '艮':
                    result.menGong = fuGe.jieYi;
                    break;
                case '坤':
                    result.menGong = fuGe.jieYi;
                    break;
                case '中':
                    result.menGong = fuGe.jieYi;
                    break;
            }
            break;
        case '生门':
            switch (gong) {
                case '乾':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '兑':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '离':
                    result.menGong = fuGe.jieYi;
                    break;
                case '震':
                    result.menGong = fuGe.menShouZhi;
                    break;
                case '巽':
                    result.menGong = fuGe.menShouZhi;
                    break;
                case '坎':
                    result.menGong = fuGe.menPo;
                    break;
                case '艮':
                    result.menGong = fuGe.fuYin;
                    break;
                case '坤':
                    result.menGong = fuGe.fanYin;
                    break;
                case '中':
                    result.menGong = fuGe.fanYin;
                    break;
            }
            break;
        case '景门':
            switch (gong) {
                case '乾':
                    result.menGong = fuGe.menPo;
                    break;
                case '兑':
                    result.menGong = fuGe.menPo;
                    break;
                case '离':
                    result.menGong = fuGe.fuYin;
                    break;
                case '震':
                    result.menGong = fuGe.jieYi;
                    break;
                case '巽':
                    result.menGong = fuGe.jieYi;
                    break;
                case '坎':
                    result.menGong = fuGe.fanYin;
                    break;
                case '艮':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '坤':
                    result.menGong = fuGe.jiaoHe;
                    break;
                case '中':
                    result.menGong = fuGe.jiaoHe;
                    break;
            }
            break;
    }

    // 星宫
    switch (xing) {
        default: // 默认天蓬
            switch (gong) {
                case '离':
                    result.xingGong = fuGe.fanYin;
                    break;
                case '坎':
                    result.xingGong = fuGe.fuYin;
                    break;
            }
            break;
        case '天芮':
            switch (gong) {
                case '艮':
                    result.xingGong = fuGe.fanYin;
                    break;
                case '坤':
                    result.xingGong = fuGe.fuYin;
                    break;
                case '中':
                    result.xingGong = fuGe.fanYin;
                    break;
            }
            break;
        case '天冲':
            switch (gong) {
                case '兑':
                    result.xingGong = fuGe.fanYin;
                    break;
                case '震':
                    result.xingGong = fuGe.fuYin;
                    break;
            }
            break;
        case '天辅':
            switch (gong) {
                case '乾':
                    result.xingGong = fuGe.fanYin;
                    break;
                case '巽':
                    result.xingGong = fuGe.fuYin;
                    break;
            }
            break;
        case '天禽':
            switch (gong) {
                case '艮':
                    result.xingGong = fuGe.fanYin;
                    break;
                case '坤':
                    result.xingGong = fuGe.fanYin;
                    break;
                case '中':
                    result.xingGong = fuGe.fuYin;
                    break;
            }
            break;
        case '天心':
            switch (gong) {
                case '乾':
                    result.xingGong = fuGe.fuYin;
                    break;
                case '巽':
                    result.xingGong = fuGe.fanYin;
                    break;
            }
            break;
        case '天柱':
            switch (gong) {
                case '兑':
                    result.xingGong = fuGe.fuYin;
                    break;
                case '震':
                    result.xingGong = fuGe.fanYin;
                    break;
            }
            break;
        case '天任':
            switch (gong) {
                case '艮':
                    result.xingGong = fuGe.fuYin;
                    break;
                case '坤':
                    result.xingGong = fuGe.fanYin;
                    break;
                case '中':
                    result.xingGong = fuGe.fanYin;
                    break;
            }
            break;
        case '天英':
            switch (gong) {
                case '离':
                    result.xingGong = fuGe.fuYin;
                    break;
                case '坎':
                    result.xingGong = fuGe.fanYin;
                    break;
            }
            break;
    }
    return result;
}
