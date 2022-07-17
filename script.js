var numberToConvert = document.getElementById('number-to-convert');
numberToConvert.addEventListener('change', updateValues);

function updateValues() {
	var metersInitialValue = document.getElementById('meters-initial-value')
	metersInitialValue.innerText = numberToConvert.value
}