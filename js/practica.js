var DNI = prompt("Ingrese el DNI del paciente (ingresar 37969867 para que funcione)")
const personas = [{dni: 37969867, nombre: "Gonzalo", apellido: "Martínez"},
                {dni: 33004200, nombre: "Daniela", apellido: "Martínez"}]

const buscarPersona = personas.find(x => x.dni == DNI);
alert("Paciente: " + buscarPersona.nombre + " " + buscarPersona.apellido +" " + "DNI: " + buscarPersona.dni)


