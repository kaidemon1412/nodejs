//这里要写出注释，本来这是只有一个时钟的页面，但是我的想法是将它改造成可以看到世界大都市所在时区的时间对比
//所以改造成多个钟表存在的页面

//公共变量
var milliseconds = 0;
var minutes = 0;
var hour = 0;
var date = "";
//获取每个canvas，这是第一个canvas的标准配置，然后仿写几个。。。。。。
//canvas01
var canvasBj = document.getElementById("beijing_time");
var ctxBj = canvasBj.getContext("2d");
ctxBj.strokeStyle = '#7FFFD4';
ctxBj.lineWidth = 3;
ctxBj.shadowBlur = 5;
ctxBj.shadowColor = '#7FFFD4';

var ctxBackBj = canvasBj.getContext("2d");
var numBackBj = canvasBj.getContext("2d");
ctxBackBj.lineWidth = 1;
ctxBackBj.shadowBlur = 0;
ctxBackBj.shadowColor = '#F0F8FF';

//canvas02
var canvasLd = document.getElementById("london_time");
var ctxLd = canvasLd.getContext("2d");
ctxLd.strokeStyle = '#7FFFD4';
ctxLd.lineWidth = 3;
ctxLd.shadowBlur = 5;
ctxLd.shadowColor = '#7FFFD4';

var ctxBackLd = canvasLd.getContext("2d");
var numBackLd = canvasLd.getContext("2d");
ctxBackLd.lineWidth = 1;
ctxBackLd.shadowBlur = 0;
ctxBackLd.shadowColor = '#F0F8FF';

//canvas03
var canvasNy = document.getElementById("newyork_time");
var ctxNy = canvasNy.getContext("2d");
ctxNy.strokeStyle = '#7FFFD4';
ctxNy.lineWidth = 3;
ctxNy.shadowBlur = 5;
ctxNy.shadowColor = '#7FFFD4';

var ctxBackNy = canvasNy.getContext("2d");
var numBackNy = canvasNy.getContext("2d");
ctxBackNy.lineWidth = 1;
ctxBackNy.shadowBlur = 0;
ctxBackNy.shadowColor = '#F0F8FF';

//canvas04
var canvasLa = document.getElementById("la_time");
var ctxLa = canvasLa.getContext("2d");
ctxLa.strokeStyle = '#7FFFD4';
ctxLa.lineWidth = 3;
ctxLa.shadowBlur = 5;
ctxLa.shadowColor = '#7FFFD4';

var ctxBackLa = canvasLa.getContext("2d");
var numBackLa = canvasLa.getContext("2d");
ctxBackLa.lineWidth = 1;
ctxBackLa.shadowBlur = 0;
ctxBackLa.shadowColor = '#F0F8FF';

//canvas05
var canvasTy = document.getElementById("tokyo_time");
var ctxTy = canvasTy.getContext("2d");
ctxTy.strokeStyle = '#7FFFD4';
ctxTy.lineWidth = 3;
ctxTy.shadowBlur = 5;
ctxTy.shadowColor = '#7FFFD4';

var ctxBackTy = canvasTy.getContext("2d");
var numBackTy = canvasTy.getContext("2d");
ctxBackTy.lineWidth = 1;
ctxBackTy.shadowBlur = 0;
ctxBackTy.shadowColor = '#F0F8FF';

