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

  var speaker = {
    val: 0,
    max: 2,
    next: function() {
      if (this.val >= (this.max -1)) return 0;
      else return this.val+1;
    },
    prev: function() {
      if (this.val <= 0) return this.max-1;
      else return this.val-1;
    }
  }

  var names=["Bernardo","Gilbert","Hames","Mustonen","Norden","Tramontano"];

  $('#speakers_wrap').prepend('\
      <div class="speaker right">\
      </div>');
  $('#speakers_wrap .right').load('speakers/' + names[speaker.next()] + '.html',{ "_": $.now() });
  
  /*$('#speakers_wrap').prepend('\
      <div class="speaker center">\
      </div>');
  $('.center').load('speakers/' + names[speaker.val] + '.html',{ "_": $.now() });
  */
  $('#speakers_wrap').prepend('\
      <div class="speaker left">\
      </div>');
  $('#speakers_wrap .left').load('speakers/' + names[speaker.prev()] + '.html',{ "_": $.now() });
  
  /*$('a[data-speaker=' + speaker.val + ']').addClass('selected');*/
  
  
  function next_speaker(update) {
    //update = typeof update !== 'undefined' ? a : true;
    if (update) speaker.val = speaker.next();
    $('#speakers .left').remove();
    $('#speakers .center').removeClass('center').addClass('left');
    $('#speakers .right').removeClass('right').addClass('center');
    $('#speakers_wrap').prepend('\
        <div class="speaker right">\
        </div>');
    $('#speakers .right').load('speakers/' + names[speaker.next()] + '.html',{ "_": $.now() });
    $('a.selected').removeClass('selected');
    $('a[data-speaker=' + speaker.val + ']').addClass('selected');
  }
  
  function prev_speaker(update) {
    //update = typeof update !== 'undefined' ? a : true;
    if (update) speaker.val = speaker.prev();
    $('#speakers .right').remove();
    $('#speakers .center').removeClass('center').addClass('right');
    $('#speakers .left').removeClass('left').addClass('center');
    $('#speakers_wrap').prepend('\
        <div class="speaker left">\
        </div>');
    $('#speakers .left').load('speakers/' + names[speaker.prev()] + '.html',{ "_": $.now() });
    $('a.selected').removeClass('selected');
    $('a[data-speaker=' + speaker.val + ']').addClass('selected');
  }
  
  function load_speaker(num, right) {
    if (right) {
      $('#speakers .right').remove();
      $('#speakers_wrap').prepend('\
        <div class="speaker right">\
        </div>');
      $('#speakers .right').load('speakers/' + names[num] + '.html',{ "_": $.now() });
    }
    else {      
      $('#speakers .left').remove();
      $('#speakers_wrap').prepend('\
        <div class="speaker left">\
        </div>');
      $('#speakers .left').load('speakers/' + names[num] + '.html',{ "_": $.now() });
    }
  }
  
  function goto_speaker(num) {
    if (num > speaker.val) {
      speaker.val = num;
      //speaker.val = speaker.prev();
      next_speaker(false);
    }
    else if (num < speaker.val) {
      speaker.val = num;
      //speaker.val = speaker.next();
      prev_speaker(false);
    }    
    $('a.selected').removeClass('selected');
    $('a[data-speaker=' + num + ']').addClass('selected');
  }

    $('body').keyup(function(event) {
    if ($('#aspeakers').hasClass('active')) {
      if (event.which == 37) prev_speaker(true);
      if (event.which == 39) next_speaker(true);
    }
    if ($('#aprogramme').hasClass('active')) {
      if (event.which == 37) prev_day(true);
      if (event.which == 39) next_day(true);
    }
  });
  
  $('#rarr').click(function() {
    if ($('#aspeakers').hasClass('active')) next_speaker(true);
    if ($('#aprogramme').hasClass('active')) next_day(true);
  });
  
  $('#larr').click(function() {
    if ($('#aspeakers').hasClass('active')) prev_speaker(true);
    if ($('#aprogramme').hasClass('active')) prev_day(true);
  });

  $('a[data-speaker]').click(function(event) {
    event.preventDefault();
    num = parseInt($(this).attr('data-speaker'));
    //alert('num='+num+'\n val='+speaker.val);
    if (num > speaker.val) {
      load_speaker(num, true);
      setTimeout(function(){goto_speaker(num);}, 100);
      setTimeout(function(){load_speaker(speaker.prev(),false);}, 500);
    }
    else if (num < speaker.val) {
     load_speaker(num, false);
     setTimeout(function(){goto_speaker(num);}, 100);
      setTimeout(function(){load_speaker(speaker.next(),true);}, 500);
    }
    //speaker.val=num;
  });

  cartodb.createVis('map', 'http://robodarguin.cartodb.com/api/v2/viz/70c819f2-c190-11e4-ab66-0e853d047bba/viz.json')
        .done(function(vis, layers) {
          // layer 0 is the base layer, layer 1 is cartodb layer
          // setInteraction is disabled by default
          layers[1].on('featureOver', function(e, pos, latlng, data) {
            cartodb.log.log(e, pos, latlng, data);
          });
          // you can get the native map to work with it
          var map = vis.getNativeMap();
          // now, perform any operations you need
          // map.setZoom(3);
          // map.panTo([50.5, 30.5]);
        })
        .error(function(err) {
          console.log(err);
        });


});