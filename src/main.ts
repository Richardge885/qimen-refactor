import { getTimeInfo } from "./common-methods/lunarLibrary";
import { dingJu } from "./common-methods/dingJu/dingJu";
import { paiFeiPan } from "./feiPan/feiPanMain";
import { PanJuInformation } from "./feiPan/interfaces";
import { PaipanTime } from "./common-methods/timeInterface";

interface PaiPanInput {
    paipanMethod?: string;
    time: PaipanTime;
    baoshuMethod?: string; // 制筹, 时辰, 局数
    baoshu?: number;
    chaiBu?: boolean;
    ziXuanJu?: string;
}

/**
 * 如果baoshuMethod = '' 和 baoshu == 0 则使用 ziXuanJu
 */
export function paipan({
    paipanMethod = "飞盘",
    time,
    ziXuanJu = "",
    baoshuMethod = "", // 制筹, 时辰, 局数
    baoshu = 0,
    chaiBu = true,
}: PaiPanInput) {
    //const timeData = timeInfo(date, time, baoshuMethod, baoshu); // 根据自制 sizhu.ts
    const timeData = getTimeInfo(time, baoshuMethod, baoshu); // 根据Lunar-typescript Library
    let paipanResult: PanJuInformation;

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
        case "飞盘":
            paipanResult = paiFeiPan(fullTimeInformation);
            break;
    }

    // * NOTE For Testing  Printing PaiPan Information
    console.log(paipanResult!);
}

paipan({
    paipanMethod: "飞盘",
    time: {
        year: 2024,
        month: 10,
        day: 10,
        hour: 7,
        minute: 31,
    },
    baoshuMethod: "", // 制筹, 时辰, 局数
    baoshu: 0,
    ziXuanJu: "",
});
