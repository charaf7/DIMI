$(document).ready(function() {

  var menuButton = $("#menuButton");
  var subMenu = $(".js-open-submenu");

  menuButton.on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("is-active");
    $("#js-menu-container").slideToggle("slow");
  });

  subMenu.on("click", function(e) {
    //skip if already open
    if($(this).parent().hasClass("is-active")) {
      return;
    }
    if(subMenu.parent().hasClass("is-active")) {
      //we have menu opened, so close it before open another
      subMenu.parent().find(".submenu").css("display", "none");
      subMenu.parent().removeClass("is-active");
    }
    $(this).parent().toggleClass("is-active");
    $(this).parent().find(".submenu").slideToggle("slow");
  });    


});
                  