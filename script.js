var numberToConvert = document.getElementById('number-to-convert');
numberToConvert.addEventListener('input', updateValues); //oninput, run the function

// convert meters to feet

function convertMetersToFeet(meters) {
	var feet = meters * 3.280839895
	feet = feet.toFixed(3)
	return feet
}

// convert feet to meters

function convertFeetToMeters(feet) {
	var meters = feet / 3.280839895
	meters = meters.toFixed(3)
	return meters
}

// convert liters to gallons

function convertLitersToGallons(liters) {
	var gallons = liters * 0.2641720524
	gallons = gallons.toFixed(3)
	return gallons
}

// convert gallons to liters

function convertGallonsToLiters(gallons) {
	var liters = gallons / 0.2641720524
	liters = liters.toFixed(3)
	return liters
}

// convert kilos to pounds

function convertKilostoPounds(kilos) {
	var pounds = kilos * 2.204623
	pounds = pounds.toFixed(3)
	return pounds
}

// convert pounds to kilos

function convertPoundstoKilos(pounds) {
	var kilos = pounds / 2.204623
	kilos = kilos.toFixed(3)
	return kilos
}



// update values when input changes

function updateValues() {
	let inputNumber = parseFloat(numberToConvert.value)

	if ( numberToConvert.value != "" ) { // if the string is not empty
		updateLength(inputNumber) // update length (feet/meters) using inputted number
		updateVolume(inputNumber)
	}

	else {
		updateLength(0) // else run function with 0 as input
		updateVolume(0)
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

function updateVolume(number) {
	var litersInitialValue = document.getElementById('liters-initial-value')
	var gallonsConvertedValue = document.getElementById('gallons-converted-value')
	var gallonsInitialValue = document.getElementById('gallons-initial-value')
	var litersConvertedValue = document.getElementById('liters-converted-value')

	litersInitialValue.innerText = number
	var gallons = convertLitersToGallons(number)
	gallonsConvertedValue.innerText = gallons

	gallonsInitialValue.innerText = number
	var liters = convertGallonsToLiters(number)
	litersConvertedValue.innerText = liters
}









