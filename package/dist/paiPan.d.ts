import { FullTimeInformation, JiuGongXinXi } from "./feiPan/interfaces";
import { PaipanTime } from "./common-methods/timeInterface";
interface PaiPanInput {
    paipanMethod?: string;
    time: PaipanTime;
    baoshuMethod?: string;
    baoshu?: number;
    chaiBu?: boolean;
    ziXuanJu?: string;
    additionalSettings: AdditionalSettings;
}
interface AdditionalSettings {
    traditionalCharacters: boolean;
    singleCharacter: boolean;
}
interface PaiPanResult {
    allTimeInformation: FullTimeInformation;
    zhiFu: string;
    zhiShi: string;
    xunShou: string;
    huanJu: JiuGongXinXi;
    panJuResult: JiuGongXinXi;
}
export declare function paipan({ paipanMethod, time, baoshuMethod, baoshu, chaiBu, ziXuanJu, additionalSettings, }: PaiPanInput): PaiPanResult;
export {};
