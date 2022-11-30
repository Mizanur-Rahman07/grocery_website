//  ------------ Inspact Off -------------------------//
    // (document.onkeydown = function (e) {
    //   return (
    //     123 != event.keyCode &&
    //     (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
    //     (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
    //     (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
    //     (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
    //     void 0
    //   );
    // })

    // window.addEventListener(
    //   "contextmenu",
    //   function (e) {
    //     e.preventDefault();
    //   },
    //   !1
    // )
//  ------------ Inspact Off -------------------------//


// A $( document ).ready() block.
// $(document).ready(function () {
//     $('.autoplay').slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     });
// });

// $(document).ready(function () {
//     $('.autoplay').slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
        
//     });
// });


$('.responsive').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// ----------- Recent Articel for Read More Code------------//
  function myFunction(id,myBtn) {

    const btnText = document.getElementById(myBtn);

    var x = document.getElementById(id);
    if (x.style.display === "block") {
      x.style.display = "none";
      btnText.innerHTML = "Read More";
    } else {  0
      x.style.display = "block";
      btnText.innerHTML = "Read less"; 
    }

    // if (recentArticelDots.style.display === "none") {
    //   recentArticelDots.style.display = "inline";
    //   btnText.innerHTML = "Read More"; 
    //   moreText.style.display = "none";
    // } else {
    //   recentArticelDots.style.display = "none";
    //   btnText.innerHTML = "Read less"; 
    //   moreText.style.display = "inline";
    // }
  }
 // ----------- Recent Articel for Read More Code------------//                

//  ------------Scroll Sticky Function-----------------------//
 $(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 50) {
    $("#Menu").removeClass("sticky");
  } else {
    $("#Menu").addClass("sticky");
  }
});
//  ------------Scroll Sticky Function-----------------------//

