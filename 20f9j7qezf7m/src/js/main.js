jQuery(document).ready(function () {
    console.log(Math.random().toString(36).substring(2, 15));
});
//Función para Bloq May
function capLock(e) {
    kc = e.keyCode ? e.keyCode : e.which; sk = e.shiftKey ? e.shiftKey : ((kc == 16) ? true : false);
    if (((kc >= 65 && kc <= 90) && !sk) || ((kc >= 97 && kc <= 122) && sk)) jQuery('#block-mayus').slideDown(300); else jQuery('#block-mayus').slideUp(300);;
}
//Pregunta 1
jQuery("#dia-2-pregunta-1-btn").click(function () {
    var resp = $("#dia-2-pregunta-1-inp").val();
    $.getJSON("../../json/t.json", function (data) {
        var respuesta = data[1].respuesta;
        if (respuesta.localeCompare(resp) == 0) {
            console.log("respuesta correcta");
            $(location).attr('href', '../../r/bfhhhu0j5o');
        } else {
            jQuery('#user-help').text('Clave incorrecta');
        }
    });
});
//Pregunta 2
/*jQuery("#dia-1-pregunta-2-btn").click(function () {
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
});*/
//Pregunta 3
jQuery("#dia-2-pregunta-3-btn").click(function () {
    var resp = $("#dia-2-pregunta-3-inp").val();
    $.getJSON("../../json/t.json", function (data) {
        var respuesta = data[3].respuesta;
        if (respuesta.localeCompare(resp) == 0) {
            console.log("respuesta correcta");
            $(location).attr('href', '../../r/dhur1b65el');
        } else {
            jQuery('#user-help').text('Clave incorrecta');
        }
    });
});
//Pregunta 4
jQuery("#dia-2-pregunta-4-btn").click(function () {
    $(location).attr('href', '../../r/e9gi9tr0tj3');
});
//Pregunta 5
jQuery("#dia-2-pregunta-5-btn").click(function () {
    var resp = $("#dia-2-pregunta-5-inp").val();
    $.getJSON("../../json/t.json", function (data) {
        var respuesta = data[5].respuesta;
        if (respuesta.localeCompare(resp) == 0) {
            console.log("respuesta correcta");
            $(location).attr('href', '../../r/fitpvj54pg');
        } else {
            jQuery('#user-help').text('Clave incorrecta');
        }
    });
});

//Pregunta 6
jQuery("#dia-2-pregunta-6-btn").click(function () {
    $(location).attr('href', '../../r/g8c46irc8e');
});

//Pregunta 7
jQuery("#dia-2-pregunta-7-btn").click(function () {
    var resp = $("#dia-2-pregunta-7-inp").val();
    $.getJSON("../../json/t.json", function (data) {
        var respuesta = data[7].respuesta;
        if (respuesta.localeCompare(resp) == 0) {
            console.log("respuesta correcta");
            $(location).attr('href', '../../r/hsd1662dw');
        } else {
            jQuery('#user-help').text('Clave incorrecta');
        }
    });
});