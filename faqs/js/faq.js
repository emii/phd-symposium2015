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
 var nav = $('#my_fixable_header');
  nav.sticky({topSpacing: 0, responsiveWidth: true, center: true, getWidthFrom: 'body', wrapperClassName: 'nav-wrapper'});
  $('.nav-wrapper').css("width", "100%");
  
});





