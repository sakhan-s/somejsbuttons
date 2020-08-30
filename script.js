var btns = document.getElementsByClassName('butt');
var par = document.getElementsByClassName('text-justify');
btns[0].onclick = function() {
    par[0].classList.remove("invisible");
    par[1].classList.add("invisible");
    par[2].classList.add("invisible");
}
btns[1].onclick = function() {
    par[0].classList.add("invisible");
    par[1].classList.remove("invisible");
    par[2].classList.add("invisible");
};
btns[2].onclick = function() {
    par[0].classList.add("invisible");
    par[1].classList.add("invisible");
    par[2].classList.remove("invisible");
};
