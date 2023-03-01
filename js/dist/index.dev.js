"use strict";

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 600;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body,html").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
  $(".to").css("display", "none");
  setTimeout(function () {
    $('.anime').fadeOut();
  }, 9000);
  setTimeout(function () {
    $('.video-logo').fadeIn(7000);
  }, 1020);
  setTimeout(function () {
    $('.video-logo').fadeOut(700);
  }, 4320);
});
$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});
$('#menu-sab a[href]').on('click', function (event) {
  $('.hamburger').trigger('click');
});
var targetElement = document.querySelectorAll(".consept-text-in ,.consept-img, .profile-text, .profile-img,.profile-text-in,.company-container");
document.addEventListener("scroll", function () {
  for (var index = 0; index < targetElement.length; index++) {
    var getElementDistance = targetElement[index].getBoundingClientRect().top + targetElement[index].clientHeight * .6;

    if (window.innerHeight > getElementDistance) {
      targetElement[index].classList.add("show");
    }

    ;
  }

  ;
});
window.addEventListener("scroll", function () {
  var scroll = document.documentElement.scrollTop;

  if (scroll > 450) {
    document.querySelector(".top-in").classList.add("color");
  } else {
    document.querySelector(".top-in ").classList.remove("color");
  }

  if (scroll > 900) {
    document.querySelector(".scroll").classList.add("test");
  } else {
    document.querySelector(".scroll").classList.remove("test");
  }

  if (scroll > 1000) {
    document.querySelector(".scrolll").classList.add("test");
  } else {
    document.querySelector(".scrolll").classList.remove("test");
  }

  if (scroll > 1100) {
    document.querySelector(".scrollll").classList.add("test");
  } else {
    document.querySelector(".scrollll").classList.remove("test");
  }

  if (scroll > 1150) {
    document.querySelector(".scrolllll").classList.add("test");
  } else {
    document.querySelector(".scrolllll").classList.remove("test");
  }

  if (scroll > 1300) {
    document.querySelector(".scrollllll").classList.add("test");
  } else {
    document.querySelector(".scrollllll").classList.remove("test");
  }

  if (scroll > 1400) {
    document.querySelector(".scrolllllll").classList.add("test");
  } else {
    document.querySelector(".scrolllllll").classList.remove("test");
  }

  if (scroll > 1500) {
    document.querySelector(".scrollllllll").classList.add("test");
  } else {
    document.querySelector(".scrollllllll").classList.remove("test");
  }
});
var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
  cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});
var link = document.querySelectorAll('a');

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('mouseover', function (e) {
    cursor.classList.add('cursor--hover');
  });
  link[i].addEventListener('mouseout', function (e) {
    cursor.classList.remove('cursor--hover');
  });
}