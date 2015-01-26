$(document).ready(function() {
	var reset_active = function() {
		$("nav a").removeClass("active");
		$("nav li").removeClass("active");
	};
	
	var set_active = function(active) {
		$("#a" + active).addClass("active");
		$("#l" + active).addClass("active");
	}
      
  $(document).scroll(function(){
    if ($(document).scrollTop() - $("#contact").offset().top > -200) {
      reset_active();
      set_active('contact');
    }
    else if ($(document).scrollTop() - $("#sponsors").offset().top > -200) {
      reset_active();
      set_active('sponsors');
    }
    else if ($(document).scrollTop() - $("#registration").offset().top > -200) {
      reset_active();
      set_active('registration');
    }
    else if ($(document).scrollTop() - $("#travel").offset().top > -200) {
      reset_active();
      set_active('travel');
    }
    else if ($(document).scrollTop() - $("#programme").offset().top > -200) {
      reset_active();
      set_active('programme');
    }
    else if ($(document).scrollTop() - $("#speakers").offset().top > -200) {
      reset_active();
      set_active('speakers');
    }
    else if ($(document).scrollTop() - $("#about").offset().top > -200) {
      reset_active();
      set_active('about');
    }
    else  {
      reset_active()
    }
  });
});