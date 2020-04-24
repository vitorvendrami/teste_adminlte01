export function SignIn(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve({
                tolken: 'fakjfkajfkajkfjakfn',
                user:{
                    name: 'Avner',
                    email: 'avnerj.g.r@gmail.com',

                },
            })
        },2000)
    })
}