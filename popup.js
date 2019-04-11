var pixels,waitTime,timeout;
var startScroll = document.getElementById('startScroll');
var slider      = document.getElementById("myRange");

startScroll.style.backgroundColor = '#00FF7F';

//Scroll object
startScroll.onclick = setSlider;
slider.onchange     = setSlider;

document.getElementById('stopScroll').onclick = function(){
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
        code: 'window.scrollBy(0, ' + pixels + ');'
    });
}