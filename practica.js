function Capturar(){
function Persona (nombre, edad){
    this.nombre=nombre
    this.edad=edad
}

var nombreIngresado = document.getElementById("nombre").value
var edadIngresado = document.getElementById("edad").value
nuevoSujeto = new Persona (nombreIngresado, edadIngresado)
console.log(nuevoSujeto)
agregar()
}
var baseDatos=[]
function agregar(){
    baseDatos.push(nuevoSujeto)
    console.log(baseDatos)
}

nombreIngresado.indexOF