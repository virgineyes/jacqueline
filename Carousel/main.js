function Carousel(el) {
    console.log(el)
    console.log(this)
    let carousel = this;

    carousel.element = $(el);
    carousel.currentSlide = 0;
    carousel.previousSlide = 0;
    carousel.numberOfSlides = 0;

    carousel.timer = false;

    carousel.timerLength = 5000;

    carousel.timerPause = 1000;

    carousel.timeing = false;
    console.log(carousel)
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

            setTimeout(function(){carousel.timing = false;},1000);

            }, 1000);
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

            for (let i = 0; i < carousel.numberOfSlides; i++) {
             btn = $("<button class='carousel-paginate'>").html("&#x25cf;");
             if (i==0) {
                btn.addClass("active")
             }
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
        //  console.log(carousel.element.find(".carousel-slide"))
         carousel.element.find(".carousel-slide").eq(0).addClass("atCenter");

         carousel.makeButtons();

         carousel.starTimer();
        };

        carousel.element.on("click",".carousel-control",function(){
         carousel.changePosition($(this).is(".carousel-control-right"));
         carousel.pauseTimer();
        });

        carousel.element.on("click",".carousel-paginate",function(){
         carousel.changePosition($(this).index());
         carousel.pauseTimer();
        });

        carousel.init();

}    
$(function(){
 $(".carousel").each(function(){
  new Carousel(this);
 });
})