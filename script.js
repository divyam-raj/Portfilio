/*$(document).ready(function(){

    $('#menu').click(function(){
     $(this).toggleClass('fa-times'); 
     $(header).toggleClass('toggle') 
    });

     $(window).on('scroll load',function(){
         
     $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle'); 


     });

     $('a[href="C:\Users\HP\Desktop\placement"]').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop :$($(this).attr('href').offset().top)
        },
        500,
        'linear'
        );


});


 
});
*/
$(document).ready(function(){

    // Menu toggle
    $('#menu').click(function(){
        $(this).toggleClass('fa-times'); 
        $('header').toggleClass('toggle');
    });

    // Reset menu and header toggle on scroll
    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle'); 
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Download CV functionality
    $('#download-cv').click(function(e){
        e.preventDefault();
        window.location.href = "C:/Users/HP/Desktop/placement"; // Correct file path for your CV
        // Optional: Alert for user confirmation
        alert("Your download will start now.");
    });

});

