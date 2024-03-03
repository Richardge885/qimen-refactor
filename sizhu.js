const data = require('./wnl.json');
const { liushijiazi } = require('./commonInfo');

function timeInfo(date, time, method = 'none', number = 0) {
    let i = 0;
    let hour = time.charAt(0) + time.charAt(1);
    switch (hour) {
        case '01':
            hour = 1;
            break;
        case '02':
            hour = 2;
            break;
        case '03':
            hour = 3;
            break;
        case '04':
            hour = 4;
            break;
        case '05':
            hour = 5;
            break;
        case '06':
            hour = 6;
            break;
        case '07':
            hour = 7;
            break;
        case '08':
            hour = 8;
            break;
        case '09':
            hour = 9;
            break;
    }
    while (true) {
        if (date == data[i].公历日期) {
            if (hour == '23') {
                hour = 0;
                i++;
            }
            let nianganzhi = data[i].年干支;
            let yueganzhi = data[i].月干支;
            let riganzhi = data[i].日干支;
            let shiganzhi;
            if (method == 'jushu') {
                shiganzhi = getShiZhu(riganzhi, hour.toString());
            } else if (method == 'shichen') {
                if (number != 12) {
                    switch (number % 12) {
                        case 1:
                            hour = 0;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                        case 2:
                            hour = 2;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                        case 3:
                            hour = 4;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                        case 4:
                            hour = 6;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                        case 5:
                            hour = 8;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                        case 6:
                            hour = 10;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                        case 7:
                            hour = 12;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                        case 8:
                            hour = 14;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                        case 9:
                            hour = 16;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                        case 10:
                            hour = 18;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                        case 11:
                            hour = 20;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                        case 0:
                            hour = 22;
                            shiganzhi = getShiZhu(riganzhi, hour.toString());
                            break;
                    }
                } else {
                    hour = 22;
                    shiganzhi = getShiZhu(riganzhi, hour.toString());
                }
            } else if (method == 'zhichou') {
                if (number % 60 == 0) {
                    shiganzhi = liushijiazi[59];
                } else {
                    shiganzhi = liushijiazi[(number % 60) - 1];
                }
            } else {
                shiganzhi = getShiZhu(riganzhi, hour.toString());
            }
            let jieqi = getSeason(i);
            return {
                yangli: date,
                sizhu: nianganzhi + ' ' + yueganzhi + ' ' + riganzhi + ' ' + shiganzhi,
                nian: nianganzhi,
                yue: yueganzhi,
                ri: riganzhi,
                shi: shiganzhi,
                jieqi: jieqi.season,
                time: time,
            };
        }
        i++;
    }
}

function getSeason(i) {
    for (let j = 31; j >= 0; j++) {
        if (data[i].节气 === '') {
            i--;
        } else {
            return {
                season: data[i].节气,
            };
        }
    }
}

