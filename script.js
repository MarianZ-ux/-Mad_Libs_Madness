/* Given the 'id' attribute of a form element, this
   will return the value entered by the user into
   that form element. */
function formValue(id) {
  // Get the form element. When using the val() - it doesnt accept argumetns and sets the value for the preceeding element ---Val() In this case the value is being set for the rest of the form. 
  let formElement = document.getElementById(id);
  
  // When the form element isn't found, return
  // a string that signifies that.
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // When the value is empty, return a string
  // with the placeholder text.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time
   that the form button is clicked. */
function generate() {
 
  // Retrieve form values.
let relative = formValue("relative");
let adjective1 = formValue("adjective-1");
let adjective2 = formValue("adjective-2");
let adjective3 = formValue("adjective-3");
let alienSpecies = formValue("alien-species");
let netflixShow = formValue("netflix-show");
let adverb = formValue("adverb");
let animal = formValue("animal");
let bandName = formValue("band-name");

  //Insert form values madlib.
  let madLib = `
  Dear ${relative},
    <br>
     I have been having a really ${adjective1} time 
  at space camp. The bridge officer is ${adjective2} and 
  the food replicator is ${adjective3}. I met a ${alienSpecies} 
  and we quickly bonded over ${netflixShow}. Live long and prosper!
  <br><br>
  Your ${adverb} ${animal},
  <br>
  ${bandName}
  `;
 
//Output madlib to player.
document.getElementById("output").innerHTML = madLib;
addClassToElement("container","generated");
}