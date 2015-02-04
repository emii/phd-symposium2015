/**************************************************************/
/* Prepares the cv to be dynamically expandable/collapsible   */
/**************************************************************/
function prepareList() {
    $('#expList').find('li:has(ul)')
    .click( function(event) {
        if (this == event.target) {
            $(this).toggleClass('expanded');
            $(this).children('ul').slideToggle(300);
        }
        return false;
    })
    .addClass('collapsed')
    .children('ul').hide();
	
	
	//Hack to add links inside the cv
	$('#expList a').unbind('click').click(function() {
		window.open($(this).attr('href'),$(this).attr('target'));
		return false;
	});

    //Create the button funtionality
    $('#expandList')
    .unbind('click')
    .click( function() {
        $('.collapsed').addClass('expanded');
        $('.collapsed').children().slideDown(300);
    })
    $('#collapseList')
    .unbind('click')
    .click( function() {
        $('.collapsed').removeClass('expanded');
        $('.collapsed').children().slideUp(300);
    })
    
};


/**************************************************************/
/* Functions to execute on loading the document               */
/**************************************************************/
$(document).ready( function() {
  prepareList()
  $('#menu ul li a').click(function(){

  if ($('#menu').hasClass('show')) $('#menu').removeClass('show');
    else $('#menu').addClass('show');
    //$('#menu').removeClass('show');
  });
  
  var $root = $('html, body');
  $("a[href*='#']").click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 300, function () {
          window.location.hash = href;
      });
      return false;
  });
  
  $(document).scroll(function(){
    if ($(document).scrollTop() > $("#contact").offset().top - 250 || $(document).scrollTop() > $(document).height() - $(window).height() - 50 ) {
      $(".menu a").removeClass("active");
      $("#acontact").addClass("active");
      $("#menubutton>a").text("Contact");
    }
    else if ($(document).scrollTop() > $("#faq").offset().top - 250) {
      $(".menu a").removeClass("active");
      $("#ahome").addClass("active");
      $("#menubutton>a").text("FAQs");
    }
  });
  
  $('#menu ul li a').click(function(){
    if ($('#menu').hasClass('show')) $('#menu').removeClass('show');
    else $('#menu').addClass('show');
    //$('#menu').removeClass('show');
  });
  
  $("#t").click(function(){
    $('#totoro').fadeIn(100);
  });
  
  $("#tclose").click(function(){
    $('#totoro').fadeOut(100);
  });
  
});





