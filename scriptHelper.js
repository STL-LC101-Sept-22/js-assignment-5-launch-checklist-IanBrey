// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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

   if (fuelLevel < 10000) {
    list.style.visiblity = "visible";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = `Shuttle not ready for launch.`
    fuelStatus.innerHTML = `Insufficient fuel level for journey.`
   } else {
    fuelStatus.innerHTML = `Sufficient fuel level for journey`
   }

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
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
