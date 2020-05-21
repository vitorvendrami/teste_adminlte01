export function SignIn() {
    return new Promise(resolve => {
        resolve({
            users: [
                {
                    tolken: 'fakjfkajfkajkfjakfn',
                    name: 'Thiago Campos',
                    email: 'thiago@gmail.com',
                    password: '',
                    confirmPassword: '',
                    adress: {
                        street: 'Euclides da Cunha',
                        neighbor: 'INATEL',
                        number: '320',
                        CEP: '3400-509',
                    },
                },
                {
                    tolken: 'fakjfkajfkajkfjakfn',
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
                }
            ]
        })
    })
}