export function validacaoFormulario() {

    // constantes ou variáveis

    const inputs = document.querySelectorAll('[data-tag="input"]')

    const listaDeInputs = Array.from(inputs)

    const form = document.querySelector("[data-tag='form']")

    const tiposDeErro = [
        'valueMissing',
        'typeMismatch',
        'patternMismatch',
        'customError'
    ]

    const validadores = {
        confirmarSenha: input => validaConfirmarSenha(input)
    }

    const mensagensDeErro = {
        nome: {
            valueMissing: 'O nome não pode estar vazio'
        },
        email: {
            valueMissing: 'O email não pode estar vazio',
            typeMismatch: 'Você deve digitar um email válido'
        },
        senha: {
            valueMissing: 'A senha não pode estar vazia',
            patternMismatch: 'A senha deve conter de 6 a 12 caracteres, com pelo menos uma letra minúscula, uma letra maiúscula e um número',
        },
        confirmarSenha: {
            valueMissing: 'Por favor, confirme a senha',
            customError: 'A senha inserida não confere com a senha escrita no campo anterior.'
        },
        telefone: {
            valueMissing: 'O telefone não pode estar vazio',
            patternMismatch: 'O telefone inserido não é válido'
        },
        cidade: {
            valueMissing: 'A cidade não pode estar vazia'
        },
        animal: {
            valueMissing: 'O nome do animal não pode estar vazio'
        },
        sobre: {
            valueMissing: 'Por favor, fale mais sobre você'
        },
        mensagem: {
            valueMissing: 'É necessário enviar uma mensagem'
        }
    }

    // funções

    function checaMudanca() {
        inputs.forEach(input => {
            input.addEventListener('change', evento => {
                validaInput(evento.target)
            })

        })
    }

    function focoLimpa() {
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.classList.remove('formulario__input--invalido')
                input.parentElement.querySelector('.formulario__erro').innerHTML = ''
            })

        })
    }

    function checaEnvio() {
        if (form.dataset.envia == "nao") {
            form.addEventListener('submit', evento => {
                evento.preventDefault()
                evento.stopPropagation()

                inputs.forEach(input => {
                    validaInput(input)
                })
            })
        }

        else {
            form.addEventListener('submit', evento => {
                evento.stopPropagation()

                inputs.forEach(input => {
                    validaInput(input)
                })

                var checaTudo = listaDeInputs.every(input => input.validity.valid)

                if (checaTudo) {
                    form.reset
                    return
                }
                evento.preventDefault()
            })
        }
    }

    function validaInput(input) {
        const tipoDeInput = input.dataset.tipo

        if (validadores[tipoDeInput]) {
            validadores[tipoDeInput](input)
        }
        if (input.validity.valid) {
            input.classList.remove('formulario__input--invalido')
            input.parentElement.querySelector('.formulario__erro').innerHTML = ''

        } else {
            input.classList.add('formulario__input--invalido')
            input.parentElement.querySelector('.formulario__erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
        }
    }

    function validaConfirmarSenha(input) {
        let mensagem = ''

        if (input.value !== document.querySelector('[data-tipo="senha"').value) {
            mensagem = 'A senha inserida não confere com a senha definida no campo anterior.'
            input.setCustomValidity(mensagem)
        }
        else {
            input.setCustomValidity('')
        }

    }

    function mostraMensagemDeErro(tipoDeInput, input) {
        let mensagem = ''
        tiposDeErro.forEach(erro => {
            if (input.validity[erro]) {
                mensagem = mensagensDeErro[tipoDeInput][erro]
            }
        })
        return mensagem
    }

    // chamadas

    checaMudanca()
    focoLimpa()
    checaEnvio()
}