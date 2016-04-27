$(document).ready(function () {
	var i = 0;
	var main = $(".main"),
		work = $(".work"),
		about = $(".about"),
		hire = $(".hire-me"),
		sections = [main, work, about, hire],
		sections2 = [main, about, hire];

		$(".logo").click(function (e) {
			indicator.turnOn();
			e.preventDefault();
			for (i = 0; i < sections.length; i++) {
				sections[i].removeClass("move");
			};
			i = 0;
			$("body").attr("class", "view-main");
			console.log("Значение і при клике лого - "+ i);
		});

		$(".go-to-works").click(function (e) {
			indicator.turnOff();
			e.preventDefault();
			setTimeout(function () {
				$(".about").css("opacity", "0");
				$(".hire-me").css("opacity", "0");
			}, 500);
			for (i = 0; i < sections.length; i++) {
				sections[i].removeClass("move");
				if (i === 0) {
					sections[i].addClass("move");
				};					
			};
			k=0;
			$('.work').on('mousewheel', function(event, delta, deltaX, deltaY) {
			    var items = $(".ver"),
					lastItem = items.length-1;					
			    if (delta > 0) {
			    	k++;
			    	if (k===5 && $(items[0]).hasClass("visible")) {
			    		k=0;
			    		i=1;
			    		indicator.turnOn();
			    		return false;
			    	} else if (k===5 && ($(items[0]).hasClass("visible") == false)) {
			    		k=0;
			    	};
			    } else if (delta < 0) {
			    	k++;
			    	if (k===5 && $(items[lastItem]).hasClass("visible")) {
			    		k=0;
			    		i=1;
			    		indicator.turnOn();
			    		return false;
			    	} else if (k===5 && ($(items[lastItem]).hasClass("visible") == false)) {
			    		k=0;
			    	};
			    };
			});
			$("body").attr("class", "view-work");			
		});

		$(".about-page").click(function (e) {
			indicator.turnOn();
			e.preventDefault();
			setTimeout(function () {							
				$(".hire-me").css("opacity", "1");
			}, 500);
			$(".about").css("opacity", "1");
			for (i = 0; i < sections.length; i++) {
				sections[i].removeClass("move");
				if (i === 0 || i === 1) {
					sections[i].addClass("move");
				};
			};
			i = 2;
			$("body").attr("class", "view-about");			
		});

		$(".hire-btn").click(function (e) {
			indicator.turnOn();
			e.preventDefault();
			$(".about").css("opacity", "1");
			$(".hire-me").css("opacity", "1");
			for (i = 0; i < sections.length; i++) {
				if (i !== sections.length-1) {
					sections[i].addClass("move");
				};
			};
			i = 3;
			$("body").attr("class", "view-hire");
		});

		$(".close-hire").click(function (e) {
			e.preventDefault();
			for (i = 0; i < sections.length; i++) {
				sections[i].addClass("move");
				if(i === sections.length-2) {
					sections[i].removeClass("move");
				};
			};
			i = 2;
			$("body").attr("class", "view-about");
		});

	z=0;
	// Проверка направления скролла
	var indicator = new WheelIndicator({
		elem: document.querySelector('body'),
		callback: function(e) {
			if (e.direction === "up" || e.direction === "down") {
				z++;
				console.log(z);
				if (z === 1) {
					if (e.direction === "up") {
						if (i > 0) {
							sections[i-1].removeClass("move");
							var cls = sections[i-1].attr("data-index");
							$("body").attr("class", "view-"+cls);						
							if ($("body").hasClass("view-work")) {
								indicator.turnOff();
								//------
								k=0;
								$('.work').on('mousewheel', function(event, delta, deltaX, deltaY) {
								    var items = $(".ver"),
										lastItem = items.length-1;					
								    if (delta > 0) {
								    	k++;
								    	if (k===5 && $(items[0]).hasClass("visible")) {
								    		setTimeout (function () {
								    			// console.log("5 раз прокрутили вверх и пора отодвинуть ворк вправо");
									    		k=0;
									    		indicator.turnOn();
												for (i = 0; i < sections.length; i++) {
													sections[i].removeClass("move");
												};
												i = 0;
								    		},100);
								    	} else if (k===5 && ($(items[0]).hasClass("visible") == false)) {
								    		k=0;
								    	};
								    }
								});						
								//------
								setTimeout(function () {
									$(".about").css("opacity", "0");
									$(".hire-me").css("opacity", "0");
								}, 500);
							} else {
								$(".about").css("opacity", "1");
								$(".hire-me").css("opacity", "1");
								setTimeout(function () {
									i--;
								},800);
								indicator.turnOn();								
							};
						} z=0;
					}
					else if (e.direction === "down") {
						if ((i < sections.length) && (i+1) < sections.length) {
							sections[i].addClass("move");
							if ( (i+1) !== sections.length) {
								var cls = sections[i+1].attr("data-index");
								$("body").attr("class", "view-"+cls);
							};							
							if ($("body").hasClass("view-work")) {
								indicator.turnOff();
								//------
								k=0;
								$('.work').on('mousewheel', function(event, delta, deltaX, deltaY) {
								    var items = $(".ver"),
										lastItem = items.length-1;
								    if (delta < 0) {
								    	k++;
								    	
								    	if (k===5 && $(items[lastItem]).hasClass("visible")) {
								    		setTimeout(function () {
								    			// console.log("5 раз прокрутили вниз и пора отодвинуть ворк влево");
									    		k=0;
									    		i=1;
									    		indicator.turnOn();
									    		// return false;
								    		} ,100);
								    	} else if (k===5 && ($(items[lastItem]).hasClass("visible") == false)) {
								    		k=0;
								    	};
								    };
								});						
								//------
								setTimeout(function () {
									$(".about").css("opacity", "0");
									$(".hire-me").css("opacity", "0");
								}, 500);
							} else {
								setTimeout(function () {
									i++;
								},800);
								indicator.turnOn();
								setTimeout(function () {							
									$(".hire-me").css("opacity", "1");
								}, 500);
								$(".about").css("opacity", "1");
							 };
						};
						} z=0;
					};


			};
		}
	});

	  //The method call
	 // indicator.getOption('preventMouse'); // true
	 // Конец проверки направления скролла




	$(".send-btn").click(function (e) {
		var name = $("#form-name"),
			email = $("#form-email"),
			orderStatus = true;
		console.log("Проверка емейла "+checkMail(email.val()));


		function checkMail(value) {
		    regExp = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		    if (regExp.test(value)) {
		        return true;
		    } else{
		        return false;
		    }
		};

		if (name.val() !== '') {
			name.removeClass("err");
			orderStatus = true;
		} else {
			name.addClass("err").attr("placeholder", "Input error");
			orderStatus = false;
		}

		if (email.val() !== '' && checkMail(email.val())) {
			email.removeClass("err");
			orderStatus = true;
		} else {
			email.addClass("err").attr("placeholder", "Input error");
			orderStatus = false;
		}

		if(orderStatus == true) {
	    	console.log("Можно открывать кнопку");
	    	$(".send-btn").removeAttr("disabled");
	    	send();
	    } else {
	    	e.preventDefault();
	    }

	    function send() {
		    if(orderStatus){
		        $.ajax({
		            url: '/mail.php',
		            type: 'POST',
		            data: {
		                errors: "zero"
		            }
		        })
		        .done(function(data) {
		            if(data){
		                alert('Сообщение успешно отправлено!');
		            }
		            console.log("+");
		        })
		        .fail(function() {
		            console.log("-");
		        });

		  }
		};
	});	

});