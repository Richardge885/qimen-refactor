import { PanJuInformation, JiuGongXinXi, TianPanInformation } from "./interfaces";
export declare function huanJu(originalPanJu: PanJuInformation, tianPanInformation: TianPanInformation[], diPanGan: string[]): PanJuInformation;
export declare function gatherTianPanInformation(panJu: JiuGongXinXi, xunShouGan: string): TianPanInformation[];
