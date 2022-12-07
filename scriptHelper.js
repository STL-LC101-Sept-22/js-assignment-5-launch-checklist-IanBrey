// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const container = document.getElementById("missionTarget");
        container.innerHTML+= `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">`;

                    
}
function validateInput(testInput) {
    if (testInput) {
        if (isNaN(testInput)) {
            return "Not a Number";
        } else { return "Is a Number" };
    } else { return "Empty" };
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");

    list.style.visibility = "hidden";
    
   pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
   copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`

   // Fuel checks
   if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    launchStatus.style.color = "rgb(199, 37, 78)";
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`
    fuelStatus.innerHTML = `Fuel level too low for launch`
   } else {
    fuelStatus.innerHTML = `Fuel level high enough for launch`
   }

   //Cargo checks
   if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`
    launchStatus.style.color = "rgb(199, 37, 78)";
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`
   } else {
    cargoStatus.innerHTML = `Cargo mass low enough for launch`
   }

   //All good
   if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    list.style.visibility = "hidden"
    launchStatus.style.color = "rgb(65, 159, 106)"
    launchStatus.innerHTML = "Shuttle is Ready for Launch"
   }
}

async function myFetch() {

    let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let planetsReturned = await response.json();

    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random() * planets.length)]
    return planet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
