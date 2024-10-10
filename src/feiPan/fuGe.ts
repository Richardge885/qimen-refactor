import { fuGe } from "./feiPanGeJu";

export function getFuGe(
    tianPanGan: string,
    diPanGan: string,
    men: string,
    xing: string,
    gong: string,
) {
    let result = {
        ganGong: { name: '', explnation: '' },
        menGong: { name: '', explnation: '' },
        xingGong: { name: '', explnation: '' },
        shenGong: { name: '', explnation: '' },
    };

    // 干宫
    if (
        (tianPanGan == '甲' && diPanGan == '乙') ||
        (tianPanGan == '乙' && diPanGan == '甲')
    ) {
        switch (gong) {
            case '乾':
                break;
            case '兑':
                break;
            case '离':
                break;
            case '震':
                break;
            case '巽':
                break;
            case '坎':
                break;
            case '艮':
                break;
            case '坤':
                break;
        }
    } else if (
        (tianPanGan == '丙' && diPanGan == '丁') ||
        (tianPanGan == '丁' && diPanGan == '丙')
    ) {
        switch (gong) {
            case '乾':
                break;
            case '兑':
                break;
            case '离':
                break;
            case '震':
                break;
            case '巽':
                break;
            case '坎':
                break;
            case '艮':
                break;
            case '坤':
                break;
        }
    } else if (
        (tianPanGan == '戊' && diPanGan == '己') ||
        (tianPanGan == '己' && diPanGan == '戊')
    ) {
        switch (gong) {
            case '乾':
                break;
            case '兑':
                break;
            case '离':
                break;
            case '震':
                break;
            case '巽':
                break;
            case '坎':
                break;
            case '艮':
                break;
            case '坤':
                break;
        }
    } else if (
        (tianPanGan == '庚' && diPanGan == '辛') ||
        (tianPanGan == '辛' && diPanGan == '庚')
    ) {
        switch (gong) {
            case '乾':
                break;
            case '兑':
                break;
            case '离':
                break;
            case '震':
                break;
            case '巽':
                break;
            case '坎':
                break;
            case '艮':
                break;
            case '坤':
                break;
        }
    } else if (
        (tianPanGan == '壬' && diPanGan == '癸') ||
        (tianPanGan == '癸' && diPanGan == '壬')
    ) {
        switch (gong) {
            case '乾':
                break;
            case '兑':
                break;
            case '离':
                break;
            case '震':
                break;
            case '巽':
                break;
            case '坎':
                break;
            case '艮':
                break;
            case '坤':
                break;
        }
    }

    // 门宫
    switch (men) {
        default:
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '死门':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '伤门':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '杜门':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '开门':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '惊门':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '生门':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '景门':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
    }

    // 星宫
    switch (xing) {
        default:
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '天芮':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '天冲':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '天辅':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '天禽':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '天心':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '天柱':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '天任':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
        case '天英':
            switch (gong) {
                case '乾':
                    break;
                case '兑':
                    break;
                case '离':
                    break;
                case '震':
                    break;
                case '巽':
                    break;
                case '坎':
                    break;
                case '艮':
                    break;
                case '坤':
                    break;
            }
            break;
    }
}
