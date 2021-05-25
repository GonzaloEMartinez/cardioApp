$(document).ready(function () {
    $("#popup").fadeIn(1000);
    $("header").css("opacity", "0.5")
    $("button").css("opacity", "0.5")
    $("main").css("opacity", "0.5")
});

$("#cerrar").on("click", function(){
    $("#popup").fadeOut(500)
    $("header").css("opacity", "1");
    $("button").css("opacity", "1")
    $("main").css("opacity", "1")
})

let calculo = document.getElementById("botonCalcular")
    calculo.addEventListener("click", calculoImc )
    function calculoImc(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = (peso) / (altura * altura)
    if(imc < 18.5){
        $("#resultado").html("Peso Inferior al Normal")
    } else if ((imc > 18.5) && (imc < 24.9)){
        $("#resultado").html("Peso Normal")
    } else if ((imc > 25) && (imc < 29.9)){
        $("#resultado").html("Peso Superior al Normal")
    } else if (imc > 30) {
        $("#resultado").html("Obesidad")
    }
    $("#resultado").css("background-color", "red");
    }

    $.getJSON("https://raw.githubusercontent.com/GonzaloEMartinez/testApi/main/data.json", function (data, estado) {
            ;
            for(let medicos of data){
                $("#plantilla").hide();
                $("#botonPlantilla").on("click", function(){$("#plantilla").toggle()})
                $("#plantilla").append(crearComponente(medicos))
            }
        }
    );
    
    function crearComponente(medicos){
        return `<div id=divPlantilla>
                <img id="imagen" src="${medicos.foto}">
                <p class="pPlantilla">${medicos.nombre}</p>
                <p class="pPlantilla">${medicos.especialidad}</p>
                </div>
                `;
      }
    
    $("#nocturno").on("click", ()=>{
        $("body").addClass("nocturno")
    })

    $("#sol").on("click", ()=>{
        $("body").removeClass("nocturno")
    })