import { timeInfo } from './sizhu';
import { dingJu } from './dingJu';
import { feiPan } from './feiPan';

interface PaiPanInput {
    paipanMethod?: string;
    date: string; //'yyyy/m/d',
    time: string; // '00:00',
    baoshuMethod?: string; // 制筹, 时辰, 局数
    baoshu?: number;
    chaiBu?: boolean;
    ziXuanJu?: string;
};

/**
 * 如果baoshuMethod = '' 和 baoshu == 0 则使用 ziXuanJu
 */
export function paipan({
    paipanMethod = '转盘',
    date, //'yyyy/m/d',
    time, // '00:00',
    baoshuMethod = '', // 制筹, 时辰, 局数
    baoshu = 0,
    chaiBu = true,
    ziXuanJu = '',
}: PaiPanInput) {
    if (time.length) {

    }
    const timeData = timeInfo(date, time, baoshuMethod, baoshu); // 提取四柱和节气
    let paipanResult;

    let dingJuData = dingJu({
        // 提取遁与局数
        jieqi: timeData.jieqi,
        rizhu: timeData.ri,
        baoshuQiJuMethod: baoshuMethod,
        baoshu: baoshu,
        chaiBu: chaiBu,
        ziXuanJu: ziXuanJu,
    });

    const fullTimeInformation = {
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

    switch (paipanMethod) {
        default: // 默认排盘为转盘
            break;
        case '飞盘':
            paipanResult = feiPan(fullTimeInformation);
            break;
        case '张氏':
            break;
        case '星飞门转':
            break;
    }

    // * NOTE For Testing  Printing PaiPan Information
    // console.log(paipanResult);
}

paipan({
    // Test
    paipanMethod: '飞盘',
    date: '2024/9/24', //'yyyy/m/d',
    time: '20:00', // '00:00',
    baoshuMethod: '', // 制筹, 时辰, 局数
    baoshu: 0,
    ziXuanJu: '',
});
