//js
//wow js
        wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
})
wow.init();


//jq

$(document).ready(function(){
//counterUp
    $('.counter').counterUp({
           delay: 10,
           time: 1000
    });

    // $(selector).countMe(delay,speed)
//counterUp 2
$("#counter").countMe(40,60);
$("#coun").countMe(40,60);
$("#counterr").countMe(40,60);

// counterUp 3

var countdown = $("#countdown").countdown360({

    radius      : 60,

    seconds     : 100,

    fontColor   :'#FFFFFF',

    autostart   : true,

    onComplete  :function () { console.log('done') }


});

var countdown = $("#countdow").countdown360({

    radius      : 60,

    seconds     : 100,

    fontColor   :'#FFFFFF',

    autostart   : true,

    onComplete  :function () { console.log('done') }


});

var countdown = $("#countdownd").countdown360({

    radius      : 60,

    seconds     : 100,

    fontColor   :'#FFFFFF',

    autostart   : true,

    onComplete  :function () { console.log('done') }


});




});