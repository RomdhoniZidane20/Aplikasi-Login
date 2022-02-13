/** @module Login-Script */
/** 
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/ 
const loginFormElement = document.querySelector('#loginForm');
/** 
* Membuat variabel inputEmailElement dan inputPassword untuk tampilan input email dan password.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');
/** 
* Membuat variabel expectedEmail dan expectedPassword untuk tampilan input email dab password.
* @constant {string}
*/
const expectedEmail = 'romdhonizidane@gmail.com';
const expectedPassword = 'icH12o';
/** 
* Menambahkan action pada click button.
* @constant {string}
*/
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
/** 
* Memberi nilai variable email dan password dari input.
* @constant {string}
*/
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
/** 
* Kondisi jika email dan password sesuai.
* @constant {HTMLElement}
*/
    if (email == expectedEmail && password == expectedPassword){
      goToHome();
    }
/** 
* Kondisi jika email dan password tidak sesuai.
* @constant {HTMLElement}
*/
    else {
      showPopUp();
    }
});
