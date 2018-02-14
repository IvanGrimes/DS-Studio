$(document).ready(function(){
    //= mixerconfig.js
    $('.portfolio__button').on('click', function(event) {
        function getcontrolstate () {
            var getActiveButton = document.getElementsByClassName('button_state_active');
            getActiveCategory = $(getActiveButton).attr( "data-filter" );
            if (getActiveCategory == 'all') {
                return getActiveCategory;
            } else {
                return '.' + getActiveCategory;
            }
        }
        getcontrolstate();
        mixer.destroy();
    });
});
