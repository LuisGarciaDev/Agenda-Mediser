const modalPaciente = new bootstrap.Modal(document.getElementById('modalPaciente'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    apellido_editar.value = fila.children[2].innerHTML
    edad_editar.value = fila.children[3].innerHTML
    email_editar.value = fila.children[4].innerHTML
    direccion_editar.value = fila.children[5].innerHTML
    telefono_editar.value = fila.children[6].innerHTML
    date_editar.value = fila.children[7].innerHTML
    modalPaciente.show()
})  