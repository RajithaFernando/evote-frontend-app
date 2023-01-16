// Nigerian States
var nigerian_states = new Array("California");

// Nigerian Local Governemts
var nigerian_states_local_govt = new Array();
nigerian_states_local_govt[0] = "";
nigerian_states_local_govt[1] = "Los Angeles|San Diego|San Jose|San Francisco|Fresno|Sacramento|Oakland|Santa Clarita|Ontario";

const nigerianStateElementId = 'registerState';
const nigerianLocalGovtElementId = 'registerLocalGovt';

function populateLocalGovt()
{
    var selectedCountryIndex = document.getElementById(nigerianStateElementId).selectedIndex;
    
    var stateElement = document.getElementById(nigerianLocalGovtElementId);

    stateElement.length = 0;
    stateElement.options[0] = new Option('Select Local Govt.', '');
    stateElement.selectedIndex = 0;

    var state_arr = nigerian_states_local_govt[selectedCountryIndex].split("|");

    for (var i = 0; i < state_arr.length; i++)
    {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }
}
    

function populateStates()
{    
    var stateElement = document.getElementById(nigerianStateElementId);
    stateElement.length = 0;
    stateElement.options[0] = new Option('Select State', '-1');
    stateElement.selectedIndex = 0;
    for (var i = 0; i < nigerian_states.length; i++) {
        stateElement.options[stateElement.length] = new Option(nigerian_states[i], nigerian_states[i]);
    }

    // Assigned all countries. Now assign event listener for the states.

    if (nigerianLocalGovtElementId) {
        stateElement.onchange = () =>
		{
            populateLocalGovt(nigerianStateElementId, nigerianLocalGovtElementId);
        };
    }
}

export default populateStates;