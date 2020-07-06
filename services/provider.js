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
                },
                {
                    id: 3,
                    name: 'Srs Gás LTDA',
                    adress: {
                        street: 'Pereira Sanches',
                        num: 120,
                        neighbor: 'São João',
                        CEP: '37500-738',
                    },
                },
                {
                    id: 4,
                    name: 'ABC da àgua',
                    adress: {
                        street: 'Pereira Sanches',
                        num: 120,
                        neighbor: 'São João',
                        CEP: '37500-738',
                    },
                },
                {
                    id: 5,
                    name: 'Àgua e CIA',
                    adress: {
                        street: 'Pereira Sanches',
                        num: 120,
                        neighbor: 'São João',
                        CEP: '37500-738',
                    },
                },
                {
                    id: 6,
                    name: '123Àgua',
                    adress: {
                        street: 'Pereira Sanches',
                        num: 120,
                        neighbor: 'São João',
                        CEP: '37500-738',
                    },
                }
            ]
        })
    })
}