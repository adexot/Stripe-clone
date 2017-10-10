$(document).ready(function(){
    $('.mobile').click(function(){
        $('.mobile-menu').show();
    });
    $('#close-menu').click(function(){
        $('.mobile-menu').hide();
    });
    $('.customers').mouseover(function(){
        $('.customer-button').show();
    });
    $('.customers').mouseout(function(){
        $('.customer-button').hide();
    });
    $(window).scroll(function(){
        var heightScrolled = $(window).scrollTop();
        var pageHeight = $(window).innerHeight();
        if(heightScrolled > 450){
            $('nav').addClass('bg-blue');
        }
        else{
            $('nav').removeClass('bg-blue');
        }
    });
});