
  $( document ).ready(function() {

    // this is selection using class
   /* $(".hiding1").css("display","none");
    $(".hiding2").css("display","none");
    $(".hiding3").css("display","none");*/
    $("#onep").hide();
    $("#twop").hide();
    $("#threep").hide();

    // this is selecion using id 
    $("p").css({"color":"#6dc8ed","cursor":"pointer"});
  
	$("#one").click(function(){
        $("#onep").toggle(300);
    });
    
    $("#two").click(function(){
        $("#twop").toggle(300);
    });

    $("#three").click(function(){
        $("#threep").toggle(300);
    });

   });

  let myFunction = () => {
    let x = document.getElementById("myTopnav");

    console.log(x)
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



/*modal*/

$(".btn").click(() => {
    $(".modal").css("display","block")

});


$(".close").click(() => {
    $(".modal").css("display","none")

});

$(".close1").click(() => {
    $(".modal").css("display","none")

});



