$(document).ready(function(){$('a[href^="#"]').on("click",function(a){a.preventDefault();var b=this.hash,c=$(b);$("html, body").stop().animate({scrollTop:c.offset().top-50},900,"swing",function(){window.location.hash=b})})}),$(window).scroll(function(){$("#navhome").removeClass("position");var a=window.pageYOffset||document.documentElement.scrollTop;a>=100?$("header").addClass("smaller"):$("header").removeClass("smaller");var b=($("section#home").offset().top,$("section#about").offset().top),c=$("section#projects").offset().top,d=$("section#whatever").offset().top,e=$("section#stuff").offset().top;b-50>a?($("#navhome").addClass("position"),$("#navabt").removeClass("position")):c-50>a?($("#navhome").removeClass("position"),$("#navabt").addClass("position"),$("#navproj").removeClass("position")):d-50>a?($("#navabt").removeClass("position"),$("#navproj").addClass("position"),$("#navwhat").removeClass("position")):e-50>a?($("#navproj").removeClass("position"),$("#navwhat").addClass("position"),$("#navstuff").removeClass("position")):($("#navwhat").removeClass("position"),$("#navstuff").addClass("position"))});