function pageInit() {
    var nBj = getLocalTime(8);
    showTime(nBj,ctxBj,'北京');
    showBack(ctxBackBj);
    drawSecPin(ctxBackBj);
    drawMinPin(ctxBackBj);
    drawHouPin(ctxBackBj);
    setPoint(ctxBackBj);
    setNum(numBackBj);
    var nLd = getLocalTime(0);
    showTime(nLd,ctxLd,'伦敦');
    showBack(ctxBackLd);
    drawSecPin(ctxBackLd);
    drawMinPin(ctxBackLd);
    drawHouPin(ctxBackLd);
    setPoint(ctxBackLd);
    setNum(numBackLd);
    var nNy = getLocalTime(-5)
    showTime(nNy,ctxNy,'纽约');
    showBack(ctxBackNy);
    drawSecPin(ctxBackNy);
    drawMinPin(ctxBackNy);
    drawHouPin(ctxBackNy);
    setPoint(ctxBackNy);
    setNum(numBackNy);
    var nLa = getLocalTime(-8);
    showTime(nLa,ctxLa,'洛杉矶');
    showBack(ctxBackLa);
    drawSecPin(ctxBackLa);
    drawMinPin(ctxBackLa);
    drawHouPin(ctxBackLa);
    setPoint(ctxBackLa);
    setNum(numBackLa);
    var nTy = getLocalTime(9);
    showTime(nTy,ctxTy,'东京');
    showBack(ctxBackTy);
    drawSecPin(ctxBackTy);
    drawMinPin(ctxBackTy);
    drawHouPin(ctxBackTy);
    setPoint(ctxBackTy);
    setNum(numBackTy);
}

function setNum(numBox) {
    numBox.save();
    numBox.translate(250, 250);
    numBox.beginPath();
    numBox.fillStyle = '#7FFFD4';
    numBox.font = "30px Helvetica";
    for(var i = 0; i < 60; i++) {
        if(i % 5 == 0) {
            numBox.lineWidth = 5;
            var xPoint = Math.sin(i * 6 * 2 * Math.PI / 360) * 195;
            var yPoint = -Math.cos(i * 6 * 2 * Math.PI / 360) * 195;
            numBox.fillText(i == 0 ? 12 : i / 5, i == 0 ? -15 : xPoint - 10, i == 0 ? -185 : i <= 30 ? yPoint + 5 : yPoint + 10);
        }
    }
    numBox.stroke();
    numBox.closePath();
    numBox.restore();
}

function drawSecPin(ctxBox) {
    ctxBox.save();
    ctxBox.translate(250, 250);
    ctxBox.rotate(milliseconds / 60 * 2 * Math.PI);
    ctxBox.beginPath();
    ctxBox.strokeStyle = '#AFEEEE';
    ctxBox.lineWidth = 1;
    ctxBox.lineJoin = "bevel";
    ctxBox.miterLimit = 10;
    ctxBox.moveTo(0, 30);
    ctxBox.lineTo(3, -175);
    ctxBox.lineTo(13, -165);
    ctxBox.lineTo(0, -210);
    ctxBox.lineTo(-13, -165);
    ctxBox.lineTo(-3, -175);
    ctxBox.lineTo(0, 30);
    ctxBox.stroke();
    ctxBox.closePath();
    ctxBox.restore();
}

function drawMinPin(ctxBox) {
    ctxBox.save();
    ctxBox.translate(250, 250);
    ctxBox.rotate(minutes * 6 * Math.PI / 180);
    ctxBox.beginPath();
    ctxBox.strokeStyle = '#20B2AA';
    ctxBox.lineWidth = 1;
    ctxBox.lineJoin = "bevel";
    ctxBox.miterLimit = 10;
    ctxBox.moveTo(0, 20);
    ctxBox.lineTo(3, -145);
    ctxBox.lineTo(10, -135);
    ctxBox.lineTo(0, -180);
    ctxBox.lineTo(-10, -135);
    ctxBox.lineTo(-3, -145);
    ctxBox.lineTo(0, 20);
    ctxBox.stroke();
    ctxBox.closePath();
    ctxBox.restore();
}

function drawHouPin(ctxBox) {
    ctxBox.save();
    ctxBox.translate(250, 250);
    ctxBox.rotate(hour * 30 * Math.PI / 180);
    ctxBox.beginPath();
    ctxBox.strokeStyle = '#87CEFA';
    ctxBox.lineWidth = 1;
    ctxBox.lineJoin = "bevel";
    ctxBox.miterLimit = 10;
    ctxBox.moveTo(0, 20);
    ctxBox.lineTo(3, -110);
    ctxBox.lineTo(10, -100);
    ctxBox.lineTo(0, -150);
    ctxBox.lineTo(-10, -100);
    ctxBox.lineTo(-3, -110);
    ctxBox.lineTo(0, 20);
    ctxBox.stroke();
    ctxBox.closePath();
    ctxBox.restore();
}

