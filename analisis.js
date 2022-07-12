//Helpers
function esPar(numero){
    return (numero%2===0);
}

function calcularPromedio(lista){

    const sumaLista=lista.reduce(
      function (valorAcumulado = 0,nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    
    );
    const promedioLista=sumaLista/(lista.length);
    return promedioLista;
    }

function calcularMediana(lista){
    const mitad=parseInt(lista.length/2);

    if (esPar(lista.length)){
        const personitaMItad1=lista[mitad-1];
        const personitaMItad2=lista[mitad];
        const mediana=calcularPromedio([personitaMItad1,personitaMItad2]);
        return mediana;

    } else {
        const personitaMitad=lista[mitad];
        return personitaMitad
    }
}


function onClickButtonAnexarAsociado(){
    const inputName=document.getElementById("inputName");
    const name=inputName.value;
    const inputAhorro=document.getElementById("inputAhorro");
    const ahorro=inputAhorro.value;
    const inputPrestamo=document.getElementById("inputPrestamo");
    const prestamo=inputPrestamo.value;

    datos_asociados.push({
        name:name,
        ahorro:parseInt(ahorro),
        prestamo:parseInt(prestamo),
    });
    alert("Asociado agregado")
}
   
function onClickButtonPromedioAhorros(){
    const personalAhorros=datos_asociados.map(
        function (persona){
            return persona.ahorro;
        }
    );

    const promedio=calcularPromedio(personalAhorros);
    const resultA=document.getElementById("resultA");
    resultA.innerText="El promedio de ahorros es de: $"+promedio;
};
function onClickButtonPromedioPrestamos(){
    const personalPrestamos=datos_asociados.map(
        function (persona){
            return persona.prestamo;
        }
    ); 
    const promedio=calcularPromedio(personalPrestamos);
    const resultP=document.getElementById("resultP");
    resultP.innerText="El promedio de prestamos es de: $"+promedio;
};
function onClickButtonListadoAsociados(){
    const listadoAsociados=datos_asociados.map(
        function (persona){
            return persona.name;
        }
    )
    const resultAsociados=document.getElementById("resultAsociados");
    resultAsociados.innerText=listadoAsociados;
}
function onClickButtonSaldoPorPersona(){
    const inputNombre=document.getElementById("inputNombre");
    const nombre=inputNombre.value;
    datos_asociados.forEach(element => {
        if(element.name===nombre){
            const saldo=element.ahorro-element.prestamo;
            const resultSaldo=document.getElementById("resultSaldo");
            resultSaldo.innerText=saldo;
        }
    });
}
function onClickButtonRangoAhorros(){
    let minAhorro=200000;
    let maxAhorro=0;
    datos_asociados.forEach(element => {
        if (element.ahorro<minAhorro){
            minAhorro=element.ahorro;
        };
        if (element.ahorro>maxAhorro){
            maxAhorro=element.ahorro;
        };
                
    });
    const Rango=maxAhorro-minAhorro;
    const resultRangoAhorros=document.getElementById("resultRangoAhorros");
    resultRangoAhorros.innerText=Rango;

}
function onClickButtonRangoPrestamos(){
    let minPrestamo=200000;
    let maxPrestamo=0;
    datos_asociados.forEach(element => {
        if (element.prestamo<minPrestamo){
            minPrestamo=element.prestamo;
        };
        if (element.prestamo>maxPrestamo){
            maxPrestamo=element.prestamo;
        };
                
    });
    const Rango=maxPrestamo-minPrestamo;
    const resultRangoPrestamos=document.getElementById("resultRangoPrestamos");
    resultRangoPrestamos.innerText=Rango;

}
function onClickButtonVarianzaAhorros(){
    const personalAhorros=datos_asociados.map(
        function (persona){
            return persona.ahorro;
        }
    );

    const promedio=calcularPromedio(personalAhorros);
    let suma=0;
    for (i=0;i<personalAhorros.length;i++){
        let diferencia=(personalAhorros[i]-promedio)**2;
        suma=suma+diferencia;
    };
    varianza=suma/personalAhorros.length;
    const resultVarianzaAhorros=document.getElementById("resultVarianzaAhorros");
    resultVarianzaAhorros.innerText=varianza;
};
function onClickButtonDesviacionAhorros(){
    const personalAhorros=datos_asociados.map(
        function (persona){
            return persona.ahorro;
        }
    );

    const promedio=calcularPromedio(personalAhorros);
    let suma=0;
    for (i=0;i<personalAhorros.length;i++){
        let diferencia=(personalAhorros[i]-promedio)**2;
        suma=suma+diferencia;
    };
    varianza=suma/personalAhorros.length;
    desviacion=Math.sqrt(varianza);
    desviacion=desviacion.toFixed(1);
    const resultDesviacionAhorros=document.getElementById("resultDesviacionAhorros");
    resultDesviacionAhorros.innerText=desviacion;
}