var numberToConvert = document.getElementById('number-to-convert');
numberToConvert.addEventListener('change', updateValues);

function updateValues() {
	var metersInitialValue = document.getElementById('meters-initial-value')
	metersInitialValue.innerText = numberToConvert.value
}

// convert meters to feet

meters = 1
var feet = meters * 3.280839895
feet = feet.toFixed(3)
console.log(feet)

