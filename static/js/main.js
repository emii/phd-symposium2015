$(document).ready(function() {
  $(document).scroll(function(){
    if ($(document).scrollTop() - $("#contact").offset().top > -200) {
      $("nav a").removeClass("active");
      $("#acontact").addClass("active");
    }
    else if ($(document).scrollTop() - $("#sponsors").offset().top > -200) {
      $("nav a").removeClass("active");
      $("#asponsors").addClass("active");
    }
    else if ($(document).scrollTop() - $("#registration").offset().top > -200) {
      $("nav a").removeClass("active");
      $("#aregistration").addClass("active");
    }
    else if ($(document).scrollTop() - $("#travel").offset().top > -200) {
      $("nav a").removeClass("active");
      $("#atravel").addClass("active");
    }
    else if ($(document).scrollTop() - $("#programme").offset().top > -200) {
      $("nav a").removeClass("active");
      $("#aprogramme").addClass("active");
    }
    else if ($(document).scrollTop() - $("#speakers").offset().top > -200) {
      $("nav a").removeClass("active");
      $("#aspeakers").addClass("active");
    }
    else if ($(document).scrollTop() - $("#about").offset().top > -200) {
      $("nav a").removeClass("active");
      $("#aabout").addClass("active");
    }
    else  {
      $("nav a").removeClass("active");
    }
  });
});