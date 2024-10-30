import { xingInfo, menInfo, shenInfo, ganInfo, baGuaInfo } from "./feiPanGeJu";
import { JiuGongXinXi } from "./interfaces";

export function inputSymboleInfo(panJu: JiuGongXinXi, shiZhi: string) {
  let result = panJu;
  Object.keys(result).forEach((object) => {
    const gong = result[object as keyof typeof result];
    switch (gong.baGua) {
      default: // 默认值乾
        gong.symboleInfo.gong = baGuaInfo.qian;
        break;
      case "坎":
        gong.symboleInfo.gong = baGuaInfo.kan;
        break;
      case "艮":
        gong.symboleInfo.gong = baGuaInfo.gen;
        break;
      case "震":
        gong.symboleInfo.gong = baGuaInfo.zhen;
        break;
      case "巽":
        gong.symboleInfo.gong = baGuaInfo.xun;
        break;
      case "离":
        gong.symboleInfo.gong = baGuaInfo.li;
        break;
      case "坤":
        gong.symboleInfo.gong = baGuaInfo.kun;
        break;
      case "兑":
        gong.symboleInfo.gong = baGuaInfo.dui;
        break;
    }

    switch (gong.xing) {
      default: // 默认值天蓬
        gong.symboleInfo.xing = xingInfo.tianPeng;
        break;
      case "天芮":
        gong.symboleInfo.xing = xingInfo.tianRui;
        break;
      case "天冲":
        gong.symboleInfo.xing = xingInfo.tianChong;
        break;
      case "天辅":
        gong.symboleInfo.xing = xingInfo.tianFu;
        break;
      case "天禽":
        gong.symboleInfo.xing = xingInfo.tianQin;
        break;
      case "天心":
        gong.symboleInfo.xing = xingInfo.tianXin;
        break;
      case "天柱":
        gong.symboleInfo.xing = xingInfo.tianZhu;
        break;
      case "天任":
        gong.symboleInfo.xing = xingInfo.tianRen;
        break;
      case "天英":
        gong.symboleInfo.xing = xingInfo.tianYing;
        break;
    }
    gong.symboleInfo.xing =
      gong.symboleInfo.xing + xingZhiShiYing(gong.xing, shiZhi);

    switch (gong.men) {
      default: // 默认值休门
        gong.symboleInfo.men = menInfo.xiuMen;
        break;
      case "死门":
        gong.symboleInfo.men = menInfo.siMen;
        break;
      case "伤门":
        gong.symboleInfo.men = menInfo.shangMen;
        break;
      case "杜门":
        gong.symboleInfo.men = menInfo.duMen;
        break;
      case "中五":
        gong.symboleInfo.men = menInfo.zhongMen;
        break;
      case "开门":
        gong.symboleInfo.men = menInfo.kaiMen;
        break;
      case "惊门":
        gong.symboleInfo.men = menInfo.jinMen;
        break;
      case "生门":
        gong.symboleInfo.men = menInfo.shengMen;
        break;
      case "景门":
        gong.symboleInfo.men = menInfo.jingMen;
        break;
    }
    switch (gong.tianPanShen) {
      default: // 默认值值符
        gong.symboleInfo.shen = shenInfo.zhiFu;
        break;
      case "螣蛇":
        gong.symboleInfo.shen = shenInfo.tengShe;
        break;
      case "太阴":
        gong.symboleInfo.shen = shenInfo.taiYin;
        break;
      case "六合":
        gong.symboleInfo.shen = shenInfo.liuHe;
        break;
      case "白虎":
        gong.symboleInfo.shen = shenInfo.baiHu;
        break;
      case "勾陈":
        gong.symboleInfo.shen = shenInfo.gouChen;
        break;
      case "太常":
        gong.symboleInfo.shen = shenInfo.taiChang;
        break;
      case "玄武":
        gong.symboleInfo.shen = shenInfo.xuanWu;
        break;
      case "朱雀":
        gong.symboleInfo.shen = shenInfo.zhuQue;
        break;
      case "九地":
        gong.symboleInfo.shen = shenInfo.jiuDi;
        break;
      case "九天":
        gong.symboleInfo.shen = shenInfo.jiuTian;
        break;
    }
    switch (gong.tianPanGan) {
      default: // 默认值乙
        gong.symboleInfo.tianPanGan = ganInfo.yi;
        break;
      case "丙":
        gong.symboleInfo.tianPanGan = ganInfo.bing;
        break;
      case "丁":
        gong.symboleInfo.tianPanGan = ganInfo.ding;
        break;
      case "戊":
        gong.symboleInfo.tianPanGan = ganInfo.wu;
        break;
      case "己":
        gong.symboleInfo.tianPanGan = ganInfo.ji;
        break;
      case "庚":
        gong.symboleInfo.tianPanGan = ganInfo.geng;
        break;
      case "辛":
        gong.symboleInfo.tianPanGan = ganInfo.xin;
        break;
      case "壬":
        gong.symboleInfo.tianPanGan = ganInfo.ren;
        break;
      case "癸":
        gong.symboleInfo.tianPanGan = ganInfo.gui;
        break;
    }
    switch (gong.diPanGan) {
      default: // 默认值乙
        gong.symboleInfo.diPanGan = ganInfo.yi;
        break;
      case "丙":
        gong.symboleInfo.diPanGan = ganInfo.bing;
        break;
      case "丁":
        gong.symboleInfo.diPanGan = ganInfo.ding;
        break;
      case "戊":
        gong.symboleInfo.diPanGan = ganInfo.wu;
        break;
      case "己":
        gong.symboleInfo.diPanGan = ganInfo.ji;
        break;
      case "庚":
        gong.symboleInfo.diPanGan = ganInfo.geng;
        break;
      case "辛":
        gong.symboleInfo.diPanGan = ganInfo.xin;
        break;
      case "壬":
        gong.symboleInfo.diPanGan = ganInfo.ren;
        break;
      case "癸":
        gong.symboleInfo.diPanGan = ganInfo.gui;
        break;
    }
  });
  return result;
}

