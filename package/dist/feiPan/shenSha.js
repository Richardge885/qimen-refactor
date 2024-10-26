"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putInShenSha = putInShenSha;
const feiPanGeJu_1 = require("./feiPanGeJu");
function putInShenSha(panJu, timeInfo) {
    let result = panJu;
    const riGan = timeInfo.rizhu.charAt(0);
    const riZhi = timeInfo.rizhu.charAt(1);
    const yueJian = timeInfo.yuezhu.charAt(1);
    const taiSui = timeInfo.nianzhu.charAt(1);
    Object.keys(result).forEach((object) => {
        const gong = result[object];
        if (timeInfo.shizhu.charAt(1) == "子" ||
            timeInfo.shizhu.charAt(1) == "丑" ||
            timeInfo.shizhu.charAt(1) == "寅" ||
            timeInfo.shizhu.charAt(1) == "卯" ||
            timeInfo.shizhu.charAt(1) == "辰" ||
            timeInfo.shizhu.charAt(1) == "巳") {
            switch (riGan) {
                case "甲":
                    if (gong.anZhi == "未") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "乙":
                    if (gong.anZhi == "申") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "丙":
                    if (gong.anZhi == "酉") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "丁":
                    if (gong.anZhi == "亥") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "戊":
                    if (gong.anZhi == "丑") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "己":
                    if (gong.anZhi == "子") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "庚":
                    if (gong.anZhi == "丑") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "辛":
                    if (gong.anZhi == "寅") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "壬":
                    if (gong.anZhi == "卯") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "癸":
                    if (gong.anZhi == "巳") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
            }
        }
        else {
            switch (riGan) {
                case "甲":
                    if (gong.anZhi == "丑") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "乙":
                    if (gong.anZhi == "子") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "丙":
                    if (gong.anZhi == "亥") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "丁":
                    if (gong.anZhi == "酉") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "戊":
                    if (gong.anZhi == "丑") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "己":
                    if (gong.anZhi == "子") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "庚":
                    if (gong.anZhi == "丑") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "辛":
                    if (gong.anZhi == "寅") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "壬":
                    if (gong.anZhi == "卯") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
                case "癸":
                    if (gong.anZhi == "巳") {
                        gong.shenSha.push(feiPanGeJu_1.shenSha.guiRen);
                    }
                    break;
            }
        }
        switch (riGan) {
            case "甲":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.deShen, feiPanGeJu_1.shenSha.luShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.waiTaoHua);
                }
                break;
            case "乙":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.deShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.luShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.waiTaoHua);
                }
                break;
            case "丙":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.deShen, feiPanGeJu_1.shenSha.luShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.waiTaoHua);
                }
                break;
            case "丁":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.deShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.luShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.waiTaoHua);
                }
                break;
            case "戊":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.deShen, feiPanGeJu_1.shenSha.luShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.waiTaoHua);
                }
                break;
            case "己":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.deShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.luShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.waiTaoHua);
                }
                break;
            case "庚":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.deShen, feiPanGeJu_1.shenSha.luShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.waiTaoHua);
                }
                break;
            case "辛":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.deShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.luShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.waiTaoHua);
                }
                break;
            case "壬":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.deShen, feiPanGeJu_1.shenSha.luShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.waiTaoHua);
                }
                break;
            case "癸":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.deShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.luShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.waiTaoHua);
                }
                break;
        }
        switch (riZhi) {
            case "子":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.poSui, feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
            case "丑":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.poSui);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
            case "寅":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.poSui);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
            case "卯":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.poSui);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
            case "辰":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.poSui);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
            case "巳":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.poSui);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
            case "午":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.poSui);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
            case "未":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.poSui);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
            case "申":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.poSui);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
            case "酉":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
            case "戌":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.poSui);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
            case "亥":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yiMa);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huiMa);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.poSui);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.jieSha);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.neiTaoHua);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.huaGai);
                }
                break;
        }
        switch (yueJian) {
            case "子":
                if (gong.baGua == "巽") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
            case "丑":
                if (gong.baGua == "兑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
            case "寅":
                if (gong.baGua == "离") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
            case "卯":
                if (gong.baGua == "坤") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
            case "辰":
                if (gong.baGua == "坎") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
            case "巳":
                if (gong.baGua == "兑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
            case "午":
                if (gong.baGua == "乾") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
            case "未":
                if (gong.baGua == "震") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
            case "申":
                if (gong.baGua == "坎") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
            case "酉":
                if (gong.baGua == "艮") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
            case "戌":
                if (gong.baGua == "离") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
            case "亥":
                if (gong.baGua == "震") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueDe);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianMa);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianYi);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.yueYan);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.shengQi);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siQi);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siShen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.tianGui);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xueZhi);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.chengShen);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.xinShen);
                }
                break;
        }
        switch (taiSui) {
            case "子":
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
            case "丑":
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
            case "寅":
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
            case "卯":
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
            case "辰":
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
            case "巳":
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
            case "午":
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
            case "未":
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
            case "申":
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
            case "酉":
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
            case "戌":
                if (gong.anZhi == "亥") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
            case "亥":
                if (gong.anZhi == "子") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYang);
                }
                if (gong.anZhi == "丑") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.sangMen);
                }
                if (gong.anZhi == "寅") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.taiYin);
                }
                if (gong.anZhi == "卯") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.guanFu);
                }
                if (gong.anZhi == "辰") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.siFu);
                }
                if (gong.anZhi == "巳") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.suiPo);
                }
                if (gong.anZhi == "午") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.longDe);
                }
                if (gong.anZhi == "未") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.baiHu);
                }
                if (gong.anZhi == "申") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.fuDe);
                }
                if (gong.anZhi == "酉") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.diaoKe);
                }
                if (gong.anZhi == "戌") {
                    gong.shenSha.push(feiPanGeJu_1.shenSha.bingFu);
                }
                break;
        }
        if (yueJian == "寅" || yueJian == "卯" || yueJian == "辰") {
            if (gong.anZhi == "戌") {
                gong.shenSha.push(feiPanGeJu_1.shenSha.tianXi);
            }
            if (gong.anZhi == "寅" && gong.anGan == "戊") {
                gong.shenSha.push(feiPanGeJu_1.shenSha.tianShe);
            }
        }
        else if (yueJian == "巳" || yueJian == "午" || yueJian == "未") {
            if (gong.anZhi == "丑") {
                gong.shenSha.push(feiPanGeJu_1.shenSha.tianXi);
            }
            if (gong.anZhi == "午" && gong.anGan == "甲") {
                gong.shenSha.push(feiPanGeJu_1.shenSha.tianShe);
            }
        }
        else if (yueJian == "申" || yueJian == "酉" || yueJian == "戌") {
            if (gong.anZhi == "辰") {
                gong.shenSha.push(feiPanGeJu_1.shenSha.tianXi);
            }
            if (gong.anZhi == "申" && gong.anGan == "戊") {
                gong.shenSha.push(feiPanGeJu_1.shenSha.tianShe);
            }
        }
        else if (yueJian == "亥" || yueJian == "子" || yueJian == "丑") {
            if (gong.anZhi == "未") {
                gong.shenSha.push(feiPanGeJu_1.shenSha.tianXi);
            }
            if (gong.anZhi == "子" && gong.anGan == "甲") {
                gong.shenSha.push(feiPanGeJu_1.shenSha.tianShe);
            }
        }
    });
    return result;
}
