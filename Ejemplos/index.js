/*let primVar = 5;
let segVar = 7;
let valor1;
let valor2;
const num1 = 1;
const num2 = 30;*/
/*const sal1 = "hola";
const sal2 = 'mau';
const sal3 = 'diaz';





let nombre1 = prompt('Ingresa tu nombre');
console.log(nombre1);*/
/*
for (let i=0; i<=10;i++){
    console.log('vuelta ' + i);
}
let nombre = prompt ('Ingresa un nombre')
nombre.toLowerCase()
while(nombre!='LUIS'){
    console.log('bienvenido ' )
    let nombre = prompt ('Ingresa un nombre')
}
alert('No eres bienvenido  ADIOS')*/

function NuevoUsuario(nombre, email, password){
    this.nombre = nombre ;
    this.email = email; 
    this.edad = edad;
    this.password = password;
    this.mayorEdad = function (){
        if (this.edad <= 18 ){
            return true;
        } else {
            return false ;
        }
    };
}

let usuario1 = new NuevoUsuario ()


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

let cabecera1 = 8000
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
let tocador5 = 7500





while (terminar=='no'){
    let opcmueb = prompt ("Seleccione una opcion de mueble:   Tecle solo la inicial que aparece en parentesis     (M)Mesa  (S)Silla  (C)Cabecera  (B)Buro  (T)Tocador")
    opcmueb.toUpperCase()
    mueble (opcmueb)




    let terminar = prompt("Desea terminar su pedido ?    Escriba   si   o   no" )
    terminar.toLowerCase()

    compra(operacion)
    




}

function mueble (opcmueb){
    switch (mueble){
        case "M":{
            let opcmesa = prompt ("Estas son las mesas que ofrecemos:   Tecle el numero dentro del parentesis    (1)"+mesa1+"  (2)"+mesa2+"(3)"+mesa3+"  (4)"+mesa4+"  (5)"+mesa5 )
            parseInt(opcmesa)
            
        }

    }
}


function compra(operacion) {
    switch (operacion){
        case "+" : {

        }
    }
}