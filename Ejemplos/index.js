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


if (contador === 0){
    let continuar = prompt("Desea hacer una compra ?    Escriba   si   o   no" )
    continuar.toLowerCase()

    if (continuar ==="si"){
        proceso ()
    } else {
        alert("Gracias por visitar nuestra pagina.  Vuelva pronto")
    }

}

function proceso (){
    while (continuar=='si'){
        let opcmueb = prompt ("Seleccione una opcion de mueble:   Tecle solo la inicial que aparece en parentesis     (M)Mesa  (S)Silla  ")//(C)Cabecera  (B)Buro  (T)Tocador")
        opcmueb.toUpperCase()
    
        costo = mueble (opcmueb)

        if (contador !=0){
            operacion=prompt ("Si desea agregar el producto tecle (+)  Si desea quitar el producto tecle (-)")
            compra(operacion)

        } else {
            operacion = "+"
            compra(operacion)
        }

    
        let continuar = prompt("Desea continuar comprando ?    Escriba   si   o   no" )
        continuar.toLowerCase()
    
    }
    operacion = "="
    compra(operacion)

}



function mueble (opcmueb){
    switch (mueble){
        case "M":{
            let opcmesa = prompt ("Estas son las mesas que ofrecemos:   Tecle el numero dentro del parentesis    (1)"+mesa1+"  (2)"+mesa2+"(3)"+mesa3+"  (4)"+mesa4+"  (5)"+mesa5 )
            parseInt(opcmesa)
             costo = omesas(om)
             return costo
        }
        case "S":{
            let opcsilla = prompt ("Estas son las sillas que ofrecemos:   Tecle el numero dentro del parentesis    (1)"+silla1+"  (2)"+silla2+"(3)"+silla3+"  (4)"+silla4+"  (5)"+silla5 )
            parseInt(opcsilla)
            costo = osillas(os)
            return costo
        }
       
    }
}

function omesas (om){

    alert ("Este es el mueble que usted eligio mesa "+om)

    switch(om){
        case 1:{
             return mesa1
             break
        }
        case 2:{
            return mesa2
            break
        }
        case 3:{
            return mesa3
            break
        }
        case 4:{
            return mesa4
            break
        }
        case 5:{
            return mesa5
            break
        }
    }
}

function osillas (os){
    alert ("Este es el mueble que usted eligio silla "+os)
    switch(os){
        case 1:{
            return silla1
            break
        }
        case 2:{
            return silla2
            break
        }
        case 3:{
            return silla3
            break
        }
        case 4:{
            return silla4
            break
        }
        case 5:{
            return silla5
            break
        }
    }
}


function compra(operacion) {
    switch (operacion){
        case "+" : {
            return total = total + costo
            contador = contador + 1 
            break
        }
        case "-" :{
            if (total >= costo){
                return total = total - costo
                contador = contador - 1
                break
            } else {
                alert ("ERROR Este producto no se puede quitar")
            }
        }
        case "=" :{
            alert ("La cantidad de productos que llevas es"+contador+"     El total a pagar es de:"+total)
        }

    }
}