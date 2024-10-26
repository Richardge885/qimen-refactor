"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTraditionalCharacter = toTraditionalCharacter;
function toTraditionalCharacter(panJu) {
    let result = panJu;
    Object.keys(result).forEach((object) => {
        const gong = result[object];
        switch (gong.xing) {
            default:
                break;
            case "天冲":
                gong.xing = "天沖";
                break;
            case "天辅":
                gong.xing = "天輔";
                break;
        }
        switch (gong.men) {
            default:
                gong.men = "休門";
                break;
            case "死门":
                gong.men = "死門";
                break;
            case "伤门":
                gong.men = "傷門";
                break;
            case "杜门":
                gong.men = "杜門";
                break;
            case "开门":
                gong.men = "開門";
                break;
            case "惊门":
                gong.men = "驚門";
                break;
            case "生门":
                gong.men = "生門";
                break;
            case "景门":
                gong.men = "景門";
                break;
        }
        switch (gong.tianPanShen) {
            case "太阴":
                gong.tianPanShen = "太陰";
                break;
            case "勾陈":
                gong.tianPanShen = "勾陳";
                break;
        }
        switch (gong.diPanShen) {
            case "太阴":
                gong.diPanShen = "太陰";
                break;
            case "勾陈":
                gong.diPanShen = "勾陳";
                break;
        }
    });
    return result;
}