function setPoint(ctxBox) {
    ctxBox.beginPath();
    ctxBox.fillStyle = 'black';
    ctxBox.arc(250, 250, 3, 0, 2 * Math.PI);
    ctxBox.stroke();
}

function showBack(ctxBox) {
    for(var i = 0; i < 60; i++) {
        ctxBox.save();
        ctxBox.translate(250, 250);
        ctxBox.rotate(i / 60 * 2 * Math.PI);
        ctxBox.beginPath();
        ctxBox.strokeStyle = '#7FFFD4';
        ctxBox.moveTo(0, -250);
        ctxBox.lineWidth = i % 5 == 0 ? 5 : 2;
        ctxBox.lineTo(0, -230);
        ctxBox.stroke();
        ctxBox.closePath();
        ctxBox.restore();
    }
    ctxBox.beginPath();
    ctxBox.arc(250, 250, 230, 0, 2 * Math.PI);
    ctxBox.stroke();
}
// 指针转动
function degToRad(degree) {
    var result;
    var factor = Math.PI / 180;
    if(degree == 0) {
        result = 270 * factor;
    } else {
        result = degree * factor;
    }
    return result;
}
// 显示数字时间
function showTime(n,cvs,city) {
    var now = n;
    var date_arr = now.toLocaleDateString().split('/');
    var today = date_arr[0] + '年' + date_arr[1] + '月' + date_arr[2] + '日';
    var time = now.toLocaleTimeString();
    // console.log(today);
    // console.log(time);
    var day = now.getDay();
    var hrs = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mil = now.getMilliseconds();
    var smoothsec = sec + (mil / 1000);
    var smoothmin = min + (smoothsec / 60);
    var hours = hrs + (smoothmin / 60);
    milliseconds = smoothsec;
    minutes = smoothmin;
    hour = hours;
    switch(day) {
        case 1:
            date = '一'
            break;
        case 2:
            date = '二'
            break;
        case 3:
            date = '三'
            break;
        case 4:
            date = '四'
            break;
        case 5:
            date = '五'
            break;
        case 6:
            date = '六'
            break;
        case 0:
            date = '日'
            break;
    }
    gradient = cvs.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, "#03303a");
    gradient.addColorStop(1, "black");
    cvs.fillStyle = gradient;
    cvs.fillRect(0, 0, 500, 500);
    cvs.beginPath();
    cvs.strokeStyle = '#87CEFA';
    cvs.arc(250, 250, 215, degToRad(0), degToRad((hours * 30) - 90));
    cvs.stroke();
    cvs.beginPath();
    cvs.strokeStyle = '#20B2AA';
    cvs.arc(250, 250, 220, degToRad(0), degToRad(smoothmin * 6 - 90));
    cvs.stroke();
    cvs.beginPath();
    cvs.strokeStyle = '#AFEEEE';
    cvs.arc(250, 250, 225, degToRad(0), degToRad(smoothsec * 6 - 90));
    cvs.stroke();
    cvs.font = "32px Helvetica Bold";
    cvs.fillStyle = '#7FFFD4';
    cvs.fillText(city + "时间", 188, 200);
    cvs.font = "25px Helvetica Bold";
    cvs.fillStyle = '#7FFFD4';
    cvs.fillText(today + "/星期" + date, 135, 300);
    cvs.font = "23px Helvetica Bold";
    cvs.fillStyle = '#7FFFD4';
    cvs.fillText(time, 190, 340);
}

//得到标准时区的时间的函数
function getLocalTime(i) {
    //参数i为时区值数字，比如北京为东八区则输进8,西5输入-5
    if (typeof i !== 'number') return;
    var d = new Date();
    //得到1970年一月一日到现在的秒数
    var len = d.getTime();
    //本地时间与GMT时间的时间偏移差
    var offset = d.getTimezoneOffset() * 60000;
    //得到现在的格林尼治时间
    var utcTime = len + offset;

    return new Date(utcTime + 3600000 * i);
}

setInterval(pageInit, 50);