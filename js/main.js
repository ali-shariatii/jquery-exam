$(document).ready(function(){
    $("#btn1-1").click(function(){
        $("#ans1-1").slideToggle();
        $("#container1").toggleClass("togClass1-1", "background-color", "grey")
    });

    $("#btn1-2").click(function(){
        $("#ans1-2").fadeOut(500).fadeIn(2500);
    });
    
        $(".container2").on("click","header" , function() {
        $(this).next().slideToggle();
    });

    $("#btn3").click(function(){
        $("#ans3").animate({
            left: "50%",
            fontSize: "50px"
        });
    });
    
    $("#btn4").click(function(){
        $("#ans4").animate({
            opacity: "100%"
        });
        $("#container4").animate({
            height: '170px'
        })
    });

    $("#btn5").dblclick(function(){
        $("#ans5").text("Document Object Model");
    });

    $("#container6").mousedown(function(){
        $("#ans6").text("It's an application programming interface (API) for XML/HTML Docs. It defines the way how document is manipulated, modifed or accessed.");
    });
    
    $("#alert").fadeToggle();
    $("#container7").mouseenter(function(){
        $("#ans7").append(  "<br> If we want to select multiple HTML elements, we should go with giving them one class.");
    });
    
    $("#container8").mouseover(function(){
        $("#ans8").removeClass();
    });

    $("#btn9-add").click(function(){
        $("#ans9").addClass("blue");
    });

    $("#btn9-rem").click(function(){
        $("#ans9").removeClass("blue");
    });

    $("#ans12").hover(function(){
        $(this).css("color", "rgb(15, 126, 177)");
        }, function(){
        $(this).css("color", "black");
    });
    
    $("#btn11-1").click(function(){
        let myJson = '{"answer":"True"}';
        let myObject = JSON.parse(myJson);
        $("#ans11-1").html(myObject.answer);
    }); 
    
    $("#btn11").click(function(){
        $("#toggle").toggleClass("togClass11-2", "color", "rgb(15, 126, 177)");
    });
    
    $("#btn12").click(function(){
        $("#ans12").animate({
            height: 'toggle'
        });
        $('#container12').animate({
            opacity: 'toggle'
        });
    });

    $('#btn13-hide').click(function(){
        $('#ans13').hide();
    });

    $('#btn13-show').click(function(){
        $('#ans13').show();
    });
    
    $('#btn14').click(function(){
        $('#ans14').toggle();
    });
});