"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putInFuGe = putInFuGe;
const feiPanGeJu_1 = require("./feiPanGeJu");
function putInFuGe(panJu) {
    let result = panJu;
    Object.keys(result).forEach((object) => {
        const gong = result[object];
        const fuGeResult = getFuGe(gong.tianPanGan, gong.diPanGan, gong.men, gong.xing, gong.baGua);
        gong.fuGe.ganGong = fuGeResult.ganGong;
        gong.fuGe.menGong = fuGeResult.menGong;
        gong.fuGe.xingGong = fuGeResult.xingGong;
    });
    return result;
}
function getFuGe(tianPanGan, diPanGan, men, xing, gong) {
    let result = {
        ganGong: "",
        menGong: "",
        xingGong: "",
    };
    if ((tianPanGan == "甲" && diPanGan == "乙") ||
        (tianPanGan == "乙" && diPanGan == "甲")) {
        switch (gong) {
            case "乾":
                result.ganGong = feiPanGeJu_1.fuGe.liFa;
                break;
            case "兑":
                result.ganGong = feiPanGeJu_1.fuGe.liFa;
                break;
            case "离":
                result.ganGong = feiPanGeJu_1.fuGe.fenLin;
                break;
            case "震":
                result.ganGong = feiPanGeJu_1.fuGe.quZhi;
                break;
            case "巽":
                result.ganGong = feiPanGeJu_1.fuGe.quZhi;
                break;
            case "坎":
                result.ganGong = feiPanGeJu_1.fuGe.taiXi;
                break;
            case "艮":
                result.ganGong = feiPanGeJu_1.fuGe.xinChuang;
                break;
            case "坤":
                result.ganGong = feiPanGeJu_1.fuGe.xinChuang;
                break;
            case "中":
                result.ganGong = feiPanGeJu_1.fuGe.xinChuang;
                break;
        }
    }
    else if ((tianPanGan == "丙" && diPanGan == "丁") ||
        (tianPanGan == "丁" && diPanGan == "丙")) {
        switch (gong) {
            case "乾":
                result.ganGong = feiPanGeJu_1.fuGe.douLi;
                break;
            case "兑":
                result.ganGong = feiPanGeJu_1.fuGe.douLi;
                break;
            case "离":
                result.ganGong = feiPanGeJu_1.fuGe.yanShang;
                break;
            case "震":
                result.ganGong = feiPanGeJu_1.fuGe.zengHui;
                break;
            case "巽":
                result.ganGong = feiPanGeJu_1.fuGe.zengHui;
                break;
            case "坎":
                result.ganGong = feiPanGeJu_1.fuGe.yanMu;
                break;
            case "艮":
                result.ganGong = feiPanGeJu_1.fuGe.shiGuang;
                break;
            case "坤":
                result.ganGong = feiPanGeJu_1.fuGe.shiGuang;
                break;
            case "中":
                result.ganGong = feiPanGeJu_1.fuGe.shiGuang;
                break;
        }
    }
    else if ((tianPanGan == "戊" && diPanGan == "己") ||
        (tianPanGan == "己" && diPanGan == "戊")) {
        switch (gong) {
            case "乾":
                result.ganGong = feiPanGeJu_1.fuGe.jueJing;
                break;
            case "兑":
                result.ganGong = feiPanGeJu_1.fuGe.jueJing;
                break;
            case "离":
                result.ganGong = feiPanGeJu_1.fuGe.bianXiang;
                break;
            case "震":
                result.ganGong = feiPanGeJu_1.fuGe.huaiTi;
                break;
            case "巽":
                result.ganGong = feiPanGeJu_1.fuGe.huaiTi;
                break;
            case "坎":
                result.ganGong = feiPanGeJu_1.fuGe.poShui;
                break;
            case "艮":
                result.ganGong = feiPanGeJu_1.fuGe.jiaSe;
                break;
            case "坤":
                result.ganGong = feiPanGeJu_1.fuGe.jiaSe;
                break;
            case "中":
                result.ganGong = feiPanGeJu_1.fuGe.jiaSe;
                break;
        }
    }
    else if ((tianPanGan == "庚" && diPanGan == "辛") ||
        (tianPanGan == "辛" && diPanGan == "庚")) {
        switch (gong) {
            case "乾":
                result.ganGong = feiPanGeJu_1.fuGe.congGe;
                break;
            case "兑":
                result.ganGong = feiPanGeJu_1.fuGe.congGe;
                break;
            case "离":
                result.ganGong = feiPanGeJu_1.fuGe.biKou;
                break;
            case "震":
                result.ganGong = feiPanGeJu_1.fuGe.fengRen;
                break;
            case "巽":
                result.ganGong = feiPanGeJu_1.fuGe.fengRen;
                break;
            case "坎":
                result.ganGong = feiPanGeJu_1.fuGe.xiejin;
                break;
            case "艮":
                result.ganGong = feiPanGeJu_1.fuGe.yangWei;
                break;
            case "坤":
                result.ganGong = feiPanGeJu_1.fuGe.yangWei;
                break;
            case "中":
                result.ganGong = feiPanGeJu_1.fuGe.yangWei;
                break;
        }
    }
    else if ((tianPanGan == "壬" && diPanGan == "癸") ||
        (tianPanGan == "癸" && diPanGan == "壬")) {
        switch (gong) {
            case "乾":
                result.ganGong = feiPanGeJu_1.fuGe.tongGuan;
                break;
            case "兑":
                result.ganGong = feiPanGeJu_1.fuGe.tongGuan;
                break;
            case "离":
                result.ganGong = feiPanGeJu_1.fuGe.mieRun;
                break;
            case "震":
                result.ganGong = feiPanGeJu_1.fuGe.baiYuan;
                break;
            case "巽":
                result.ganGong = feiPanGeJu_1.fuGe.baiYuan;
                break;
            case "坎":
                result.ganGong = feiPanGeJu_1.fuGe.runXia;
                break;
            case "艮":
                result.ganGong = feiPanGeJu_1.fuGe.jueJi;
                break;
            case "坤":
                result.ganGong = feiPanGeJu_1.fuGe.jueJi;
                break;
            case "中":
                result.ganGong = feiPanGeJu_1.fuGe.jueJi;
                break;
        }
    }
    switch (men) {
        default:
            result.menGong = "";
            break;
        case "休门":
            switch (gong) {
                case "乾":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "兑":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "离":
                    result.menGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "震":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "巽":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "坎":
                    result.menGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "艮":
                    result.menGong = feiPanGeJu_1.fuGe.menShouZhi;
                    break;
                case "坤":
                    result.menGong = feiPanGeJu_1.fuGe.menShouZhi;
                    break;
                case "中":
                    result.menGong = feiPanGeJu_1.fuGe.menShouZhi;
                    break;
            }
            break;
        case "死门":
            switch (gong) {
                case "乾":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "兑":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "离":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "震":
                    result.menGong = feiPanGeJu_1.fuGe.menShouZhi;
                    break;
                case "巽":
                    result.menGong = feiPanGeJu_1.fuGe.menShouZhi;
                    break;
                case "坎":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
                case "艮":
                    result.menGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "坤":
                    result.menGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "中":
                    result.menGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
            }
            break;
        case "伤门":
            switch (gong) {
                case "乾":
                    result.menGong = feiPanGeJu_1.fuGe.menShouZhi;
                    break;
                case "兑":
                    result.menGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "离":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "震":
                    result.menGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "坎":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "艮":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
                case "坤":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
                case "中":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
            }
            break;
        case "杜门":
            switch (gong) {
                case "乾":
                    result.menGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "兑":
                    result.menGong = feiPanGeJu_1.fuGe.menShouZhi;
                    break;
                case "离":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "巽":
                    result.menGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "坎":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "艮":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
                case "坤":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
                case "中":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
            }
            break;
        case "开门":
            switch (gong) {
                case "乾":
                    result.menGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "离":
                    result.menGong = feiPanGeJu_1.fuGe.menShouZhi;
                    break;
                case "震":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
                case "巽":
                    result.menGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "坎":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "艮":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "坤":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "中":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
            }
            break;
        case "惊门":
            switch (gong) {
                case "兑":
                    result.menGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "离":
                    result.menGong = feiPanGeJu_1.fuGe.menShouZhi;
                    break;
                case "震":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
                case "巽":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
                case "坎":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "艮":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "坤":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "中":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
            }
            break;
        case "生门":
            switch (gong) {
                case "乾":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "兑":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "离":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "震":
                    result.menGong = feiPanGeJu_1.fuGe.menShouZhi;
                    break;
                case "巽":
                    result.menGong = feiPanGeJu_1.fuGe.menShouZhi;
                    break;
                case "坎":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
                case "艮":
                    result.menGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "坤":
                    result.menGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "中":
                    result.menGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
            }
            break;
        case "景门":
            switch (gong) {
                case "乾":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
                case "兑":
                    result.menGong = feiPanGeJu_1.fuGe.menPo;
                    break;
                case "离":
                    result.menGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "震":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "巽":
                    result.menGong = feiPanGeJu_1.fuGe.jieYi;
                    break;
                case "坎":
                    result.menGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "艮":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "坤":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
                case "中":
                    result.menGong = feiPanGeJu_1.fuGe.jiaoHe;
                    break;
            }
            break;
    }
    switch (xing) {
        default:
            switch (gong) {
                case "离":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "坎":
                    result.xingGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
            }
            break;
        case "天芮":
            switch (gong) {
                case "艮":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "坤":
                    result.xingGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "中":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
            }
            break;
        case "天冲":
            switch (gong) {
                case "兑":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "震":
                    result.xingGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
            }
            break;
        case "天辅":
            switch (gong) {
                case "乾":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "巽":
                    result.xingGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
            }
            break;
        case "天禽":
            switch (gong) {
                case "艮":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "坤":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "中":
                    result.xingGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
            }
            break;
        case "天心":
            switch (gong) {
                case "乾":
                    result.xingGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "巽":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
            }
            break;
        case "天柱":
            switch (gong) {
                case "兑":
                    result.xingGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "震":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
            }
            break;
        case "天任":
            switch (gong) {
                case "艮":
                    result.xingGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "坤":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
                case "中":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
            }
            break;
        case "天英":
            switch (gong) {
                case "离":
                    result.xingGong = feiPanGeJu_1.fuGe.fuYin;
                    break;
                case "坎":
                    result.xingGong = feiPanGeJu_1.fuGe.fanYin;
                    break;
            }
            break;
    }
    return result;
}
