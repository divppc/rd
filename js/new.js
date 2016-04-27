$(document).ready(function () {
	var i = 0;
	var main = $(".main"),
		work = $(".work"),
		about = $(".about"),
		hire = $(".hire-me"),
		sections = [main, work, about, hire],
		sections2 = [main, about, hire];

		$(".logo").click(function () {
			indicator.turnOn();
			// var i = 0;
			for (i = 0; i < sections.length; i++) {
				sections[i].removeClass("move");
			};
			i = 0;
			$("body").attr("class", "view-main");
		});

		$(".go-to-works").click(function () {
			for (i = 0; i < sections.length; i++) {
				sections[i].removeClass("move");
				if (i === 0) {
					sections[i].addClass("move");
				};					
			};
			i = 1;
			$("body").attr("class", "view-work");
			full();			
		});

		$(".about-page").click(function () {
			indicator.turnOn();
			for (i = 0; i < sections.length; i++) {
				sections[i].removeClass("move");
				if (i === 0 || i === 1) {
					sections[i].addClass("move");
				};
			};
			i = 2;
			$("body").attr("class", "view-about");			
		});

		$(".hire-btn").click(function () {
			indicator.turnOn();
			for (i = 0; i < sections.length; i++) {
				if (i !== sections.length-1) {
					sections[i].addClass("move");
				};
			};
			i = 3;
			$("body").attr("class", "view-hire");
		});

		$(".close-hire").click(function () {
			for (i = 0; i < sections.length; i++) {
				sections[i].addClass("move");
				if(i === sections.length-2) {
					sections[i].removeClass("move");
				};
			};
			i = 2;
			$("body").attr("class", "view-about");
		});

		$(".nextwork").click(function() {
			$.fn.fullpage.moveSectionDown();
		});


		var full = function () {
			console.log("Вертикальный скролл должен включится");
			indicator.turnOff();
			index = 1;
			$('.work').fullpage({
			    sectionSelector: '.ver',
			    // navigation: true,
		     //    navigationPosition: 'right',
		        loopTop: true,
		        loopBottom: true,
		        onLeave: function(index, nextIndex, direction){
		            //it won't scroll if the destination is the 3rd section
		            if(nextIndex == 1 && index == 3) {
		            	console.log("Надо включить горизонтальный скролл вправо")
		            	indicator.turnOn();
		            	// $.fn.fullpage.destroy();
		                return false;
		            } else if (nextIndex == 3 && index == 1) {
		            	console.log("Надо включить горизонтальный скролл влево")
		            	indicator.turnOn();
		                return false;
		            };
		        }
			});
		};



	// Проверка направления скролла
	var indicator = new WheelIndicator({
		elem: document.querySelector('body'),
		// elem: document.getElementsByClassName('hor')[0],
		callback: function(e) {
			// console.log(document.getElementsByClassName('hor'));
			if (e.direction === "up") {
				if (i > 0) {
					sections[i-1].removeClass("move");
					var cls = sections[i-1].attr("data-index");
					// console.log(cls);
					$("body").attr("class", "view-"+cls);
					i--;
					if (cls == "work" && Boolean($(".work").hasClass("move")) == false) {
						// $.fn.fullpage.moveTo(3);
						setTimeout(function () {
							full();
						}, 1000);
					};
					if ($(".work").hasClass("move")) {
						setTimeout(function () {
							$.fn.fullpage.destroy();
						}, 1000);
					};
				}
			} else if (e.direction === "down") {
				if ((i < sections.length) && (i+1) <= sections.length) {
					sections[i].addClass("move");

					if ( (i+1) !== sections.length) {
						var cls = sections[i+1].attr("data-index");
						$("body").attr("class", "view-"+cls);
						if (cls == "work" && Boolean($(".work").hasClass("move")) == false) {
							// $.fn.fullpage.moveTo(1);
							setTimeout(function () {
								full();
							}, 1000);
						};
						if ($(".work").hasClass("move")) {
							setTimeout(function () {
								$.fn.fullpage.destroy();
							}, 1000);
						};
					};
					
					i++;
				};
			}
		}
	});

	  //The method call
	  indicator.getOption('preventMouse'); // true
	 // Конец проверки направления скролла

	// $(".logo").click(function () {
	// 	// var i = 0;
	// 	for (i = 0; i < sections.length; i++) {
	// 		sections[i].addClass("move");
	// 		sections[0].removeClass("move");
	// 	};
	// });
	
});