import { PanJuInformation } from './feiPan/interfaces';
import { PaipanTime } from './common-methods/timeInterface';
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
export declare function paipan({ paipanMethod, time, baoshuMethod, baoshu, chaiBu, ziXuanJu, additionalSettings, }: PaiPanInput): PanJuInformation;
export {};
