class Paciente {
    constructor(nombre, edad, enfermedad, tratamiento){
        this.validarNombre(nombre);
        this.edad = edad;
        this.enf = enfermedad;
        this.trat = tratamiento;
    }
    historia(){
        console.log("Paciente: " + this.nombre + " de " + this.edad + " años de edad. Padece de " + this.enf + ". Tratamiento: " + this.trat)
    }
    historia2(){
        alert("Paciente: " + this.nombre + " de " + this.edad + " años de edad. Padece de " + this.enf + ". Tratamiento: " + this.trat)
    }

    validarNombre(nombre){
        if (nombre.length >2){
            this.nombre= nombre.toUpperCase();
        } else if ((nombre.length =="") || (nombre.length <=2)) {
            alert("Ingrese el nombre correctamente");
            this.nombre="error";
            } 
        }
    }



const paciente1 = new Paciente (prompt("Ingrese nombre de paciente 1 (se verá por consola)") , 52, "bloqueo arterial", "intervención percutánea.");
const paciente2 = new Paciente (prompt("Ingrese nombre de paciente 2") , 38, "Diabetes tipo 1", "dieta, ejercicio y 1 dosis diaria de insulina.");

paciente1.historia();
paciente2.historia2();
