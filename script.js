// Write your JavaScript code here!
// const { formSubmission, validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {
    const pilotInput = document.querySelector('[name=pilotName]')
    const copilotInput = document.querySelector('[name=copilotName]')
    const fuelInput = document.querySelector('[name=fuelLevel]')
    const cargoInput = document.querySelector('[name=cargoMass]')
    const formSubmit = document.getElementById("formSubmit")

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
   const faultyItems = document.getElementById("faultyItems")

   formSubmit.addEventListener("click", function(event) {
    event.preventDefault();

        let pilotValidation = validateInput(pilotInput.value);
        let copilotValidation = validateInput(copilotInput.value);
        let fuelValidation = validateInput(fuelInput.value);
        let cargoValidation = validateInput(cargoInput.value);
        
        if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelValidation === "Empty" || cargoValidation === "Empty") {
            alert("All fields are required!");
        } else if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number" || fuelValidation === "Not a Number" || cargoValidation === "Not a Number") {
            alert("Make sure to enter valid information for each field!")
        } else {
            formSubmission(document, faultyItems, pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value);
        }

        

   });
});