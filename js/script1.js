
//Flujo de datos 

//1-Mostrar productos -> 
//2-cantidad de productos -> 
//3-calculo de precios -> 
//4-control de stock ->
//5-Si hay stock muestra el precio->
//6-mensajes post servicio.



//Uso de funcion Constructora de objetos-------------

function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock
}

let productoA = new Producto("1- Whey protein truemade 1kg", 200, 10);
let productoB = new Producto("2- Creatina micronizada ENA 300gr", 100, 10);    //--->Objetos construidos
let productoC = new Producto("3- Ultra mass ENA 1500gr", 50, 10);
let productoD = new Producto("4- Preentreno C4 300gr", 70, 0);

//USO DE ARRAYS + METODOS--------------

let productos = [productoA, productoB, productoC, productoD]    // ---> Lista de objetos (Array)

let listaProductosConStock = productos.filter((parametro) => parametro.stock > 0)  // Array solo tendra productos  c/stock, gracias a metodo .filter()

let listaProductos = listaProductosConStock.map((parametro) => parametro.nombre)// Array tendra propiedad .nombre de "listaProductos" x el metodo .map()

//-------------------------------------

let precioTotal = 0 //-> Asigno la variable afuera del ciclo para poder utilizarla dentro de el y para poder almacenar valores dentro de ella y citarla fuera del ciclo.

//USO DE FUNCION-----------------------

function calculoPrecio(cantidad, precio) { // Decalracion de funcion con parametros
    precioTotal += (cantidad * precio) // El "+=" sirve para sumarle un nuevo valor al valor actual de la variable y se va sobre escribiendo
}

//-------------------------------------

let opcion = prompt("Bienvenido a Like Nutrition.cba\nENTER para acceder a Suplementos \nESC para finalizar compra")


while (opcion != "ESC") {
    //1-Mostrar productos
    opcion = prompt("Agregar al carrito: \n" + listaProductos.join("\n") + "\n-ESC para avanzar")  //Uso del metodo .join()

    //2-Cantidad de productos
    if ((opcion == "Whey protein truemade 1kg") || (opcion == "1")) {
        let cantidadProductoA = prompt("Ingrese cantidad de: " + productoA.nombre + " que desea comprar")
        //3-Calculo de precios
        //4-control de stock 
        if (cantidadProductoA <= productoA.stock) {
            precioTotal = precioTotal + (cantidadProductoA * productoA.precio) //-> Sumo el nuevo precio total al viejo precio total para que los valores se vayan sumando 
        }
        else {
            alert("Actualmente tenemos: " + productoA.stock + " unidades disponibles")
        }
    }

    //2-Cantidad de productos
    else if ((opcion == "Creatina micronizada ENA 300gr") || (opcion == "2")) {
        let cantidadProductoB = prompt("Ingrese cantidad de: " + productoB.nombre + " que desea comprar")
        //3-Calculo de precios
        //4-control de stock 
        if (cantidadProductoB <= productoB.stock) {
            precioTotal = precioTotal + (cantidadProductoB * productoB.precio)
        }
        else {
            alert("Actualmente tenemos: " + productoB.stock + " unidades disponibles")
        }
    }

    //2-Cantidad de productos
    else if ((opcion == "Ultra mass ENA 1500g") || (opcion == "3")) {
        let cantidadProductoC = prompt("Ingrese cantidad de: " + productoC.nombre + " que desea comprar")
        //3-Calculo de precios
        //4-control de stock 
        if (cantidadProductoC <= productoC.stock) {
            precioTotal = precioTotal + (cantidadProductoC * productoC.precio)
        }
        else {
            alert("Actualmente tenemos: " + productoC.stock + " unidades disponibles")
        }
    }
}

//5- Si hay stock se va a mostrar el precio
if (precioTotal != 0) {
    alert("El precio total es de: " + precioTotal)//-> Uso de la variable glogal que declare al principo y adquirio valores en el bucle 

    //6-mensajes post servicio
    alert("¡Gracias por su compra!")
}
else {
    alert("¡Vuelva Pronto!")
}


