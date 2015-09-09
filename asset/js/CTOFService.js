var CTOFService = {

	convert: function(celsius, callback) {
		$.ajax({
		  url: 'services/CTOF.action.php',
		  data: {'celsius': celsius},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	}
};