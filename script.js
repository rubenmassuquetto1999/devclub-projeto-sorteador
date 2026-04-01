function sorteioNumero() {
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const resultadoContainer = document.querySelector('.resultado-container')

    if (max > min) {
        const resultado = Math.floor(Math.random() * (max - min + 1)) + min
        resultadoContainer.innerHTML = `<div class="resultado-box">${resultado}</div>`
    } else {
        resultadoContainer.innerHTML = `<p class="erro-texto">O valor mínimo tem que ser menor do que o máximo!</p>`
    }
}

document.querySelector("button").addEventListener("click", sorteioNumero)