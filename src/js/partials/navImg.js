    var getItems,
        widthImg;
    function navImg() {
        getItems = document.getElementsByClassName('feature-slider_control-nav-item');
        for (var i = 0; i < getItems.length; i++) {
            $(getItems[i]).addClass('feature-slider_control-nav-img'+i);
        }
        return getItems;
    }
    navImg();


    $(window).on("load resize",function(){
        widthImg = $('.feature-slider_control-nav-item').width();
        $('.feature-slider_control-nav-item').css('height', widthImg);
    });
