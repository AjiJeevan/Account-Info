$("#id-account-details").validate({
    rules: {
        Name : {
            required : true,
            minlength : 3,
            maxlength : 50
        },
        Email: "required",
        Phone : {
            required : true,
            minlength : 10,
            maxlength : 14
        },
        Age : {
            required : true,
            range : [18, 120]
        },
        Gender : {
            required : true,
            minlength : 4,
            maxlength : 15
        },
        Address : {
            required : false,
            maxlength : 50
        }
    },
    messages: {
        Name : {
            required : "Please specify your name",
            minlength : "Name should have minimum 3 characters",
            maxlength : "Name should not exceed 50 characters"
        },
        Email : "Please specify your email Id",
        Phone : {
            required : "Please specify your number",
            minlength : "Number should have minimum 10 digits",
            maxlength : "Number should not exceed 14 digits"
        },
        Age : {
            required : "Please specify your age",
            range : "Age shoubld be between 18 - 120"
        },
        Gender : {
            required : "Please specify your gender",
            minlength : "Gender should have minimum 4 characters",
            maxlength : "Gender should not exceed 15 characters"
        },
        Address : {
            maxlength : "Address should not exceed 50 characters"
        }
    }  
  });

  $('#id-account-details').submit(function(event){
    event.preventDefault();
    if($('#id-account-details').valid()){
        let name = document.getElementById("inputName").value
        alert("An account has been created for "+ name)
        this.reset()
    }
    else{
        alert("Please fill the required details")
    }
});

