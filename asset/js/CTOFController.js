var CTOFController = {
	
	init: function() {
		CTOFController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			CTOFController.calculateBMI(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	calculateBMI: function(form) {
		var 
			celsius = parseFloat(form.celsius.value),
			result = 0;
		
		var callback = function(result) {
			CTOFController.showResult(result);			
		};
		
		CTOFController.showLoading(true);
		CTOFService.getIndex(celsius, callback);
	},
	
	showResult: function(result) {
		var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result.toFixed(2);
		CTOFController.showLoading(false);
	},
	
	showLoading: function(isLoading) {
		document.querySelector('.label').innerHTML = isLoading ? 'loading...' : 'BMI Result'
	}

};

//initialization
CTOFController.init();
