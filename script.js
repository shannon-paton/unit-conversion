var numberToConvert = document.getElementById('number-to-convert');
numberToConvert.addEventListener('change', updateValues); //onchange, run the function

function updateValues() {
	var metersInitialValue = document.getElementById('meters-initial-value')
	metersInitialValue.innerText = numberToConvert.value
	var feetConvertedValue = document.getElementById('feet-converted-value')
	console.log(feetConvertedValue)
}

// convert meters to feet

function convertMetersToFeet(meters) {
	var feet = meters * 3.280839895
	feet = feet.toFixed(3)
	console.log(feet)
}





