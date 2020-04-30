export function Provider() {
    return new Promise(resolve => {
        resolve({
            info: [
                {
                    id: 1,
                    name: 'Água e Gás Santa Rita',
                    adress: {
                        street: 'Rua Teodomiro Santiago',
                        num: 450,
                        neighbor: 'INATEL',
                        CEP: '37500-400',
                    },
                    products: [
                        {
                            id: 1,
                            name: 'Água 2l',
                            price: 4.50,
                        },
                        {
                            id: 2,
                            name: 'Gás 4l',
                            price: 44.34,
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Gas Do Bão',
                    adress: {
                        street: 'Pereira Sanches',
                        num: 120,
                        neighbor: 'São João',
                        CEP: '37500-738',
                    },
                    products: [
                        {
                            id: 1,
                            name: 'Água 350ml',
                            price: 3.50,
                        },
                        {
                            id: 2,
                            name: 'Gás 4l',
                            price: 54.34,
                        }
                    ]
                }
            ]
        })
    })
}