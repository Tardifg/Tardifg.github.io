var image = document.getElementById('indeximage');
new simpleParallax(image, {
  scale: 1.5
});

window.addEventListener(
  "scroll",
  () => {
    const maxScrollValue = document.body.offsetHeight - window.innerHeight;
    const currentScrollValue = window.pageYOffset;
    const scrollPercentage = currentScrollValue / maxScrollValue;

    if (scrollPercentage >= 0.99) {
      document.body.style.setProperty("--scroll", "0.99");
    } else {
      document.body.style.setProperty("--scroll", scrollPercentage);
    }
  },
  false
);



  
  



    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
      // options
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });

    AOS.init();
    w3.includeHTML();