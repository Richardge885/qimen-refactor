"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.huanJu = huanJu;
exports.gatherTianPanInformation = gatherTianPanInformation;
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
