var BMIService = {

	getIndex: function(weight, height) {
		$.ajax({
			url: 'services/bmi.ation.php',
			data: {'weight' : weight, 'height' : height},
			success: function(result) {
				callback(parseFloat(result));
			},
			error: function() {
				callback(null);
			}
		});
	},
	
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};