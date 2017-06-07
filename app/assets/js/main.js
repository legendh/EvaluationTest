/////////////Header Menu/////////////
var $menuMobile = $('.menu-mobile');
var $menuMobileItems = $('.menu-mobile-items');
var $hamburgerMenu = $('.hamburger-menu');

var $menuMobileHomeSection = $('.menu-mobile-home-section').parent();
var $menuMobileMoreButton = $('.menu-mobile-more-button');
var $menuMobileMoreItems = $menuMobileMoreButton.siblings();
var $menuMobileBackButton = $('.menu-mobile-item-back-button');
var $menuMobileGetTicketButton = $('.menu-mobile-item-button');

var menuMobileTl = new TimelineMax();


$(function(){

    $menuMobileMoreButton.on('click', function(){
        $menuMobileMoreItems.show();
        $menuMobileHomeSection.hide();
        $menuMobileBackButton.show();
    });

    $menuMobileBackButton.on('click', function(){
        $menuMobileHomeSection.show();
        $menuMobileMoreItems.hide();
        $(this).hide();
    });


    $hamburgerMenu.on('click', function(){
        $menuMobile.toggleClass('menu-mobile--opened');
        $hamburgerMenu.toggleClass('hamburger-menu__opened');

        if (parseInt($('.menu-mobile--opened').length) === 1 ){
            menuMobileTl.to($menuMobile,0.5,{height:'100vh', display:'block'})
                        .set($menuMobile,{height:'calc(100vh - 74px)'})
                        .to($menuMobileItems,0,{'display':'block'})
                        .set($menuMobile,{minHeight:'500px'})
                        .to($menuMobileGetTicketButton,0.5,{opacity: '1'})
            ;
        }else{
            menuMobileTl.set($menuMobileGetTicketButton,{opacity: '0'})
                .to($menuMobileItems,0,{'display':'none'})
                        .set($menuMobile,{minHeight:'0'})
                        .fromTo($menuMobile,0.5,{'height':'100vh'},{'height':'0'})


        }

    });


    $(window).resize(function(){
        if ($(window).width() > 1279 && parseInt($('.menu-mobile--opened').length) ===1 ){
            menuMobileTl.to($menuMobileItems,0,{'display':'none'})
                        .set($menuMobile,{minHeight:'0'})
                        .to($menuMobile,0,{'height':'0'});
            $menuMobile.toggleClass('menu-mobile--opened');
            $hamburgerMenu.toggleClass('hamburger-menu__opened');
        }
    })

});



/////////////Icon Navbar/////////////

var $navbarIconItem =  $('.info-icon-navbar ul li');

$(function(){
    $('#home').addClass('selected-home');
    $('#content-home').show();
    $navbarIconItem.on('click', function(){
      var $contentItem =  '#content-' + $(this).attr('id');
      var $getSelectedColorClass = 'selected-' + $(this).attr('id');
        $($contentItem).siblings().hide();
        $($contentItem).show();
        $(this).siblings().removeClass();
        $(this).addClass($getSelectedColorClass);


    });
});





