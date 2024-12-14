"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putInZhengGe = putInZhengGe;
const feiPanGeJu_1 = require("./feiPanGeJu");
function putInZhengGe(panJu) {
    let result = panJu;
    let geJu = [];
    Object.keys(result).forEach((object) => {
        const gong = result[object];
        geJu.push(getZhengGe(gong.tianPanGan + gong.diPanGan));
    });
    let i = 0;
    Object.keys(result).forEach((object) => {
        const gong = result[object];
        for (let j = 0; j < geJu[i].length; j++) {
            gong.zhengGe.push(geJu[i][j]);
        }
        i = i + 1;
    });
    return result;
}
function getZhengGe(zuHe) {
    let result = [];
    switch (zuHe) {
        default:
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.muFuYin;
            break;
        case '甲乙':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            break;
        case '甲丙':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.haoQi;
            break;
        case '甲丁':
            result[0] = feiPanGeJu_1.zhengGe.jiaoYin;
            break;
        case '甲戊':
            result[0] = feiPanGeJu_1.zhengGe.waiZhi;
            break;
        case '甲己':
            result[0] = feiPanGeJu_1.zhengGe.shangHe + '\n' + feiPanGeJu_1.zhengGe.heTu;
            result[1] = feiPanGeJu_1.zhengGe.waiQin;
            break;
        case '甲庚':
            result[0] = feiPanGeJu_1.zhengGe.beiChong + '\n' + feiPanGeJu_1.zhengGe.muChong;
            result[1] = feiPanGeJu_1.zhengGe.neiZhi;
            break;
        case '甲辛':
            result[0] = feiPanGeJu_1.zhengGe.neiHai;
            break;
        case '甲壬':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.chengQuan;
            break;
        case '甲癸':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            result[1] = feiPanGeJu_1.zhengGe.deMu;
            break;
        case '乙甲':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            break;
        case '乙乙':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.muFuYin;
            break;
        case '乙丙':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            result[1] = feiPanGeJu_1.zhengGe.jiaoYang;
            break;
        case '乙丁':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.duoQuan;
            break;
        case '乙戊':
            result[0] = feiPanGeJu_1.zhengGe.waiHai;
            break;
        case '乙己':
            result[0] = feiPanGeJu_1.zhengGe.waiLuan;
            break;
        case '乙庚':
            result[0] = feiPanGeJu_1.zhengGe.shangHe + '\n' + feiPanGeJu_1.zhengGe.heJin;
            result[1] = feiPanGeJu_1.zhengGe.neiQin;
            break;
        case '乙辛':
            result[0] = feiPanGeJu_1.zhengGe.beiChong + '\n' + feiPanGeJu_1.zhengGe.muChong;
            result[1] = feiPanGeJu_1.zhengGe.neiLuan;
            break;
        case '乙壬':
            result[0] = feiPanGeJu_1.zhengGe.huoFu;
            break;
        case '乙癸':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.yiShi;
            break;
        case '丙甲':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.chengQuan;
            break;
        case '丙乙':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            result[1] = feiPanGeJu_1.zhengGe.deMu;
            break;
        case '丙丙':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.huoFuYin;
            break;
        case '丙丁':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            break;
        case '丙戊':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.haoQi;
            break;
        case '丙己':
            result[0] = feiPanGeJu_1.zhengGe.jiaoYin;
            break;
        case '丙庚':
            result[0] = feiPanGeJu_1.zhengGe.waiZhi;
            break;
        case '丙辛':
            result[0] = feiPanGeJu_1.zhengGe.shangHe + '\n' + feiPanGeJu_1.zhengGe.heShui;
            result[1] = feiPanGeJu_1.zhengGe.waiQin;
            break;
        case '丙壬':
            result[0] = feiPanGeJu_1.zhengGe.beiChong + '\n' + feiPanGeJu_1.zhengGe.huoChong;
            result[1] = feiPanGeJu_1.zhengGe.neiZhi;
            break;
        case '丙癸':
            result[0] = feiPanGeJu_1.zhengGe.neiHai;
            break;
        case '丁甲':
            result[0] = feiPanGeJu_1.zhengGe.huoFu;
            break;
        case '丁乙':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.yiShi;
            break;
        case '丁丙':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            break;
        case '丁丁':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.huoFuYin;
            break;
        case '丁戊':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            result[1] = feiPanGeJu_1.zhengGe.jiaoYang;
            break;
        case '丁己':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.duoQuan;
            break;
        case '丁庚':
            result[0] = feiPanGeJu_1.zhengGe.waiHai;
            break;
        case '丁辛':
            result[0] = feiPanGeJu_1.zhengGe.waiLuan;
            break;
        case '丁壬':
            result[0] = feiPanGeJu_1.zhengGe.shangHe + '\n' + feiPanGeJu_1.zhengGe.heMu;
            result[1] = feiPanGeJu_1.zhengGe.neiQin;
            break;
        case '丁癸':
            result[0] = feiPanGeJu_1.zhengGe.beiChong + '\n' + feiPanGeJu_1.zhengGe.huoChong;
            result[1] = feiPanGeJu_1.zhengGe.neiLuan;
            break;
        case '戊甲':
            result[0] = feiPanGeJu_1.zhengGe.neiZhi;
            break;
        case '戊乙':
            result[0] = feiPanGeJu_1.zhengGe.neiHai;
            break;
        case '戊丙':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.chengQuan;
            break;
        case '戊丁':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            result[1] = feiPanGeJu_1.zhengGe.deMu;
            break;
        case '戊戊':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.tuFuYin;
            break;
        case '戊己':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            break;
        case '戊庚':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.haoQi;
            break;
        case '戊辛':
            result[0] = feiPanGeJu_1.zhengGe.jiaoYin;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '戊壬':
            result[0] = feiPanGeJu_1.zhengGe.waiZhi;
            break;
        case '戊癸':
            result[0] = feiPanGeJu_1.zhengGe.shangHe + '\n' + feiPanGeJu_1.zhengGe.heHuo;
            result[1] = feiPanGeJu_1.zhengGe.waiQin;
            break;
        case '己甲':
            result[0] = feiPanGeJu_1.zhengGe.xiaHe + '\n' + feiPanGeJu_1.zhengGe.heTu;
            result[1] = feiPanGeJu_1.zhengGe.neiQin;
            break;
        case '己乙':
            result[0] = feiPanGeJu_1.zhengGe.neiLuan;
            break;
        case '己丙':
            result[0] = feiPanGeJu_1.zhengGe.huoFu;
            break;
        case '己丁':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.yiShi;
            break;
        case '己戊':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            break;
        case '己己':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.tuFuYin;
            break;
        case '己庚':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            result[1] = feiPanGeJu_1.zhengGe.jiaoYang;
            break;
        case '己辛':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.duoQuan;
            break;
        case '己壬':
            result[0] = feiPanGeJu_1.zhengGe.waiHai;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '己癸':
            result[0] = feiPanGeJu_1.zhengGe.waiLuan;
            break;
        case '庚甲':
            result[0] = feiPanGeJu_1.zhengGe.zhengChong + '\n' + feiPanGeJu_1.zhengGe.jinChong;
            result[1] = feiPanGeJu_1.zhengGe.waiZhi;
            break;
        case '庚乙':
            result[0] = feiPanGeJu_1.zhengGe.xiaHe + '\n' + feiPanGeJu_1.zhengGe.heJin;
            result[1] = feiPanGeJu_1.zhengGe.waiQin;
            break;
        case '庚丙':
            result[0] = feiPanGeJu_1.zhengGe.neiZhi;
            break;
        case '庚丁':
            result[0] = feiPanGeJu_1.zhengGe.neiHai;
            break;
        case '庚戊':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.chengQuan;
            break;
        case '庚己':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            result[1] = feiPanGeJu_1.zhengGe.deMu;
            break;
        case '庚庚':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.jinFuYin;
            break;
        case '庚辛':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            break;
        case '庚壬':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.haoQi;
            break;
        case '庚癸':
            result[0] = feiPanGeJu_1.zhengGe.jiaoYin;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '辛甲':
            result[0] = feiPanGeJu_1.zhengGe.waiHai;
            break;
        case '辛乙':
            result[0] = feiPanGeJu_1.zhengGe.zhengChong + '\n' + feiPanGeJu_1.zhengGe.jinChong;
            result[1] = feiPanGeJu_1.zhengGe.waiLuan;
            break;
        case '辛丙':
            result[0] = feiPanGeJu_1.zhengGe.xiaHe + '\n' + feiPanGeJu_1.zhengGe.heShui;
            result[1] = feiPanGeJu_1.zhengGe.neiQin;
            break;
        case '辛丁':
            result[0] = feiPanGeJu_1.zhengGe.neiLuan;
            break;
        case '辛戊':
            result[0] = feiPanGeJu_1.zhengGe.huoFu;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '辛己':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.yiShi;
            break;
        case '辛庚':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            break;
        case '辛辛':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.jinFuYin;
            break;
        case '辛壬':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            result[1] = feiPanGeJu_1.zhengGe.jiaoYang;
            break;
        case '辛癸':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.duoQuan;
            break;
        case '壬甲':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.haoQi;
            break;
        case '壬乙':
            result[0] = feiPanGeJu_1.zhengGe.jiaoYin;
            break;
        case '壬丙':
            result[0] = feiPanGeJu_1.zhengGe.zhengChong + '\n' + feiPanGeJu_1.zhengGe.shuiChong;
            result[1] = feiPanGeJu_1.zhengGe.waiZhi;
            break;
        case '壬丁':
            result[0] = feiPanGeJu_1.zhengGe.xiaHe + '\n' + feiPanGeJu_1.zhengGe.heShui;
            result[1] = feiPanGeJu_1.zhengGe.waiQin;
            break;
        case '壬戊':
            result[0] = feiPanGeJu_1.zhengGe.neiZhi;
            break;
        case '壬己':
            result[0] = feiPanGeJu_1.zhengGe.neiHai;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '壬庚':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.chengQuan;
            break;
        case '壬辛':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            result[1] = feiPanGeJu_1.zhengGe.deMu;
            break;
        case '壬壬':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.shuiFuYin;
            break;
        case '壬癸':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            break;
        case '癸甲':
            result[0] = feiPanGeJu_1.zhengGe.jinRu;
            result[1] = feiPanGeJu_1.zhengGe.jiaoYang;
            break;
        case '癸乙':
            result[0] = feiPanGeJu_1.zhengGe.qianJian;
            result[1] = feiPanGeJu_1.zhengGe.duoQuan;
            break;
        case '癸丙':
            result[0] = feiPanGeJu_1.zhengGe.waiHai;
            break;
        case '癸丁':
            result[0] = feiPanGeJu_1.zhengGe.zhengChong + '\n' + feiPanGeJu_1.zhengGe.shuiChong;
            result[1] = feiPanGeJu_1.zhengGe.waiLuan;
            break;
        case '癸戊':
            result[0] = feiPanGeJu_1.zhengGe.xiaHe + '\n' + feiPanGeJu_1.zhengGe.heHuo;
            result[1] = feiPanGeJu_1.zhengGe.neiQin;
            break;
        case '癸己':
            result[0] = feiPanGeJu_1.zhengGe.neiLuan;
            break;
        case '癸庚':
            result[0] = feiPanGeJu_1.zhengGe.huoFu;
            result[1] = feiPanGeJu_1.zhengGe.zhiPo;
            break;
        case '癸辛':
            result[0] = feiPanGeJu_1.zhengGe.houJian;
            result[1] = feiPanGeJu_1.zhengGe.yiShi;
            break;
        case '癸壬':
            result[0] = feiPanGeJu_1.zhengGe.tuiRu;
            break;
        case '癸癸':
            result[0] = feiPanGeJu_1.zhengGe.fuYin + '\n' + feiPanGeJu_1.zhengGe.shuiFuYin;
            break;
    }
    return result;
}
