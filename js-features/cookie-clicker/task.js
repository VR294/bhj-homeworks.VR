let clicker = document.getElementById("clicker__counter");
let click = Number(clicker.textContent);
let image = document.getElementById("cookie");
let isBig = false;

function cookieSize() {
    click++;
    clicker.textContent = click;
    console.log(click);
    
    if(isBig === false) {
        image.width +=20;
        image.height +=20;
        isBig = true;
    } else {
        image.width -=20;
        image.height -=20;
        isBig = false;
    };
}
image.onclick = cookieSize;