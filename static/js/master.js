$(document).ready(function() {

    $('.item').hover(function() {
        $(this).css('background-color','rgba(169, 97, 21, .8)').css('color', 'rgba(30, 32, 34, 1)');
    },
    function() {
        $(this).css('background-color','rgba(154, 91, 51, 1)').css('color', 'rgba(225, 223, 221, 1)');
    });

    $('.ui.modal').click(function(){
       $(this).modal('hide');
    });
    $('.masonry-grid').masonry({
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true
    });

    $('.masonry-grid').imagesLoaded().progress( function() {
        $('.masonry-grid').masonry('layout');
    });

    $('.masonry-item').dimmer({
        on: 'hover',
    })

    $('.ui .dimmer').click( function() {
        var modal = '#modal' + $(this).attr('id');
        $(modal).modal('show');
    });

    $('#jquery_jplayer').jPlayer({
        ready:
            function() {
                $(this).jPlayer('setMedia', {
                    title: 'She Likes Guns - 30 seconds',
                    mp3: 'assets/audio/Guns 30 Second Clip.01_01.mp3'
                });
            },
        cssSelectorAncestor:'#jp_container_1',

        swfPath:'static/jquery.jplayer.swf',
        supplied:'mp3',
        wmode:'window',
        useStateClassSkin:true,
        autoBlur: true,
        smoothPlayBar: true,
        keyEnable: true,
        remainingDuration: true,
        toggleDuration:true,

    });
});
