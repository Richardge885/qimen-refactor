interface DingJuParams {
    jieqi: string;
    rizhu: string;
    baoshuQiJuMethod: string;
    baoshu: number;
    chaiBu?: boolean;
    ziXuanJu?: string;
}
interface DunAndJu {
    dun: string;
    jushu: string;
}
export declare function dingJu({ jieqi, rizhu, baoshuQiJuMethod, baoshu, chaiBu, ziXuanJu }: DingJuParams): DunAndJu;
export {};
