$(document).ready(function() {
    console.log("ready!");

    $("#formContainer").hide();

    $("#donateButton").on('click', function(e) {
      e.preventDefault();
      $("#formContainer").show();
      console.log('buttonCode')
    });    

    //form validator
    $("#recipientForm").validate({
        //specify the validation rules
        rules: {
          recipientFirst: "required",
          recipientLast: "required",
          recipientMailing: "required",
          recipientEmail: {
            required: true,
            email: true //email is required AND must be in the form of a valid email address
          },
          message: "required",
          donorFirst: "required",
          donorLast: "required",
          donorEmail: {
            required: true,
            email: true
          },
          donorUser: "required"
        },
         
        //specify validation error messages
        messages: {
          recipientFirst: "First Name field cannot be blank!",
          recipientLast: "Last Name field cannot be blank!",
          recipientMailing: "Address cannot be blank!",
          recipientEmail: "Please enter a valid email address!",
          message: "Please enter a message",
          donorFirst: "First Name field cannot be blank!",
          donorLast: "Last Name field cannot be blank!",
          donorEmail: "Please enter a valid email address!",
          donorUser: "Username cannot be blank!"
        },
         
        submitHandler: function(form){

          var validated = true;

          $("#formContainer").filter(":input").each(function(){
              if($(this).val() === ""){
                  validated = false;
              }

              console.log($(this).val());              
          });
          console.log(validated);

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

          if(validated){
            console.log("Validated!");
              $.post('/api/recipient', newRecipient, transaction)
                  // recipientID = res;
              $.post('/api/donor', newDonor, transaction)
              // donorID = res;
              // transaction();
              console.log("New Transaction: ", newTransaction);
              //create new transaction
              // $.post('/api/transaction', newTransaction);
            $("#recipientForm").trigger('reset'); 

          }
        }         
    });

    $('#recipientForm input').on('keyup blur', function () {
        if ($('#recipientForm').valid()) {
            $('#submitButton').prop('disabled', false);
        } else {
            $('#submitButton').prop('disabled', 'disabled');
        }
    });

});