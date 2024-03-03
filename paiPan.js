const { timeInfo } = require('./sizhu');
const { dingJu } = require('./dingJu');
// const { feiPan } = require('');
// const { zhuanPan } = require('');
// const { zhangShi } = require('');
// const { xingFeiMenZhuan } = require('');

function paipan(
    paipanInfo = {
        paipanMethod: '转盘',
        date: 'yyyy/m/d',
        time: '00:00',
        baoshuMethod: 'none',
        baoshu: 0,
        dun: '',
        chaiBu: true,
    },
) {
    const timeData = timeInfo(paipanInfo.date, paipanInfo.time, paipanInfo.baoshuMethod, paipanInfo.baoshu);
    let dingJuData;

    dingJuData = dingJu(
        timeData.jieqi,
        timeData.ri,
        paipanInfo.dun,
        paipanInfo.baoshuMethod,
        paipanInfo.baoshu,
        paipanInfo.chaiBu,
    );

    switch (paipanInfo.paipanMethod) {
        case '飞盘':
            break;
        case '张氏':
            break;
        case '星飞门转':
            break;
        default:
            break;
    }

    return {
        date: timeData.yangli,
        time: timeData.time,
        nianzhu: timeData.nian,
        yuezhu: timeData.yue,
        rizhu: timeData.ri,
        shizhu: timeData.shi,
        dun: dingJuData.dun,
        jushu: dingJuData.jushu,
    };
}

console.log(
    paipan({
        paipanMethod: '飞盘',
        date: '2024/3/4',
        time: '08:24',
        baoshuMethod: 'none',
        baoshu: 0,
        dun: '',
        chaiBu: true,
    }),
);

module.exports = {
    paipan,
};
