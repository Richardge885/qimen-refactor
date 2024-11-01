import { JiuGongXinXi } from "./interfaces";

export function toTraditionalCharacter(panJu: JiuGongXinXi) {
    let result = panJu;
    Object.keys(result).forEach((object) => {
        const gong = result[object as keyof typeof result];
        gong.xing = xingToTraditionalCharacter(gong.xing);
        gong.men = menToTraditionalCharacter(gong.men);
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

export function menToTraditionalCharacter(men: string) {
    switch (men) {
        default:
            return "休門";
        case "死门":
            return "死門";
        case "伤门":
            return "傷門";
        case "杜门":
            return "杜門";
        case "开门":
            return "開門";
        case "惊门":
            return "驚門";
        case "生门":
            return "生門";
        case "景门":
            return "景門";
    }
}

export function xingToTraditionalCharacter(xing: string): string {
    switch (xing) {
        case "天冲":
            return "天沖";
        case "天辅":
            return "天輔";
    }
    return xing;
}
