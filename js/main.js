$(document).ready(
  function(){
// _____________________________---___________________
    var nextImage = $(".fa-angle-right");
    var prevImage = $(".fa-angle-left");

    nextImage.click(
      function() {
        console.log("scorri a destra");
        rightCarousel();
        console.log(rightCarousel);
      }
    );

    prevImage.click(
      function() {
          console.log("scorri a sinistra");
          leftCarousel();
      }
    );

    $(document).keydown(
      function() {

        if (event.keyCode == 37) {
          leftCarousel();
        } else if (event.keyCode == 39) {
          rightCarousel();
        }
      }
    );

    function rightCarousel() {
      var activeImage = $(".images img.active");
      var activeIcon = $(".fa-circle.active")
      activeImage.removeClass("active");
      activeIcon.removeClass("active");

      if (activeImage.hasClass("last") == true){
        $(".images .first").addClass("active");
        $(".nav .first").addClass("active");
      } else {
        activeImage.next().addClass("active");
        activeIcon.next().addClass("active");
      }

    };

    function leftCarousel() {
      var activeImage = $(".images img.active");
      var activeIcon = $(".fa-circle.active")
      activeImage.removeClass("active");
      activeIcon.removeClass("active");

      if (activeImage.hasClass("first") == true){
        $(".images .last").addClass("active");
        $(".nav .last").addClass("active");
      } else {
        activeImage.prev().addClass("active");
        activeIcon.prev().addClass("active");
      }


    };
// ____________________________________-----__________
  }
)
