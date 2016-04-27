$(document).ready(function () {
	$(".hire-btn").click(function () {
		$( ".hire-me" ).addClass("open");
		$( ".work" ).removeClass("visible");
		$( ".work" ).addClass("hidden");
		$("body").attr("class", "view-hire");
	});
	$( ".close-hire" ).click(function () {
		$( ".hire-me" ).removeClass("open");
		$( ".work" ).removeClass("hidden");
		$( ".work" ).addClass("visible");
		$(".about").removeClass("open");
		$("body").attr("class", "view-work");
	});

	$(".logo").click(function (e) {
		$( ".hire-me" ).removeClass("open");
		$( ".work" ).removeClass("visible");
		$( ".main" ).removeClass("hidden");
		$(".about").removeClass("open");
		$("body").attr("class", "view-main");
		e.preventDefault;
	});

	// $(".nextwork").click(function (e) {
	// 	e.preventDefault;
	// 	$(this).parent().parent().removeClass("active");
	// 	$(this).parent().parent().next(".ver").addClass("active");
	// });


	var indicator = new WheelIndicator({
	    elem: document.querySelector('body'),
	    callback: function(e){
	      // console.log(e.direction) // "up" or "down"
	      if (e.direction === "up") {
	      	console.log("Скролл вверх");
	      } else if (e.direction === "down") {
	      	console.log("Скролл вниз");
	      }
	    }
	  });

	  //The method call
	  indicator.getOption('preventMouse'); // true




	$('.work').fullpage({
	    sectionSelector: '.ver',
	    navigation: true,
        navigationPosition: 'right',
        loopTop: true,
        loopBottom: true,
	    // slideSelector: '.hor'    	
		// anchors: ['mainScreen', 'secondSection', 'work1', 'work2', 'work3', 'aboutPage'],
	 //    menu: '#menu'
	    // другие опции
	});

	// $(document).on('click', '#moveDown', function(){
	//   $.fn.fullpage.moveSectionDown();
	// });

	$(".nextwork").click(function() {
		$.fn.fullpage.moveSectionDown();
	})


	var about = $("a.about-page");
	console.log(about.html());
	about.click(function(e) {
		e.preventDefault;
		$(".about").addClass("open");
		$("body").attr("class", "view-about");
		// $( ".work" ).removeClass("visible");
		$( ".work" ).addClass("hidden");
		console.log(about.siblings("li").children("a"));
	});
	$("a.go-to-works").click(function(e) {
		e.preventDefault;
		$(".about").removeClass("open");
		// $( ".work" ).removeClass("visible");
		$( ".work" ).removeClass("hidden");
		$("body").attr("class", "view-work");
	});
	$(".go-to-works").click(function(e) {
		e.preventDefault;
		$("section.main").addClass("hidden");
		$(".work").addClass("visible");
		$("body").attr("class", "view-work");
	});
	

	// $(".go-to-works").click(function(e) {
	// 	e.preventDefault;
	// 	$(".main").removeClass("visible").addClass("hidden");
	// 	$(".about").removeClass("visible").addClass("hidden");
	// 	$(".hire-me").removeClass("visible").addClass("hidden");
	// 	$(".work").removeClass("hidden").addClass("visible");
	// });
	// $(".hire-btn").click(function(e) {
	// 	e.preventDefault;
	// 	$(this).parent().siblings("section").removeClass("visible").addClass("hidden");
	// 	$(this).parent().siblings("footer").addClass("visible");
	// 	// $(".work").addClass("visible");
	// });

	// $(".about-page").click(function(e) {
	// 	e.preventDefault;
	// 	$(".main").removeClass("visible").addClass("hidden");
	// 	$(".hire-me").removeClass("visible").addClass("hidden");
	// 	$(".work").removeClass("visible").addClass("hidden");
	// 	$(".about").removeClass("hidden").addClass("visible");
	// });

	// $(".close-hire").click(function(e) {
	// 	$(".main").removeClass("visible").addClass("hidden");
	// 	$(".hire-me").removeClass("visible").addClass("hidden");
	// 	$(".about").removeClass("visible").addClass("hidden");
	// 	$(".work").removeClass("hidden").addClass("visible");
	// });
});