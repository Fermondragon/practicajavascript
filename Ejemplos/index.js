//Venta de muebles
let mesa1 = 15000
let mesa2= 18500
let mesa3 = 19000
let mesa4 = 16500
let mesa5 = 20000

let silla1 = 3500
let silla2 = 4000
let silla3 = 5000
let silla4= 6000
let silla5 = 6550


/*let cabecera1 = 8000
let cabecera2 = 8500
let cabecera3 = 9000
let cabecera4 = 10250
let cabecera5 = 8500

let buro1= 1500
let buro2 = 2000
let buro3 = 3500
let buro4 = 4000
let buro5= 3250

let tocador1 = 3500
let tocador2 = 4500
let tocador3 = 5000
let tocador4 = 6750
let tocador5 = 7500*/

let contador = 0 
let total =0
let costo = 0
let operacion

let continuar = prompt("Desea hacer una compra ?    Escriba   si   o   no" ).toLowerCase()

if (contador === 0){
    if (continuar =="si"){
        proceso();
    } else {
        alert("Gracias por visitar nuestra pagina.  Vuelva pronto")
    }

}

function proceso() {
    while (continuar==="si"){
        let opcmueb = prompt ("Seleccione una opcion de mueble:   Tecle solo la inicial que aparece en parentesis     (M)Mesa  (S)Silla  ").toUpperCase()
    
        costo = mueble (opcmueb)

        if (contador !=0){
            operacion = prompt ("Si desea agregar el producto tecle (+)  Si desea quitar el producto tecle (-)")
            compra(operacion,costo)

        } else {
            operacion = "+"
            compra(operacion,costo)
        }

    
        continuar = prompt("Desea continuar comprando ?    Escriba   si   o   no" ).toLowerCase()
    
    }
    operacion = "="
    compra(operacion,costo)

}


function mueble (opcmueb){
    switch (opcmueb){
        case "M":{
            let om = parseInt ( prompt ("Estas son las mesas que ofrecemos:   Tecle el numero dentro del parentesis    (1)"+mesa1+"  (2)"+mesa2+"(3)"+mesa3+"  (4)"+mesa4+"  (5)"+mesa5 ))
            costo = omesas(om)
            return costo
        }
        case "S":{
            let os = parseInt ( prompt ("Estas son las sillas que ofrecemos:   Tecle el numero dentro del parentesis    (1)"+silla1+"  (2)"+silla2+"(3)"+silla3+"  (4)"+silla4+"  (5)"+silla5 ))
            costo = osillas(os)
            return costo
        }
    }
}

function omesas (om){

    console.log ("Este es el mueble que usted eligio mesa "+om)

    switch(om){
        case 1:{
             return mesa1
        }
        case 2:{
            return mesa2
        }
        case 3:{
            return mesa3
        }
        case 4:{
            return mesa4
        }
        case 5:{
            return mesa5
        }
    }
}

function osillas (os){
    console.log("Este es el mueble que usted eligio silla "+os)
    switch(os){
        case 1:{
            return silla1
        }
        case 2:{
            return silla2
        }
        case 3:{
            return silla3
        }
        case 4:{
            return silla4
        }
        case 5:{
            return silla5
        }
    }
}


function compra(operacion,costo) {
    switch (operacion){
        case '+' : {
            contador = contador + 1 
            total = total + costo
        }
        case '-' :{
            if (total >= costo){
                contador = contador - 1
                total = total - costo
            } else {
                alert ("ERROR Este producto no se puede quitar")
            }
        }
        case '=' :{
            alert ("La cantidad de productos que llevas es "+contador+"     El total a pagar es de: "+total)
        }

    }
}