$(document).ready(function() {
    $("html").click(function() {
        $("nav").removeClass("show");
    });
    
    $("nav ul").click(function(e){ 
        e.stopPropagation();
      });
    
    $("nav ul li a").click(function(e){
        if ($("nav").hasClass("show")) {
            $("nav").removeClass("show");
        }
        else {
            $("nav").addClass("show");
            if ($("nav").css("padding-left") == "80px") {
                e.preventDefault();
            }
        }
    });  
  
    var reset_active = function() {
        $("nav a").removeClass("active");
        $("nav li").removeClass("active");
    };
    
    var set_active = function(active) {
        $("#a" + active).addClass("active");
        $("#l" + active).addClass("active");
    }
      
  $(document).scroll(function(){
    if ($(document).scrollTop() - $("#previous").offset().top > -400) {
      reset_active();
      set_active("contact");
      $("#down").attr("href","#header-wrapper");
    }
    else if ($(document).scrollTop() - $("#contact").offset().top > -200) {
      reset_active();
      set_active("contact");
      $("#down").attr("href","#previous");
    }
    else if ($(document).scrollTop() - $("#sponsors").offset().top > -200) {
      reset_active();
      set_active("sponsors");
      $("#down").attr("href","#contact");
    }
    else if ($(document).scrollTop() - $("#registration").offset().top > -200) {
      reset_active();
      set_active("registration");
      $("#down").attr("href","#sponsors");
    }
    else if ($(document).scrollTop() - $("#travel").offset().top > -200) {
      reset_active();
      set_active("travel");
      $("#down").attr("href","#registration");
    }
    else if ($(document).scrollTop() - $("#programme").offset().top > -200) {
      reset_active();
      set_active("programme");
      $("#down").attr("href","#travel");
    }
    else if ($(document).scrollTop() - $("#speakers").offset().top > -200) {
      reset_active();
      set_active("speakers");
      $("#down").attr("href","#programme");
    }
    else if ($(document).scrollTop() - $("#about").offset().top > -200) {
      reset_active();
      set_active("about");
      $("#down").attr("href","#speakers");
    }
    else  {
      reset_active()
      $("#down").attr("href","#about");
    }
  });
});