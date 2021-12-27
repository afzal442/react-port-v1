import React, { useState} from 'react'

function Login({setName}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


// useEffect(() => {
//     const email = localStorage.getItem('email')
//     const password = localStorage.getItem('password')
//     if (email && password) {
//         setEmail(email)
//         setPassword(password)
//     }
// }, [])


const submit = async (e) => {
    e.preventDefault()
    const response = fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    console.log(response)

// const content = response.json()

setName = response.name

};


    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="Email address" required
                   onChange={e => setEmail(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary form-control" type="submit">Sign in</button>
        </form>
    )
}

export default Login
