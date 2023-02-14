var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var element = document.getElementById("nav");
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.display = "none";
     /*element.classList.add("outfade");
     element.classList.remove("infade");*/
 } else {
     document.getElementById("nav").style.display = "inline-block";
     /*element.classList.add("infade");
     element.classList.remove("outfade");*/
}
prevScrollpos = currentScrollPos;
}


window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
  


  window.onscroll = function() {
    var element = document.getElementById("footer");
    var scroll = --scroll
    if (--scroll >  0.99) {
         element.classList.add("animate__animated animate__fadeInUp");
         document.getElementById("footer").style.display = "block";
     } else {
         document.getElementById("footer").style.display = "block";
    }
    }