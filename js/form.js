var botonAdicionar=document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form=document.querySelector("#from-adicionar");

    var paciente = capturarDatosPaciente(form);
    
    
    
    var errores = validarPaciente(paciente);
        
    
        if(errores.length > 0){
            exibirMensajesErrores(errores);
            return;
        }
        
    adicionarPacieneteEnLaTabla(paciente);
    form.reset();
    var mensajesErrores = document.querySelector("#mensaje-error");
    mensajesErrores.innerHTML = "";

});

    function adicionarPacieneteEnLaTabla(paciente){
        var pacienteTr=construirTr(paciente);
        var tabla=document.querySelector("#tabla-pacientes");
        tabla.appendChild(pacienteTr);

    }



function capturarDatosPaciente(form){
//captura los datos del formulario
    var paciente = {
        nombre:form.nombre.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }

    return paciente
}

function construirTr(paciente){

    var pacienteTr=document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    var nombreTd=construirTd(paciente.nombre, "info-nombre");
    var pesoTd=construirTd(paciente.peso, "info-peso");   
    var alturaTd=construirTd(paciente.altura, "info-altura");   
    var gorduraTd=construirTd(paciente.gordura, "info-gordura");   
    var imcTd=construirTd(paciente.imc, "info-imc");
    

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;


}

function construirTd (dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;


}


function validarPaciente(paciente){
    var errores = []

    if(paciente.nombre.length == 0){
        errores.push("EL nombre no puede estar vacio");
       
    }
 
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es Incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es Incorrecto");
    }
    return errores;
}

function exibirMensajesErrores(errores){
    var ul = document.querySelector("#mensaje-error");
    ul.innerHTML= "";

    errores.forEach(function(errores){
        var li = document.createElement("li");
        li.textContent = errores;
        ul.appendChild(li)
    });
}