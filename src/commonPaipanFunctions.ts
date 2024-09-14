export function paiDiPanGan(dun: string, jushu: string) {
    if (dun == '阳') {
        switch (jushu) {
            case '1':
                return ['戊', '己', '庚', '辛', '壬', '癸', '丁', '丙', '乙'];
            case '2':
                return ['乙', '戊', '己', '庚', '辛', '壬', '癸', '丁', '丙'];
            case '3':
                return ['丙', '乙', '戊', '己', '庚', '辛', '壬', '癸', '丁'];
            case '4':
                return ['丁', '丙', '乙', '戊', '己', '庚', '辛', '壬', '癸'];
            case '5':
                return ['癸', '丁', '丙', '乙', '戊', '己', '庚', '辛', '壬'];
            case '6':
                return ['壬', '癸', '丁', '丙', '乙', '戊', '己', '庚', '辛'];
            case '7':
                return ['辛', '壬', '癸', '丁', '丙', '乙', '戊', '己', '庚'];
            case '8':
                return ['庚', '辛', '壬', '癸', '丁', '丙', '乙', '戊', '己'];
            case '9':
                return ['己', '庚', '辛', '壬', '癸', '丁', '丙', '乙', '戊'];
        }
    } else {
        switch (jushu) {
            case '1':
                return ['戊', '乙', '丙', '丁', '癸', '壬', '辛', '庚', '己'];
            case '2':
                return ['己', '戊', '乙', '丙', '丁', '癸', '壬', '辛', '庚'];
            case '3':
                return ['庚', '己', '戊', '乙', '丙', '丁', '癸', '壬', '辛'];
            case '4':
                return ['辛', '庚', '己', '戊', '乙', '丙', '丁', '癸', '壬'];
            case '5':
                return ['壬', '辛', '庚', '己', '戊', '乙', '丙', '丁', '癸'];
            case '6':
                return ['癸', '壬', '辛', '庚', '己', '戊', '乙', '丙', '丁'];
            case '7':
                return ['丁', '癸', '壬', '辛', '庚', '己', '戊', '乙', '丙'];
            case '8':
                return ['丙', '丁', '癸', '壬', '辛', '庚', '己', '戊', '乙'];
            case '9':
                return ['乙', '丙', '丁', '癸', '壬', '辛', '庚', '己', '戊'];
        }
    }
}

/**
 * 找时柱旬首
 */
export function zhaoXunShou(shizhu: string, liushijiazi: string[]) {
    for (let i = 0; i < 60; i++) {
        if (liushijiazi[i] == shizhu) {
            for (let j = i; j >= 0; j--) {
                if (
                    liushijiazi[j] == '甲子' ||
                    liushijiazi[j] == '甲戌' ||
                    liushijiazi[j] == '甲申' ||
                    liushijiazi[j] == '甲午' ||
                    liushijiazi[j] == '甲辰' ||
                    liushijiazi[j] == '甲寅'
                ) {
                    return liushijiazi[j];
                }
            }
        }
    }
}

/**
 * 定符使
 */
export function dingFuShi(dipangan: string[], xunshou: string) {
    if (xunshou == '甲子') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '戊') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天禽', zhishi: '中门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    } else if (xunshou == '甲戌') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '己') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天禽', zhishi: '中门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    } else if (xunshou == '甲申') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '庚') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天禽', zhishi: '中门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    } else if (xunshou == '甲午') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '辛') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天禽', zhishi: '中门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    } else if (xunshou == '甲辰') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '壬') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天禽', zhishi: '中门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    } else if (xunshou == '甲寅') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '癸') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天禽', zhishi: '中门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    }
}

export function dingKongWang(xunshou: string) {
    switch (xunshou) {
        case '甲子':
            return { gongwei: [5], liuyi: '己' };
        case '甲戌':
            return { gongwei: [1, 6], liuyi: '庚' };
        case '甲申':
            return { gongwei: [1, 8], liuyi: '辛' };
        case '甲午':
            return { gongwei: [3], liuyi: '壬' };
        case '甲辰':
            return { gongwei: [2, 7], liuyi: '癸' };
        case '甲寅':
            return { gongwei: [0, 7], liuyi: '戊' };
    }
}

export function dingMaXing(shizhu: string) {
    if (shizhu.charAt(1) == '申' || shizhu.charAt(1) == '子' || shizhu.charAt(1) == '辰') {
        return 7;
    } else if (shizhu.charAt(1) == '寅' || shizhu.charAt(1) == '午' || shizhu.charAt(1) == '戌') {
        return 1;
    } else if (shizhu.charAt(1) == '巳' || shizhu.charAt(1) == '酉' || shizhu.charAt(1) == '丑') {
        return 5;
    } else {
        return 3;
    }
}

export function paiAnGanZhi(xunshou: string, diPanGanList: string[], dun: string) {
    let anGanZhiList: string[];
    let xunShouLiuYi: string;
    let anGanZhiStartingPosition: number = 0;
    switch (xunshou) {
        default:
            anGanZhiList = ['癸酉', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申'];
            xunShouLiuYi = '戊'
            break;
        case '甲戌':
            anGanZhiList = ['癸未', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午'];
            xunShouLiuYi = '己'
            break;
        case '甲申':
            anGanZhiList = ['癸巳', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰'];
            xunShouLiuYi = '庚'
            break;
        case '甲午':
            anGanZhiList = ['癸卯', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅'];
            xunShouLiuYi = '辛'
            break;
        case '甲辰':
            anGanZhiList = ['癸丑', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子'];
            xunShouLiuYi = '壬'
            break;
        case '甲寅':
            anGanZhiList = ['癸亥', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌'];
            xunShouLiuYi = '癸'
            break;
    }
    for (let i = 0; i < 9; i++) {
        if (diPanGanList[i] == xunShouLiuYi) {
            anGanZhiStartingPosition = i;
            break;
        }
    }
    return rearrangeArray(anGanZhiList, anGanZhiStartingPosition, dun);
}

function rearrangeArray(anGanZhi: string[], startIndex: number, dun: string = '阳'): string[] {
    if (dun == '阴') {
        const rearranged = anGanZhi.slice(0, startIndex + 1).reverse().concat(anGanZhi.slice(startIndex + 1).reverse());
        return rearranged;
    } else {
        switch (startIndex) {
            default:
                return anGanZhi;
            case 1:
                return anGanZhi.slice(8).concat(anGanZhi.slice(0, 8))
            case 2:
                return anGanZhi.slice(7).concat(anGanZhi.slice(0, 7))
            case 3:
                return anGanZhi.slice(6).concat(anGanZhi.slice(0, 6))
            case 4:
                return anGanZhi.slice(5).concat(anGanZhi.slice(0, 5))
            case 5:
                return anGanZhi.slice(4).concat(anGanZhi.slice(0, 4))
            case 6:
                return anGanZhi.slice(3).concat(anGanZhi.slice(0, 3))
            case 7:
                return anGanZhi.slice(2).concat(anGanZhi.slice(0, 2))
            case 8:
                return anGanZhi.slice(1).concat(anGanZhi.slice(0, 1))
        }
    }
}

