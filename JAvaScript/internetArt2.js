var c = document.getElementById('c'),
    c_ = document.createElement('canvas'),
    ctx = c.getContext('2d'),
    ctx_ = c_.getContext('2d'),
    image = document.getElementById('image'),
    img, original = false,
    src = "./Images/digital.jpg",
    s = {
        'scale': 4,
        'font size': 8,
        'color': '#fff'
    };

image.src = src;
image.style.display = 'none';

img = new Image();
img.crossOrigin = 'anonymous';
img.src = src;
img.onload = function() {
    c.width = img.width;
    c.height = img.height;
    c.style.marginLeft = image.style.marginLeft = -c.width/2 + 'px';
    c.style.marginTop = image.style.marginTop = -c.height/2 + 'px';
    
    c_.width = img.width = c.width / s.scale;
    c_.height = img.height = c.height / s.scale;
    draw();
}

function symbol(gs) {
    var s;
    
    if(gs > 230) {
        s = '.';
    } else if(gs > 195) {
        s = ',';
    } else if(gs > 170) {
        s = ';';
    } else if(gs > 155) {
        s = '*';
    } else if(gs > 130) {
        s = 'o';
    } else if(gs > 105) {
        s = '&';
    } else if(gs > 80) {
        s = '8';
    } else if(gs > 60) {
        s = '#';
    } else {
        s = '@';
    }
    
    return s;
}

function draw() {
    ctx_.drawImage(img, 0, 0, img.width, img.height);
    
    var imgData = ctx_.getImageData(0, 0, c_.width, c_.height),
        pixels = imgData.data;

    for(var y = 0; y < c_.height; y++) {
        for(var x = 0; x < c_.width; x++) {
            var index = 4*(x + y*c_.width),
                r = pixels[index + 0],
                g = pixels[index + 1],
                b = pixels[index + 2],
                greyscl = Math.round((r + g + b)/3);
            
            var symb = symbol(greyscl);
            
            ctx.fillStyle = s.color;
            ctx.font = s['font size'] + "px Courier New";
            ctx.fillText(symb, x*s.scale, y*s.scale);
        }
    }
}

c.addEventListener('click', function() {
    original = !original;
    
    if(original) {
        ctx.clearRect(0, 0, c.width, c.height);
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
        draw();
    }
});