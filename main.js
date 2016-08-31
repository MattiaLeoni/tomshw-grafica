// ==UserScript==
// @name        Toms's Hardware 
// @namespace   tomshw
// @description Rende decente la grafica di tom's hardware
// @include     https://www.tomshw.it/*
// @version     1
// @grant       none
// ==/UserScript==


// nella home

$(".container").css("max-width","1300px")
$("body").css("background","#ddd")
$(".adv, .header-repubblica").remove();

if(window.location.href === "https://www.tomshw.it/"){   // pagina principale

  $(".main-column").css("max-width","100%")

  $(".content-list .img-responsive").remove() // le immagini in mezzo alle scatole
  $(".content-list .box-list").remove() // voci dalle aziende
  $(".aside-newsletter").remove() //newsletter


}else{ // pagina notizia

  $(".content-main .main-column").css("max-width","100%")
  
  $(".content-main .main-column, .content-header > div").css("padding-left","15px")
  $(".content-main .main-column, .content-header > div").css("padding-right","15px")
  
  
  $("body").css("background-image",  "url(" + $(".content-image").attr("src") + ")")
  
  $("body").css("background-repeat","no-repeat")
  $("body").css("background-size","100% 100%")
  $("body").css("background-attachment","fixed")
  
  $(".content-image, .content-popular").remove()
  
  
  $("aside").remove()

}


