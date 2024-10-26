"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSingleCharacter = toSingleCharacter;
function toSingleCharacter(panJu) {
    let result = panJu;
    Object.keys(result).forEach((object) => {
        const gong = result[object];
        gong.xing = gong.xing.slice(1);
        gong.men = gong.men.slice(0, 1);
        gong.tianPanShen = shenToSingleCharacter(gong.tianPanShen);
        gong.diPanShen = shenToSingleCharacter(gong.diPanShen);
    });
    return result;
}
function shenToSingleCharacter(shen) {
    switch (shen) {
        default:
            return "符";
        case "螣蛇":
            return "蛇";
        case "太阴":
            return "阴";
        case "六合":
            return "合";
        case "白虎":
            return "虎";
        case "勾陈":
            return "陈";
        case "太常":
            return "常";
        case "玄武":
            return "玄";
        case "朱雀":
            return "雀";
        case "九地":
            return "地";
        case "九天":
            return "天";
    }
}
