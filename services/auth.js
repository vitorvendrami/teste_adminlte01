export function signIn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                tolken: 'fakjfkajfkajkfjakfn',
                user: {
                    name: 'Avner',
                    email: 'avnerj.g.r@gmail.com',
                    password: '',
                    confirmPassword: '',
                    adress: {
                        street: 'Basílio Dias Pinto',
                        neighbor: 'Estiva',
                        number: '500',
                        CEP: '37500-302',
                    },
                },
            })
        }, 2000)
    })
}