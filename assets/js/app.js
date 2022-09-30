$(document).ready(function(){
    
    $("a").click(function (){
        var gato = this.hash

        $("html, body").animate( 
            { 
                scrollTop: $(gato).offset().top -52
            },
            800
        )
    });
});

var mensajeenviado = $("#mensajeenviado");

    mensajeenviado.click(function (e){
        e.preventDefault();
            alert("El mensaje fue enviado correctamente");
    });

$(".fa-plane").click(function (){
    $(".parrafo").toggle();

});

$(".fa-mountain").click(function (){
    $(".parrafo2").toggle();

});

$(".fa-route").click(function (){
    $(".parrafo3").toggle();

});

var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})