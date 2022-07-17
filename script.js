var numberToConvert = document.getElementById('number-to-convert');
numberToConvert.addEventListener('input', updateValues); //onchange, run the function

// function to convert meters to feet

function convertMetersToFeet(meters) {
	var feet = meters * 3.280839895
	feet = feet.toFixed(3)
	return feet
}

// function to convert feet to meters

function convertFeetToMeters(feet) {
	var meters = feet / 3.280839895
	meters = meters.toFixed(3)
	return meters
}

function updateValues() {

	var metersInitialValue = document.getElementById('meters-initial-value')
	var feetConvertedValue = document.getElementById('feet-converted-value') // gets span of converted value
	var feetInitialValue = document.getElementById('feet-initial-value')
	var metersConvertedValue = document.getElementById('meters-converted-value')


	if ( numberToConvert.value != "" ) {
		 // gets span of initial value
		metersInitialValue.innerText = numberToConvert.value // updates text of value to the number typed in the top
		var feet = convertMetersToFeet(parseFloat(numberToConvert.value)) // converts to feet
		feetConvertedValue.innerText = feet // replace inner text with converted value

		feetInitialValue.innerText = numberToConvert.value
		var meters = convertFeetToMeters(parseFloat(numberToConvert.value))
		metersConvertedValue.innerText = meters

	}

	else {
		metersInitialValue.innerText = '0'
		feetConvertedValue.innerText = '0.000'
		feetInitialValue.innerText = '0'
		metersConvertedValue.innerText = '0.000'
	}

}






