	    var TOTAL_BTCS = 250;
        
        function populate_bitstarter_results(total) {
           $("#bakers").html(total.bakers);
           $("#btcs").html(total.bitcoins);
           var total_percentage = (total.bitcoins / TOTAL_BTCS) * 100;
           var percentage_left = ((TOTAL_BTCS - total.bitcoins)/TOTAL_BTCS) * 100;
           $(".bar-success").css("width", total_percentage + "%");
           $(".bar-warning").css("width", percentage_left + "%");
        }
        
        function removeActiveClass() {
        	$(".active").removeClass('active');
        }
         
        $(document).ready(function() {
              $.ajax({
                 url: "/sum"

              }).done(function(total) {
                 populate_bitstarter_results(total);     
              });
              $(".navlinks").click(function() {
              	removeActiveClass();
              	$(this).parent("li").addClass("active");
              });
        
            $(".navlinks, .brand").on("click", function(event){
        		$("html, body").animate({
            		scrollTop: $($(this).attr("href")).offset().top - 40 + "px"
        		}, {
            		duration: 500,
            		easing: "swing"
        		});
        		return false;      
    		});
        
    		var layers = $('.mover').get();
    		var layersCount = layers.length;
    		var master = [];
    		for(var i = 0; i < layersCount; i++) {
       			master[i] = {
           			speed : 21 - (i / layersCount),
           			pos : $(layers[i]).position()
       			}
    		}
 
    		var top;

    		var winHeight;

    		var percentTop;

 
    		winHeight = $(window).height();


    		
            $window = $(window);
   			$(window).scroll(function () {
 
       			top = $(this).scrollTop();
       			left = $(this).scrollLeft();
 
       			for(var t = 0; t < layersCount; t++) {
           			percentTop = (top / winHeight) * master[t].speed;
 
           			var newPositionTop = master[t].pos.top + (percentTop * master[t].pos.top);
 
           			$(layers[t]).css({"top":newPositionTop});
 
       			}
   			});
           }
        );