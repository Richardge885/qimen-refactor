import { timeInfo } from './sizhu';
import { dingJu } from './dingJu';
// const { feiPan } = require('');
// const { zhuanPan } = require('');
// const { zhangShi } = require('');
// const { xingFeiMenZhuan } = require('');

interface PaiPanInput {
    paipanMethod?: string,
    date: string, //'yyyy/m/d',
    time: string, // '00:00',
    baoshuMethod?: string, // 制筹, 时辰, 局数
    baoshu?: number,
    dun?: string, // 阴阳
    chaiBu?: boolean,
    ziXuanJu?: string;
};

function main() {
    console.log(paipan({
        paipanMethod: '飞盘',
        date: '2024/9/9', //'yyyy/m/d',
        time: '17:35', // '00:00',
        baoshuMethod: '', // 制筹, 时辰, 局数
        baoshu: 0,
        dun: '', // 阴阳
        ziXuanJu: ''
    }));
}

export function paipan({
    paipanMethod = '转盘',
    date, //'yyyy/m/d',
    time, // '00:00',
    baoshuMethod = '', // 制筹, 时辰, 局数
    baoshu = 0,
    dun = '', // 阴阳 // TODO 单独输入遁看其有些没有意义
    chaiBu = true,
    ziXuanJu = ''
}: PaiPanInput) {
    // NOTE 提取四柱和节气
    const timeData = timeInfo(date, time, baoshuMethod, baoshu);

    // NOTE 提取遁与局数
    // TODO 尚未完成
    let dingJuData = dingJu({
        jieqi: timeData.jieqi,
        rizhu: timeData.ri,
        //dun: dun, // TODO 单独输入遁看其有些没有意义
        baoshuQiJuMethod: baoshuMethod,
        baoshu: baoshu,
        chaiBu: chaiBu,
        ziXuanJu: ziXuanJu,
    });

    switch (paipanMethod) {
        // 默认排盘为转盘
        default:
            break;
        case '飞盘':
            break;
        case '张氏':
            break;
        case '星飞门转':
            break;
    }

    return {
        date: timeData.yangli,
        time: timeData.time,
        nianzhu: timeData.nian,
        yuezhu: timeData.yue,
        rizhu: timeData.ri,
        shizhu: timeData.shi,
        jieqi: timeData.jieqi,
        dun: dingJuData.dun,
        jushu: dingJuData.jushu,
    };
}


main();