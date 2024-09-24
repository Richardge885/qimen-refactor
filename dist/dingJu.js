"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dingJu = dingJu;
const commonInfo_1 = require("./commonInfo");
function dingJu({ jieqi, rizhu, baoshuQiJuMethod, baoshu, chaiBu = true, ziXuanJu = '' }) {
    let dunResult;
    let jushu;
    if (baoshuQiJuMethod == '' && ziXuanJu != '') {
        switch (ziXuanJu) {
            default:
                return {
                    dun: '阳',
                    jushu: '1'
                };
            case "阳2局":
                return {
                    dun: '阳',
                    jushu: '2'
                };
            case "阳3局":
                return {
                    dun: '阳',
                    jushu: '3'
                };
            case "阳4局":
                return {
                    dun: '阳',
                    jushu: '4'
                };
            case "阳5局":
                return {
                    dun: '阳',
                    jushu: '5'
                };
            case "阳6局":
                return {
                    dun: '阳',
                    jushu: '6'
                };
            case "阳7局":
                return {
                    dun: '阳',
                    jushu: '7'
                };
            case "阳8局":
                return {
                    dun: '阳',
                    jushu: '8'
                };
            case "阳9局":
                return {
                    dun: '阳',
                    jushu: '9'
                };
            case "阴1局":
                return {
                    dun: '阴',
                    jushu: '1'
                };
            case "阴2局":
                return {
                    dun: '阴',
                    jushu: '2'
                };
            case "阴3局":
                return {
                    dun: '阴',
                    jushu: '3'
                };
            case "阴4局":
                return {
                    dun: '阴',
                    jushu: '4'
                };
            case "阴5局":
                return {
                    dun: '阴',
                    jushu: '5'
                };
            case "阴6局":
                return {
                    dun: '阴',
                    jushu: '6'
                };
            case "阴7局":
                return {
                    dun: '阴',
                    jushu: '7'
                };
            case "阴8局":
                return {
                    dun: '阴',
                    jushu: '8'
                };
            case "阴9局":
                return {
                    dun: '阴',
                    jushu: '9'
                };
        }
    }
    else if (baoshuQiJuMethod == '局数') {
        if (baoshu % 9 == 0) {
            baoshu = 9;
        }
        else {
            baoshu = baoshu % 9;
        }
        return {
            dun: dingYinYangDun(jieqi),
            jushu: baoshu.toString(),
        };
    }
    else if (chaiBu) {
        return {
            dun: dingYinYangDun(jieqi),
            jushu: dingJuShu(jieqi, rizhu),
        };
    }
    else {
    }
    return {
        dun: dunResult,
        jushu: jushu,
    };
}
function dingYinYangDun(jieqi) {
    switch (jieqi) {
        default:
            return '阳';
        case '雨水':
            return '阳';
        case '惊蛰':
            return '阳';
        case '春分':
            return '阳';
        case '清明':
            return '阳';
        case '谷雨':
            return '阳';
        case '立夏':
            return '阳';
        case '小满':
            return '阳';
        case '芒种':
            return '阳';
        case '夏至':
            return '阴';
        case '小暑':
            return '阴';
        case '大暑':
            return '阴';
        case '立秋':
            return '阴';
        case '处暑':
            return '阴';
        case '白露':
            return '阴';
        case '秋分':
            return '阴';
        case '寒露':
            return '阴';
        case '霜降':
            return '阴';
        case '立冬':
            return '阴';
        case '小雪':
            return '阴';
        case '大雪':
            return '阴';
        case '冬至':
            return '阳';
        case '小寒':
            return '阳';
        case '大寒':
            return '阳';
    }
}
function dingJuShu(jieqi, rizhu) {
    switch (jieqi) {
        default:
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.立春.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.立春.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.立春.下;
                            }
                        }
                    }
                }
            }
        case '雨水':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.雨水.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.雨水.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.雨水.下;
                            }
                        }
                    }
                }
            }
        case '惊蛰':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.惊蛰.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.惊蛰.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.惊蛰.下;
                            }
                        }
                    }
                }
            }
        case '春分':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.春分.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.春分.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.春分.下;
                            }
                        }
                    }
                }
            }
        case '清明':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.清明.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.清明.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.清明.下;
                            }
                        }
                    }
                }
            }
        case '谷雨':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.谷雨.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.谷雨.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.谷雨.下;
                            }
                        }
                    }
                }
            }
        case '立夏':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.立夏.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.立夏.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.立夏.下;
                            }
                        }
                    }
                }
            }
        case '小满':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.小满.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.小满.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.小满.下;
                            }
                        }
                    }
                }
            }
        case '芒种':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.芒种.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.芒种.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.芒种.下;
                            }
                        }
                    }
                }
            }
        case '夏至':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.夏至.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.夏至.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.夏至.下;
                            }
                        }
                    }
                }
            }
        case '小暑':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.小暑.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.小暑.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.小暑.下;
                            }
                        }
                    }
                }
            }
        case '大暑':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.大暑.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.大暑.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.大暑.下;
                            }
                        }
                    }
                }
            }
        case '立秋':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.立秋.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.立秋.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.立秋.下;
                            }
                        }
                    }
                }
            }
        case '处暑':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.处暑.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.处暑.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.处暑.下;
                            }
                        }
                    }
                }
            }
        case '白露':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.白露.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.白露.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.白露.下;
                            }
                        }
                    }
                }
            }
        case '秋分':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.秋分.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.秋分.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.秋分.下;
                            }
                        }
                    }
                }
            }
        case '寒露':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.寒露.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.寒露.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.寒露.下;
                            }
                        }
                    }
                }
            }
        case '霜降':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.霜降.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.霜降.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.霜降.下;
                            }
                        }
                    }
                }
            }
        case '立冬':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.立冬.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.立冬.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.立冬.下;
                            }
                        }
                    }
                }
            }
        case '小雪':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.小雪.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.小雪.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.小雪.下;
                            }
                        }
                    }
                }
            }
        case '大雪':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.大雪.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.大雪.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.大雪.下;
                            }
                        }
                    }
                }
            }
        case '冬至':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.冬至.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.冬至.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.冬至.下;
                            }
                        }
                    }
                }
            }
        case '小寒':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.小寒.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.小寒.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.小寒.下;
                            }
                        }
                    }
                }
            }
        case '大寒':
            for (let i = 0; i < 60; i++) {
                if (rizhu == commonInfo_1.liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (commonInfo_1.liushijiazi[j].charAt(0) == '甲' || commonInfo_1.liushijiazi[j].charAt(0) == '己') {
                            if (commonInfo_1.liushijiazi[j].charAt(1) == '子' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '午' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '卯' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '酉') {
                                return commonInfo_1.jieqiYuanShu.大寒.上;
                            }
                            else if (commonInfo_1.liushijiazi[j].charAt(1) == '寅' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '申' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '巳' ||
                                commonInfo_1.liushijiazi[j].charAt(1) == '亥') {
                                return commonInfo_1.jieqiYuanShu.大寒.中;
                            }
                            else {
                                return commonInfo_1.jieqiYuanShu.大寒.下;
                            }
                        }
                    }
                }
            }
    }
}