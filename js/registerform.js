/**

 * 

 *

 * This file contains all registerform JS functions

 *

--------------------------------------------------------------

            [Table of Contents]

--------------------------------------------------------------

* 01 - register-Form js

--------------------------------------------------------------*/





/* ================================= */

  /*===== register-Form js =====*/

/* ================================= */



try {

  "use strict";

    const show__password = document.querySelector(".show__password");

    const view__password = document.querySelector(".view__password");

    show__password.addEventListener('click',function(){

      view__password.setAttribute("type", "text");

    });

    function loginOpen(){

      let form__outter = document.querySelector(".form__outter");

      form__outter.classList.add("login");

      form__outter.classList.remove("register");   

  }

    function register(){

        let form__outter = document.querySelector(".form__outter");

        form__outter.classList.add("register");

        form__outter.classList.remove("login");

    }  

    



  } catch (error) {  



    }

    