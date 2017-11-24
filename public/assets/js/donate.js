//  var res = require('../../../controllers/apiController');

$(document).ready(function() {
    console.log("ready!");
    $("#submitButton").on("click", function(e) {
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
        var flowerID = $("#flowerImg").data("id");
        var donorID;
        var recipientID;
        var quantityDonated = '1';
        // console.log(donorId);

        //create recipient object
        var newRecipient = {
                first_name: recipientFirst,
                last_name: recipientLast,
                email: recipientEmail,
                address: recipientMailing,
                message: message
            }
            //create donor object
        var newDonor = {
                first_name: donorFirst,
                last_name: donorLast,
                username: donorUser,
                email: donorEmail
            }
            // create new transaction object
        var newTransaction = {
                donor_id: donorID,
                recipient_id: recipientID,
                flower_id: flowerID,
                // quantity_donated: quantity_donated
            }
            // console.log(newTransaction);
        console.log(newDonor);
        console.log(newRecipient);

        //create new recipient

        function transaction(res) {
            //create new donor
            console.log(res);
            if (res.name == "donor") {
                donorID = res.id;
            } else if (res.name == "recipient") {
                recipientID = res.id;
            }
            if (typeof(donorID) === "number" && typeof(recipientID) === "number") {
                var newTransaction = {
                    donor_id: donorID,
                    recipient_id: recipientID,
                    flower_id: flowerID,
                    quantity_donated: quantityDonated
                }
                $.post('/api/transaction', newTransaction);
                console.log("postit!!");
                console.log(donorID);
                console.log(recipientID);

            }
            console.log(typeof(donorID));
            console.log(typeof(recipientID));


            // } else {
            //     console.log('false');
            // }

            // cb(newTransaction);
        }
        $.post('/api/recipient', newRecipient, transaction)
            // recipientID = res;


        $.post('/api/donor', newDonor, transaction)
            // donorID = res;


        // transaction();

        console.log(newTransaction);

        //create new transaction
        // $.post('/api/transaction', newTransaction);
    });
});