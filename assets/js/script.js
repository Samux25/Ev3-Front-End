function calcularCalorías(evento) {
    evento.preventDefault()
    const Caminar = 3.5
    const Correr = 8.0
    const Nombre = document.getElementById('Nombre').value
    const Peso = document.getElementById('Peso').value
    const Tiempo = document.getElementById('Tiempo').value
    let opcion = null
    let opciones = document.getElementsByName('opcion')
    let Calorías

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            opcion = opciones[i].value;
            break;
        }
    }

    if (Nombre.trim() === '') {
        alertaNombre.classList.remove('d-none')
        alertaNombre.innerText = 'Se debe de ingresar el nombre.'
        return
    } else {
        alertaNombre.classList.add('d-none')
    }

    if (Peso < 1 || Peso > 120) {
        alertaPeso.classList.remove('d-none')
        alertaPeso.innerText = 'El peso debe estar entre 1 y 120 kg.'
        return
    } else {
        alertaPeso.classList.add('d-none')
    }

    if (Tiempo <5 || Tiempo > 150){
        alertaMinutos.classList.remove('d-none')
        alerta.Tiempo.innerText = 'El Tiempo debe estar entre 5 a 150 minutos.'
        return
    } else {
        alertaMinutos.classList.add('d-none')
    }

        if (opcion === 'Caminar') {
            Calorías = Caminar * 3.5 * Peso * (Tiempo / 200)

        } else if (opcion === 'Correr') {
            Calorías = Correr * 3.5 * Peso * (Tiempo / 200)

        }

    const resultado = document.getElementById('result');
    resultado.innerText = Nombre + ' las calorías quemadas son aproximadamente ' + Calorías
    }


