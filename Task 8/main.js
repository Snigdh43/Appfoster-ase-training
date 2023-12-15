function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return rgb;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    var numberInput = document.getElementById('num');
    var splitNumInput = document.getElementById('numb');

    var number = parseInt(numberInput.value);
    var splitNum = parseInt(splitNumInput.value);

    if (isNaN(number) || isNaN(splitNum) || splitNum <= 0) {
        alert("Please enter valid numbers.");
        return;
    }

    var di = number / splitNum;
    var count = parseInt(di);
    
    var extra = number - (splitNum * count);
    if(extra>0){
        extra=extra+count;
        splitNum=splitNum-1;
    }

    if (number < splitNum) {
        alert("Wrong number entered");
    } else {
        if (extra > 0) {
            createColoredBox(extra,number);
        }
        for (let i = 0; i < splitNum; i++) {
            createColoredBox(count,number);
        }
    }
});

function createColoredBox(width,number) {
    const div = document.createElement("div");
    div.style.width = ((width * 100) / number) + '%';
    div.style.backgroundColor = randomColor();
    div.innerHTML = width;
    div.style.display='inline-block';
    div.style.textAlign='center';
    div.style.color='white';
    div.style.height='70px';
    div.style.verticalAlign='center';
    div.style.alignItems='center';
    div.style.paddingTop='35px'
    document.body.appendChild(div);
}
