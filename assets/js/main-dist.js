$(".txt").keyup(function(){$(".txt").val().length>2?$(".submit").removeAttr("disabled"):$(".submit").attr("disabled","disabled")});var input=document.getElementById("campo"),ajax=new XMLHttpRequest;ajax.open("GET","books-schema.json",!0),ajax.onload=function(){var e=JSON.parse(ajax.responseText).data.map(function(e){return e.title});new Awesomplete(input,{list:e,minChars:3,maxItems:7})},ajax.send();var app=angular.module("finderChallenge",[]);app.controller("Controlador",function(e,t){t.get("books-schema.json").then(function(t){console.log(t),e.libros=t.data})});