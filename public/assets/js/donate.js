$( document ).ready(function() {
    console.log( "ready!" );

    $("#submitButton").on("click", function(e){
    	e.preventDefault();
    	//get text box values    	
    	var recipientFirst = $("#recipientFirst").val().trim();
			var recipientLast = $("#recipientLast").val().trim();
			var recipientMailing = $("#recipientMailing").val().trim();
			var recipientEmail = $("#recipientEmail").val().trim();
			var message = $("#message").val().trim();
			var donorFirst = $("#donorFirst").val().trim();
			var donorLast = $("#donorLast").val().trim();
			var donorEmail = $("#donorEmail").val().trim();
			var donorUser = $("#donorUser").val().trim();
			//create recipient object
			var newRecipient = {
	     first_name: recipientFirst,
	     last_name: recipientLast,
	     email: recipientEmail,
	     address: recipientMailing
	   	}
	   	//create donor object
	   	var newDonor = {
	   		first_name: donorFirst,
	   		last_name: donorLast,
	   		username: donorUser,
	   		email: donorEmail
	   	}
	   	console.log(newRecipient);
	   	//create new recipient
	   	$.post('/api/recipient', newRecipient);
	   	//create new donor
	   	$.post('/api/donor', newDonor);
    });
});