function getShiZhu(date, hour) {
    switch (date.charAt(0)) {
        case '甲':
            switch (hour) {
                case '0':
                    return '甲子';
                case '1':
                    return '乙丑';
                case '2':
                    return '乙丑';
                case '3':
                    return '丙寅';
                case '4':
                    return '丙寅';
                case '5':
                    return '丁卯';
                case '6':
                    return '丁卯';
                case '7':
                    return '戊辰';
                case '8':
                    return '戊辰';
                case '9':
                    return '己巳';
                case '10':
                    return '己巳';
                case '11':
                    return '庚午';
                case '12':
                    return '庚午';
                case '13':
                    return '辛未';
                case '14':
                    return '辛未';
                case '15':
                    return '壬申';
                case '16':
                    return '壬申';
                case '17':
                    return '癸酉';
                case '18':
                    return '癸酉';
                case '19':
                    return '甲戌';
                case '20':
                    return '甲戌';
                case '21':
                    return '乙亥';
                case '22':
                    return '乙亥';
            }
        case '乙':
            switch (hour) {
                case '0':
                    return '丙子';
                case '1':
                    return '丁丑';
                case '2':
                    return '丁丑';
                case '3':
                    return '戊寅';
                case '4':
                    return '戊寅';
                case '5':
                    return '己卯';
                case '6':
                    return '己卯';
                case '7':
                    return '庚辰';
                case '8':
                    return '庚辰';
                case '9':
                    return '辛巳';
                case '10':
                    return '辛巳';
                case '11':
                    return '壬午';
                case '12':
                    return '壬午';
                case '13':
                    return '癸未';
                case '14':
                    return '癸未';
                case '15':
                    return '甲申';
                case '16':
                    return '甲申';
                case '17':
                    return '乙酉';
                case '18':
                    return '乙酉';
                case '19':
                    return '丙戌';
                case '20':
                    return '丙戌';
                case '21':
                    return '丁亥';
                case '22':
                    return '丁亥';
            }
        case '丙':
            switch (hour) {
                case '0':
                    return '戊子';
                case '1':
                    return '己丑';
                case '2':
                    return '己丑';
                case '3':
                    return '庚寅';
                case '4':
                    return '庚寅';
                case '5':
                    return '辛卯';
                case '6':
                    return '辛卯';
                case '7':
                    return '壬辰';
                case '8':
                    return '壬辰';
                case '9':
                    return '癸巳';
                case '10':
                    return '癸巳';
                case '11':
                    return '甲午';
                case '12':
                    return '甲午';
                case '13':
                    return '乙未';
                case '14':
                    return '乙未';
                case '15':
                    return '丙申';
                case '16':
                    return '丙申';
                case '17':
                    return '丁酉';
                case '18':
                    return '丁酉';
                case '19':
                    return '戊戌';
                case '20':
                    return '戊戌';
                case '21':
                    return '己亥';
                case '22':
                    return '己亥';
            }
        case '丁':
            switch (hour) {
                case '0':
                    return '庚子';
                case '1':
                    return '辛丑';
                case '2':
                    return '辛丑';
                case '3':
                    return '壬寅';
                case '4':
                    return '壬寅';
                case '5':
                    return '癸卯';
                case '6':
                    return '癸卯';
                case '7':
                    return '甲辰';
                case '8':
                    return '甲辰';
                case '9':
                    return '乙巳';
                case '10':
                    return '乙巳';
                case '11':
                    return '丙午';
                case '12':
                    return '丙午';
                case '13':
                    return '丁未';
                case '14':
                    return '丁未';
                case '15':
                    return '戊申';
                case '16':
                    return '戊申';
                case '17':
                    return '己酉';
                case '18':
                    return '己酉';
                case '19':
                    return '庚戌';
                case '20':
                    return '庚戌';
                case '21':
                    return '辛亥';
                case '22':
                    return '辛亥';
            }
        case '戊':
            switch (hour) {
                case '0':
                    return '壬子';
                case '1':
                    return '癸丑';
                case '2':
                    return '癸丑';
                case '3':
                    return '甲寅';
                case '4':
                    return '甲寅';
                case '5':
                    return '乙卯';
                case '6':
                    return '乙卯';
                case '7':
                    return '丙辰';
                case '8':
                    return '丙辰';
                case '9':
                    return '丁巳';
                case '10':
                    return '丁巳';
                case '11':
                    return '戊午';
                case '12':
                    return '戊午';
                case '13':
                    return '己未';
                case '14':
                    return '己未';
                case '15':
                    return '庚申';
                case '16':
                    return '庚申';
                case '17':
                    return '辛酉';
                case '18':
                    return '辛酉';
                case '19':
                    return '壬戌';
                case '20':
                    return '壬戌';
                case '21':
                    return '癸亥';
                case '22':
                    return '癸亥';
            }
        case '己':
            switch (hour) {
                case '0':
                    return '甲子';
                case '1':
                    return '乙丑';
                case '2':
                    return '乙丑';
                case '3':
                    return '丙寅';
                case '4':
                    return '丙寅';
                case '5':
                    return '丁卯';
                case '6':
                    return '丁卯';
                case '7':
                    return '戊辰';
                case '8':
                    return '戊辰';
                case '9':
                    return '己巳';
                case '10':
                    return '己巳';
                case '11':
                    return '庚午';
                case '12':
                    return '庚午';
                case '13':
                    return '辛未';
                case '14':
                    return '辛未';
                case '15':
                    return '壬申';
                case '16':
                    return '壬申';
                case '17':
                    return '癸酉';
                case '18':
                    return '癸酉';
                case '19':
                    return '甲戌';
                case '20':
                    return '甲戌';
                case '21':
                    return '乙亥';
                case '22':
                    return '乙亥';
            }
        case '庚':
            switch (hour) {
                case '0':
                    return '丙子';
                case '1':
                    return '丁丑';
                case '2':
                    return '丁丑';
                case '3':
                    return '戊寅';
                case '4':
                    return '戊寅';
                case '5':
                    return '己卯';
                case '6':
                    return '己卯';
                case '7':
                    return '庚辰';
                case '8':
                    return '庚辰';
                case '9':
                    return '辛巳';
                case '10':
                    return '辛巳';
                case '11':
                    return '壬午';
                case '12':
                    return '壬午';
                case '13':
                    return '癸未';
                case '14':
                    return '癸未';
                case '15':
                    return '甲申';
                case '16':
                    return '甲申';
                case '17':
                    return '乙酉';
                case '18':
                    return '乙酉';
                case '19':
                    return '丙戌';
                case '20':
                    return '丙戌';
                case '21':
                    return '丁亥';
                case '22':
                    return '丁亥';
            }
        case '辛':
            switch (hour) {
                case '0':
                    return '戊子';
                case '1':
                    return '己丑';
                case '2':
                    return '己丑';
                case '3':
                    return '庚寅';
                case '4':
                    return '庚寅';
                case '5':
                    return '辛卯';
                case '6':
                    return '辛卯';
                case '7':
                    return '壬辰';
                case '8':
                    return '壬辰';
                case '9':
                    return '癸巳';
                case '10':
                    return '癸巳';
                case '11':
                    return '甲午';
                case '12':
                    return '甲午';
                case '13':
                    return '乙未';
                case '14':
                    return '乙未';
                case '15':
                    return '丙申';
                case '16':
                    return '丙申';
                case '17':
                    return '丁酉';
                case '18':
                    return '丁酉';
                case '19':
                    return '戊戌';
                case '20':
                    return '戊戌';
                case '21':
                    return '己亥';
                case '22':
                    return '己亥';
            }
        case '壬':
            switch (hour) {
                case '0':
                    return '庚子';
                case '1':
                    return '辛丑';
                case '2':
                    return '辛丑';
                case '3':
                    return '壬寅';
                case '4':
                    return '壬寅';
                case '5':
                    return '癸卯';
                case '6':
                    return '癸卯';
                case '7':
                    return '甲辰';
                case '8':
                    return '甲辰';
                case '9':
                    return '乙巳';
                case '10':
                    return '乙巳';
                case '11':
                    return '丙午';
                case '12':
                    return '丙午';
                case '13':
                    return '丁未';
                case '14':
                    return '丁未';
                case '15':
                    return '戊申';
                case '16':
                    return '戊申';
                case '17':
                    return '己酉';
                case '18':
                    return '己酉';
                case '19':
                    return '庚戌';
                case '20':
                    return '庚戌';
                case '21':
                    return '辛亥';
                case '22':
                    return '辛亥';
            }
        case '癸':
            switch (hour) {
                case '0':
                    return '壬子';
                case '1':
                    return '癸丑';
                case '2':
                    return '癸丑';
                case '3':
                    return '甲寅';
                case '4':
                    return '甲寅';
                case '5':
                    return '乙卯';
                case '6':
                    return '乙卯';
                case '7':
                    return '丙辰';
                case '8':
                    return '丙辰';
                case '9':
                    return '丁巳';
                case '10':
                    return '丁巳';
                case '11':
                    return '戊午';
                case '12':
                    return '戊午';
                case '13':
                    return '己未';
                case '14':
                    return '己未';
                case '15':
                    return '庚申';
                case '16':
                    return '庚申';
                case '17':
                    return '辛酉';
                case '18':
                    return '辛酉';
                case '19':
                    return '壬戌';
                case '20':
                    return '壬戌';
                case '21':
                    return '癸亥';
                case '22':
                    return '癸亥';
            }
    }
}

module.exports = {
    timeInfo,
};
