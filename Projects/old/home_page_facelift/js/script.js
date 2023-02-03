var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var element = document.getElementById("htitle");
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
    document.getElementById("secondnav").style.top = "10%";
  } else {
    document.getElementById("nav").style.top = "-65px";
    document.getElementById("secondnav").style.top = "0px";
    element.classList.add("fadeanim");
  }
  prevScrollpos = currentScrollPos;
}
