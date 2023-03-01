
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
    var element = document.getElementById("galfooter");
    var scroll = --scroll
    if (--scroll >  0.99) {
         element.classList.add("animate__animated animate__fadeInUp");
         document.getElementById("galfooter").style.display = "block";
     } else {
         document.getElementById("galfooter").style.display = "block";
    }
    }