function updateValues() {
	var numberToConvert = document.getElementById('number-to-convert').value;
	var metersInitialValue = document.getElementById('meters-initial-value')
	console.log(numberToConvert)
	metersInitialValue.replaceWith(numberToConvert)
}



