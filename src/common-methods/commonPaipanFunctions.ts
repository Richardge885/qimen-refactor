export function getKongWang(xunShou: string, wantYiKong: boolean) {
    let gongKong: (string | number | undefined)[] = [0, undefined, ''];
    let yiKong: string;
    switch (xunShou) {
        default:
            gongKong[0] = 0;
            yiKong = '己';
            break;
        case '甲戌':
            gongKong[0] = 1;
            gongKong[1] = 6;
            yiKong = '庚';
            break;
        case '甲申':
            gongKong[0] = 8;
            gongKong[1] = 1;
            yiKong = '辛';
            break;
        case '甲午':
            gongKong[0] = 3;
            yiKong = '壬';
            break;
        case '甲辰':
            gongKong[0] = 7;
            gongKong[1] = 2;
            yiKong = '癸';
            break;
        case '甲寅':
            gongKong[0] = 0;
            gongKong[1] = 7;
            yiKong = '戊';
            break;
    }

    if (wantYiKong) {
        gongKong![2] = yiKong;
    }
    return gongKong!;
}

export function getMaXing(shiZhi: string): number {
    switch (shiZhi) {
        default:
            return 7;
        case '丑':
            return 5;
        case '寅':
            return 1;
        case '卯':
            return 3;
        case '辰':
            return 7;
        case '巳':
            return 5;
        case '午':
            return 1;
        case '未':
            return 3;
        case '申':
            return 7;
        case '酉':
            return 5;
        case '戌':
            return 1;
        case '亥':
            return 3;
    }
}

export function gongWangShuai(jieqi: string, feiPan: boolean) {
    if (feiPan) {
        if (jieqi == '立春' || jieqi == '雨水' || jieqi == '惊蛰') {
            return ['休', '死', '相', '胎', '旺', '废', '囚', '旺', '没'];
        } else if (jieqi == '春分' || jieqi == '清明' || jieqi == '谷雨') {
            return ['废', '没', '旺', '相', '休', '囚', '死', '休', '胎'];
        } else if (jieqi == '立夏' || jieqi == '小满' || jieqi == '芒种') {
            return ['囚', '胎', '休', '旺', '废', '死', '没', '废', '相'];
        } else if (jieqi == '夏至' || jieqi == '小暑' || jieqi == '大暑') {
            return ['死', '相', '废', '休', '相', '没', '胎', '囚', '旺'];
        } else if (jieqi == '立秋' || jieqi == '处暑' || jieqi == '白露') {
            return ['没', '旺', '囚', '废', '旺', '胎', '相', '死', '休'];
        } else if (jieqi == '秋分' || jieqi == '寒露' || jieqi == '霜降') {
            return ['胎', '休', '死', '囚', '休', '相', '旺', '没', '废'];
        } else if (jieqi == '立冬' || jieqi == '大雪' || jieqi == '小雪') {
            return ['相', '废', '没', '死', '废', '旺', '休', '胎', '囚'];
        } else if (jieqi == '冬至' || jieqi == '小寒' || jieqi == '大寒') {
            return ['旺', '囚', '胎', '没', '相', '休', '废', '相', '死'];
        }
    } else {
    }
}

export function findXunShouGan(xunshou: string): string {
    switch (xunshou) {
        default:
            return '戊';
        case '甲戌':
            return '己';
        case '甲申':
            return '庚';
        case '甲午':
            return '辛';
        case '甲辰':
            return '壬';
        case '甲寅':
            return '癸';
    }
}

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
                        return { zhifu: '天禽', zhishi: '中五' };
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
                        return { zhifu: '天禽', zhishi: '中五' };
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
                        return { zhifu: '天禽', zhishi: '中五' };
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
                        return { zhifu: '天禽', zhishi: '中五' };
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
                        return { zhifu: '天禽', zhishi: '中五' };
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
                        return { zhifu: '天禽', zhishi: '中五' };
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

