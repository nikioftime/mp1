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
	var whatoff = $("section#whatever").offset().top;
	var stufoff = $("section#stuff").offset().top;

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
		$("#navwhat").removeClass("position");
	}
	else if (offset < stufoff - 50) {
		$("#navproj").removeClass("position");
		$("#navwhat").addClass("position");
		$("#navstuff").removeClass("position");
	}
	else {
		$("#navwhat").removeClass("position");
		$("#navstuff").addClass("position");
	};
});