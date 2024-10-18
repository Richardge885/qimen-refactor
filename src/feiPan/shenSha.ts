import { JiuGongXinXi, FullTimeInformation } from "./interfaces";
import { shenSha } from "./feiPanGeJu";

export function putInShenSha(
    panJu: JiuGongXinXi,
    timeInfo: FullTimeInformation,
) {
    let result = panJu;
    const riGan = timeInfo.rizhu.charAt(0);
    const riZhi = timeInfo.rizhu.charAt(1);
    const yueJian = timeInfo.yuezhu.charAt(1);
    const taiSui = timeInfo.nianzhu.charAt(1);

    Object.keys(result).forEach((object) => {
        const gong = result[object as keyof typeof result];
        // 日干神煞
        if (
            timeInfo.shizhu.charAt(1) == "子" ||
            timeInfo.shizhu.charAt(1) == "丑" ||
            timeInfo.shizhu.charAt(1) == "寅" ||
            timeInfo.shizhu.charAt(1) == "卯" ||
            timeInfo.shizhu.charAt(1) == "辰" ||
            timeInfo.shizhu.charAt(1) == "巳"
        ) {
            switch (riGan) {
                case "甲":
                    if (gong.anZhi == "未") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "乙":
                    if (gong.anZhi == "申") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "丙":
                    if (gong.anZhi == "酉") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "丁":
                    if (gong.anZhi == "亥") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "戊":
                    if (gong.anZhi == "丑") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "己":
                    if (gong.anZhi == "子") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "庚":
                    if (gong.anZhi == "丑") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "辛":
                    if (gong.anZhi == "寅") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "壬":
                    if (gong.anZhi == "卯") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "癸":
                    if (gong.anZhi == "巳") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
            }
        } else {
            switch (riGan) {
                case "甲":
                    if (gong.anZhi == "丑") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "乙":
                    if (gong.anZhi == "子") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "丙":
                    if (gong.anZhi == "亥") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "丁":
                    if (gong.anZhi == "酉") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "戊":
                    if (gong.anZhi == "丑") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "己":
                    if (gong.anZhi == "子") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "庚":
                    if (gong.anZhi == "丑") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "辛":
                    if (gong.anZhi == "寅") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "壬":
                    if (gong.anZhi == "卯") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
                case "癸":
                    if (gong.anZhi == "巳") {
                        gong.shenSha.push(shenSha.guiRen);
                    }
                    break;
            }
        }
        switch (riGan) {
            case "甲":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.deShen, shenSha.luShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.waiTaoHua);
                }
                break;
            case "乙":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.deShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.luShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.waiTaoHua);
                }
                break;
            case "丙":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.deShen, shenSha.luShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.waiTaoHua);
                }
                break;
            case "丁":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.deShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.luShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.waiTaoHua);
                }
                break;
            case "戊":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.deShen, shenSha.luShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.waiTaoHua);
                }
                break;
            case "己":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.deShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.luShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.waiTaoHua);
                }
                break;
            case "庚":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.deShen, shenSha.luShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.waiTaoHua);
                }
                break;
            case "辛":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.deShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.luShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.waiTaoHua);
                }
                break;
            case "壬":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.deShen, shenSha.luShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.waiTaoHua);
                }
                break;
            case "癸":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.deShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.luShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.waiTaoHua);
                }
                break;
        }

        // 日支神煞
        switch (riZhi) {
            case "子":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.poSui, shenSha.jieSha);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
            case "丑":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.poSui);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.jieSha);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
            case "寅":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.poSui);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.jieSha);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
            case "卯":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.poSui);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.jieSha);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
            case "辰":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.poSui);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.jieSha);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
            case "巳":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.poSui);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.jieSha);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
            case "午":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.poSui);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.jieSha);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
            case "未":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.poSui);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.jieSha);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
            case "申":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.poSui);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.jieSha);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
            case "酉":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.jieSha);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
            case "戌":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.poSui);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.jieSha);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
            case "亥":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.yiMa);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.huiMa);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.poSui);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.jieSha);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.neiTaoHua);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.huaGai);
                }
                break;
        }

        // 月建神煞
        switch (yueJian) {
            case "子":
                if (gong.baGua == "巽") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
            case "丑":
                if (gong.baGua == "兑") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
            case "寅":
                if (gong.baGua == "离") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
            case "卯":
                if (gong.baGua == "坤") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
            case "辰":
                if (gong.baGua == "坎") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
            case "巳":
                if (gong.baGua == "兑") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
            case "午":
                if (gong.baGua == "乾") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
            case "未":
                if (gong.baGua == "震") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
            case "申":
                if (gong.baGua == "坎") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
            case "酉":
                if (gong.baGua == "艮") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
            case "戌":
                if (gong.baGua == "离") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
            case "亥":
                if (gong.baGua == "震") {
                    gong.shenSha.push(shenSha.tianDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.yueDe);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.tianMa);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.tianYi);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.yueYan);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.shengQi);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.siQi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.siShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.tianGui);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.xueZhi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.chengShen);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.xinShen);
                }
                break;
        }

        // 驾前神煞
        switch (taiSui) {
            case "子":
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
            case "丑":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
            case "寅":
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
            case "卯":
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
            case "辰":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
            case "巳":
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
            case "午":
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
            case "未":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
            case "申":
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
            case "酉":
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
            case "戌":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
            case "亥":
                if (gong.anZhi == "子") {
                    gong.shenSha.push(shenSha.taiYang);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(shenSha.sangMen);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(shenSha.taiYin);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(shenSha.guanFu);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(shenSha.siFu);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(shenSha.suiPo);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(shenSha.longDe);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(shenSha.baiHu);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(shenSha.fuDe);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(shenSha.diaoKe);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(shenSha.bingFu);
                }
                break;
        }

        // 季节神煞

        if (yueJian == "寅" || yueJian == "卯" || yueJian == "辰") {
            if (gong.anZhi == "戌") {
                gong.shenSha.push(shenSha.tianXi);
            }
            if (gong.anZhi == "寅" && gong.anGan == "戊") {
                gong.shenSha.push(shenSha.tianShe);
            }
        } else if (yueJian == "巳" || yueJian == "午" || yueJian == "未") {
            if (gong.anZhi == "丑") {
                gong.shenSha.push(shenSha.tianXi);
            }
            if (gong.anZhi == "午" && gong.anGan == "甲") {
                gong.shenSha.push(shenSha.tianShe);
            }
        } else if (yueJian == "申" || yueJian == "酉" || yueJian == "戌") {
            if (gong.anZhi == "辰") {
                gong.shenSha.push(shenSha.tianXi);
            }
            if (gong.anZhi == "申" && gong.anGan == "戊") {
                gong.shenSha.push(shenSha.tianShe);
            }
        } else if (yueJian == "亥" || yueJian == "子" || yueJian == "丑") {
            if (gong.anZhi == "未") {
                gong.shenSha.push(shenSha.tianXi);
            }
            if (gong.anZhi == "子" && gong.anGan == "甲") {
                gong.shenSha.push(shenSha.tianShe);
            }
        }
    });

    return result;
}
