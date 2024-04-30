// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  let yesResponses = surveyData.filter(item => item == "Yes").length
  let noResponses = surveyData.filter(item => item == "No").length
  let maybeResponses = surveyData.filter(item => item == "Maybe").length
  outputEl.innerHTML = `Survey Data: <br> Yes: ${yesResponses} <br> No: ${noResponses} <br> Maybe: ${maybeResponses}`
  
}

function traverseAgeData() {
  let agesUnder18 = ageData.filter(item => item < 18).length
  let agesBetween18and35 = ageData.filter(item => item >= 18 && item <=35).length
  let agesBetween36and65 = ageData.filter(item => item >= 36 && item <= 65).length
  let agesAbove65 = ageData.filter(item => item > 65).length
  outputEl.innerHTML = `Age Data: <br> Under 18: ${agesUnder18} <br> 18 to 35: ${agesBetween18and35} <br> 36 to 65: ${agesBetween36and65} <br> Above 65: ${agesAbove65}`;
  console.log(ageData);
}

function traverseNumberData() {
  let evenNumbers = numberData.filter(item => item % 2 === 0).length
  let oddNumbers = numberData.filter(item => item % 2 !== 0).length
  outputEl.innerHTML = `Number Data: <br> Even: ${evenNumbers} <br> Odd: ${oddNumbers}`;
  console.log(numberData);
}
