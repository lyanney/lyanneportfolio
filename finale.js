$("h1").click(function(){
   alert("The queen bee can lay about 1,500 eggs per day!");
    });
$("#stinger").hover(function(){
    $("#stingertext").css("visibility", "visible");
}, function(){
        $("#stingertext").css("visibility","hidden");
        });
$("#thorax").hover(function(){
    $("#thoraxtext").css("visibility", "visible");
}, function(){
        $("#thoraxtext").css("visibility","hidden");
        });
$("#ant").hover(function(){
    $("#anttext").css("visibility", "visible");
}, function(){
        $("#anttext").css("visibility","hidden");
        });
$("#forewing").hover(function(){
    $("#forewingtext").css("visibility", "visible");
}, function(){
        $("#forewingtext").css("visibility","hidden");
        });
