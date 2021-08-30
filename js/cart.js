
/**
 * 
 *
 * This file contains all cart JS functions
 *
--------------------------------------------------------------
            [Table of Contents]
--------------------------------------------------------------
* 01 - cart-in-v14 js
--------------------------------------------------------------*/
/* ================================= */
  /*===== cart-in-v14 js =====*/
/* ================================= */
"use strict";
const cart__details = document.querySelector(".cart__details");
const check__out = document.getElementById("check__out");
const pay__payment = document.querySelector(".pay__payment");
const payment__form = document.querySelector(".payment__form");
try {
    check__out.addEventListener('click',function(){         
        cart__details.classList.add("active");
    });  
}
catch (error) {
    // console.error(error);    
  }
