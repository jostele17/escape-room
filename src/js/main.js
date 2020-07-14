jQuery("#btn_test_1").click(function () {
    var resp = $("#pregunta_test_1").val().toUpperCase();
    $.getJSON("../../json/t.json", function (data) {
        var respuesta = data[1].respuesta.toUpperCase();
        if (respuesta.localeCompare(resp) == 0) {
            console.log("respuesta correcta");
            $(location).attr('href', '../../r/brzqtelz56y');
        } else {
            jQuery('#user_help_test_1').text('Respuesta incorrecta');
        }
    });
});

