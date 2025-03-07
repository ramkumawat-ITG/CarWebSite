

 window.onscroll = function() {stickyHeader()};

let header = document.getElementById("head");                                                                                                                     
let sticky = header.offsetTop;

function stickyHeader() {
  if (window.scrollY > 100 > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


   const logo = document.getElementById("nav_logo");

   function logoChange() {
       if (window.scrollY > 30) { 
           logo.src = 'img/logo-dark.png'; 
       } else {
           logo.src = 'img/logo-light.png';
       }
   }
   window.addEventListener('scroll', logoChange);

 


   $('.slides').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 200,
 auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });




  
  $('.slides-1').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 200,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    
  });



  $('.slides-2').slick({
    dots: false,
    infinite: true,
    arrows:true,
    speed: 200,
     auto:false,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows:false,
        }
      }
    ]
    
  });



  let menuToggle3 = document.getElementById('nav_toggle');
  let navMenu3 = document.getElementById('main_nav');
  
  menuToggle3.addEventListener("click", function() {
    navMenu3.classList.toggle('active'); 
  });
  



  // let x = document.getElementById("demo");
  // function myfun(){
  //   demo.style.visibility = "visible";
  //   demo.style.opacity = "1";
  // }


  
  let content = document.getElementById('demo_2');
  let id = document.getElementById('demo');
  content.addEventListener("click", function() {
    id.classList.toggle('active'); 
  
  });
  
  

  let content_2 = document.getElementById('block_1');
  let id_2 = document.getElementById('block_a');
  content_2.addEventListener("click", function() {
    id_2.classList.toggle('active'); 
  });
  
  
  let content_3 = document.getElementById('block_2');
  let id_3 = document.getElementById('block_b');
  content_3.addEventListener("click", function() {
    id_3.classList.toggle('active') 

  });
  
// ------------------SLIDER-3-JS START----------------------


  $('.slides-3').slick({
    dots: false,
    infinite: true,
    arrows:false,
    speed: 200,
 auto: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    
  });

// ------------------SLIDER-3-JS END----------------------




// ------------------SLIDER-5-JS START----------------------
  

  $('.slides-5').slick({
    dots: false,
    infinite: true,
    arrows:false,
    speed: 200,
 auto: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2
        }
      }
    ]
    
  });

// ------------------SLIDER-5-JS END----------------------



// -------------------POP-UP MODEL JS START------------------------

let modal = document.getElementById("myModal");
let btn = document.querySelectorAll(".popup");
let span = document.querySelector(".close");
let model_cont = document.querySelector('.modal-content');


btn.forEach((item) => {
  console.log(item);
  item.addEventListener("click" , function(){
    modal.style.visibility = "visible";
    modal.style.opacity = "2";
    modal.style.transition = "0.3s all";
  })
});


span.addEventListener("click" , function(){
   modal.style.visibility = "hidden";
  modal.style.opacity = "0";

});



// -------------------POP-UP MODEL JS end------------------------


let alt = prompt("value");

if(alt % 2 == 0){
  alert("even");
}

else{
  alert("odd");
}