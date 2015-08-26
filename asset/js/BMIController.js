var BMIController = {
	
	init: function() {
		BMIController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			BMIController.calculateBMI(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	calculateBMI: function(form) {
		var 
			weight = parseFloat(form.weight.value),
			height = parseFloat(form.height.value),
			result = 0;
			
		var callback = function(result) {
			BMIController.showResult(result);
		}
		
		result = BMIService.getIndex(weight, height, callback);
	},
	
	showResult: function(result) {
		var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result.toFixed(2);
	},

};

//initialization
BMIController.init();
