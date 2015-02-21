// var divs = document.getElementsByTagName('div');
// for(var i=0; i<divs.length; i++) {
//   divs[i].addEventListener("click", highlightThis);
  
//   divs[i].addEventListener("click", highlightThis, true);
//   divs[i].addEventListener("click", highlightThis, false);
// }

// function highlightThis(event) {
//     //event.stopPropagation();
  
//     var backgroundColor = this.style.backgroundColor;
//     this.style.backgroundColor='yellow';
//     alert(this.className);
//     this.style.backgroundColor=backgroundColor;
// }

$(document).ready(function(){

	//smooth scrolling
	//it looks pretty neat
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 50
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//position indicator
$(window).scroll(function() {
	$("#navhome").removeClass("position");
	var offset = window.pageYOffset || document.documentElement.scrollTop;
	if (offset >= 100)
	{
		$("header").addClass("smaller");
	}
	else {
		$('header').removeClass("smaller");
	}

	var homeoff = $("section#home").offset().top;
	var abtoff = $("section#about").offset().top;
	var projoff = $("section#projects").offset().top;
	var whatoff = $("section#dog").offset().top;

	//the -50 used because that's the height of the shrunken navbar
	if (offset < abtoff - 50) {
		$("#navhome").addClass("position");
		$("#navabt").removeClass("position");
	}
	else if (offset < projoff - 50) {
		$("#navhome").removeClass("position");
		$("#navabt").addClass("position");
		$("#navproj").removeClass("position");
	}
	else if (offset < whatoff - 50) {
		$("#navabt").removeClass("position");
		$("#navproj").addClass("position");
		$("#navdog").removeClass("position");
	}
	else{
		$("#navproj").removeClass("position");
		$("#navdog").addClass("position");
	};
});

//carousel implemented
//fades used to make transitions look crazy professional
var carDiv = $(".carousel-container").find("div");
console.log(carDiv[0]);
var curr = 0;
$(carDiv[1]).hide();
$(carDiv[2]).hide();
var leftButton = $("button#left");
var rightButton = $("button#right");
var past;

//buttons to flip through the carousel slides
leftButton.on('click', function (e) {
	past=curr;
	curr = ((curr - 1) + 3) % 3;
	if (past === 0)
	{
		$(carDiv[curr]).fadeIn(400, function() {
			$(carDiv[past]).fadeOut();
		});
	}
	else{
		$(carDiv[curr]).show();
		$(carDiv[past]).fadeOut();
	}
	console.log("curr: "+curr)

});
rightButton.on('click', function (e) {
	past = curr;
	curr = (curr + 1) % 3;
	if (past === 2)
	{
		$(carDiv[curr]).show();
		$(carDiv[past]).fadeOut();
	}
	else {
		$(carDiv[curr]).fadeIn(400, function() {
			$(carDiv[past]).fadeOut();
		});
	}
});

//modal implemented
//launch from clicking that pawprint
var modal = $("#modal");
var overlay = $("#overlay");
modal.hide();
overlay.hide();
var bluesClue = $("#launch");
bluesClue.on('click', function(e) {
	//center the modal
	//doing the math here because I really didn't want to do it anywhere else
	var top = Math.max($(window).height() - modal.outerHeight(), 0) / 2;
    var left = Math.max($(window).width() - modal.outerWidth(), 0) / 2;

    console.log(top);

    modal.css({
        top:top + $(window).scrollTop(), 
        left:left + $(window).scrollLeft()
    });
    //make it show up
	overlay.show();
	modal.show();
});
var closeButton = $("#close");
closeButton.on('click', function(e) {
	//hide everything;
	overlay.hide();
	modal.hide();
});

// var modal = (function(){
//     var method = {};

//     var overlay = $('<div id="overlay"></div>');
// 	var modal = $('<div id="modal"></div>');
// 	var content = $('<div id="content"></div>');
// 	var close = $('<a id="close" href="#">close</a>');

// 	modal.hide();
// 	overlay.hide();
// 	modal.append(content, close);

//     // Center the modal in the viewport
//     method.center = function () {
// 	    var top = Math.max($(window).height() - modal.outerHeight(), 0) / 2;
// 	    var left = Math.max($(window).width() - modal.outerWidth(), 0) / 2;
// 	    modal.css({
// 	        top:top + $(window).scrollTop(), 
// 	        left:left + $(window).scrollLeft()
// 	    });};

//     // Open the modal
//     method.open = function (settings) {};

//     // Close the modal
//     method.close = function () {};

//     return method;
// }());
// get transitions
// 	posn elems absolute, set location
// 	iterate thru list
// 		fade one out, fade other in