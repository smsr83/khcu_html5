var mobileKeyWords = new Array(/* 'Chrome',*/ 'iPhone', 'iPad', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Opera Mini', 'Microsoft Windows', 'Opera Modi');

var mobile;

for (var word in mobileKeyWords){
	if (navigator.userAgent.match(mobileKeyWords[word]) != null){

		mobile = "_mobile";

		break;

	}else{

		mobile = "";
	}
}

document.writeln('<link href="../css/base' + mobile + '.css" rel="stylesheet" type="text/css">');
document.writeln('<link href="../css/main' + mobile + '.css" rel="stylesheet" type="text/css">');
document.writeln('<link href="../css/sub' + mobile + '.css" rel="stylesheet" type="text/css">');
document.writeln('<link href="../css/board' + mobile + '.css" rel="stylesheet" type="text/css">');
