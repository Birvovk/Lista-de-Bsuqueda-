

var pacientes=document.querySelectorAll(".paciente")


for(var i = 0;i<pacientes.length;i++){
    
    var paciente = pacientes [i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso=tdPeso.textContent;
    
    var tdAltura=paciente.querySelector(".info-altura")
    var altura=tdAltura.textContent;
    
    var tdIMC=paciente.querySelector(".info-imc");
 

    persoEsValido = validarPeso(peso)
    alturaEsValido = validarAltura (altura)
    
        if(!persoEsValido){
            console.log("peso incorrecto");
            tdIMC.textContent = "Peso Incorrecto";
            persoEsValido = false
            paciente.classList.add("paciente-incorrecto")
        
        }
        
        if(!alturaEsValido){
            console.log("altura incorrecto");
            tdIMC.textContent = "Altura Incorrecto";
            alturaEsValido = false;
            paciente.classList.add("paciente-incorrecto")
        }
        
        if (persoEsValido && alturaEsValido){
            
            tdIMC.textContent = calcularIMC (peso,altura);
        }

}

function calcularIMC(peso,altura){
    var imc=peso/(altura*altura);
    return imc.toFixed(2);

}

function validarPeso (peso){
    if (peso >= 0 && peso < 500){
        return true;
    }else{
        return false;
    }
}


function validarAltura (altura){
    if (altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}



    
   

