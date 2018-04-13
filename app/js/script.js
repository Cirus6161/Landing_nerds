$(document).ready(function(){

    /*Slick-slider*/
    $('.sl').slick({
        dots: true
    });



    

    /*phone-mask*/
    $(".phone").mask("+9(999)999-9999");


    /*jquery-validation*/
    $('#common_form1').validate({
        rules:{
            name:{
                required: true
            },
            cellphone:{
                required: true
            },
            email:{
                required: true,
                email: true
            }
        },
        submitHandler: function(form){
            $.ajax({
                url: "mail.php",
                type: "POST",
                data: $(form).serializeArray(),
                success: function (response) {
                    form.reset();
                }
            })
        }
    });


    $('#common_form2').validate({
        rules:{
            name:{
                required: true
            },
            cellphone:{
                required: true
            },
            email:{
                required: true,
                email: true
            }
        },
        submitHandler: function(form){
            $.ajax({
                url: "mail.php",
                type: "POST",
                data: $(form).serializeArray(),
                success: function (response) {
                    form.reset();
                }
            })
        }
    });


});


