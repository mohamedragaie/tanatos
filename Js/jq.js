/*global $, alert, console, mixer */
$(function () {
    'use strict';
    
    // nice scroll 
    
    $("html").niceScroll();
   
    // start header
    
    $('.header').height($(window).height());
    
    $('.intro').each(function () {
        
        $(this).css('paddingTop', ($(window).height() - 120 - $(this).height()) / 2);
        
    });
    
    // arrow click
    
    $('.header .arow i').click(function () {
        
        $('html, body').animate({
           
            scrollTop: $('.services').offset().top - 70
           
        }, 1000);
        
    });
    
    // height of subscribe 
    
    $('.subscribe form').each(function () {
        
        $(this).css('paddingTop', ($('.subscribe').height() - $(this).height()) / 2);
        
    });
    
    // show more 
    
    $('.show-more').click(function () {
       
        $('.works .item').fadeIn(2000, function () {
            $('.works .show-more').fadeOut();
        });
        
    });
    
    // client slider 
    
    var leftArrow = $('.testem .fa-chevron-left'),
        rightArrow = $('.testem .fa-chevron-right');
    
    function checkClients() {
        
        $('.client:first').hasClass('active') ? leftArrow.fadeOut(0) : leftArrow.fadeIn(0);
        
        $('.client:last').hasClass('active') ? rightArrow.fadeOut(0) : rightArrow.fadeIn(0);
        
    }
    checkClients();
    
    $('.testem i').click(function () {
       
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testem .active').fadeOut(500, function () {
               
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
            });
            
        } else {
            
            $('.testem .active').fadeOut(500, function () {
               
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
            });
            
        }
        
    });
    
});

