import { JiuGongXinXi } from './interfaces';

export default function putInLiuQin(
    shiGan: string,
    panJu: JiuGongXinXi,
): JiuGongXinXi {
    let result = panJu;

    // 提取出格局
    Object.keys(result).forEach((object) => {
        const gong = result[object as keyof typeof result];
        gong.tianPanGanLiuQin = getLiuQin(shiGan, gong.tianPanGan);
        gong.diPanGanLiuQin = getLiuQin(shiGan, gong.diPanGan);
        gong.tianPanGanShiShen = getShiShen(shiGan, gong.tianPanGan);
        gong.diPanGanShiShen = getShiShen(shiGan, gong.diPanGan);
    });
    return result;
}

function getLiuQin(shiGan: string, gan: string): string {
    switch (shiGan) {
        default: // 默认为甲
            switch (gan) {
                default: // 默认为乙
                    return '兄';
                case '丙':
                    return '子';
                case '丁':
                    return '子';
                case '戊':
                    return '财';
                case '己':
                    return '财';
                case '庚':
                    return '鬼';
                case '辛':
                    return '官';
                case '壬':
                    return '父';
                case '癸':
                    return '父';
            }
        case '乙':
            switch (gan) {
                default: // 默认为乙
                    return '兄';
                case '丙':
                    return '子';
                case '丁':
                    return '子';
                case '戊':
                    return '财';
                case '己':
                    return '财';
                case '庚':
                    return '官';
                case '辛':
                    return '鬼';
                case '壬':
                    return '父';
                case '癸':
                    return '父';
            }
        case '丙':
            switch (gan) {
                default: // 默认为乙
                    return '父';
                case '丙':
                    return '兄';
                case '丁':
                    return '兄';
                case '戊':
                    return '子';
                case '己':
                    return '子';
                case '庚':
                    return '财';
                case '辛':
                    return '财';
                case '壬':
                    return '鬼';
                case '癸':
                    return '官';
            }
        case '丁':
            switch (gan) {
                default: // 默认为乙
                    return '父';
                case '丙':
                    return '兄';
                case '丁':
                    return '兄';
                case '戊':
                    return '子';
                case '己':
                    return '子';
                case '庚':
                    return '财';
                case '辛':
                    return '财';
                case '壬':
                    return '官';
                case '癸':
                    return '鬼';
            }
        case '戊':
            switch (gan) {
                default: // 默认为乙
                    return '官';
                case '丙':
                    return '父';
                case '丁':
                    return '父';
                case '戊':
                    return '兄';
                case '己':
                    return '兄';
                case '庚':
                    return '子';
                case '辛':
                    return '子';
                case '壬':
                    return '财';
                case '癸':
                    return '财';
            }
        case '己':
            switch (gan) {
                default: // 默认为乙
                    return '鬼';
                case '丙':
                    return '父';
                case '丁':
                    return '父';
                case '戊':
                    return '兄';
                case '己':
                    return '兄';
                case '庚':
                    return '子';
                case '辛':
                    return '子';
                case '壬':
                    return '财';
                case '癸':
                    return '财';
            }
        case '庚':
            switch (gan) {
                default: // 默认为乙
                    return '财';
                case '丙':
                    return '鬼';
                case '丁':
                    return '官';
                case '戊':
                    return '父';
                case '己':
                    return '父';
                case '庚':
                    return '兄';
                case '辛':
                    return '兄';
                case '壬':
                    return '子';
                case '癸':
                    return '子';
            }
        case '辛':
            switch (gan) {
                default: // 默认为乙
                    return '财';
                case '丙':
                    return '官';
                case '丁':
                    return '鬼';
                case '戊':
                    return '父';
                case '己':
                    return '父';
                case '庚':
                    return '兄';
                case '辛':
                    return '兄';
                case '壬':
                    return '子';
                case '癸':
                    return '子';
            }
        case '壬':
            switch (gan) {
                default: // 默认为乙
                    return '子';
                case '丙':
                    return '财';
                case '丁':
                    return '财';
                case '戊':
                    return '鬼';
                case '己':
                    return '官';
                case '庚':
                    return '父';
                case '辛':
                    return '父';
                case '壬':
                    return '兄';
                case '癸':
                    return '兄';
            }
        case '癸':
            switch (gan) {
                default: // 默认为乙
                    return '子';
                case '丙':
                    return '财';
                case '丁':
                    return '财';
                case '戊':
                    return '官';
                case '己':
                    return '鬼';
                case '庚':
                    return '父';
                case '辛':
                    return '父';
                case '壬':
                    return '兄';
                case '癸':
                    return '兄';
            }
    }
}

