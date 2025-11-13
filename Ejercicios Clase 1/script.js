//Objetivo: Los estudiantes crearán un archivo JavaScript básico que muestre mensajes en la consola y manipule variables y operadores.

console.log("hola mundo")

//1. Crear un archivo HTML básico y enlazar un archivo JavaScript llamado app.js    

//2. Dentro de app.js, declarar variables con let y const, y mostrar su valor en la consola.
    let nombre = "Diego "
    console.log(nombre)

    const edad = "31"
    console.log(edad)
//3. Realizar operaciones matemáticas utilizando los operadores aritméticos y mostrar los resultados.

    let sumaresultado = 5 + 10
    console.log(sumaresultado)



    let igual = 10 == 5 
    console.log(igual)

    let distinto = 6 != 5
    console.log(distinto)


    let esVerdadero =  true && false
    console.log(esVerdadero) //esta operacion es falsa

    let esVerdadero1 = true && true
    console.log(esVerdadero1) //esta operacion es verdadera

//4. Crear una condición que compare dos números y muestre en la consola si son iguales o uno es mayor que otro.
    
//ejemplo
    const edadmayor = 15;
    

     if (edadmayor >= 18) {
     console.log("eres mayor de edad");
     } 
     else {
        console.log("no eres mayor de edad");
       }

   

    const numero1 = 10
    const numero2 = 15



    if( numero1 < numero2){
        console.log("15 es mayor que 10")
    } else {
        console.log("15 no es mayor que 10")
    }


    const numero3 = 15
    const numero4 = 15

     if( numero1 == numero2){
        console.log("son differentes")
    } else {
        console.log("son iguales")
    }