export function mudaFoto() {
    const foto = document.querySelector('.formulario__foto__arquivo')
    if (foto) {
        foto.addEventListener('change', () => {
            const link = URL.createObjectURL(foto.files[0])

            foto.parentElement.style.background = "url(" + link + ") center center / cover no-repeat"

            const ancoraPerfil = document.querySelector("[data-tag='ancoraPerfil']")

            ancoraPerfil.style.background = "url(" + link + ") center center / cover no-repeat"

            URL.revokeObjectURL(foto.files[0])

        })
    }
}
