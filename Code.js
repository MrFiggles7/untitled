$(document).ready(
    function () {
        //event handlers
        $("form[name='myForm']").validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                Height: {
                    required: true,
                    min: 59,
                    max: 79
                },
                Weight: {
                    required: true,
                    min: 88,
                    max: 353
                },
            },
            // Specify validation error messages
            messages: {
                Height: {
                    required: "Please Enter Valid Height",

                },
                Weight: {
                    required: "Please Enter Valid Weight",

                }
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
                var height = parseFloat($('#Height').val());
                var weight = parseFloat($('#Weight').val());

                var BMI = (weight / (height * height)) * 703;

                if(BMI < 18.5){
                    $('.result').text("BMI: " + BMI.toFixed(2) + ": Underweight");
                }
                else if(BMI < 24.9){
                    $('.result').text("BMI: " + BMI.toFixed(2) + ": Healthy Weight");
                }
                else if(BMI < 29.9){
                    $('.result').text("BMI: " + BMI.toFixed(2) + ": Overweight");
                }
                else if(BMI >= 30){
                    $('.result').text("BMI: " + BMI.toFixed(2) + ": Obese");
                }
            }
        });

        //other functions
    }
);