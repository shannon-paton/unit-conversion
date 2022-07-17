var numberToConvert = document.getElementById('number-to-convert');
numberToConvert.addEventListener('input', updateValues); //onchange, run the function

// function to convert meters to feet

function convertMetersToFeet(meters) {
	var feet = meters * 3.280839895
	feet = feet.toFixed(3)
	return feet
}

function updateValues() {

	var metersInitialValue = document.getElementById('meters-initial-value')
	var feetConvertedValue = document.getElementById('feet-converted-value') // gets span of converted value

	if ( numberToConvert.value != "" ) {
		 // gets span of initial value
		metersInitialValue.innerText = numberToConvert.value // updates text of value to the number typed in the top

		var calculatedFeetConvertedValue = convertMetersToFeet(parseFloat(numberToConvert.value)) // converts to feet
		feetConvertedValue.innerText = calculatedFeetConvertedValue // replace inner text with converted value
	}

	else {
		metersInitialValue.innerText = '0'
		feetConvertedValue.innerText = '0.000'
	}

}