function getShiShen(shiGan: string, gan: string): string {
    switch (shiGan) {
        default: // 默认为甲
            switch (gan) {
                default: // 默认为乙
                    return '劫';
                case '丙':
                    return '食';
                case '丁':
                    return '伤';
                case '戊':
                    return '才';
                case '己':
                    return '财';
                case '庚':
                    return '杀';
                case '辛':
                    return '官';
                case '壬':
                    return '枭';
                case '癸':
                    return '印';
            }
        case '乙':
            switch (gan) {
                default: // 默认为乙
                    return '比';
                case '丙':
                    return '食';
                case '丁':
                    return '伤';
                case '戊':
                    return '财';
                case '己':
                    return '才';
                case '庚':
                    return '官';
                case '辛':
                    return '杀';
                case '壬':
                    return '印';
                case '癸':
                    return '枭';
            }
        case '丙':
            switch (gan) {
                default: // 默认为乙
                    return '印';
                case '丙':
                    return '比';
                case '丁':
                    return '劫';
                case '戊':
                    return '食';
                case '己':
                    return '伤';
                case '庚':
                    return '才';
                case '辛':
                    return '财';
                case '壬':
                    return '杀';
                case '癸':
                    return '官';
            }
        case '丁':
            switch (gan) {
                default: // 默认为乙
                    return '枭';
                case '丙':
                    return '劫';
                case '丁':
                    return '比';
                case '戊':
                    return '伤';
                case '己':
                    return '食';
                case '庚':
                    return '财';
                case '辛':
                    return '才';
                case '壬':
                    return '官';
                case '癸':
                    return '杀';
            }
        case '戊':
            switch (gan) {
                default: // 默认为乙
                    return '官';
                case '丙':
                    return '枭';
                case '丁':
                    return '印';
                case '戊':
                    return '比';
                case '己':
                    return '劫';
                case '庚':
                    return '食';
                case '辛':
                    return '伤';
                case '壬':
                    return '才';
                case '癸':
                    return '财';
            }
        case '己':
            switch (gan) {
                default: // 默认为乙
                    return '杀';
                case '丙':
                    return '印';
                case '丁':
                    return '枭';
                case '戊':
                    return '劫';
                case '己':
                    return '比';
                case '庚':
                    return '伤';
                case '辛':
                    return '食';
                case '壬':
                    return '财';
                case '癸':
                    return '才';
            }
        case '庚':
            switch (gan) {
                default: // 默认为乙
                    return '财';
                case '丙':
                    return '杀';
                case '丁':
                    return '官';
                case '戊':
                    return '枭';
                case '己':
                    return '印';
                case '庚':
                    return '比';
                case '辛':
                    return '劫';
                case '壬':
                    return '食';
                case '癸':
                    return '伤';
            }
        case '辛':
            switch (gan) {
                default: // 默认为乙
                    return '才';
                case '丙':
                    return '官';
                case '丁':
                    return '杀';
                case '戊':
                    return '印';
                case '己':
                    return '枭';
                case '庚':
                    return '劫';
                case '辛':
                    return '比';
                case '壬':
                    return '伤';
                case '癸':
                    return '食';
            }
        case '壬':
            switch (gan) {
                default: // 默认为乙
                    return '伤';
                case '丙':
                    return '才';
                case '丁':
                    return '财';
                case '戊':
                    return '杀';
                case '己':
                    return '官';
                case '庚':
                    return '枭';
                case '辛':
                    return '印';
                case '壬':
                    return '比';
                case '癸':
                    return '劫';
            }
        case '癸':
            switch (gan) {
                default: // 默认为乙
                    return '食';
                case '丙':
                    return '财';
                case '丁':
                    return '才';
                case '戊':
                    return '官';
                case '己':
                    return '杀';
                case '庚':
                    return '印';
                case '辛':
                    return '枭';
                case '壬':
                    return '劫';
                case '癸':
                    return '比';
            }
    }
}
