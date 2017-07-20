$("#submit").click(function(){
    var input = $("#input").val(); 
    var numb = "62";

if (input === numb){
    $("p").html("you got it!");
}

else if(input < 62){
    $("p").html("too low, try again!");
    }
else if(input > 62){
     $("p").html("too high, try again!");
    }

});
