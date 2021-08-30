/**

 * 

 *

 * This file contains all javascript JS functions

 *

--------------------------------------------------------------

            [Table of Contents]

--------------------------------------------------------------

* 01 - header js

* 02 - whishList icons js

* 03 - footer icons js

--------------------------------------------------------------*/



/* ================================= */

  /*===== header js =====*/

/* ================================= */

"use strict";

try {
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  
  
  body.setAttribute("style" , `padding-top: ${header.offsetHeight}px;`);
 
  window.addEventListener("scroll" , function(){
    if ( window.scrollY > 1){
  
      header.setAttribute("style" , `box-shadow: 0 0 30px -20px #000; background-color: rgba( 255,255,255,1);padding: 15px 0;`);
      header.classList.add("sticky-header");
    }
    else{
      
      header.setAttribute("style" , ``);
      header.classList.remove("sticky-header");
    }
  });
  
  
} catch (error) {
  
}










try {
  const header = document.querySelector("header");
  const navToggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const toggle__navbar = document.querySelector("#toggle__navbar");
  let closeNav = document.createElement('button');
  closeNav.innerHTML = `<svg class="icon-close"  height=" 15px" width=" 15px" viewBox="0 0 311 311.08" xmlns="http://www.w3.org/2000/svg">
                          <path d="m16.035 311.08c-4.0977 0-8.1953-1.5586-11.309-4.6953-6.25-6.25-6.25-16.383 0-22.633l279.06-279.06c6.25-6.25 16.383-6.25 22.633 0s6.25 16.383 0 22.637l-279.06 279.06c-3.1367 3.1172-7.2344 4.6953-11.328 4.6953z"></path>
                          <path d="m295.12 311.08c-4.0977 0-8.1914-1.5586-11.309-4.6953l-279.08-279.06c-6.25-6.2539-6.25-16.387 0-22.637s16.383-6.25 22.637 0l279.06 279.06c6.25 6.25 6.25 16.383 0 22.633-3.1367 3.1172-7.2305 4.6953-11.305 4.6953z"></path>
                        </svg>`

  closeNav.setAttribute("style","display:none;")

  toggle__navbar.append(closeNav);



  closeNav.addEventListener('click',function(){      

    header.classList.remove("active");  

    closeNav.setAttribute("style","display:none;")

  });

    navToggle.addEventListener('click',function(){      
      header.classList.add("active");  
      closeNav.setAttribute("style","display:block; position: absolute; top: 10px; left: 10px; height: 25px; width: 25px;opacity: 0.7;")
}); 

    $(toggle__navbar.children).on('click',function() {

      if ($(this).hasClass('active')){

          $(this).removeClass('active');

      } 

      else {

          $(toggle__navbar.children).removeClass('active');

          $(this).addClass('active');

      }

    });

  } 

catch (error) {

    // console.error(error);    

  }

// -- search btn header Start --

const on__search = document.querySelector(".on__search");

const search__btn = document.querySelectorAll(".search_btn");

const close__search = document.querySelectorAll(".closeSearch");



try {

    for( let i of search__btn){

        i.addEventListener('click',function(){

            on__search.classList.add('active');

        });

    }

    closeSearch.addEventListener('click',function(){    

        on__search.classList.remove('active');

    });

  } 

catch (error) {

    // console.error(error);    

  }









/* ================================= */

  /*===== whishList icons js =====*/

/* ================================= */

try{    

   let whishlist__heart = document.querySelectorAll(".whishlist__heart");

   for(let i of whishlist__heart){

     i.addEventListener('click',function(){

      this.classList.toggle("active");

     });

   }

}

catch (error) {

  // console.error(error);    

}





/* ================================= */

  /*===== footer js =====*/

/* ================================= */

const list__heading = document.querySelectorAll(".list__heading");

try {

    for( let i of list__heading){

        i.addEventListener('click',function(){

            this.nextSibling.nextSibling.classList.toggle('active');

        });    

    }

  } 

catch (error) {

    // console.error(error);    

  }