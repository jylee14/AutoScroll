var pixels,waitTime,timeout;
var startScroll = document.getElementById('startScroll');
var stopScroll  = document.getElementById('stopScroll');
var slider      = document.getElementById("myRange");

startScroll.style.backgroundColor   = '#00FF7F';
stopScroll.style.backgroundColor    = '#FF007F';

//Scroll object
startScroll.onclick = setSlider;
slider.onchange     = setSlider;

stopScroll.onclick = function(){
    pixels = 0;
};

function setSlider(){
    clearTimeout(timeout);

    if(slider.value < 300)
        waitTime = 300 - slider.value;
    else
        waitTime = 1;
    pixels = 1;
    if(slider.value >= 300)
        pixels = 2;
    else if(slider.value >= 350)
        pixels = 3;
    else if(slider.value >= 400)
        pixels = 4;
    else if(slider.value >= 450)
        pixels = 5;
    else if(slider.value >= 500)
        pixels = 6;

    timeout = setInterval(scroll, waitTime);
}

function scroll(element) {
    chrome.tabs.executeScript({
        code: returnScript()
    });
}

function returnScript(){
    var script = [
        'if(document.title.includes(\'Google Sheets\')){',

        '}else if(document.title.includes(\'Google Doc\')){',

        '}else{',
            'window.scrollBy(0, ', pixels, ');',
        '}'
    ];

    var joinedScript = script.join('');
    console.log(joinedScript);

    return joinedScript;
}