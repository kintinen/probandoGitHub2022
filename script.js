

var valoTicket = 200
var cantidad = 0
var categoriaDescuento = 0

function hacerClick() {

    console.log(document.getElementById("cantidadEntradas").value)
    console.log(document.getElementById("categorias").value)

}
function validar() {

    var cantidad = document.getElementById("cantidadEntradas").value
    var categoriaDescuento = document.getElementById("categorias").value


    if (categoriaDescuento == 1) {

        totalPagar = (valoTicket * cantidad) - (cantidad * valoTicket * 0.8)

    } else if (categoriaDescuento == 2) {

        totalPagar = (valoTicket * cantidad) - (cantidad * valoTicket * 0.5)

    } else if (categoriaDescuento == 3) {

        totalPagar = (valoTicket * cantidad) - (cantidad * valoTicket * 0.15)
    }
    //  switch (categoriaDescuento) {

    //    case (categoriaDescuento == 1):
    //         var totalPagar = (valoTicket * cantidad) - (cantidad * valoTicket * 0.8)
    //          break

    //      case (categoriaDescuento == 2):

    //         var totalPagar = (valoTicket * cantidad) - (cantidad * valoTicket * 0.5)

    //         break

    //     case (categoriaDescuento == 3):

    //         var  totalPagar = (valoTicket * cantidad) - (cantidad * valoTicket * 0.15)

    //          break

    //      default:

    //          break
    //  }

    document.getElementById("totalaPagar").textContent = "Total a Pagar: $  " + totalPagar
}

var botonCalcular = document.getElementById("calcularValor")
botonCalcular.addEventListener("click", hacerClick)
botonCalcular.addEventListener("click", validar)
//document.getElementById("calcularValor").addEventListener("click", hacerClick)


switch (categoriaDescuento) {




    // estoy agregando texto
}
