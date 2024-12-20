/* En el juego del golf cada hoyo tiene un par que
 representa el número promedio de golpes que se 
 espera que haga un golfista para introducir la 
 pelota en el hoyo.

Hay un hombre diferente dependiendo de qué tan por
 encima o por debajo del par estén tus golpes.

Tu función tomará los argumentos par e impar.

Retorna la cadena correcta según esta tabla que 
muestra los golpes en orden de mayor a menor prioridad:

Golpes           Retornar
-------------------------
1               "Hole-in-one!"
<= par - 2      "Eagle"
par -1          "Birdie"
par             "par"
par + 1         "Bogey"
par + 2         "Double Bodey"
>= par + 3      "Go Home!"

par y golpes siempre serán numéricos y positivos.
*/

function puntajeDeGolf(par, golpes) {
    if (golpes == 1) {
        return "Hole-in-one!";
    } else if (golpes <= par - 2) {
        return "Eagle";
    } else if (golpes == par - 1) {
        return "Birdie";
    } else if (golpes == par) {
        return "Par";
    } else if (golpes == par + 1) {
        return "Bogey";
    } else if (golpes == par + 2) {
        return "Double Bogey";
    } else if (golpes >= par + 3) {
        return "Go Home!";
    }
}

//puntajeDeGolf(4, 1);
console.log(puntajeDeGolf(4, 1));
console.log(puntajeDeGolf(4, 2));
console.log(puntajeDeGolf(4, 3));
console.log(puntajeDeGolf(4, 4));
console.log(puntajeDeGolf(4, 5));
console.log(puntajeDeGolf(4, 6));
console.log(puntajeDeGolf(4, 7));

//Sentencias Swith
function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}
console.log(clasificarValor(1));
console.log(clasificarValor(2));
console.log(clasificarValor(3));
console.log(clasificarValor(4));
