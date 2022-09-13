"use strict";

 jQuery(function () {

// $("button#btntext").hide();
// $("button#btntext").show();

//////////////////////// GETTING

//get text content

//    $("#btntext").click(function () {
//     alert($("#para1").text());

//    });

//get content including the html

//    $("#btnhtml").click(function () {
//     alert($("#para2").html());

//    });

   // get an input value and set to alert

//    $("#btninput").click(function () {
//     alert($("#textbox").val());

//    });
   
   ///////////////////////// SETTING

   // get element you want to set and enter what you want to 
   // set it inside the argument of the action method
   $("#btntext").click(function () {
    $("#para1").text("This is the post-setting value text!");

   });

   // get element you want to set and enter the new html you
   // want added inside the action method

   $("#btnhtml").click(function () {
    $("#para2").html("<i>The text is no longer bold, it is now in italics!</i>");

   });

     // get input value to set and enter the new value
     // inside the action method argument
     $("#btninput").click(function () {
        $("#textbox").val("Clicking on that button adds this text!");
    
       });

   


 });
