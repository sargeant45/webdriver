/*
WEBDRIVER TORSO BOT CLONE
Created by Ethan Arterberry 2015
<http://ethanarterberry.com/>
Open-source under the Unlicense.
*/

function loopGenerate() {
    var title = randomString(8);
    document.title = title;
    setInterval(function(){rectangulate()}, 1000);
}

function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
    	var randomPoz = Math.floor(Math.random() * charSet.length);
    	randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

function rectangulate() {
    var canvas = new fabric.StaticCanvas('canvas');
    var bluerect = new fabric.Rect({
      left: Math.floor((Math.random() * 600) + 1),
      top: Math.floor((Math.random() * 300) + 1),
      fill: '#0000FF',
      width: Math.floor((Math.random() * 700) + 1),
      height: Math.floor((Math.random() * 350) + 1)
    });
    var redrect = new fabric.Rect({
      left: Math.floor((Math.random() * 600) + 1),
      top: Math.floor((Math.random() * 300) + 1),
      fill: '#FE0000',
      width: Math.floor((Math.random() * 700) + 1),
      height: Math.floor((Math.random() * 350) + 1)
    });
    
    canvas.add(bluerect);
    canvas.add(redrect);
    
    var slide = document.getElementById("numstore").innerHTML;
    if(slide == 9999)
    {
      slide = 0;
    }
    slide++;
    var newslide = fix(slide.toString(), 4);
    document.getElementById("numstore").innerHTML = slide;
    document.getElementById("slideNo").innerHTML = newslide;
}

function fix(str, max) {
    str = str.toString();
    return str.length < max ? fix("0" + str, max) : str;
}