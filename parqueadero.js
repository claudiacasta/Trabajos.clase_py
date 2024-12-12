function parqueadero() { /* Aqui se define una función llamada parqueadero */
    let carro = new Array(); /* Aqui se declara una variable llamada carro, que es un array vacio. este array es utilizado para almacenar las placas de los vehiculos que están actualmente en el parqueadero */
    for( ; ;) { /* Este es un bucle for con una condición vacia, lo que significa que es un bucle infinito */
        estado=parseInt(prompt("ingreso 1 salida 0")); /* (Linea 4 y 5) estado: se solicita al usuario que ingrese un valor para determinar si un vehiculo esta entrando o saliendo. si estado es igual a 1, el vehiculo ingresa; si es igual a 0, el vehiculo sale */
        placa=prompt("Ingrese el número de placa"); /* luego, se solicita al usuario ingresar el numero de la placa del vehiculo. este sera la clave que identifica al vehiculo y se usa para agregarlo o quitarlo del parqueadero */
        if(estado==1) { /* (linea 6 y 7)si el valor de estado es 1 (indicado que el vehiculo esta ingresando) la placa ingresada se añade al final del array carro utilizando el metodo .push() esto simula que el vehiculo ha sido estacionado en el parqueadero */
            carro.push(placa);
        } else { /* si el valor de estado es 0 (indicando que el vehiculo esta saliendo) enonces ejecuta un ciclo para eliminar el vehiculo con la placa correspondiente. */
            for(let i=0; i<=carro.length; i++) { /*aqui se establecde un bucle for que comienza en i=0 y se ejecuta mientras i sea menor o igual al tamaño del array carro (es decir carro.lenght) */
                temporal=carro.shift(); /* shift () es un metodo de los arrays que elimina el primer elemento del array y lo devuelve en este caso el primer vehiculo (la primera placa) de la lista carro se elimina y se asigna a la variable temporal */
                if(temporal!=placa){ /* se compara el valor de temporal (que es la placa del vehiculo que acaba de ser eliminado) con la placa que se pasa como parametro (placa) si la placa temporal no es igual a la placa que se buca (placa) el vehiculo (placa) no debe ser eliminado, por lo que se vuelve a agregar al final del array carro */
                    carro.push(temporal); /* si la placa actual no es la que se busca, el vehiculo (placa) se vuelve a agregar al final del array utilizando el metodo push() esto hace que el vehiculo "regrese" al parqueadero*/
                }
            }
         
        }
        console.log(carro); /*Al final de cada iteración, se imprime el estado actual del array carro, que contiene las placas de los vehículos que siguen en el parqueadero después de intentar eliminar el vehículo deseado. */
}
}