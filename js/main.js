$(document).ready(function() {


    tippy('.tippy', {
        theme: 'light',
        size: 'big',
        arrow: true
    });

    tippy('.tippy2', {
        theme: 'light',
        size: 'big',
        arrow: true
    });



    $('#contact_form').on("submit", function(event) {

        event.preventDefault();

        var errors = [];

        //Validates the Name Input Field
        var name = $('#name').val();
        var nameField = $('#name');
        var nameDiv = nameField.parent();

        if (name.length < 3) {

            nameField.addClass('is-invalid');
            nameDiv.addClass('is-invalid').find('small').html('Error');
            nameDiv.find('label').addClass('col-form-label');
            errors.push("1");

        } else {

            nameField.addClass('is-valid').removeClass('is-invalid');
            nameDiv.addClass('is-valid').removeClass('is-invalid').find('small').html('Valid');
            nameDiv.find('label').addClass('col-form-label');

        }

        //Validates the Email Input Field
        var email = $('#email').val();
        var emailField = $('#email');
        var emailDiv = emailField.parent();

        if (name.length < 3) {

            emailField.addClass('is-invalid');
            emailDiv.addClass('is-invalid').find('small').html('Error');
            emailDiv.find('label').addClass('col-form-label');
            errors.push("2");

        } else {

            emailField.addClass('is-valid').removeClass('is-invalid');
            emailDiv.addClass('is-valid').removeClass('is-invalid').find('small').html('Valid');
            emailDiv.find('label').addClass('col-form-label');

        }

        //Validates the Message Input Field
        var message = $('#message').val();
        var messageField = $('#message');
        var messageDiv = messageField.parent();

        if (name.length < 3) {

            messageField.addClass('is-invalid');
            messageDiv.addClass('is-invalid').find('small').html('Error');
            messageDiv.find('label').addClass('col-form-label');
            errors.push("3");

        } else {

            messageField.addClass('is-valid').removeClass('is-invalid');
            messageDiv.addClass('is-valid').removeClass('is-invalid').find('small').html('Valid');
            messageDiv.find('label').addClass('col-form-label');

        }


        var contact_form = $('#contact_form');
        if (!errors.length > 0) {
            $.ajax({
                type: contact_form.attr('method'),
                url: contact_form.attr('action'),
                data: contact_form.serialize()

            }).done(function(data) {
                var result = data;
                var response = JSON.parse(result);
                $('#output').append(response.message).addClass('d-block').fadeIn();

            });


        }




    });

});





$(window).scroll(function() {
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();
    console.log(windowScrollTop);



    // effect - No3
    var secondAnimation = function() {
        $('.method:eq(0)').delay(1000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(1)').delay(2000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(2)').delay(3000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(3)').delay(4000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(4)').delay(5000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(5)').delay(6000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
    };

    if (windowWidth <= 576) {
        if (windowScrollTop > 2600) {
            $('.process').css('background', 'tomato');
            secondAnimation();

        }

    }

    if (windowWidth > 576 && windowWidth <= 768) {
        if (windowScrollTop > 2600) {
            $('.process').css('background', 'tomato');
            secondAnimation();
        }
    }


    if (windowWidth > 768 && windowWidth <= 992) {
        if (windowScrollTop > 1700) {
            $('.process').css('background', 'tomato');
            secondAnimation();
        }
    }

    if (windowWidth > 992) {
        if (windowScrollTop > 750) {
            $('.process').css('background', 'tomato');
            secondAnimation();
        }
    }




});