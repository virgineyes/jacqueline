function Carousel(sunshine) {
    let carousel = this;

    carousel.element = $(sunshine);
    carousel.currentSlide = 0;
    carousel.previousSlide = 0;
    carousel.numberOfSlides = 0;

    carousel.timer = false;

    carousel.timerLength = 5000;

    carousel.timerPause = 1000;

    carousel.timeing = false;

    carousel.changePosition = function(direction) {

    	if(carousel.timing) return;

    	carousel.previousSlide = carousel.currentSlide;

    	if(direction === false) {
            carousel.currentSlide--;
        } else
        if(direction === true) {
        	carousel.currentSlide++;
        } else {
        	if(carousel.currentSlide<direction) {
        		carousel.currentSlide = direction;
        		return carousel.showPosition(true,true);
        	} else if(carousel.currentSlide>direction) {
        		carousel.currentSlide = direction;
        		return carousel.showPosition(false,true);
        	}
        }
        if(carousel.currentSlide == carousel.previousSlide) return;

        if(carousel.currentSlide < 0) {
        	carousel.currentSlide = carousel.numberOfSlides-1;
        } else if(carousel.currentSlide>= carousel.numberOfSlides) {
        	carousel.currentSlide = 0;
        }
        carousel.showPosition(direction,false)
    }
       
    carousel.showPosition = function(direction,placed) {
    	clearTimeout(carousel.changeTimer);
    	carousel.changeTimer = false;

    	let leftposition, rightposition;
    	if(carousel.currentSlide == 0) {
    		leftposition = carousel.numberOfSlides-1;
    	} else leftposition = carousel.currentSlide-1;

        if(carousel.currentSlide == carousel.numberOfSlides-1) {
        	rightposition = 0;
        } else rightposition = carousel.currentSlide+1;

        let cs = carousel.element.find(".carousel-slide")
            .removeClass("atLeft atRight atCenter moving");

        cs.eq(carousel.previousSlide).addClass("atCenter")
        if(direction===true) {
        	cs.eq(carousel.currentSlide).addClass("atRight");
        	cs.eq(rightposition).addClass("atRight")
        } else if(direction === false) {
        	cs.eq(carousel.currentSlide).addClass("atLeft");
        	cs.eq(leftposition).addClass("atLeft");
        }
        carousel.timing = true;

        carousel.changeTimer = setTimeout(function(){
        	carousel.element.find(".carousel-paginate")
        	    .eq(carousel.currentSlide).addClass("active")
        	    .siblings().removeClass("active")
        	    cs.eq(carousel.currentSlide).removeClass("atLeft atRight")
        	        .addClass(".moving atCenter");
        	    cs.eq(carousel.previousSlide)
        	        .removeClass("atLeft atRight atCenter").addClass("moving at"+
        	        	(direction===true ? "Left":"Right"));

        	    setTimeout(function(){carousel.timing =false;},1000);

        	    },50);
        }

        carousel.starTimer = function() {
        	if(carousel.timerLength === 0) return;
        	carousel.timer = setInterval(carousel.tick, carousel.timerLength);
        }

        carousel.pauseTimer = function(){
        	carousel.stopTimer();
        	carousel.timer = setTimeout(carousel.starTimer, carousel.timerPause);
        }

        carousel.stopTimer = function(){
        	clearInterval(carousel.timer);
        	carousel.timer=false;
        }

        carousel.tick = function(){
        	carousel.changePosition(true);
        }

        carousel.makeButtons = function() {
            let buttondiv = $("<div class='carousel-pagination'>");

            for(let i=0;i<carousel.numberOfSlides;i++) {
            	btn = $("<button class='carousel-paginate'>").html("&#x25cf;");

            	if(i==0) btn.addClass("active");

                buttondiv.append(btn);
            }

            carousel.element.append(
                $("<div class='carousel-controls'>").html(
                    "<div class='carousel-control carousel-control-left'>&lt;</div>"
                        +"<div class='carousel-control carousel-control-right'>&gt;</div>"
                	).append(buttondiv)
            	);
        };

        carousel.init = function(){
        	if(carousel.element.data("timer")=="none") {
        		carousel.timerLength =0;
        	} else if(carousel.element.data("timer")!=undefined) {
        		carousel.timerLength = +carousel.element.data("timer")*1000;
        	}
        	carousel.timerPause = carousel.timerLength*2;

        	carousel.numberOfSlides = carousel.element.find(".carousel-slide").
        	   length;

        	carousel.element.find(".carousel-slide").eq(0).addClass("atCenter");

        	carousel.makeButtons();

        	carousel.starTimer();
        };

        carousel.element.on("click","carousel-control",function(){
        	carousel.changePosition($(this).is(".carousel-control-right"));
        	carousel.pauseTimer();
        });

        carousel.element.on("click",".carousel-paginate",function(){
        	carousel.changePosition($(this).index());
        	carousel.pauseTimer();
        });

        carousel.init();

}  

        // cs.eq(carousel.previousSlide).addClass("atCenter")
        // if(direction===true) {
        //     cs.eq(gallerycarousel.currentSlide).addClass("atRight");
        //     cs.eq(rightposition).addClass("atRight")
        // } else if(direction === false) {
        //     cs.eq(gallerycarousel.currentSlide).addClass("atLeft");
        //     cs.eq(leftposition).addClass("atLeft");
        // }
        // gallerycarousel.timing = true;

        // gallerycarousel.changeTimer = setTimeout(function(){
        //     gallerycarousel.element.find(".gallerycarousel-paginate")
        //         .eq(gallerycarousel.currentSlide).addClass("active")
        //         .siblings().removeClass("active")
        //         cs.eq(gallerycarousel.currentSlide).removeClass("atLeft atRight")
        //             .addClass(".moving atCenter");
        //         cs.eq(gallerycarousel.previousSlide)
        //             .removeClass("atLeft atRight atCenter").addClass("moving at"+
        //                 (direction===true ? "Left":"Right"));

        //         setTimeout(function(){gallerycarousel.timing =false;},1000);

        //         },50);

