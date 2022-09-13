"use strict";

$(document).ready(function () {
  //click events

  // $("#btn1").click(function () {
  //   alert("Button Clicked!");
  // });

  // $("#btn1").click(function () {
  //   // $(".para1").hide();
  //   $(".para1").toggle();
  // });

  // $("#btn2").click(function () {
  //   $(".para1").show();
  // });

  //

  // $("#btn1").dblclick(function(){
  // $(".para1").toggle();
  // })

  // $("#btn1").hover(function(){
  // $(".para1").toggle();
  // })

  // Form events

  // $("input").focus(function () {
  //   //  alert("Focus");
  //   $(this).css("background", "pink");
  // });

  // $("input").blur(function () {
  //   $(this).css("background", "white");
  // });

  // $("input").keyup(function (e) {
  //   console.log(e.target.value);
  // });

  // $("select#gender").change(function (e) {
  //   alert(e.target.value);
  // });

  $("#form").submit(function (e) {
    e.preventDefault();
    var name = $("input#name").val();
    console.log(name);
  });
});
