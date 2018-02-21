var places = []; // new array to store entered places
//changed value of i, semicolon,missing bracket and double quote
var i = 0; // counter variable to track array indexes

// function to add input to array and then generate list after 5th submission
function processInput() {
   places[i] = document.getElementById("placeBox").value; // add entered value to array
   document.getElementById("placeBox").value = ""; // clear text box
   if (i < 5) { // iterate counter variable
      i++;
   }
   else { // add entered value to array and write results to document
      document.getElementById("resultsExpl").innerHTML = "You entered the following places:";
      listItem = "";
      for (j = 1; j < 6; j++) { // write each array element to its corresponding list item
         listItem = "item" + j;
         document.getElementById(listItem).innerHTML = places[j];
      }
   
}
}

// add backward compatible event listener to Submit button
var submitButton = document.getElementById("button");
if (submitButton.addEventListener) {
  submitButton.addEventListener("click", processInput, false); 
} else if (submitButton.attachEvent)  {
  submitButton.attachEvent("onclick", processInput);
}