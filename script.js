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
	let inputNumber = parseFloat(numberToConvert.value)

	if ( numberToConvert.value != "" ) { // if the string is not empty
		updateLength(inputNumber) // update length (feet/meters) using inputted number
		updateMass(inputNumber)
	}

	else {
		updateLength(0) // else run function with 0 as input
		updateMass(0)
	}

}

function updateLength(number) { // number is parameter
	var metersInitialValue = document.getElementById('meters-initial-value')
	var feetConvertedValue = document.getElementById('feet-converted-value') // gets span of converted value
	var feetInitialValue = document.getElementById('feet-initial-value')
	var metersConvertedValue = document.getElementById('meters-converted-value')

	// gets span of initial value
	metersInitialValue.innerText = number // updates text of value to the number typed in the top
	var feet = convertMetersToFeet(number) // converts to feet
	feetConvertedValue.innerText = feet // replace inner text with converted value

	feetInitialValue.innerText = number
	var meters = convertFeetToMeters(number)
	metersConvertedValue.innerText = meters
}








