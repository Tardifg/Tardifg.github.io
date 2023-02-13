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
  


  // Remove the transition class
const square = document.querySelector('.square');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
    }

    square.classList.remove('square-transition');
  });
});

observer.observe(document.querySelector('.square-wrapper'));