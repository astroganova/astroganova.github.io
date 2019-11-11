/*Scroll To Top*/
var upArrow = document.getElementById('upArrow')
window.onscroll = function () {
  'use strict'; 
  if (window.pageYOffset >= 250) {
    upArrow.style.display = 'block';
  } else {
    upArrow.style.display = 'none';
  }
}
upArrow.onclick = function () {
  'use strict';
  window.scrollTo(0, 0);
}

var navBarId = document.getElementById("navBarId")
var infoStickerId = document.getElementById("infoStickerId")
var infoCloseId = document.getElementById("infoCloseId")
function openNav() {
  navBarId.style.width = "100%";
  infoStickerId.style.display = "none"
  infoCloseId.style.display = "block"
}

function closeNav() {
  navBarId.style.width = "0%";
  infoStickerId.style.display = "block"
  infoCloseId.style.display = "none"

}







