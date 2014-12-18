$(document).ready(function() {
  /*var $buoop = {vs:{i:8,f:5,o:12,s:5,n:9}};  
  $buoop.ol = window.onload; 
  try {if ($buoop.ol) $buoop.ol();}catch (e) {} 
  var e = document.createElement("script"); 
  e.setAttribute("type", "text/javascript"); 
  e.setAttribute("src", "http://browser-update.org/update.js"); 
  document.body.appendChild(e); */
  
  function highlight_menu() {
    $("#down img").removeClass("up");
    if ($(document).scrollTop() > $("#previous").offset().top - $(window).height() / 2 || $(document).scrollTop() > $(document).height() - $(window).height() - 50 ) {
      $("#down").attr("href","#home");
      $("#down img").addClass("up");
      $(".menu a").removeClass("active");
      $("#acontact").addClass("active");
      $("#menubutton>a").text("Contact");
      history.replaceState(null, null, '#contact');
      document.title = "Contact - 16th EMBL PhD Symposium";
    }
    else if ($(document).scrollTop() > $("#contact").offset().top - $(window).height() / 2) {
      $(".menu a").removeClass("active");
      $("#acontact").addClass("active");
      $("#menubutton>a").text("Contact");
      $("#down").attr("href","#previous");
      history.replaceState(null, null, '#contact');
      document.title = "Contact - 16th EMBL PhD Symposium";
    }
    else if ($(document).scrollTop() > $("#sponsors").offset().top - $(window).height() / 2) {
      $(".menu a").removeClass("active");
      $("#asponsors").addClass("active");
      $("#menubutton>a").text("Sponsors");
      $("#down").attr("href","#contact");
      history.replaceState(null, null, '#sponsors');
      document.title = "Sponsors - 16th EMBL PhD Symposium";
    }
    else if ($(document).scrollTop() > $("#registration").offset().top - $(window).height() / 2) {
      $(".menu a").removeClass("active");
      $("#aregistration").addClass("active");
      $("#menubutton>a").text("Registration");
      $("#down").attr("href","#sponsors");
      history.replaceState(null, null, '#registration');
      document.title = "Registration - 16th EMBL PhD Symposium";
    }
    else if ($(document).scrollTop() > $("#travel").offset().top - $(window).height() / 2) {
      $(".menu a").removeClass("active");
      $("#atravel").addClass("active");
      $("#menubutton>a").text("Travel");
      $("#down").attr("href","#registration");
      history.replaceState(null, null, '#travel');
      document.title = "Travel and Accommodation - 16th EMBL PhD Symposium";
    }
    else if ($(document).scrollTop() > $("#programme").offset().top - $(window).height() / 2) {
      $(".menu a").removeClass("active");
      $("#aprogramme").addClass("active");
      $("#menubutton>a").text("Programme");
      $("#down").attr("href","#travel");
      history.replaceState(null, null, '#programme');
      document.title = "Programme - 16th EMBL PhD Symposium";
    }
    else if ($(document).scrollTop() > $("#speakers").offset().top - $(window).height() / 2) {
      $(".menu a").removeClass("active");
      $("#aspeakers").addClass("active");
      $("#menubutton>a").text("Speakers");
      $("#down").attr("href","#programme");
      history.replaceState(null, null, '#speakers');
      document.title = "Speakers - 16th EMBL PhD Symposium";
    }
    else if ($(document).scrollTop() > $("#about").offset().top - $(window).height() / 2) {
      $(".menu a").removeClass("active");
      $("#aabout").addClass("active");
      $("#menubutton>a").text("About");
      $("#down").attr("href","#speakers");
      history.replaceState(null, null, '#about');
      document.title = "About - 16th EMBL PhD Symposium";
    }
    else if ($(document).scrollTop() > $("#home").offset().top - $(window).height() / 2) {
      $(".menu a").removeClass("active");
      $("#ahome").addClass("active");
      $("#menubutton>a").text("Home");
      $("#down").attr("href","#about");
      history.replaceState(null, null, '#home');
      document.title = "16th EMBL PhD Symposium";
    }
  }
  
  highlight_menu();
  
  $(document).scroll(function(){
      highlight_menu();
  });
  
  var speaker = {
    val: 0,
    max: 12,
    next: function() {
      if (this.val >= (this.max -1)) return 0;
      else return this.val+1;
    },
    prev: function() {
      if (this.val <= 0) return this.max-1;
      else return this.val-1;
    }
  }
  
  var names=["Chin","Bachelet","Fussenegger","Chow","delCampo","Jerala","Jinek","Calvert","Ainsworth","Prather","Rivas","Bedau"];
  
  /*$('#ttt').click(function() {
    for(i=0;i++;i<6) {
      speaker.val = i;
      alert('i');
      $('#ttt').append('val:'+speaker.val+' next:'+speaker.next()+' prev:'+speaker.prev()+'<br/>');
    }
  });*/
  
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
  
  $("a[href*='#']").click(function() {
    var href = $.attr(this, 'href');
    //if (href.indexOf("/#")==0) {
      href=href.substr(href.indexOf("#"));
    //}
    history.pushState(null, null, href);
    $root.animate({
        scrollTop: $(href).offset().top
    }, 300, function () {          
        
    });
    return false;
  });
  
  
  $('#speakers_wrap').prepend('\
      <div class="speaker right">\
      </div>');
  $('#speakers_wrap .right').load('speakers/' + names[speaker.next()] + '.txt',{ "_": $.now() });
  
  /*$('#speakers_wrap').prepend('\
      <div class="speaker center">\
      </div>');
  $('.center').load('speakers/' + names[speaker.val] + '.txt',{ "_": $.now() });
  */
  $('#speakers_wrap').prepend('\
      <div class="speaker left">\
      </div>');
  $('#speakers_wrap .left').load('speakers/' + names[speaker.prev()] + '.txt',{ "_": $.now() });
  
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
    $('#speakers .right').load('speakers/' + names[speaker.next()] + '.txt',{ "_": $.now() });
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
    $('#speakers .left').load('speakers/' + names[speaker.prev()] + '.txt',{ "_": $.now() });
    $('a.selected').removeClass('selected');
    $('a[data-speaker=' + speaker.val + ']').addClass('selected');
  }
  
  function load_speaker(num, right) {
    if (right) {
      $('#speakers .right').remove();
      $('#speakers_wrap').prepend('\
        <div class="speaker right">\
        </div>');
      $('#speakers .right').load('speakers/' + names[num] + '.txt',{ "_": $.now() });
    }
    else {      
      $('#speakers .left').remove();
      $('#speakers_wrap').prepend('\
        <div class="speaker left">\
        </div>');
      $('#speakers .left').load('speakers/' + names[num] + '.txt',{ "_": $.now() });
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
  
  function next_day() {
    $('#programme .left').hide().addClass("temp");
    $('#programme .center').removeClass('center').addClass('left');
    $('#programme .right').removeClass('right').addClass('center');
    setTimeout(function(){$('#programme .temp').removeClass('temp').removeClass('left').addClass('right').show();},300);
  }
  
  function prev_day() {
    $('#programme .right').hide().addClass("temp");
    $('#programme .center').removeClass('center').addClass('right');
    $('#programme .left').removeClass('left').addClass('center');
    setTimeout(function(){$('#programme .temp').removeClass('temp').removeClass('right').addClass('left').show();},300);
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
  
  /*$('#menubutton').click(function(){
    
  });*/
  
  $('#menu ul li a').click(function(){
    if ($('#menu').hasClass('show')) $('#menu').removeClass('show');
    else $('#menu').addClass('show');
    //$('#menu').removeClass('show');
  });
  
  var partner = 0;
  function change_partners() {
    if (partner == 0) {
      $('#founder').hide();
      $('#corporate').show();
    }
    else if (partner == 1) {      
      $('#corporate').hide();
      $('#associate').show();
    }
    else if (partner == 2) {
      $('#associate').hide();
      $('#founder').show();    
    }
    partner = (partner + 1) % 3;
  }
  
  setInterval(function(){change_partners()},3000);
  
  $("#t").click(function(){
    $('#totoro').fadeIn(100);
  });
  
  $("#tclose").click(function(){
    $('#totoro').fadeOut(100);
  });
  
});