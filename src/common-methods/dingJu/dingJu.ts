import { chaiBuDingJuShu } from './chai-bu-ding-ju';
import { dingYinYangDun } from './ding-yin-yang-dun';

interface DingJuParams {
    jieqi: string;
    rizhu: string;
    baoshuQiJuMethod: string;
    baoshu: number;
    chaiBu?: boolean;
    ziXuanJu?: string;
}

interface DunAndJu {
    dun: string,
    jushu: string;
}

export function dingJu({
    jieqi,
    rizhu,
    baoshuQiJuMethod,
    baoshu,
    chaiBu = true,
    ziXuanJu = ''
}: DingJuParams): DunAndJu {
    let dunResult;
    let jushu;
    if (baoshuQiJuMethod == '' && ziXuanJu != '') { // 处理自选据
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
    } else if (baoshuQiJuMethod == '局数') { // 报数换局
        if (baoshu % 9 == 0) {
            baoshu = 9;
        } else {
            baoshu = baoshu % 9;
        }
        return {
            dun: dingYinYangDun(jieqi)!,
            jushu: baoshu.toString()!,

        };
    } else if (chaiBu) { // 拆补定局
        dunResult = dingYinYangDun(jieqi)!;
        jushu = chaiBuDingJuShu(jieqi, rizhu)!;
    } else { // TODO 置闰定局
    }
    return {
        dun: dunResult!,
        jushu: jushu!,
    };
}