export function paiAnGanZhi(
    xunshou: string,
    diPanGanList: string[],
    dun: string,
) {
    let anGanZhiList: string[];
    let xunShouLiuYi: string;
    let anGanZhiStartingPosition: number = 0;
    if (dun == '阳') {
        switch (xunshou) {
            default:
                anGanZhiList = [
                    '癸酉',
                    '乙丑',
                    '丙寅',
                    '丁卯',
                    '戊辰',
                    '己巳',
                    '庚午',
                    '辛未',
                    '壬申',
                ];
                xunShouLiuYi = '戊';
                break;
            case '甲戌':
                anGanZhiList = [
                    '癸未',
                    '乙亥',
                    '丙子',
                    '丁丑',
                    '戊寅',
                    '己卯',
                    '庚辰',
                    '辛巳',
                    '壬午',
                ];
                xunShouLiuYi = '己';
                break;
            case '甲申':
                anGanZhiList = [
                    '癸巳',
                    '乙酉',
                    '丙戌',
                    '丁亥',
                    '戊子',
                    '己丑',
                    '庚寅',
                    '辛卯',
                    '壬辰',
                ];
                xunShouLiuYi = '庚';
                break;
            case '甲午':
                anGanZhiList = [
                    '癸卯',
                    '乙未',
                    '丙申',
                    '丁酉',
                    '戊戌',
                    '己亥',
                    '庚子',
                    '辛丑',
                    '壬寅',
                ];
                xunShouLiuYi = '辛';
                break;
            case '甲辰':
                anGanZhiList = [
                    '癸丑',
                    '乙巳',
                    '丙午',
                    '丁未',
                    '戊申',
                    '己酉',
                    '庚戌',
                    '辛亥',
                    '壬子',
                ];
                xunShouLiuYi = '壬';
                break;
            case '甲寅':
                anGanZhiList = [
                    '癸亥',
                    '乙卯',
                    '丙辰',
                    '丁巳',
                    '戊午',
                    '己未',
                    '庚申',
                    '辛酉',
                    '壬戌',
                ];
                xunShouLiuYi = '癸';
                break;
        }
    } else {
        switch (xunshou) {
            default:
                anGanZhiList = [
                    '癸酉',
                    '壬申',
                    '乙丑',
                    '丙寅',
                    '丁卯',
                    '戊辰',
                    '己巳',
                    '庚午',
                    '辛未',
                ];
                xunShouLiuYi = '戊';
                break;
            case '甲戌':
                anGanZhiList = [
                    '癸未',
                    '壬午',
                    '辛巳',
                    '庚辰',
                    '己卯',
                    '戊寅',
                    '丁丑',
                    '丙子',
                    '乙亥',
                ];
                xunShouLiuYi = '己';
                break;
            case '甲申':
                anGanZhiList = [
                    '癸巳',
                    '壬辰',
                    '辛卯',
                    '庚寅',
                    '己丑',
                    '戊子',
                    '丁亥',
                    '丙戌',
                    '乙酉',
                ];
                xunShouLiuYi = '庚';
                break;
            case '甲午':
                anGanZhiList = [
                    '癸卯',
                    '壬寅',
                    '辛丑',
                    '庚子',
                    '己亥',
                    '戊戌',
                    '丁酉',
                    '丙申',
                    '乙未',
                ];
                xunShouLiuYi = '辛';
                break;
            case '甲辰':
                anGanZhiList = [
                    '癸丑',
                    '壬子',
                    '辛亥',
                    '庚戌',
                    '己酉',
                    '戊申',
                    '丁未',
                    '丙午',
                    '乙巳',
                ];
                xunShouLiuYi = '壬';
                break;
            case '甲寅':
                anGanZhiList = [
                    '癸亥',
                    '壬戌',
                    '辛酉',
                    '庚申',
                    '己未',
                    '戊午',
                    '丁巳',
                    '丙辰',
                    '乙卯',
                ];
                xunShouLiuYi = '癸';
                break;
        }
    }
    for (let i = 0; i < 9; i++) {
        if (diPanGanList[i] == xunShouLiuYi) {
            anGanZhiStartingPosition = i;
            break;
        }
    }
    return rearrangeArray(anGanZhiList, anGanZhiStartingPosition);
}

export function rearrangeArray(
    array: string[],
    startIndex: number,
    dun: string = '阳',
): string[] {
    if (dun == '阴') {
        const rearranged = array
            .slice(0, startIndex + 1)
            .reverse()
            .concat(array.slice(startIndex + 1).reverse());
        return rearranged;
    } else {
        switch (startIndex) {
            default:
                return array;
            case 1:
                return array.slice(8).concat(array.slice(0, 8));
            case 2:
                return array.slice(7).concat(array.slice(0, 7));
            case 3:
                return array.slice(6).concat(array.slice(0, 6));
            case 4:
                return array.slice(5).concat(array.slice(0, 5));
            case 5:
                return array.slice(4).concat(array.slice(0, 4));
            case 6:
                return array.slice(3).concat(array.slice(0, 3));
            case 7:
                return array.slice(2).concat(array.slice(0, 2));
            case 8:
                return array.slice(1).concat(array.slice(0, 1));
        }
    }
}
