"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paiFeiPan = paiFeiPan;
const commonPaipanFunctions_1 = require("../common-methods/commonPaipanFunctions");
const commonInfo_1 = require("../common-methods/commonInfo");
const paiPanZhongXinXi_1 = require("./paiPanZhongXinXi");
const huanJu_1 = require("./huanJu");
const zhengGe_1 = require("./zhengGe");
const fuGe_1 = require("./fuGe");
const zhangSheng_1 = require("./zhangSheng");
const shenSha_1 = require("./shenSha");
const getLiuQin_1 = __importDefault(require("./getLiuQin"));
const inputSymboleInfo_1 = require("./inputSymboleInfo");
const traditionalCharacter_1 = require("./traditionalCharacter");
const singleCharacter_1 = require("./singleCharacter");
function paiFeiPan({ year, month, date, hour, minute, nianzhu, yuezhu, rizhu, shizhu, jieqi, dun, jushu, }, additionalSetting) {
    const xunShou = (0, commonPaipanFunctions_1.zhaoXunShou)(shizhu, commonInfo_1.liushijiazi);
    const xunShouGan = (0, commonPaipanFunctions_1.findXunShouGan)(xunShou);
    const diPanGan = (0, commonPaipanFunctions_1.paiDiPanGan)(dun, jushu);
    const fuShi = (0, commonPaipanFunctions_1.dingFuShi)(diPanGan, xunShou);
    const anGanZhi = (0, commonPaipanFunctions_1.paiAnGanZhi)(xunShou, diPanGan, dun);
    const zhiShiPosition = (0, paiPanZhongXinXi_1.getZhiShiPosition)(anGanZhi, shizhu);
    const men = (0, paiPanZhongXinXi_1.paiBaMen)(fuShi.zhishi, zhiShiPosition);
    const xing = (0, paiPanZhongXinXi_1.paiXing)(fuShi.zhifu, diPanGan, shizhu);
    const diPanShen = (0, paiPanZhongXinXi_1.paiDiPanShen)(xunShouGan, dun, diPanGan);
    const tianPanShen = (0, paiPanZhongXinXi_1.paiTianPanShen)(fuShi.zhifu, dun, xing);
    const tianPanGan = (0, paiPanZhongXinXi_1.paiTianPanGan)(fuShi.zhifu, dun, xing, xunShou);
    const gongWeiWangShuai = (0, commonPaipanFunctions_1.gongWangShuai)(jieqi, true);
    const maXing = (0, commonPaipanFunctions_1.getMaXing)(shizhu.charAt(1));
    const kongWang = (0, commonPaipanFunctions_1.getKongWang)(xunShou, true);
    let wangGong = "";
    let result = initializeJiuGong(year, month, date, hour, minute, nianzhu, yuezhu, rizhu, shizhu, jieqi, dun, jushu, xunShou, fuShi.zhifu, fuShi.zhishi);
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
        if (gongObject.gongWangShuai == "旺" && gongObject.baGua != "中") {
            wangGong = gongObject.baGua;
        }
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
        if (gongObject.tianPanShen == "值符") {
            gongObject.cangTianPanJia = true;
        }
        if (gongObject.diPanShen == "值符") {
            gongObject.cangDiPanJia = true;
        }
        i++;
    });
    result.panJuResult = (0, zhengGe_1.putInZhengGe)(result.panJuResult);
    result.panJuResult = (0, getLiuQin_1.default)(result.allTimeInformation.shizhu.charAt(0), result.panJuResult);
    result.panJuResult = (0, zhangSheng_1.putInZhangSheng)(result.panJuResult);
    result.panJuResult = (0, fuGe_1.putInFuGe)(result.panJuResult);
    result.panJuResult = (0, shenSha_1.putInShenSha)(result.panJuResult, result.allTimeInformation);
    result.panJuResult = (0, inputSymboleInfo_1.inputSymboleInfo)(result.panJuResult, result.allTimeInformation.shizhu.charAt(1));
    if (shizhu == "甲戌" ||
        shizhu == "甲申" ||
        shizhu == "甲午" ||
        shizhu == "甲辰" ||
        shizhu == "甲寅") {
        const tianPanInformation = (0, huanJu_1.gatherTianPanInformation)(result.panJuResult, xunShouGan);
        result = (0, huanJu_1.huanJu)(result, tianPanInformation, diPanGan);
        result.huanJu = (0, getLiuQin_1.default)(result.allTimeInformation.shizhu.charAt(0), result.huanJu);
        result.huanJu = (0, zhengGe_1.putInZhengGe)(result.huanJu);
        result.huanJu = (0, zhangSheng_1.putInZhangSheng)(result.huanJu);
        result.huanJu = (0, fuGe_1.putInFuGe)(result.huanJu);
        result.huanJu = (0, inputSymboleInfo_1.inputSymboleInfo)(result.huanJu, result.allTimeInformation.shizhu.charAt(1));
    }
    if (additionalSetting.traditionalCharacters) {
        result.panJuResult = (0, traditionalCharacter_1.toTraditionalCharacter)(result.panJuResult);
        result.zhiShi = (0, traditionalCharacter_1.menToTraditionalCharacter)(result.zhiShi);
        result.zhiFu = (0, traditionalCharacter_1.xingToTraditionalCharacter)(result.zhiFu);
        if (result.huanJu.kanGong.tianPanGan != "") {
            result.huanJu = (0, traditionalCharacter_1.toTraditionalCharacter)(result.huanJu);
        }
    }
    if (additionalSetting.singleCharacter) {
        result.panJuResult = (0, singleCharacter_1.toSingleCharacter)(result.panJuResult);
        if (result.huanJu.kanGong.tianPanGan != "") {
            result.huanJu = (0, singleCharacter_1.toSingleCharacter)(result.huanJu);
        }
    }
    return result;
}
function initializeJiuGong(year, month, date, hour, minute, nianzhu, yuezhu, rizhu, shizhu, jieqi, dun, jushu, xunShou, zhiFu, zhiShi) {
    return {
        allTimeInformation: {
            year: year,
            month: month,
            date: date,
            hour: hour,
            minute: minute,
            nianzhu: nianzhu,
            yuezhu: yuezhu,
            rizhu: rizhu,
            shizhu: shizhu,
            jieqi: jieqi,
            dun: dun,
            jushu: jushu,
        },
        xunShou: xunShou,
        zhiFu: zhiFu,
        zhiShi: zhiShi,
        huanJu: {
            kanGong: {
                baGua: "坎",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            kunGong: {
                baGua: "坤",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            zhenGong: {
                baGua: "震",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            xunGong: {
                baGua: "巽",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            zhongGong: {
                baGua: "中",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            qianGong: {
                baGua: "乾",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            duiGong: {
                baGua: "兑",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            genGong: {
                baGua: "艮",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            liGong: {
                baGua: "离",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
        },
        panJuResult: {
            kanGong: {
                baGua: "坎",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            kunGong: {
                baGua: "坤",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            zhenGong: {
                baGua: "震",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            xunGong: {
                baGua: "巽",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            zhongGong: {
                baGua: "中",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            qianGong: {
                baGua: "乾",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            duiGong: {
                baGua: "兑",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            genGong: {
                baGua: "艮",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
            liGong: {
                baGua: "离",
                gongWangShuai: "",
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: "",
                diPanShen: "",
                xing: "",
                men: "",
                tianPanGan: "",
                diPanGan: "",
                anGan: "",
                anZhi: "",
                zhengGe: [],
                tianPanGanLiuQin: "",
                diPanGanLiuQin: "",
                tianPanGanShiShen: "",
                diPanGanShiShen: "",
                fuGe: {
                    ganGong: "",
                    menGong: "",
                    xingGong: "",
                },
                symboleInfo: {
                    xing: "",
                    men: "",
                    shen: "",
                    tianPanGan: "",
                    diPanGan: "",
                    gong: "",
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
        },
    };
}
