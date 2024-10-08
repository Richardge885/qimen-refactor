import { liushijiazi, jieqiYuanShu } from '../commonInfo';

export function chaiBuDingJuShu(jieqi: string, rizhu: string) {
    switch (jieqi) {
        default:
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.立春.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.立春.中;
                            } else {
                                return jieqiYuanShu.立春.下;
                            }
                        }
                    }
                }
            }
        case '雨水':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.雨水.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.雨水.中;
                            } else {
                                return jieqiYuanShu.雨水.下;
                            }
                        }
                    }
                }
            }
        case '惊蛰':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.惊蛰.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.惊蛰.中;
                            } else {
                                return jieqiYuanShu.惊蛰.下;
                            }
                        }
                    }
                }
            }
        case '春分':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.春分.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.春分.中;
                            } else {
                                return jieqiYuanShu.春分.下;
                            }
                        }
                    }
                }
            }
        case '清明':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.清明.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.清明.中;
                            } else {
                                return jieqiYuanShu.清明.下;
                            }
                        }
                    }
                }
            }
        case '谷雨':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.谷雨.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.谷雨.中;
                            } else {
                                return jieqiYuanShu.谷雨.下;
                            }
                        }
                    }
                }
            }
        case '立夏':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.立夏.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.立夏.中;
                            } else {
                                return jieqiYuanShu.立夏.下;
                            }
                        }
                    }
                }
            }
        case '小满':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.小满.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.小满.中;
                            } else {
                                return jieqiYuanShu.小满.下;
                            }
                        }
                    }
                }
            }
        case '芒种':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.芒种.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.芒种.中;
                            } else {
                                return jieqiYuanShu.芒种.下;
                            }
                        }
                    }
                }
            }
        case '夏至':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.夏至.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.夏至.中;
                            } else {
                                return jieqiYuanShu.夏至.下;
                            }
                        }
                    }
                }
            }
        case '小暑':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.小暑.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.小暑.中;
                            } else {
                                return jieqiYuanShu.小暑.下;
                            }
                        }
                    }
                }
            }
        case '大暑':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.大暑.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.大暑.中;
                            } else {
                                return jieqiYuanShu.大暑.下;
                            }
                        }
                    }
                }
            }
        case '立秋':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.立秋.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.立秋.中;
                            } else {
                                return jieqiYuanShu.立秋.下;
                            }
                        }
                    }
                }
            }
        case '处暑':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.处暑.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.处暑.中;
                            } else {
                                return jieqiYuanShu.处暑.下;
                            }
                        }
                    }
                }
            }
        case '白露':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.白露.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.白露.中;
                            } else {
                                return jieqiYuanShu.白露.下;
                            }
                        }
                    }
                }
            }
        case '秋分':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.秋分.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.秋分.中;
                            } else {
                                return jieqiYuanShu.秋分.下;
                            }
                        }
                    }
                }
            }
        case '寒露':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.寒露.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.寒露.中;
                            } else {
                                return jieqiYuanShu.寒露.下;
                            }
                        }
                    }
                }
            }
        case '霜降':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.霜降.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.霜降.中;
                            } else {
                                return jieqiYuanShu.霜降.下;
                            }
                        }
                    }
                }
            }
        case '立冬':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.立冬.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.立冬.中;
                            } else {
                                return jieqiYuanShu.立冬.下;
                            }
                        }
                    }
                }
            }
        case '小雪':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.小雪.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.小雪.中;
                            } else {
                                return jieqiYuanShu.小雪.下;
                            }
                        }
                    }
                }
            }
        case '大雪':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.大雪.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.大雪.中;
                            } else {
                                return jieqiYuanShu.大雪.下;
                            }
                        }
                    }
                }
            }
        case '冬至':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.冬至.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.冬至.中;
                            } else {
                                return jieqiYuanShu.冬至.下;
                            }
                        }
                    }
                }
            }
        case '小寒':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.小寒.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.小寒.中;
                            } else {
                                return jieqiYuanShu.小寒.下;
                            }
                        }
                    }
                }
            }
        case '大寒':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.大寒.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.大寒.中;
                            } else {
                                return jieqiYuanShu.大寒.下;
                            }
                        }
                    }
                }
            }
    }
}