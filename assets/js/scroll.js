const header = document.getElementById("main-header");


function scrollHeaderTopRes(){
    if(window.scrollY >= 600 ) {
         header.classList.add("fixed-header-res");
        } else {
         if(window.scrollY < 600) {
             header.classList.remove("fixed-header-res");
            }
        }
 }
 function scrollHeaderTop(){
    if(window.scrollY >= 700) {
         header.classList.add("fixed-header");
        } else {
         if(window.scrollY < 700) {
             header.classList.remove("fixed-header");
            }
        }
 }
//  function scrollHeaderTopx(){
//      console.log(scrollY);
//  }
document.addEventListener("scroll", scrollHeaderTopRes);
document.addEventListener("scroll", scrollHeaderTop);

// document.addEventListener("scroll", scrollHeaderTopx);