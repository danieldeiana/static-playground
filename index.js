// ******************
// **** USER SET ****
// ****************** 
const newTitle = "SET TITLE IN INDEX.JS (line 4)";
const author = "SET AUTHORS NAME IN INDEX.JS (line 5)";

// *************************
// **** CONFIG SETTINGS ****
// *************************

// -Set- scroll to top of page on load / refresh
var scrollOnRefresh = false;

// *************************
// **** DYNAMIC CONTENT ****
// *************************

// Get and set the header title
const headerTitle = document.getElementById('header-title');
headerTitle.innerText = newTitle;

// Set the document title (displayed in tab)
document.title = newTitle;

// Dynamically render copywright text
const currentYear = new Date().getFullYear();
var copywrightP = document.getElementById('copywright');
const copywrightText = '@copy' + currentYear + ' ' + author;
copywrightP.innerText = copywrightText;

// *********************
// **** CONFIG CODE ****
// *********************

// -Define- scroll to top of page on load / refresh
window.onbeforeunload = function () {
    if(scrollOnRefresh){
        window.scrollTo(0, 0);
    };
  };

// *************************************************************
