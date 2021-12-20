const { checkSchema } = require('express-validator');

module.exports = {
    singUp: checkSchema({
        name: {
            trim: true,
            isLength: {
                options: { min: 2 }
            },
            errorMessage: "Nome precisa ter pelo menos 2 caracteres"     
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: "E-mail inválido"
        },
        password: {
            isLength: {
                options: { min: 2 }
            },
            errorMessage: "Senha precisa ter pelo menos 2 caracteres"
        },
        state: {
            notEmpty: true,
            errorMessage: "Estado não preencido"
        }
    }),

    singIn: checkSchema({
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: "E-mail inválido"
        },
        password: {
            isLength: {
                options: { min: 2 }
            },
            errorMessage: "Senha precisa ter pelo menos 2 caracteres"
        }
    })
}