document.addEventListener("DOMContentLoaded",() => {

    const saldoInicial = 1000;

    let saldoActual = saldoInicial;

    const mensajeElemento = document.getElementById("mensaje");

    const saldoElemento = document.getElementById("saldoActualizado");

    const importe = document.getElementById("importe");

    const agregar = document.getElementById("add");

    const retirar = document.getElementById("rest");

    agregar.addEventListener("click",addMoney);

    retirar.addEventListener("click",restMoney);

    function addMoney(){
        const cantidad = parseFloat(importe.value);

        if(isNaN(cantidad) || cantidad <= 0){
            mensajeElemento.textContent = "El importe no es valido"
        }else{
            saldoActual += cantidad;

            saldoElemento.textContent = `Saldo: ${saldoActual} €`;
            mensajeElemento.textContent = `Depositado: ${cantidad} €`;
        }
        

    }
    function restMoney(){

        const cantidad = parseFloat(importe.value);

        if(isNaN(cantidad) || cantidad <= 0 || cantidad > saldoActual){
            mensajeElemento.textContent = "El importe no es valido"
        }else{
            saldoActual -= cantidad;

            saldoElemento.textContent = `Saldo: ${saldoActual} €`;
            mensajeElemento.textContent = `Retirado: ${cantidad} €`;
        }

    }



})