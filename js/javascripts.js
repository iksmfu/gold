$(window).on('load resize scroll', function () {
	var cw = $(window).width();
	if (cw <= 1199) {
		$(".contoverallmenu").removeClass("contoverallmenufixed");
	}
	else {
		var scroll = $(window).scrollTop();
		var up = $(".contoverallup").outerHeight();
		var upMenu = $(".contoverallmenu").outerHeight();
		if(scroll > (up - upMenu)) {
			$(".contoverallmenu").addClass("contoverallmenufixed");	
	    } 
		else {
			$(".contoverallmenu").removeClass("contoverallmenufixed");	
		}
	}
});

function openNav() {
    $("#mySidenav").addClass("sidenavshow");
}
function closeNav() {
    $("#mySidenav").removeClass("sidenavshow");
}
$(function() {
	$(".menurespons, .hamburger").click(function(e) {
		e.preventDefault();
		if ($("#mySidenav").css("visibility") == "hidden") {
			openNav();
		}
		else {
			closeNav();
		}
	});
});

$(window).on('load resize scroll', function () {
	var cw = $(window).width();
	if (cw > 1199) {
		var scroll = $(window).scrollTop();
		if(scroll > 0) {
			$(".scrollTop").css("opacity", 1);
	   } else {
			$(".scrollTop").css("opacity", 0);
		}
	}
});

function scrollTop(){
	$('html, body').animate({scrollTop: 0}, '800');
}

function showhideDiv(whatDiv) {
	$(whatDiv).slideToggle(300);
}

function printVoucher(theURL, winName, features) {
	wn=window.open(theURL,winName,'width=800,height='+screen.height-100+',left=0,top=0,menubar=yes,toolbar=yes,scrollbars=yes,resizable=yes,maximize=yes');
	wn.focus();
}

function showhideSearch(whatDiv) {
	$(whatDiv).toggle(300);
}
$(window).on('load scroll', function () {
    var scroll = $(window).scrollTop();
	$("#contoverallsearch").css("top",scroll);
});
$(function() {
	$("#contoverallsearch").click(function(e) {
		if (!$(e.target).hasClass("searchinput") && !$(e.target).hasClass("closebtn") && !$(e.target).hasClass("fa-search") && !$(e.target).hasClass("fa-times")) {
			if(e.target != this) { 
				return false;
			}
			else {
				$(this).toggle(300);
			}
		}
	});
});


$(window).on('load resize scroll', function () {
	var cw = $(window).width();
	//if (cw > 1199) {
		var scroll = $(window).scrollTop();
		if(scroll > 0) {
			$(".scrollTop").css("opacity", 1);
			$(".hamburger").css("opacity", 1);
	   } else {
			$(".scrollTop").css("opacity", 0);
			$(".hamburger").css("opacity", 0);
		}
	//}
});