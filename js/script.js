//alert("JS is reachable")
$(document).ready(function () {
    $('#submit').click(function () {
        var name = $('#inputName').val()
        var email = $('#inputEmail').val()
        var contactMethod = $('[name="gridRadios"]:checked').parent('label').text().trim()
        var county = $('#inputState').val()
        var dataChecked = $('[name="dataPrivacy"]:checked').parent('label').text().trim()
        var contactDate = $('#prefDate').val()
        var message = $('#comment').val()
        alert(' Hi ' + name + '\n View entered details: \n Email: ' + email + '\n Preferred Contact Method: '
            + contactMethod + '\n County of residence: ' + county + '\n Data Privacy: ' + dataChecked + '\n Contact Date: ' + contactDate + '\n' + message +
            '\n We have received your message. Thank you for reaching out to us.')
    })
    $("#we_do").click(function () {
        $("#design").toggle();
        $(".hide-design-image").toggle();
    })
    $("#develop").click(function () {
        $("#development").toggle();
        $(".hide-development-image").toggle();
    })

    $("#productManagement").click(function () {
        $("#product-management").toggle();
        $(".hide-product-management").toggle();
    })
    $(".hover").hover(function () {
        $(this).animate({ opacity: '1' });
    },
        function () {
            $(this).animate({ opacity: '0' });
        })
})