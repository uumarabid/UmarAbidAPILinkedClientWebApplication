// addopted code from
/* https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
// used arrow function
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
// event hander for binding scroll to top button
function scrollOnLoadEvent() {
  mybutton.onclick = function () {
    topFunction();
  };
}
addLoadEvent(scrollOnLoadEvent);
