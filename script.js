//waits until page is loaded first
 $(document).ready(function(){ 

   //applies colour red to paragraphs when clicked on 
    $("p").click(function(){
        $("p").addClass("highlight_text");
    });

    //will add lightblue to h2 elements
    $("h2").hover(function(){
        $("h2").addClass( "h2_color");   
    }); */
    
/*paragraphs hiding when clicking on the button ,and then show when clicking on the button again*/
    $("#effect_button1").on("click", function() {
 		 $('#paragraph1').slideToggle('1000');
   });
    $("#effect_button2").click(function(){
        $('#paragraph2').slideToggle('1000');
    });
    $("#effect_button3").click(function(){
        $('#paragraph3').slideToggle('1000');
    });
    $("#effect_button4").click(function(){
        $('#paragraph4').slideToggle('1000');
    });
    $("#effect_button5").click(function(){
        $('#paragraph5').slideToggle('1000');
    });
    $("#effect_button6").click(function(){
        $('#paragraph6').slideToggle('1000');
    });  

/*fadeTo effect when hovering over the button */

     $("#effect_button1").mouseenter(function(){
        $('#effect_button1').fadeTo(1000, 0.5);
    });
    $("#effect_button1").mouseleave(function(){
        $('#effect_button1').fadeTo(1000, 1);
    });

    $("#effect_button2").mouseenter(function(){
        $('#effect_button2').fadeTo(1000, 0.5);
    });
    $("#effect_button2").mouseleave(function(){
        $('#effect_button2').fadeTo(1000, 1);
    });

    $("#effect_button3").mouseenter(function(){
        $('#effect_button3').fadeTo(1000, 0.5);
    });
    $("#effect_button3").mouseleave(function(){
        $('#effect_button3').fadeTo(1000, 1);
    });

    $("#effect_button4").mouseenter(function(){
        $('#effect_button4').fadeTo(1000, 0.5);
    });
    $("#effect_button4").mouseleave(function(){
        $('#effect_button4').fadeTo(1000, 1);
    });

    $("#effect_button5").mouseenter(function(){
        $('#effect_button5').fadeTo(1000, 0.5);
    });
    $("#effect_button5").mouseleave(function(){
        $('#effect_button5').fadeTo(1000, 1);
    });

    $("#effect_button6").mouseenter(function(){
        $('#effect_button6').fadeTo(1000, 0.5);
    });
    $("#effect_button6").mouseleave(function(){
        $('#effect_button6').fadeTo(1000, 1);
    });


    /*
    this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements by removing class h2_font_size from them
    */
    $("#hr_html").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");
    });

    $("#hr_mysql").hover(function(){
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });

    //applies colour black to body background when mouse enters over buttons
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    //applies colour grey to body background when mouse leaves buttons
    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });
    */
    
    $(".stream-nav").on("click", function() {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
});

 }); 