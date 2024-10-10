import {
    paiDiPanGan,
    zhaoXunShou,
    dingFuShi,
    paiAnGanZhi,
    findXunShouGan,
    rearrangeArray,
    gongWangShuai,
    getMaXing,
    getKongWang,
} from "../common-methods/commonPaipanFunctions";
import { liushijiazi } from "../common-methods/commonInfo";
import {
    zhengGe,
    fuGe,
    shenSha,
    xingInfo,
    menInfo,
    shenInfo,
} from "./feiPanGeJu";
import {
    getZhiShiPosition,
    paiBaMen,
    paiDiPanShen,
    paiTianPanGan,
    paiTianPanShen,
    paiXing,
} from "./paiPanZhongXinXi";
import { gatherTianPanInformation, huanJu } from "./huanJu";
import { putInZhengGe } from "./zhengGe";
import { FullTimeInformation, PanJuInformation } from "./interfaces";
import { putInZhangSheng } from "./zhangSheng";

export function paiFeiPan({
    nianzhu,
    yuezhu,
    rizhu,
    shizhu,
    jieqi,
    dun,
    jushu,
}: FullTimeInformation): PanJuInformation {
    const xunShou = zhaoXunShou(shizhu, liushijiazi)!;
    const xunShouGan = findXunShouGan(xunShou);
    const diPanGan = paiDiPanGan(dun, jushu)!;
    const fuShi = dingFuShi(diPanGan, xunShou)!;
    const anGanZhi = paiAnGanZhi(xunShou, diPanGan, dun)!;
    const zhiShiPosition = getZhiShiPosition(anGanZhi, shizhu)!;
    const men = paiBaMen(fuShi.zhishi, zhiShiPosition)!;
    const xing = paiXing(fuShi.zhifu, diPanGan, shizhu)!;
    const diPanShen = paiDiPanShen(xunShouGan, dun, diPanGan)!;
    const tianPanShen = paiTianPanShen(fuShi.zhifu, dun, xing)!;
    const tianPanGan = paiTianPanGan(fuShi.zhifu, dun, xing, xunShou);
    const gongWeiWangShuai = gongWangShuai(jieqi, true)!;
    const maXing = getMaXing(shizhu.charAt(1));
    const kongWang = getKongWang(xunShou, true);
    let wangGong = "";

    let result: PanJuInformation = {
        allTimeInformation: {
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
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
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: "",
                diPanGanZhangSheng: "",
            },
        },
    };

    let i = 0;

    Object.keys(result.panJuResult).forEach((gong) => {
        const gongObject =
            result.panJuResult[gong as keyof typeof result.panJuResult];
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

    // 重排甲时局
    if (
        shizhu == "甲戌" ||
        shizhu == "甲申" ||
        shizhu == "甲午" ||
        shizhu == "甲辰" ||
        shizhu == "甲寅"
    ) {
        const tianPanInformation = gatherTianPanInformation(
            result.panJuResult,
            xunShouGan,
        );
        result = huanJu(result, tianPanInformation, diPanGan);
    }
    result.panJuResult = putInZhengGe(result.panJuResult); // 给盘踞信息添加正格信息
    result.panJuResult = putInZhangSheng(result.panJuResult); // 给盘踞信息添加长生信息
    if (result.huanJu.kanGong.tianPanGan != "") {
        result.huanJu = putInZhengGe(result.huanJu); // 给盘踞信息添加正格信息
        result.huanJu = putInZhangSheng(result.huanJu); // 给盘踞信息添加长生信息
    }
    return result;
}
