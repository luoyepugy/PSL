
var regexEnum =
{
    //正整数
    positiveInt: "^[0-9]*[1-9][0-9]*$",

    //金额
    money: "^[0-9]+([\.]{0,1}[0-9]{1,2})?$",

    photo: (/\.jpg$|\.jpeg$|\.gif$|\.png/i),//图片格式  
    ////折扣
    //discount: "^[0-9]+([\.]{0,1}[0-9]{1})?$"
    email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件

    mobile: "^(13|15|18)[0-9]{9}$", 			//手机
    //SKU
    sku: "^(?!-)(?!.*?-$)[A-Za-z0-9\\-]+$",//  XX-XX-XX 字母数字下划线 下划线不能开头结尾

};



//正则
function RegExpHelper() {}


RegExpHelper.trim = function (s) {
    s += "";
    return s.replace(/^\s+|\s+$/g, '');
};

//正整数
RegExpHelper.isPositiveInt = function (s) {
   
    return new RegExp(/^(0|[1-9][0-9]*)$/).test(this.trim(s));
}

//钱
RegExpHelper.isMoney = function (s) {

    return new RegExp(regexEnum.money).test(this.trim(s));
}

//图片
RegExpHelper.isPhoto = function (s) {

    return new RegExp(regexEnum.photo).test(this.trim(s));
}

////折扣
//RegExpHelper.isDiscount = function (s) {

//    return new RegExp(regexEnum.discount).test(this.trim(s));
//}

//图片
RegExpHelper.isEmail = function (s) {

    return new RegExp(regexEnum.email).test(this.trim(s));
}

//sku
RegExpHelper.isSku = function (s) {

    return new RegExp(regexEnum.sku).test(this.trim(s));
}

//手机
RegExpHelper.isMobile = function (s) {
    return new RegExp(regexEnum.mobile).test(this.trim(s));
}



//#region 特殊正则

//Url
RegExpHelper.strUrlReg = function () {
    var strRegex = '^((https|http|ftp|rtsp|mms)?://)'
        + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@
        + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
        + '|' // 允许IP和DOMAIN（域名）
        + '([0-9a-z_!~*\'()-]+.)*' // 域名- www.
        + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名
        + '[a-z]{2,6})' // first level domain- .com or .museum
        + '(:[0-9]{1,4})?' // 端口- :80
        + '((/?)|' // 如果没有文件名则不要求斜杠
        + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
    return strRegex;

}

RegExpHelper.IsURL = function (s) {
    s = s.toLocaleLowerCase();//转换小写 

    var strRegex = '^((https|http|ftp|rtsp|mms)?://)'
    + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@
    + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
    + '|' // 允许IP和DOMAIN（域名）
    + '([0-9a-z_!~*\'()-]+.)*' // 域名- www.
    + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名
    + '[a-z]{2,6})' // first level domain- .com or .museum
    + '(:[0-9]{1,4})?' // 端口- :80
    + '((/?)|' // 如果没有文件名则不要求斜杠
    + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';

    return  new RegExp(strRegex).test(s);
}


//#endregion