function ArtCarousel(sunshine) {
    let carousel = this;

    carousel.element = $(sunshine);
    carousel.currentSlide = 0;
    carousel.previousSlide = 0;
    carousel.numberOfSlides = 0;

    carousel.timer = false;

    carousel.timerLength = 5000;

    carousel.timerPause = 1000;

    carousel.timeing = false;

    carousel.changePosition = function(direction) {

        if(carousel.timing) return;

        carousel.previousSlide = carousel.currentSlide;

        if(direction === false) {
            carousel.currentSlide--;
        } else
        if(direction === true) {
            carousel.currentSlide++;
        } else {
            if(carousel.currentSlide<direction) {
                carousel.currentSlide = direction;
                return carousel.showPosition(true,true);
            } else if(carousel.currentSlide>direction) {
                carousel.currentSlide = direction;
                return carousel.showPosition(false,true);
            }
        }
        if(carousel.currentSlide == carousel.previousSlide) return;

        if(carousel.currentSlide < 0) {
            carousel.currentSlide = carousel.numberOfSlides-1;
        } else if(carousel.currentSlide>= carousel.numberOfSlides) {
            carousel.currentSlide = 0;
        }
        carousel.showPosition(direction,false)
    }
       
    carousel.showPosition = function(direction,placed) {
        clearTimeout(carousel.changeTimer);
        carousel.changeTimer = false;

        let leftposition, rightposition;
        if(carousel.currentSlide == 0) {
            leftposition = carousel.numberOfSlides-1;
        } else leftposition = carousel.currentSlide-1;

        if(carousel.currentSlide == carousel.numberOfSlides-1) {
            rightposition = 0;
        } else rightposition = carousel.currentSlide+1;

        let cs = carousel.element.find(".artCarousel-slide")
            .removeClass("atLeft atRight atCenter moving");

        cs.eq(carousel.previousSlide).addClass("atCenter")
        if(direction===true) {
            cs.eq(carousel.currentSlide).addClass("atRight");
            cs.eq(rightposition).addClass("atRight")
        } else if(direction === false) {
            cs.eq(carousel.currentSlide).addClass("atLeft");
            cs.eq(leftposition).addClass("atLeft");
        }
        carousel.timing = true;

        carousel.changeTimer = setTimeout(function(){
            carousel.element.find(".artCarousel-paginate")
                .eq(carousel.currentSlide).addClass("active")
                .siblings().removeClass("active")
                cs.eq(carousel.currentSlide).removeClass("atLeft atRight")
                    .addClass(".moving atCenter");
                cs.eq(carousel.previousSlide)
                    .removeClass("atLeft atRight atCenter").addClass("moving at"+
                        (direction===true ? "Left":"Right"));

                setTimeout(function(){carousel.timing =false;},1000);

                },50);
        }

        carousel.starTimer = function() {
            if(carousel.timerLength === 0) return;
            carousel.timer = setInterval(carousel.tick, carousel.timerLength);
        }

        carousel.pauseTimer = function(){
            carousel.stopTimer();
            carousel.timer = setTimeout(carousel.starTimer, carousel.timerPause);
        }

        carousel.stopTimer = function(){
            clearInterval(carousel.timer);
            carousel.timer=false;
        }

        carousel.tick = function(){
            carousel.changePosition(true);
        }

        carousel.makeButtons = function() {
            let buttondiv = $("<div class='artCarousel-pagination'>");

            for(let i=0;i<carousel.numberOfSlides;i++) {
                btn = $("<button class='artCarousel-paginate'>").html("&#x25cf;");

                if(i==0) btn.addClass("active");

                buttondiv.append(btn);
            }

            carousel.element.append(
                $("<div class='artCarousel-controls'>").html(
                    "<div class='artCarousel-control artCarousel-control-left'>&lt;</div>"
                        +"<div class='artCarousel-control artCarousel-control-right'>&gt;</div>"
                    ).append(buttondiv)
                );
        };

        carousel.init = function(){
            if(carousel.element.data("timer")=="none") {
                carousel.timerLength =0;
            } else if(carousel.element.data("timer")!=undefined) {
                carousel.timerLength = +carousel.element.data("timer")*1000;
            }
            carousel.timerPause = carousel.timerLength*2;

            carousel.numberOfSlides = carousel.element.find(".artCarousel-slide").
               length;

            carousel.element.find(".artCarousel-slide").eq(0).addClass("atCenter");

            carousel.makeButtons();

            carousel.starTimer();
        };

        carousel.element.on("click","artCarousel-control",function(){
            carousel.changePosition($(this).is(".artCarousel-control-right"));
            carousel.pauseTimer();
        });

        carousel.element.on("click",".artCarousel-paginate",function(){
            carousel.changePosition($(this).index());
            carousel.pauseTimer();
        });

        carousel.init();

}   
$(function(){
    $(".carousel").each(function(){
        new Carousel(this);
    });

    $(".artCarousel").each(function(){
        new ArtCarousel(this);
    });

	$("article:first").show().siblings().hide();

	$(".tab_ul li").on("click",function(){
		let i = $(this).index();

		// $("article").siblings().fadeOut();
		// $("article").eq().fadeIn();

		$("article").eq(i).show(300).siblings().hide(300)
		$(this).addClass("active").siblings().removeClass("active");
	})
})
const openLightBox = function(event) {
    $(".lightbox-content").html("<img src='"+ event.target.src +"'>");

    $(".lightbox").addClass("active");
}

$(function(){
    $("body").on("click",".gallery img", openLightBox);

    $(".lightbox-back").on("click",function(){
        $(".lightbox").removeClass("active");
    });
})

let chosen = 0;
let page = 0;

function scrollDiv(){
    $(".thumbs").animate({
        scrollLeft:300*page
    })
}
function showImage(){
    let chose = $(".thumb-images img").eq(chosen);
    $(".big-image img").attr({src:chose.attr("src")})
    chose.addClass("active").siblings().removeClass("active");
}


