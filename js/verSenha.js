export function verSenha() {
    const olhoSenha = document.querySelector('[data-icone="olho-senha"]')

    const olhoConfirmarSenha = document.querySelector('[data-icone="olho-confirmarSenha"]')

    const senhar = document.querySelector("[data-tipo='senha']")

    const confirmaSenha = document.querySelector("[data-tipo='confirmarSenha']")

    if (olhoSenha) {
        olhoSenha.addEventListener('click', () => {
            if (senhar.type == 'password') {
                senhar.type = 'text'
                olhoSenha.style.opacity = '1'
                olhoSenha.style.background = 'url("../imagens/Vector.svg) center / 100% no-repeat'
            }
            else {
                olhoSenha.style.opacity = '0.3'
                olhoSenha.style.background = 'url("../imagens/icons8-eye-24.svg") center / 100% no-repeat'
                senhar.type = 'password'
            }
        })
    }

    if (olhoConfirmarSenha) {
        olhoConfirmarSenha.addEventListener('click', () => {
            if (confirmaSenha.type == 'password') {
                confirmaSenha.type = 'text'
                olhoConfirmarSenha.style.opacity = '1'
                olhoConfirmarSenha.style.background = 'url("../imagens/Vector.svg") center / 100% no-repeat'
            }
            else {
                olhoConfirmarSenha.style.opacity = '0.3'
                olhoConfirmarSenha.style.background = 'url("../imagens/icons8-eye-24.svg") center / 100% no-repeat'
                confirmaSenha.type = 'password'
            }
        })
    }

}