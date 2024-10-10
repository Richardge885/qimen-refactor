export function dingYinYangDun(jieqi: string): string {
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