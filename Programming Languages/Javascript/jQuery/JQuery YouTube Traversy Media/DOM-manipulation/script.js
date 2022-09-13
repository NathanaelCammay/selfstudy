"use strict";

$(document).ready(function () {
  /*
  $("p.para1").css("color", "red");
  $("p.para1").css({ color: "red", background: "#ccc" });
  $("p.para2").addClass("myClass");
  $("p.para2").removeClass("myClass");
  $("#btn1").click(function () {
    $("p.para2").toggleClass("myClass");
  });

 /////////////////////// manipulate div with desired output
  $("#myDiv").text("Hello World")
  $("#myDiv").html("<h3>Hello World</h3>")
  alert($("#myDiv").text());

  $("ul").append("<li>Append List Item</li>");
  $("ul").prepend("<li>Prepend List Item</li>");

  ////////////////////// appending
  $(".para1").appendTo(".para2");
  $(".para1").prependTo(".para2");

  //adding DOM content before and after an element
  $("ul").before("<h4>Hello</h4>");
  $("ul").after("<h4>World</h4>");

  //clearing inner elements with empty method
  $("ul").empty();

  //detaching element from the DOM
  $("ul").detach();

  /////////////////////// manipulating attributes

  //set attribute
  $("a").attr("target", "_blank");

  //get attribute
  alert($("a").attr("href"));

  //remove attribute
  $("a").removeAttr("target");

  

  /////////////////////// wrap element inside another element
  $("p").wrap("h1"); // wrap paragraph elements inside an h1
  
  
  // wrapAll wraps both paragraph elements inside one h1
  $("p").wrapAll("h1");
  //adding element to DOM using keyup via input field selected
  $("#newItem").keyup(function (e) { 
      var code = e.which;
      if (code == 13) {
          e.preventDefault();
          $("ul").append("<li>"+e.target.value+"</li>");
          $("ul").prepend("<li>"+e.target.value+"</li>");
      }
  });
  
  ///////////////////////// Arrays
  
  var myArr = ["Brad", "Kelly", "Nate", "Jose"];
  
  //looping into an array
  $.each(myArr, function (i, val) {
      // console.log(val);
      $("#users").append("<li>" + val + "</li>");
  });
  
  
  // initializing a list item into an array
  var newArr = $("ul#list li").toArray();
  console.log(newArr);
  
  // array of inner html
  var newArr = $("ul#list li").toArray();
  $.each(newArr, function (i, val) {
      $("#users").append("<li>" + val.innerHTML + "</li>");
  });
  
  */
});