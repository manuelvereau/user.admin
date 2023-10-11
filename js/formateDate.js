function formatdate(fecha){
    // devolver una fecha en formato correcto
    const collator = new Intl.DateTimeFormat('es-AR',{day:'2-digit', month:'2-digit', year:'numeric'})

    const fechaformateada = collator.format(fecha)
    console.log(fechaformateada)
    return fechaformateada
}
