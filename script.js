let i=false;

$("#slideShow").carousel({
    interval:3000,
    keyboard: false,
    pause: i,
    ride: true,
    wrap: true
})
$("#slideShow").carousel('prev');

$("#prev").click(function (e){
    $("#slideShow").carousel('prev');
})

$("#slideShow").carousel('next');

$("#next").click(function (e){
    $("#slideShow").carousel('next');
})

$("#play").click(function(){
    if(i) {
        $("#slideShow").carousel('cycle');
        i=false;
        console.log(i);
        $("#play").text('▶');
    }
    else {
        $("#slideShow").carousel('pause');
        i=true;
        console.log(i);
        $("#play").text('▌▌');
    }
})
 
