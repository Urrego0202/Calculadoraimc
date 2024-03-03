function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);
  
    var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    var clasificacion;
    
    if (imc < 18.5) {
      clasificacion = 'estás bajo peso, debes ir al nutricionista.';
    } 

    else if (imc <=18.5 || imc <=24.9) {
      clasificacion = 'estás normal.';
    } 

    else if (imc <=25.0 || imc <=29.9) {
        clasificacion = 'estás en sobrepeso.';
    }

    else{
      clasificacion = 'tienes obesidad, debes ir al nutricionista.';
    }
   
    var respuesta = nombre +', tu Indice de Masa Corporal es ' + imc + ' y tu ' + clasificacion;
    alert(respuesta);
  }
  