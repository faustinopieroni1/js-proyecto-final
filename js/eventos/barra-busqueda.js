//BARRA BUSQUEDA

let barraBusqueda = document.getElementById("barraBusqueda")

barraBusqueda.addEventListener("input", busquedaProductos)

function busquedaProductos(){
    console.log(barraBusqueda.value)
}