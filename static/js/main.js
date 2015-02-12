$(document).ready(function() {
    $("html").click(function() {
        $("nav").removeClass("show");
        $("nav ul li a").removeClass("suppress")
    });
    
    $("nav ul").click(function(e){ 
        e.stopPropagation();
      });
    
    $("nav ul li a").click(function(e){
        if ($("nav").hasClass("show")) {
            $("nav").removeClass("show");
            $("nav ul li a").removeClass("suppress")
        }
        else {
            $("nav").addClass("show");
            if ($("nav").css("padding-left") == "80px") {
                $("nav ul li a").addClass("suppress")
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
    if ($(document).scrollTop() - $("#previous").offset().top > -200) {
      reset_active();
      set_active("contact");
      $("#down").attr("href","#home");
      $("#down").css("visibility","hidden");
      $("#up").attr("href","#contact");
    }
    else if ($(document).scrollTop() - $("#contact").offset().top > -200) {
      reset_active();
      set_active("contact");
      $("#down").attr("href","#previous");
      $("#up").attr("href","#sponsors");
      $("#down").css("visibility","visible");
    }
    else if ($(document).scrollTop() - $("#sponsors").offset().top > -200) {
      reset_active();
      set_active("sponsors");
      $("#down").attr("href","#contact");
      $("#up").attr("href","#registration");
    }
    else if ($(document).scrollTop() - $("#registration").offset().top > -200) {
      reset_active();
      set_active("registration");
      $("#down").attr("href","#sponsors");
      $("#up").attr("href","#travel");
    }
    else if ($(document).scrollTop() - $("#travel").offset().top > -200) {
      reset_active();
      set_active("travel");
      $("#down").attr("href","#registration");
      $("#up").attr("href","#programme");
    }
    else if ($(document).scrollTop() - $("#programme").offset().top > -200) {
      reset_active();
      set_active("programme");
      $("#down").attr("href","#travel");
      $("#up").attr("href","#speakers");
    }
    else if ($(document).scrollTop() - $("#speakers").offset().top > -200) {
      reset_active();
      set_active("speakers");
      $("#down").attr("href","#programme");
      $("#up").attr("href","#about");
    }
    else if ($(document).scrollTop() - $("#about").offset().top > -200) {
      reset_active();
      set_active("about");
      $("#down").attr("href","#speakers");
      $("#up").attr("href","#home");
      $("#up").css("visibility","visible");
    }
    else if ($(document).scrollTop() - $("#home").offset().top > -200) {
      reset_active();
      set_active("home");
      $("#down").attr("href","#about");
      $("#up").css("visibility","hidden");
      $("#down").css("visibility","visible");
    }
    else  {
      reset_active()
      $("#down").attr("href","#home");
      $("#down").css("visibility","visible");
    }
  });

  var nav = $('#my_fixable_header');
  nav.sticky({topSpacing: 0, responsiveWidth: true, center: true, getWidthFrom: 'body', wrapperClassName: 'nav-wrapper'});
  $('.nav-wrapper').css("width", "100%");

    var $root = $('html, body');
  
  function scrollToSub(e) {
    var href = $.attr(e, 'href');
    if (href.indexOf("/#")==0) {
      href=href.substr(1);
    }
    history.pushState(null, null, href);
    $root.animate({
        scrollTop: $(href).offset().top
    }, 300, function () {          
        
    });
    return false;
  }
  
  $("a[href*='#']").click(function(e) {
    if (!$(e.target).hasClass("suppress")) {
        var href = $.attr(this, 'href');
        //if (href.indexOf("/#")==0) {
          href=href.substr(href.indexOf("#"));
        //}
        history.pushState(null, null, href);
        $root.animate({
            scrollTop: $(href).offset().top
        }, 300, function () {          
            
        });
    }
    return false;
  });





  
});