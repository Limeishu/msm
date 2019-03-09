$("#nav .toggle h1").hide();
//bar 
$(function () {
	$(window).scroll(function () {
		var height = document.body.clientHeight | document.documentElement.clientHeight;
		var width = document.body.clientWidth | document.documentElement.clientWidth;
		var scrollHight = $(this).scrollTop();
		var barStyle = ['what', 'intro', 'site', 'detail']
		if (scrollHight / (height - 48) >= 1) {
			$("#nav").addClass("scrolled");
			$("#nav .toggle h1").show();
		} else {
			$("#nav").removeClass("scrolled");
			$("#nav .toggle h1").hide();
		}
		for (var i = 0; i < barStyle.length; ++i) {
			if ((scrollHight / (height) >= i + 1) && (scrollHight / (height) < i + 2)) {
				$("#nav").addClass(barStyle[i]);
			} else {
				$("#nav").removeClass(barStyle[i]);
			}
		}
		if (scrollHight / (height) > 4) {
			$("#nav").addClass(barStyle[3]);
		}
	});
});
//nav
$(document).ready(function () {
	$(".toggle").click(function () {
		$(this).toggleClass("active");
		$(".nav").slideToggle();
		$("#nav").toggleClass("active");
	});
});
//scrolly
$(function () {
	//scroll down
	$(".scrolly").bind('click', function (event) {
		event.preventDefault(); //先取消超連結原本預設動作
		var $anchor = $(this);
		$('html,body').animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000, 'easeInOutQuint');
	});
});
//member image rewrite
var defaultImg = 'assets/css/images/member/default.png'
var itemsP = jQuery('#project>.container>.card');
var patchsP = jQuery('#project>.container>.card>.image');
for (var i = 0; i < itemsP.length; ++i) {
	$(patchsP[i]).css('background-image', 'url(' + $(itemsP[i]).find('img').attr('src') + ')');
};
var itemsT = jQuery('#team>.container>.member>.pic');
var patchsT = jQuery('#team>.container>.member>.pic>.image');
for (var i = 0; i < itemsT.length; ++i) {
	$(patchsT[i]).css('background-image', 'url(' + $(itemsT[i]).find('img').attr('src') + ')');
	var isNull = $(itemsT[i]).find('img').attr('src');
	if (isNull == '') {
		$(patchsT[i]).css('background-image', 'url(' + defaultImg + ')');
	}
};
//button
var buttonIcon = '<icon class="fa fa-angle-right" aria-hidden="true"></icon>';
var button = jQuery('a.button');
button.append(buttonIcon);

//a tage rewrite
var aContent = jQuery("a");
for (var i = 0; i < aContent.length; ++i) {
	if (aContent[i].getAttribute("href") == '#') {
		aContent[i].removeAttribute("href").bind('click', function () {
			event.preventDefault();
		});
		console.log(aContent.eq(i).parent().parent().parent());
		if (aContent.eq(i).parent().parent().parent().parent().html() == "display") {
			aContent[i].remove();
		}
	}
}

$(document).ready(function () {
	var width = document.body.clientWidth;
	var display = $(".map>.display");
	var pointNum = $(".map>.display>div").length + 3;
	var desktopWidth = width / 4;
	var mobileWidth = width;
	var desktop = width > 768;
	var adjWidth = 0;
	var maxPoint = 0;
	if (desktop) {
		adjWidth = desktopWidth;
		maxPoint = 5 - pointNum;
	} else {
		adjWidth = mobileWidth;
		maxPoint = 3 - pointNum;
	}
	display.css('width',pointNum * adjWidth);
	var clickEvent = -1;
	var fixContentF = '<div class="point">' + $(".map>.display>.point").eq(0).html() + '</div>';
	var fixContentL = '<div class="point">' + $(".map>.display>.point").eq(10).html() + '</div>';
	display.prepend(fixContentL).append(fixContentF);

	function eventReset() {
		if (clickEvent > -1) {
			clickEvent = maxPoint;
		} else if (clickEvent < maxPoint) {
			clickEvent = -1;
		}
	}
	// $(".map>.display>.point>.container>.content>a").prepend("了解更多");
	display.css('transform', 'translateX(' + (adjWidth * clickEvent).toString() + 'px)');
	$(".map>.right").click(function () {
		clickEvent = clickEvent - 1;
		eventReset();
		display.css('transform', 'translateX(' + (adjWidth * clickEvent).toString() + 'px)');
		console.log(clickEvent, adjWidth);
	});
	$(".map>.left").click(function () {
		clickEvent = clickEvent + 1;
		eventReset();
		display.css('transform', 'translateX(' + (adjWidth * clickEvent).toString() + 'px)');
	});
});