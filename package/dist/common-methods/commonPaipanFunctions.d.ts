export declare function getKongWang(xunShou: string, wantYiKong: boolean): (string | number | undefined)[];
export declare function getMaXing(shiZhi: string): number;
export declare function gongWangShuai(jieqi: string, feiPan: boolean): string[] | undefined;
export declare function findXunShouGan(xunshou: string): string;
export declare function paiDiPanGan(dun: string, jushu: string): string[] | undefined;
export declare function zhaoXunShou(shizhu: string, liushijiazi: string[]): string | undefined;
export declare function dingFuShi(dipangan: string[], xunshou: string): {
    zhifu: string;
    zhishi: string;
} | undefined;
export declare function dingKongWang(xunshou: string): {
    gongwei: number[];
    liuyi: string;
} | undefined;
export declare function paiAnGanZhi(xunshou: string, diPanGanList: string[], dun: string): string[];
export declare function rearrangeArray(array: string[], startIndex: number, dun?: string): string[];
