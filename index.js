// Delete once implemented
alert(
`Change your title var named newTitle within index.js
then delete this alert`
)

// Dynamically render the document and header - h1 title
const newTitle = 'Static Playground';
const headerTitle = document.getElementById('header-title');

document.title = newTitle;
headerTitle.innerText = newTitle;

// Dynamically render copywright text
const currentYear = new Date().getFullYear();
var copywrightP = document.getElementById('copywright');
const copywrightText = '@copy' + currentYear + ' Daniel Deiana';
copywrightP.innerText = copywrightText;
