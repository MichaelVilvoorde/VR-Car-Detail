function mobileNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function closeNav() {
    if (window.matchMedia('only screen and (max-width: 768px)').matches) {
      var x = document.getElementById("myLinks");
      x.style.display = "none";
 
    } 
  }

  