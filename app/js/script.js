$(document).ready(function(){

    /*Slick-slider*/
    $('.sl').slick({
        dots: true
    });


    $('.m-slider').slick({
    });



    $(document).on('click','.about-video__poster',function(e) {

        var $video = $('#inner-video'),
            src = $video.attr('src');

        $('.about-video__poster').hide();
        $video.attr('src', src + '&autoplay=1');
    });

    $(document).on('click','.services-video__poster',function(e) {

        var $video = $('#inner-video2'),
            src = $video.attr('src');

        $('.services-video__poster').hide();
        $video.attr('src', src + '&autoplay=1');
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