function xingZhiShiYing(xing: string, shi: string) {
  switch (xing) {
    default:
      switch (shi) {
        default:
          return "天蓬值子时，不利人宅，安坟，上官，嫁娶，主有口舌争讼之事。凡作用时，有鸡鸣大畎，宿鸟闹林，田鼠争斗，或北方作黑云，有雨势，或见蓑笠渔翁，胡面强暴之人，或见青蓝衣之人至应。作用后，申子辰日，有缺唇驼背人来，鸡生肉卵。须防官讼破财，或家有人缢溺而死。";
        case "丑":
          return "天蓬值丑时，主墓树倒伤人，雷电风兩，茅莲草舍，鸡鸣犬吠，穉子牵犊过应。作用后，十日内．鸡生怪卵，黄大上屋．枯井水发，防小口灾，家业散，三年内，白头翁作牙®，进商音人田产，财谷大旺，十年后又败。";
        case "寅":
          return "天蓬值寅时，有青衣童子持花果来，北方和尚持杖至，公吏猎犬奔驰，青衫蓝裙田妇车水应。作用后，六十日内，如遇黑蛇人宅咬人，或鬼撒砂为怪，牛马伤人，主家道中落。三年后，得进田地，仍复兴旺。";
        case "卯":
          return "天蓬值卯时，黄云四起，妇人持铁器前来，免蛇横道。作用后，七日或六十日内，有角徵音人相请宴饮，或送财物。防女人口舌，盗贼牵连之事。若见过百日内当得横财。";
        case "辰":
          return "天蓬值辰时，砂雾飞扬，窑烟瘴气，鼓乐铿锵，东北方倒树伤人，渔樵牧子，孝妇奔丧，红衣女子至应。作用后，六十日内，鸦绕屋鸣，须防劫贼，又主有疯疾人上门图赖。如见过，家生贵子，大旺财谷。";
        case "巳":
          return "天蓬值巳时，逢驼背老人，持竹杖披蓑衣，妇女携酒，师巫歌唱，大蛇上树。作用后，百日内，遇火灾，反得横财。周年得武职，加官进禄。";
        case "午":
          return "天蓬值午时，逢炉冶事，有人持刀战斗，青衣妇抱红衣孩子，东方叫喊，或哭声应。作用后，六十日内，犬为怪，家长有忧。逢赤面疯瘫人，图赖破财。三年后，得古容大发。";
        case "未":
          return "天蓬值未时，逢童子逐羊，鸦鹊惊鸣，二女啼哭，北方有红衣女人至。作用后，六十日，须防军贼破财。";
        case "申":
          return "天蓬值申时，逢童子打水鼓叫喊，及持雨盖，牵猴走索人至应。作用后，二十日，遇鸡窠内蛇伤人，主奸淫事败露，有妇人投缳。";
        case "酉":
          return "天蓬值西时，西方见赤马车舆，群鸦飞噪，远寺钟声，妇人烹饪应。作用后，百日内，僧道人作牙，进商音人田产，大发。三年内，鸡生双子，猫生白种，名利皆吉。";
        case "戌":
          return "天蓬值戌时，主闻盗贼之声，老者扶杖来，及白须人担箩运士，西方雷雨应。作用后，六十日内，白犬自至，当因军器得财。";
        case "亥":
          return "天蓬值亥时，主孩儿啼哭，山峡瀑泉之声。见江干钓叟，醉翁夜归，孝服女人至。作用后，因捉贼得财。三年内，当出道法术艺人，位至公卿。";
      }
    case "天芮":
      switch (shi) {
        default:
          return "天芮星值子时，西南有火光，禽惊走，二人相逐，老妪抱孩童至。作用后，六十日内，有猫犬为怪，防妇人产厄。若秋冬用事，当进羽音妻妾人口。";
        case "丑":
          return "天芮星值丑时，闻金鼓声自西北至，或老妇锄园瓜果之应。作用后，七日内，遇龟鹊人宅，须防盗贼破财，口舌官讼之事。";
        case "寅":
          return "天芮星值寅时，见怀孕瘦妇，蓑笠老人，牵狗舞猴应。作用后，六十日，水牛人屋，名利大旺。";
        case "卯":
          return "天芮星值卯时，有红衣女人送花果之物，贵人骑马，两犬斗，水牛鸭应。作用后，六十日，进东方绝户产业，防小儿有汤火之灾。二年内，进羽音人物，及血财，防妇人胎产之厄。";
        case "辰":
          return "天芮星值辰时，有土工匠作窑坑之事，或士坍树倒，鸦鸣鼓声应。作用后，如遇野鸟人宅，须防盗劫破财。";
        case "巳":
          return "天芮星值巳时，逢驼背老人，持竹杖披蓑衣，妇女携酒，师巫歌唱，大蛇上树。作用后，百日内，遇火灾，反得横财。周年得武职，加官进禄。";
        case "午":
          return "天芮星值午时，有大肚胖汉，缺唇白衣人，妊妇牛马过应。作用后，六十日内，遇猫咬人，因买鱼发横财。周年后，得妻财。";
        case "未":
          return "天芮星值末时，有捕猎人，老妇牵羊，白衣道人携饮食应。作用后，周年内，乌鸦绕屋噪，赤面三牙须人斗闹，鸡犬瘟疫，须防回禄蛇伤。";
        case "申":
          return "天芮星值申时，东方有青盖，或僧道胡领人至，牛鸭犬吠应。作用后，百日内，进羽音人产物。周年内，野鸟人宅，防灾疫。";
        case "酉":
          return "天芮星值酉时，有群鸦鹊噪，正马过关，远寺金鼓声应。作用后，进鸡猫，可以求名。";
        case "戌":
          return "天芮星值戌时，有老人持杖，军士担锣守关，黄昏犬吠，老妪悲泣应。作用后，白虎来家，主得横财。";
        case "亥":
          return "天芮星值亥时，有子母相依，牛马作队应。作用后，有野猪人室，必主以道艺荣身。";
      }
    case "天冲":
      switch (shi) {
        default:
          return "天冲星值子时，有风兩鹤鸣钟鼓声应。作用后，六十日内，有生气人屋。周年田蚕倍收，防妇人产亡。若拾得古镜，当得僧道之财。";
        case "丑":
          return "天冲星值丑时，有青衣车牛，与埙篪鼓声，牛鸣虎啸犬吠，风雾窑烟，小儿妇人来应。作用后，牛产辙犊，乌猫生白子，庭生瑞草，得山林，田产，僧尼之财。若逢匠作伤狗，防庭帏灾变。";
        case "寅":
          return "天冲星值寅时，有贵人乘轿，童子执金银器至应。作用后，二十日，进角音人六畜田契，或人送琉璃器肌。六十日，牝鸡晨鸣，防家长有厄。若见过，因口舌争讼得财，主乙己丁生人获福。";
        case "卯":
          return "天冲星值卯时，有女子渡桥，贵人乘马，木匠锯树，猎犬逐免应。作用后，宜防妇女有灾。";
        case "辰":
          return "天冲星值辰时，主蛇上树，虎出林，僧道士工至应。作用后，拾得黄白古物，发财。七十日，进一男一女，家主防跌蹼。";
        case "巳":
          return "天冲星值已时，有牛羊争斗，女人相骂，西南鼓声，东南火发。作用后，六十日，蛇蛇咬鸡，牛人室，女人送契至。一百日，犬生花狗，大旺田财。";
        case "午":
          return "天冲星值午时，东邻火起，白衣叫唤，鸦鹊喧闹应。作用后，拾得古器，有鬼运钱谷，大发之兆。";
        case "未":
          return "天冲星值未时，有鼓响，孝服儿女，牛羊成群，西北闹喧应。作用后，六十日，白羊人宅，大发。";
        case "申":
          return "天冲星值申时，南方有白衣人骑马，吏卒人持刀斗殴应。作用后百日，女人作牙，进绝户产业。";
        case "酉":
          return "天冲星值酉时，有远人书信，狐狸咬叫，妇人把火。作用后，周年得贵子，发横财。";
        case "戌":
          return "天冲星值戌时，西方三五人，把火寻失物，军吏师巫，三牙须人至应。作用后，六十日，鸡上树鸣，得远信，获羽音人财。周年，防牛伤小口之患。";
        case "亥":
          return "天冲星值亥时，有跛足青衣人至，及东北人家火光应。作用后，猫捕得白鼠，大发财禄。";
      }
    case "天辅":
      switch (shi) {
        default:
          return "天辅星值子时，主天有景星庆云，红白衣人叫唤应。作用后，六十日内，进商音人物。如猿猴人室，主加官孕子之吉。";
        case "丑":
          return "天辅星值丑时，东方犬吠，有人争斗应。作用后，六十日，野鸡白免人屋，进僧道之物，或东南方羽音人送文契，远人信来。周年添人口，血财大旺，加官进禄。";
        case "寅":
          return "天辅星值寅时，主公吏人手持金木之器，及艺人携文书乐器应。作用后，六十日，有猫咬鸡维，当得盗贼财物。赤面人作牙，进羽音人田契。十二年大发，且生贵子。";
        case "卯":
          return "天辅星值卯时，有女人持雨盖，师巫鼓角声应。作用后，六十日，有生气人屋。因女人讼事，得财物产业。";
        case "辰":
          return "天辅星值辰时，有白羊黄犬相斗，卖油米菜人相撞，白衣小儿哭，怀事妇人至。作用后，大发钱谷。一年内，双生贵子。";
        case "巳":
          return "天辅星值巳时，有僧尼相调，女人抱布，狂风四起，儿童叫喊。作用后，进东方人财，有鬼搬运，大发财源。";
        case "午":
          return "天辅星值午时，有僧道持盖，文人把扇，女子穿红，窑冶烟起应。作用后，有贵人送异物，进西方人金银，长者到门，得寡妇之产。";
        case "未":
          return "天辅星值末时，有群犬争吠，丐妇携杖，僧道铺啜，西北方争屋喧哗应。作用后，百日内，进商音人财物，或有文信人宅，大发。";
        case "申":
          return "天辅星值申时，有肿脚青长人携酒果至，三教色衣人来，西北金鼓声应。作用后，井中出蛇，有人送牛羊至，吉。半年内，得妇人财，大发。";
        case "酉":
          return "天辅星值西时，得远信，娶妇来应。作用后，人财大发。";
        case "戌":
          return "天辅星值戌时，主窑冶火光，兵卒守关，师巫并行应。作用后，得远方财信，防六畜伤人。";
        case "亥":
          return "天辅星值亥时，有野猪奔逐，鸡鸣犬吠，渔翁把钓，僧尼夜奔应。作用后，见白鼠，大吉。";
      }
    case "天禽":
      switch (shi) {
        default:
          return "天禽星值子时，有怀孕妇人，紫衣费客，鼠走蝠飞应。作用后，六十日，鸡上树，大衔花，儒人赠物，主因武官进田士，财物。二十年后，丁财两发。";
        case "丑":
          return "天禽星值丑时，有孝服人持锡器来，小儿拍掌叫笑，黄胖矮子孕妇至。作用后，赌博获财，或得窑中财。三年后，遇牛吗，因获盗致富。";
        case "寅":
          return "天禽星值寅时，鸡乱吗，犬样吠，公吏僧道，陶冶匠役，带棕笠人至。作用后，六十日，进羽音人文契，田蚕大旺，庭产瑞草，发福发丁。";
        case "卯":
          return "天禽星值卯时，东风大发，小禽四噪，怀孕妇人至，与士木动作应。作用后，半年，野猫自来，园内可以得窖。";
        case "辰":
          return "天禽星值辰时，有师巫术艺人争闹，鸦鸣烟雾应。作用后，六十日内，有僧道或无嗣人送产物至，大发。";
        case "巳":
          return "天禽星值巳时，有白头野鸭，成队飞鸣，及师巫争闹，贵人骑马，鸡鸣蛇游应。作用后，���十日内，如遇妇人自来求合，生贵子。三年内，田蚕大旺。";
        case "午":
          return "天禽星值午时，有白衣女人至，狗街花，鸡斗叫，风云从东来。作用后，六十日，有外犬人室，主得东方人财。一年内，乌鸡出白维，进铁器，诸事荣昌。";
        case "未":
          return "天禽星值未时，有老人或跋足人担花过，青衣人携酒至。作用后，六十日内，进羽音人铁器，诸事大吉。";
        case "申":
          return "天禽星值申时，主天中飞鸟大叫，师巫执符，老人负辕来。作用后，百日内，如遇女人来，或拾得珠翠归。周年生贵子。";
        case "酉":
          return "天禽星值西时，西方火起，喧闹金鼓声应。作用后，一年内，如遇鸡生五子，有昌盛之兆。";
        case "戌":
          return "天禽星值戌时，东北方钟声，军人负戈，铙钹樵鼓，青衣童子携篮，或车大应。作用后，六十日，有白龟人室，当得寡妇财产。";
        case "亥":
          return "天禽星值亥时，闻西北方嫁女哭声，发西风，树倒拆屋。作用后，六十日，商音人作牙，进僧道田产，或进匠人铜铁器，则主大发。";
      }
    case "天心":
      switch (shi) {
        default:
          return "天心星值子时，主闻金鼓涛声，西北争斗，赤面长者来应。作用后，百日内，进商音人古器书面，家生白鸡，田蚕大旺。十二年外，因赌博见讼，防破家。";
        case "丑":
          return "天心星值丑时，主南方火光，跛足人把伞镜，送宝至。作用后，五日内，有双猫来家。四十日内，进商书远人财物文契，则有多寿之庆。";
        case "寅":
          return "天心星值寅时，有白鹭水禽，金鼓四鸣，青衣女人携篮，公吏走狗应。作用后，防遗火伤小口。六十日，有公事至。百日内，获金银。因得古窑，进商羽音人产。三年，得妻财贵子。";
        case "卯":
          return "天心星值卯时，有免走鸟飞，跛足妇人争闹，及犬吠鼓声，北方肩奥至。作用后，七日进横财。三年内，有牛自来，六畜大旺。有人来请，因军得财。";
        case "辰":
          return "天心星值辰时，主西北云起，青衣人携鱼，女人僧道同行。作用后，六十日，井中气如云出，则主大富贵之兆。";
        case "巳":
          return "天心星值已时，有青衣女子，抱小儿至，紫衣骑马，乌蛇上树应。作用后，半月内，得意外之财。跛足作牙，进商音人产，六畜大旺。三年内，女人成家，寡母坐堂之兆。";
        case "午":
          return "天心星值午时，主风丽骤至，蛇横当道，红裙女子携酒至。作用时，六十日，釜鸣，跛足人送生气物至。五年内，进金银田蚕，大旺。";
        case "未":
          return "天心星值未时，主老人说婚，牵羊担酒，妇女歌笑，衣服首饰之应。作用后，如遇羊生二羔，人财大旺。";
        case "申":
          return "天心星值申时，主僧道前来，金鼓四吗，百鸟喧噪，红裙女子送酒赠花果至。作用后，如遇白猿戏环，寡妇当家，主大发积。";
        case "酉":
          return "天心星值酉时，主僧道尼姑，把火西南上来，北方金鼓声，鸡鸣马嘶，婢子到门应。作用后，七十日，进商音人骡马，财物，官贵艺术人送远信至，大吉。";
        case "戌":
          return "天心星值戌时，主南方犬吠賊惊，小儿骑牛，公吏打犬应。作用后，三年内，鸡犬自来，则大富贵。";
        case "亥":
          return "天心星值亥时，有鸡鸣犬吠，皮帽老人手持铁器，渔翁夜归应。作用后，如遇远方人投宿遗下财宝，大吉。";
      }
    case "天柱":
      switch (shi) {
        default:
          return "天柱星值子时，有火从东至，狂风四起，孩童啼叫，缺唇人米应。作用后，六十日内，如遇蛇犬伤人，须防血光破财之事";
        case "丑":
          return "天柱星值丑时，匠人携斧自北来，孕妇产育，树生金花应。作用后，六十日，进羽音人金银器皿，三年外，防回禄穷败，出弄蛇戏，犬作傀儡人。";
        case "寅":
          return "天柱星值寅时，有牛鸣马嘶，僧道持盖，雷雨鹊噪应。作用后，如遇贼情牵连，须防妇女产厄。";
        case "卯":
          return "天柱星值卯时，瘦妇提筐，两僧尼持盖，女人争斗，及羊免之应。作用后，六十日内，遇鸡犬作怪，则防疫病死绝之危。";
        case "辰":
          return "天柱星值辰时，有扛木持鼓人过，农夫负锄，居宰恶人来应。作用后，鸡生双卵，猫生异种，进北方人财物，寡妇送契至，红面人作牙，进羽音女人田产。";
        case "巳":
          return "天柱星值已时，有黑牛钟声，乌猪大蛇，风雷火怪应。作用时，二十日，进商音人财物。六十日内，家有女人落水，生气物人宅。周年内，猫捕得白鼠，发富贵之兆。";
        case "午":
          return "天柱星值午时，西方有妇女骑骡，炉冶火惊，雷雪鸭吗应。作用后，五日内，孕妇病，防孝服事。六十日内，水边得古器，防小口有灾。";
        case "未":
          return "天柱星值末时，有瘦妇与僧道同行，东北携盖骑马逐羊应。作用后，百日内，遇狐狸为怪，防退财。";
        case "申":
          return "天柱星值申时，主鹰掠离堕地，猿猴惊啼，青衣人携篮应。作用后，如遇和尚奸拐，防因火丧家。";
        case "酉":
          return "天柱星值酉时，有远寺钟声，西方鼓角，鸡吗树上应。作用后，如遇盆鸣，防阴人灾厄。";
        case "戌":
          return "天柱星值戌时，有军兵相斗，犬吠荒村，女人纺织。作用后，如遇蛇虫伤人，防瘟疫死败。";
        case "亥":
          return "天柱星值亥时，有金声，乞丐啼哭，山下火光应。作用后，如遇妇人馈鲤，主因火得财。";
      }
    case "天任":
      switch (shi) {
        default:
          return "天任星值子时，有风雾火光，水畔鸡鸣，东南方有人持刀斧过应。作用后，百日内，遇妇人离异事，及木姓三牙须人上门图赖。家道日落，门风大败。";
        case "丑":
          return "天任星值丑时，有青衣妇人携酒，闻鼓乐声，山林锄筑应。作用后，半年外，有鹦鹉人宅，因口舌得财。";
        case "寅":
          return "天任星值寅时，有火把引女人行动，童子拍手戏笑，西北轿马，公使道人室应，作用后，六十日内，甑鸣，防妇死。百日内，进六畜。遇女人赠钗，防缺唇人争婚之祸。";
        case "卯":
          return "天任星值卵时，有老人持杖，喜鹤飞鸣，渔猎之应。作用后，七日内，得古器瓦物。百日内，因女人获财，进牛羊六畜，则有加官进职发财之光。";
        case "辰":
          return "天任星值辰时，有采樵渔猎，公吏师巫应。作用后，遇狸獭人宅，防田基争竞之事。";
        case "巳":
          return "天任星值已时，有两犬争一物，野人负薪过，吏人持盖，斗鸡走狗应。作用后，六十日，获远方人财。南方人送双鲤，就异途功名，当显。";
        case "午":
          return "天任星值午时，有师巫至，西北方黄色飞禽，或马狗来应。作用后，四十日，紫衣人人室，进贵人之物，当生贵子。";
        case "未":
          return "天任星值未时，有白鸡或飞马自西北来，鼓声喧闹，风丽大作应。作用后，七日内，女人送白色物至。六十日内，家生异物，六畜大旺。";
        case "申":
          return "天任星值申时，有风雨声，黄衣僧道师巫，舞猴挝鼓应。作用后，七日内，防妇女汤火之厄。";
        case "酉":
          return "天任星值酉时，有僧尼举火，西方人争斗，鸟鹊喧噪，白衣孕妇，钟声窑烟应。作用后，进商音人骡马，当得远方之财。";
        case "戌":
          return "天任星值戌时，女人抱白布至，西方鼓声，北方树倒，军吏惊走，大吠争斗应。作用后，六十日，蛇虫人宅咬人，黄大上屋，有军人来图赖，防瘟疫死败。";
        case "亥":
          return "天任星值亥时，有西寺钟声，山下火起，妇女啼哭应。作用后，遇人送双鲤至，因救火得财，大发。";
      }
    case "天英":
      switch (shi) {
        default:
          return "天英星值子时，有雞飞鼠走，西北锣声，把火伐木应。作用后，缺唇人为祸，防血光与火灾。";
        case "丑":
          return "天英星值丑时，东北方师巫至，闻金鼓声，村舍渔火应。作用后，一年内，大作人言，防回禄死败。";
        case "寅":
          return "天英星值寅时，有军马渔猎，僧道之应。作用后，女人拾财宝归。六十日内，得寡妇田产。百日内，出遇疾雷暴雨，大发。";
        case "卯":
          return "天英星值卯时，有负木器人，及有灯火炉烟，或烧林之应。作用后，六十日内，进妇人财宝，人财两发。";
        case "辰":
          return "天英星值辰时，有红衣女子，鼓声渔罟应。作用后，遇鸦鸣绕屋，须防切贼窃盗。";
        case "巳":
          return "天英星值巳时，有僧道焚香，蛇狗炉火应。作用后，如得意外之财，或人送鲤来，主人财两旺。";
        case "午":
          return "天英星值午时，南方有婚姻事，车马经过，捕猎人执马矢至。作用后，遇梟鸟人宅，须防缢殒殇亡之事。";
        case "未":
          return "天英星值末时，有孕如提筐，羊酒喜事，西北方鼓声火光应。作用后，如遇家人落水，须防瘟疫之侵。";
        case "申":
          return "天英星值申时，有孕妇啼哭，僧道师巫，金鼓雨盖应。作用后，如遇猴马自来，当防横事。";
        case "酉":
          return "天英星值西时，有鸟鹊争食，怀孕妇人，矮飞马走，西方争用②应。作用后，如遇牝鸡晨鸣，须防女眷折足伤损之厄。";
        case "戌":
          return "天英星值戌时，有窑灶火惊，军营争斗，黄大来应。作用后，遇赤蛇人宅伤人，须防瘟疫。";
        case "亥":
          return "天英星值亥时，有女人把火，孩童叫哭，渔公夜吹，水面波涛之应。作用后，如遇疯疾人上门，防有破耗之事。";
      }
  }
}
