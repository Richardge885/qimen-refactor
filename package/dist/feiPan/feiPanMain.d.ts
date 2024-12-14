import { FullTimeInformation, PanJuInformation } from './interfaces';
export declare function paiFeiPan({ year, month, date, hour, minute, nianzhu, yuezhu, rizhu, shizhu, jieqi, dun, jushu, }: FullTimeInformation, additionalSetting: {
    traditionalCharacters: boolean;
    singleCharacter: boolean;
}, baoshuMethod: string, baoshu: number, ziXuanJu: string): PanJuInformation;
