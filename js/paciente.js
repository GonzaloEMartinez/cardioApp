$("#nocturno").on("click", ()=>{
    $("body").addClass("nocturno")
})

$("#sol").on("click", ()=>{
    $("body").removeClass("nocturno")
})


class Paciente {
    constructor(nombre, edad, dni){
        this.validarNombre(nombre);
        this.edad = edad;
        this.dni = dni;
    }

    validarNombre(nombre){
        if (nombre.length > 2){
            this.nombre = nombre.toLowerCase()
        } else if ((nombre.length =="") || (nombre.length <=2)){
            alert("Ingrese el nombre correctamente");
            this.nombre = "Error"
        }
    }
}


$("#botonPrincipal").on("click", function(){
    function Persona (nombre,edad){
        this.nombrePersona=nombre
        this.edadPersona=edad
    }
    var nombrePersona = document.getElementById("nombre").value
    var edadPersona = document.getElementById ("edad").value
    var dniPersona = document.getElementById("dni").value
    paciente = new Paciente ((nombrePersona), (edadPersona), (dniPersona));
    //agregar()
    $("body").append(   `<ul id="listaPacientes">
                            <li id="nombreLi">Nombre del paciente:${paciente.nombre}
                            <li>Edad:${paciente.edad}</li>
                            <li>DNI:${paciente.dni}</li>
                            <button class="borrar">Borrar</button>
                            </li>   
                        </ul>`)
                        $(".borrar").on("click", function(){
                        $(this).parent().remove();
                        
                        })
    localStorage.setItem("Paciente" , nombre)
    })
    
    
    
    /*
    var baseDatos=[] 
    function agregar(){
        baseDatos.push(paciente)
        console.log(baseDatos)
    }
   
var buscar = document.querySelector("#buscar-paciente")
const resultado = document.querySelector("#resultado")
const filtrar = ()=>{
    resultado.innerHTML = ``;
    console.log(buscar.value)
    texto = buscar.value.toLowerCase();
    for(let dato of baseDatos){
        let nombreDato = dato.nombre.toLowerCase();
        
    if(nombreDato.indexOf(texto) !== -1){
       resultado.innerHTML = `<li>${dato.nombre}</li>
                            <li>${dato.edad}</li>
                            <li>${dato.dni}</li>`
    }
    }
    if (texto = ""){
        resultado.innerHTML =  `<li>Paciente no encontrado...</li>`
    } 
}

$("#button-find").on("click", filtrar)*/
