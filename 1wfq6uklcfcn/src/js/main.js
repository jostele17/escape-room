jQuery(document).ready(function () {
    console.log(Math.random().toString(36).substring(2, 15));
});
//Función para Bloq May
function capLock(e) {
    kc = e.keyCode ? e.keyCode : e.which; sk = e.shiftKey ? e.shiftKey : ((kc == 16) ? true : false);
    if (((kc >= 65 && kc <= 90) && !sk) || ((kc >= 97 && kc <= 122) && sk)) jQuery('#block-mayus').slideDown(300); else jQuery('#block-mayus').slideUp(300);;
}
jQuery('<input>').keypress(function(e) { 
    var s = String.fromCharCode( e.which );
    if ( s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey ) {
        jQuery('#block-mayus').text('Bloq Mayus está activado.');
        //alert('Bloq Mayus está activado.');
    }
});

//Pregunta 1
jQuery("#dia-1-pregunta-1-btn").click(function () {
    var resp = $("#dia-1-pregunta-1-inp").val();
    $.getJSON("../../json/t.json", function (data) {
        var respuesta = data[1].respuesta;
        if (respuesta.localeCompare(resp) == 0) {
            console.log("respuesta correcta");
            $(location).attr('href', '../../r/brzqtelz56y');
        } else {
            jQuery('#user-help').text('Clave incorrecta');
        }
    });
});
//Pregunta 2
jQuery("#dia-1-pregunta-2-btn").click(function () {
    var resp = $("#dia-1-pregunta-2-inp").val();
    $.getJSON("../../json/t.json", function (data) {
        var respuesta = data[2].respuesta;
        if (respuesta.localeCompare(resp) == 0) {
            console.log("respuesta correcta");
            $(location).attr('href', '../../r/cdakhfddijy');
        } else {
            jQuery('#user-help').text('Clave incorrecta');
        }
    });
});
//Pregunta 3
jQuery("#dia-1-pregunta-3-btn").click(function () {
    $(location).attr('href', '../../r/dpthq5cl3z');
});
//Pregunta 4
jQuery("#dia-1-pregunta-4-btn").click(function () {
    var resp = $("#dia-1-pregunta-4-inp").val();
    $.getJSON("../../json/t.json", function (data) {
        var respuesta = data[4].respuesta;
        if (respuesta.localeCompare(resp) == 0) {
            console.log("respuesta correcta");
            $(location).attr('href', '../../r/eyghz8lp0u');
        } else {
            jQuery('#user-help').text('Clave incorrecta');
        }
    });
});
//Pregunta 5

jQuery("#dia-1-pregunta-5-btn").click(function () {
    $(location).attr('href', '../../r/fpfj2e8t20e');
});