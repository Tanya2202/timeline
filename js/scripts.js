jQuery(document).ready(function(){

	var baseDegree = -7;
	var baseMargin = -16;

    if (jQuery(window).width() >= 768 && jQuery(window).width() < 1336) {
        baseDegree = -8;
        baseMargin = -16;
	} else if (jQuery(window).width() < 768) {
        baseDegree = -6;
        baseMargin = -14;
    }

	// Toggle menu
    $('.toggleMenuButton').click(function(){
		if ($('#menu').hasClass('menuClosed')) {
			$('#menu').removeClass('menuClosed');
		} else {
			$('#menu').addClass('menuClosed');
		}
    });

	// Styles for timeline years
	var yearsLi = $('.timelineYears li');
	var number = Math.trunc(yearsLi.length/2);

	for (var i = 0; i < yearsLi.length; i++) {
		var degree = (number - i) * baseDegree;

		var marginLeft = (number - i) * baseMargin;
		if (marginLeft > 0) {
			marginLeft = marginLeft * (-1);
		}

		$(yearsLi[i]).css({
			"transform": "rotate(" + degree + "deg) translateX(" + marginLeft + "px)"
		}).attr('data-degree', degree);
	}

	// Change time on timeline click
	$('.timelineYears li').click(function(){
		var degreeLi = $(this).attr('data-degree');
		var year = $(this).text();
		var descriptionLi = $(this).attr('data-description');

		if (jQuery(window).width() < 375) {
			degreeLi = -90 + degreeLi * (-1);
            $('.Timeline').css({"transform": "rotate(" + degreeLi + "deg)"});
		} else {
            $('.Timeline').css({"transform": "rotate(" + degreeLi * (-1) + "deg)"});
		}

		$('.underlineYear').text(year);

		$('.centerBlockDescriptionP').text(descriptionLi);
	});

	//Change time on timeline scroll
	/*
	var lastScrollTop = 0;
    $('.Timeline').scroll(function (e) {
    	e.preventDefault();
		var actualDegree = parseFloat($('.timelineYears').attr('data-degree'));
		var newDegree = 0;
		var st = $(this).scrollTop();

		if (st > lastScrollTop) {
			// downscroll code
			newDegree = actualDegree + baseDegree;
			$('.timelineYears').css({
				"transform": "rotate(" + newDegree * (-1) + "deg) translateY(" + (-10) * baseDegree + "px) translateX(" + (3) * Math.abs(baseDegree) + "px)"
			}).attr('data-degree', newDegree);
		} else {
			// upscroll code
			newDegree = actualDegree - baseDegree;
			$('.timelineYears').css({
				"transform": "rotate(" + newDegree * (-1) + "deg) translateY(" + (-10) * baseDegree + "px) translateX(" + (3) * Math.abs(baseDegree) + "px)"
			}).attr('data-degree', newDegree);
		}
		console.log(st);
		lastScrollTop = st;
    });
	*/

});
