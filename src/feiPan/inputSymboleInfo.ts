import { xingInfo, menInfo, shenInfo, ganInfo, baGuaInfo } from "./feiPanGeJu";
import { JiuGongXinXi } from "./interfaces";

export function inputSymboleInfo(panJu: JiuGongXinXi) {
    let result = panJu;
    Object.keys(result).forEach((object) => {
        const gong = result[object as keyof typeof result];
        switch (gong.baGua) {
            default: // 默认值乾
                gong.symboleInfo.gong = baGuaInfo.qian;
                break;
            case "坎":
                gong.symboleInfo.gong = baGuaInfo.kan;
                break;
            case "艮":
                gong.symboleInfo.gong = baGuaInfo.gen;
                break;
            case "震":
                gong.symboleInfo.gong = baGuaInfo.zhen;
                break;
            case "巽":
                gong.symboleInfo.gong = baGuaInfo.xun;
                break;
            case "离":
                gong.symboleInfo.gong = baGuaInfo.li;
                break;
            case "坤":
                gong.symboleInfo.gong = baGuaInfo.kun;
                break;
            case "兑":
                gong.symboleInfo.gong = baGuaInfo.dui;
                break;
        }
        switch (gong.xing) {
            default: // 默认值天蓬
                gong.symboleInfo.xing = xingInfo.tianPeng;
                break;
            case "天芮":
                gong.symboleInfo.xing = xingInfo.tianRui;
                break;
            case "天冲":
                gong.symboleInfo.xing = xingInfo.tianChong;
                break;
            case "天辅":
                gong.symboleInfo.xing = xingInfo.tianFu;
                break;
            case "天禽":
                gong.symboleInfo.xing = xingInfo.tianQin;
                break;
            case "天心":
                gong.symboleInfo.xing = xingInfo.tianXin;
                break;
            case "天柱":
                gong.symboleInfo.xing = xingInfo.tianZhu;
                break;
            case "天任":
                gong.symboleInfo.xing = xingInfo.tianRen;
                break;
            case "天英":
                gong.symboleInfo.xing = xingInfo.tianYing;
                break;
        }
        switch (gong.men) {
            default: // 默认值休门
                gong.symboleInfo.men = menInfo.xiuMen;
                break;
            case "死门":
                gong.symboleInfo.men = menInfo.siMen;
                break;
            case "伤门":
                gong.symboleInfo.men = menInfo.shangMen;
                break;
            case "杜门":
                gong.symboleInfo.men = menInfo.duMen;
                break;
            case "中五":
                gong.symboleInfo.men = menInfo.zhongMen;
                break;
            case "开门":
                gong.symboleInfo.men = menInfo.kaiMen;
                break;
            case "惊门":
                gong.symboleInfo.men = menInfo.jinMen;
                break;
            case "生门":
                gong.symboleInfo.men = menInfo.shengMen;
                break;
            case "景门":
                gong.symboleInfo.men = menInfo.jingMen;
                break;
        }
        switch (gong.tianPanShen) {
            default: // 默认值值符
                gong.symboleInfo.shen = shenInfo.zhiFu;
                break;
            case "螣蛇":
                gong.symboleInfo.shen = shenInfo.tengShe;
                break;
            case "太阴":
                gong.symboleInfo.shen = shenInfo.taiYin;
                break;
            case "六合":
                gong.symboleInfo.shen = shenInfo.liuHe;
                break;
            case "白虎":
                gong.symboleInfo.shen = shenInfo.baiHu;
                break;
            case "勾陈":
                gong.symboleInfo.shen = shenInfo.gouChen;
                break;
            case "太常":
                gong.symboleInfo.shen = shenInfo.taiChang;
                break;
            case "玄武":
                gong.symboleInfo.shen = shenInfo.xuanWu;
                break;
            case "朱雀":
                gong.symboleInfo.shen = shenInfo.zhuQue;
                break;
            case "九地":
                gong.symboleInfo.shen = shenInfo.jiuDi;
                break;
            case "九天":
                gong.symboleInfo.shen = shenInfo.jiuTian;
                break;
        }
        switch (gong.tianPanGan) {
            default: // 默认值乙
                gong.symboleInfo.tianPanGan = ganInfo.yi;
                break;
            case "丙":
                gong.symboleInfo.tianPanGan = ganInfo.bing;
                break;
            case "丁":
                gong.symboleInfo.tianPanGan = ganInfo.ding;
                break;
            case "戊":
                gong.symboleInfo.tianPanGan = ganInfo.wu;
                break;
            case "己":
                gong.symboleInfo.tianPanGan = ganInfo.ji;
                break;
            case "庚":
                gong.symboleInfo.tianPanGan = ganInfo.geng;
                break;
            case "辛":
                gong.symboleInfo.tianPanGan = ganInfo.xin;
                break;
            case "壬":
                gong.symboleInfo.tianPanGan = ganInfo.ren;
                break;
            case "癸":
                gong.symboleInfo.tianPanGan = ganInfo.gui;
                break;
        }
        switch (gong.diPanGan) {
            default: // 默认值乙
                gong.symboleInfo.diPanGan = ganInfo.yi;
                break;
            case "丙":
                gong.symboleInfo.diPanGan = ganInfo.bing;
                break;
            case "丁":
                gong.symboleInfo.diPanGan = ganInfo.ding;
                break;
            case "戊":
                gong.symboleInfo.diPanGan = ganInfo.wu;
                break;
            case "己":
                gong.symboleInfo.diPanGan = ganInfo.ji;
                break;
            case "庚":
                gong.symboleInfo.diPanGan = ganInfo.geng;
                break;
            case "辛":
                gong.symboleInfo.diPanGan = ganInfo.xin;
                break;
            case "壬":
                gong.symboleInfo.diPanGan = ganInfo.ren;
                break;
            case "癸":
                gong.symboleInfo.diPanGan = ganInfo.gui;
                break;
        }
    });
    return result;
}
