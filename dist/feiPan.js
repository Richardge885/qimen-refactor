"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feiPan = feiPan;
const commonPaipanFunctions_1 = require("./commonPaipanFunctions");
const commonInfo_1 = require("./commonInfo");
const feiPanGeJu_1 = require("./feiPanGeJu");
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
    let wangGong = '';
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
                baGua: '坎',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            kunGong: {
                baGua: '坤',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhenGong: {
                baGua: '震',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            xunGong: {
                baGua: '巽',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhongGong: {
                baGua: '中',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            qianGong: {
                baGua: '乾',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            duiGong: {
                baGua: '兑',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            genGong: {
                baGua: '艮',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            liGong: {
                baGua: '离',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
        },
        panJuResult: {
            kanGong: {
                baGua: '坎',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            kunGong: {
                baGua: '坤',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhenGong: {
                baGua: '震',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            xunGong: {
                baGua: '巽',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhongGong: {
                baGua: '中',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            qianGong: {
                baGua: '乾',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            duiGong: {
                baGua: '兑',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            genGong: {
                baGua: '艮',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            liGong: {
                baGua: '离',
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
                zhengGe: [],
                fuGe: [],
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
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
        if (gongObject.gongWangShuai == '旺' && gongObject.baGua != '中') {
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
        if (gongObject.tianPanShen == '值符') {
            gongObject.cangTianPanJia = true;
        }
        if (gongObject.diPanShen == '值符') {
            gongObject.cangDiPanJia = true;
        }
        i++;
    });
    if (shizhu == '甲戌' ||
        shizhu == '甲申' ||
        shizhu == '甲午' ||
        shizhu == '甲辰' ||
        shizhu == '甲寅') {
        const tianPanInformation = gatherTianPanInformation(result.panJuResult, xunShouGan);
        result = huanJu(result, tianPanInformation, diPanGan);
    }
    result.panJuResult = putInZhengGe(result.panJuResult);
    return result;
}
function putInZhengGe(panJu) {
    let result = panJu;
    let geJu = [];
    Object.keys(result).forEach((object) => {
        const gong = result[object];
        geJu.push(getZhengGe(gong.tianPanGan + gong.diPanGan));
    });
    let i = 0;
    Object.keys(result).forEach((object) => {
        const gong = result[object];
        for (let j = 0; j < geJu[i].length; j++) {
            gong.zhengGe.push(geJu[i][j]);
        }
        i = i + 1;
    });
    return result;
}
function getZhengGe(zuHe) {
    let result = [];
    switch (zuHe) {
        default:
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.muFuYin;
            break;
        case '甲乙':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            break;
        case '甲丙':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.haoQi;
            break;
        case '甲丁':
            result[0] = feiPanGeJu_1.zhengGe.jiaoYin;
            break;
        case '甲戊':
            result[0] = feiPanGeJu_1.zhengGe.waiZhi;
            break;
        case '甲己':
            result[0] = feiPanGeJu_1.zhengGe.shangHe + '\n' + feiPanGeJu_1.zhengGe.heTu;
            result[1] = feiPanGeJu_1.zhengGe.waiQin;
            break;
        case '甲庚':
            result[0] = feiPanGeJu_1.zhengGe.beiChong + '\n' + feiPanGeJu_1.zhengGe.muChong;
            result[1] = feiPanGeJu_1.zhengGe.neiZhi;
            break;
        case '甲辛':
            result[0] = feiPanGeJu_1.zhengGe.neiHai;
            break;
        case '甲壬':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.chengQuan;
            break;
        case '甲癸':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            result[1] = feiPanGeJu_1.zhengGe.deMu;
            break;
        case '乙甲':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            break;
        case '乙乙':
            result[0] = feiPanGeJu_1.zhengGe.fuYin;
            break;
        case '乙丙':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            result[1] = feiPanGeJu_1.zhengGe.jiaoYang;
            break;
        case '乙丁':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.duoQuan;
            break;
        case '乙戊':
            result[0] = feiPanGeJu_1.zhengGe.waiHai;
            break;
        case '乙己':
            result[0] = feiPanGeJu_1.zhengGe.waiLuan;
            break;
        case '乙庚':
            result[0] = feiPanGeJu_1.zhengGe.shangHe + '\n' + feiPanGeJu_1.zhengGe.heJin;
            result[1] = feiPanGeJu_1.zhengGe.neiQin;
            break;
        case '乙辛':
            result[0] = feiPanGeJu_1.zhengGe.beiChong + '\n' + feiPanGeJu_1.zhengGe.muChong;
            result[1] = feiPanGeJu_1.zhengGe.neiLuan;
            break;
        case '乙壬':
            result[0] = feiPanGeJu_1.zhengGe.huoFu;
            break;
        case '乙癸':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.yiShi;
            break;
        case '丙甲':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.chengQuan;
            break;
        case '丙乙':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            result[1] = feiPanGeJu_1.zhengGe.deMu;
            break;
        case '丙丙':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.huoFuYin;
            break;
        case '丙丁':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            break;
        case '丙戊':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.haoQi;
            break;
        case '丙己':
            result[0] = feiPanGeJu_1.zhengGe.jiaoYin;
            break;
        case '丙庚':
            result[0] = feiPanGeJu_1.zhengGe.waiZhi;
            break;
        case '丙辛':
            result[0] = feiPanGeJu_1.zhengGe.shangHe + '\n' + feiPanGeJu_1.zhengGe.heShui;
            result[1] = feiPanGeJu_1.zhengGe.waiQin;
            break;
        case '丙壬':
            result[0] = feiPanGeJu_1.zhengGe.beiChong + '\n' + feiPanGeJu_1.zhengGe.huoChong;
            result[1] = feiPanGeJu_1.zhengGe.neiZhi;
            break;
        case '丙癸':
            result[0] = feiPanGeJu_1.zhengGe.neiHai;
            break;
        case '丁甲':
            result[0] = feiPanGeJu_1.zhengGe.huoFu;
            break;
        case '丁乙':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.yiShi;
            break;
        case '丁丙':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            break;
        case '丁丁':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.huoFuYin;
            break;
        case '丁戊':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            result[1] = feiPanGeJu_1.zhengGe.jiaoYang;
            break;
        case '丁己':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.duoQuan;
            break;
        case '丁庚':
            result[0] = feiPanGeJu_1.zhengGe.waiHai;
            break;
        case '丁辛':
            result[0] = feiPanGeJu_1.zhengGe.waiLuan;
            break;
        case '丁壬':
            result[0] = feiPanGeJu_1.zhengGe.shangHe + '\n' + feiPanGeJu_1.zhengGe.heMu;
            result[1] = feiPanGeJu_1.zhengGe.neiQin;
            break;
        case '丁癸':
            result[0] = feiPanGeJu_1.zhengGe.beiChong + '\n' + feiPanGeJu_1.zhengGe.huoChong;
            result[1] = feiPanGeJu_1.zhengGe.neiLuan;
            break;
        case '戊甲':
            result[0] = feiPanGeJu_1.zhengGe.neiZhi;
            break;
        case '戊乙':
            result[0] = feiPanGeJu_1.zhengGe.neiHai;
            break;
        case '戊丙':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.chengQuan;
            break;
        case '戊丁':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            result[1] = feiPanGeJu_1.zhengGe.deMu;
            break;
        case '戊戊':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.muFuYin;
            break;
        case '戊己':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            break;
        case '戊庚':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.haoQi;
            break;
        case '戊辛':
            result[0] = feiPanGeJu_1.zhengGe.jiaoYin;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '戊壬':
            result[0] = feiPanGeJu_1.zhengGe.waiZhi;
            break;
        case '戊癸':
            result[0] = feiPanGeJu_1.zhengGe.shangHe + '\n' + feiPanGeJu_1.zhengGe.heHuo;
            result[1] = feiPanGeJu_1.zhengGe.waiQin;
            break;
        case '己甲':
            result[0] = feiPanGeJu_1.zhengGe.xiaHe + '\n' + feiPanGeJu_1.zhengGe.heTu;
            result[1] = feiPanGeJu_1.zhengGe.neiQin;
            break;
        case '己乙':
            result[0] = feiPanGeJu_1.zhengGe.neiLuan;
            break;
        case '己丙':
            result[0] = feiPanGeJu_1.zhengGe.huoFu;
            break;
        case '己丁':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.yiShi;
            break;
        case '己戊':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            break;
        case '己己':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.muFuYin;
            break;
        case '己庚':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            result[1] = feiPanGeJu_1.zhengGe.jiaoYang;
            break;
        case '己辛':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.duoQuan;
            break;
        case '己壬':
            result[0] = feiPanGeJu_1.zhengGe.waiHai;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '己癸':
            result[0] = feiPanGeJu_1.zhengGe.waiLuan;
            break;
        case '庚甲':
            result[0] = feiPanGeJu_1.zhengGe.zhengChong + '\n' + feiPanGeJu_1.zhengGe.jinChong;
            result[1] = feiPanGeJu_1.zhengGe.waiZhi;
            break;
        case '庚乙':
            result[0] = feiPanGeJu_1.zhengGe.xiaHe + '\n' + feiPanGeJu_1.zhengGe.heJin;
            result[1] = feiPanGeJu_1.zhengGe.waiQin;
            break;
        case '庚丙':
            result[0] = feiPanGeJu_1.zhengGe.neiZhi;
            break;
        case '庚丁':
            result[0] = feiPanGeJu_1.zhengGe.neiHai;
            break;
        case '庚戊':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.chengQuan;
            break;
        case '庚己':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            result[1] = feiPanGeJu_1.zhengGe.deMu;
            break;
        case '庚庚':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.jinFuYin;
            break;
        case '庚辛':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            break;
        case '庚壬':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.haoQi;
            break;
        case '庚癸':
            result[0] = feiPanGeJu_1.zhengGe.jiaoYin;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '辛甲':
            result[0] = feiPanGeJu_1.zhengGe.waiHai;
            break;
        case '辛乙':
            result[0] = feiPanGeJu_1.zhengGe.zhengChong + '\n' + feiPanGeJu_1.zhengGe.jinChong;
            result[1] = feiPanGeJu_1.zhengGe.waiLuan;
            break;
        case '辛丙':
            result[0] = feiPanGeJu_1.zhengGe.xiaHe + '\n' + feiPanGeJu_1.zhengGe.heShui;
            result[1] = feiPanGeJu_1.zhengGe.neiQin;
            break;
        case '辛丁':
            result[0] = feiPanGeJu_1.zhengGe.neiLuan;
            break;
        case '辛戊':
            result[0] = feiPanGeJu_1.zhengGe.huoFu;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '辛己':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.yiShi;
            break;
        case '辛庚':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            break;
        case '辛辛':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.jinFuYin;
            break;
        case '辛壬':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            result[1] = feiPanGeJu_1.zhengGe.jiaoYang;
            break;
        case '辛癸':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.duoQuan;
            break;
        case '壬甲':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.haoQi;
            break;
        case '壬乙':
            result[0] = feiPanGeJu_1.zhengGe.jiaoYin;
            break;
        case '壬丙':
            result[0] = feiPanGeJu_1.zhengGe.zhengChong + '\n' + feiPanGeJu_1.zhengGe.shuiChong;
            result[1] = feiPanGeJu_1.zhengGe.waiZhi;
            break;
        case '壬丁':
            result[0] = feiPanGeJu_1.zhengGe.xiaHe + '\n' + feiPanGeJu_1.zhengGe.heShui;
            result[1] = feiPanGeJu_1.zhengGe.waiQin;
            break;
        case '壬戊':
            result[0] = feiPanGeJu_1.zhengGe.neiZhi;
            break;
        case '壬己':
            result[0] = feiPanGeJu_1.zhengGe.neiHai;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '壬庚':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.chengQuan;
            break;
        case '壬辛':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            result[1] = feiPanGeJu_1.zhengGe.deMu;
            break;
        case '壬壬':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.shuiFuYin;
            break;
        case '壬癸':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            break;
        case '癸甲':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            result[1] = feiPanGeJu_1.zhengGe.jiaoYang;
            break;
        case '癸乙':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.duoQuan;
            break;
        case '癸丙':
            result[0] = feiPanGeJu_1.zhengGe.waiHai;
            break;
        case '癸丁':
            result[0] = feiPanGeJu_1.zhengGe.zhengChong + '\n' + feiPanGeJu_1.zhengGe.shuiChong;
            result[1] = feiPanGeJu_1.zhengGe.waiLuan;
            break;
        case '癸戊':
            result[0] = feiPanGeJu_1.zhengGe.xiaHe + '\n' + feiPanGeJu_1.zhengGe.heHuo;
            result[1] = feiPanGeJu_1.zhengGe.neiQin;
            break;
        case '癸己':
            result[0] = feiPanGeJu_1.zhengGe.neiLuan;
            break;
        case '癸庚':
            result[0] = feiPanGeJu_1.zhengGe.huoFu;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '癸辛':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.yiShi;
            break;
        case '癸壬':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            break;
        case '癸癸':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.shuiFuYin;
            break;
    }
    return result;
}
function getShenSha() {
}
function huanJu(originalPanJu, tianPanInformation, diPanGan) {
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
