//change routes so that they match api-routes.js
//which correspond to the apiController.js file
$(function() {
  $(document).on('click','img', function(event) {
    event.preventDefault();
    console.log("I work");
    var id = $(this).data("id");
    console.log(id);
    console.log("/api/flowers/" + id);
    $.ajax({
      url: "http://localhost:8080/api/flowers/" + id,
      type: 'GET',
      success: function(data) {
        console.log('Load was performed');
      }
    })

    // "/api/flowers/" + id, function(data) {
    //   flowers = data;
    // });
  });

  
});