/* 
const VALOR_BITCOIN_DOLAR = "39.685,40";
const ETHEREUM_CAMBIO_BITCOIN_UNO = "13,5400";

let bitcoinCambiar = prompt ("Ingrese la cantidad de bitcoin a cambiar");
let seleccionMoneda = confirm("¿aceptar para dolares o cancelar para ETH?");
//let seleccionMonedaDolar = confirm("¿Queres cambiar a dolares?");
//let seleccionMonedaEth = confirm ("¿Queres cambiar a ETHEREUM?");
/* if (seleccionMonedaDolar = confirm ("¿Queres cambiar a dolares?") || (seleccionMonedaEth = confirm ("¿Queres cambiar a ETHEREUM?"))) 
{
}
if (seleccionMoneda) {
    alert ()
    
} else {
    
} */

const VALOR_BTC_ETH = 13.5400;
const VALOR_BTC_USD = 39685.40;
const btcCambiar = document.querySelector("#cantBitcoinEth");
const btcCambiar2 = document.querySelector("#cantBitcoinUsd");
const resultadoCambio = document.querySelector("#resultado");

/* let btcIngresado= prompt ("Ingrese Bitcoins a Convertir")
let conversionRequerida = confirm ("aceptar para ETH y cancelar para USD"); */
let btcPorCambiar = "def valor";
let conversionRequerida ="opcion def";
function verificar() {
    conversionRequerida = 
    btcPorCambiar = btcCambiar.value;
    if (btcPorCambiar) {
        resultadoCambio.innerHTML = "Tu conversion es : " + (btcPorCambiar * VALOR_BTC_ETH) + " ETH";
    } else {
        resultadoCambio.innerHTML = "Tu conversion es : " + (btcPorCambiar * VALOR_BTC_USD) + " USD" ;
    }

}
