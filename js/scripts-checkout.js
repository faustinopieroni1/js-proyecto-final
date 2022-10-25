//USO DE DOM PARA DEFINIR EVENTOS

let formularioCheckout = document.getElementById("formularioCheckout")

formularioCheckout.addEventListener("submit", valoresFormulario)

function valoresFormulario(evento) {
    evento.preventDefault()

    /* console.log(evento) */
    console.log(evento.target.children[0].value)
    console.log(evento.target.children[1].value)
    console.log(evento.target.children[2].value)
    console.log(evento.target.children[3].value)
    /* console.log(evento.target.children[4].value)
    console.log(evento.target.children[5].value)
    console.log(evento.target.children[6].value)
    console.log(evento.target.children[7].value)
    console.log(evento.target.children[8].value)
    console.log(evento.target.children[9].value)
    console.log(evento.target.children[10].value)
    console.log(evento.target.children[11].value)
    console.log(evento.target.children[12].value)
    console.log(evento.target.children[13].value)
    console.log(evento.target.children[14].value)
    console.log(evento.target.children[15].value)
    console.log(evento.target.children[16].value) */
}