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


   pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`
   copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch.`

   // Fuel checks
   if (fuelLevel < 10000) {
    list.style.visiblity = "visible";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = `Shuttle not ready for launch.`
    fuelStatus.innerHTML = `Insufficient fuel level for journey.`
   } else {
    fuelStatus.innerHTML = `Sufficient fuel level for journey`
   }

   //Cargo checks
   if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    launchStatus.innerHTML = `Shuttle not ready for launch.`
    launchStatus.style.color = "red";
    cargoStatus.innerHTML = `Exceeding maximum mass capacity. Cannot takeoff.`
   } else {
    cargoStatus.innerHTML = `Cargo within acceptable capacity.`
   }
   if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    launchStatus.style.color = "green"
    launchStatus.innerHTML = "Shuttle is ready for launch"
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
