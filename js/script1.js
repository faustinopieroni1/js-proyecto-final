//Login
// Nombre: usuario
// Contraseña: usuario

alert("Bienvenido, a continuacion ingrese su usuario")

let nombre = prompt("Ingrese su nombre de usuario")
let contraseña = prompt("Ingrese su contraseña")


if ((nombre == "usuario") && (contraseña == "usuario")) {



    //Flujo de datos 

    //1-Mostrar productos -> 
    //2-cantidad de productos -> 
    //3-calculo de precios -> 
    //4-control de stock ->
    //5-Si hay stock muestra el precio->
    //6-mensajes post servicio.


    let productoA = "Whey protein truemade 1kg"
    let precioProductoA = 200
    let stockProductoA = 10

    let productoB = "Creatina micronizada ENA 300gr"
    let precioProductoB = 100
    let stockProductoB = 10

    let productoC = "Ultra mass ENA 1500gr"
    let precioProductoC = 50
    let stockProductoC = 10

    let precioTotal = 0 //-> Asigno la variable afuera del ciclo para poder utilizarla dentro de el y para poder almacenar valores dentro de ella y citarla fuera del ciclo.

    let opcion = prompt("Bienvenido a Like Nutrition.cba\nENTER para acceder a Suplementos \nESC para finalizar compra")

    if (opcion == "1") {
        while (opcion != "ESC") {
            //1-Mostrar productos
            opcion = prompt("Agregar al carrito: \n1- Whey protein truemade 1kg\n2- Creatina micronizada ENA 300gr\n3- Ultra mass ENA 1500gr\nESC- Para salir")

            //2-Cantidad de productos
            if ((opcion == "Whey protein truemade 1kg") || (opcion == "1")) {
                let cantidadProductoA = prompt("Ingrese cantidad de: " + productoA + " que desea comprar")
                //3-Calculo de precios
                //4-control de stock 
                if (cantidadProductoA <= stockProductoA) {
                    precioTotal = precioTotal + (cantidadProductoA * precioProductoA) //-> Sumo el nuevo precio total al viejo precio total para que los valores se vayan sumando 
                }
                else {
                    alert("Actualmente tenemos: " + stockProductoA + " unidades disponibles")
                }
            }

            //2-Cantidad de productos
            else if ((opcion == "Creatina micronizada ENA 300gr") || (opcion == "2")) {
                let cantidadProductoB = prompt("Ingrese cantidad de: " + productoB + " que desea comprar")
                //3-Calculo de precios
                //4-control de stock 
                if (cantidadProductoB <= stockProductoB) {
                    precioTotal = precioTotal + (cantidadProductoB * precioProductoB)
                }
                else {
                    alert("Actualmente tenemos: " + stockProductoB + " unidades disponibles")
                }
            }

            //2-Cantidad de productos
            else if ((opcion == "Ultra mass ENA 1500g") || (opcion == "3")) {
                let cantidadProductoC = prompt("Ingrese cantidad de: " + productoC + " que desea comprar")
                //3-Calculo de precios
                //4-control de stock 
                if (cantidadProductoC <= stockProductoC) {
                    precioTotal = precioTotal + (cantidadProductoC * precioProductoC)
                }
                else {
                    alert("Actualmente tenemos: " + stockProductoC + " unidades disponibles")
                }
            }
        }

        //5- Si hay stock se va a mostrar el precio
        if (precioTotal != 0) {
            alert("El precio total es de: " + precioTotal)//-> Uso de la variable glogal que declare al principo y adquirio valores en el bucle 
        }

        //6-mensajes post servicio
        if (precioTotal != 0) {
            alert("¡Gracias por su compra!")
        }
        if (precioTotal == 0) {
            alert("¡Vuelva Pronto!")
        }
    }

    
}

else {
    alert("Error, intente nuevamente")
}