import { useContext } from "react"
import { UserContext } from "../App.js"


export default function Login(){
    const {token, setToken, loggedin, setLoggedin} = useContext(UserContext)

    const handleLogin = (token) => {
        setToken(token.token)
        localStorage.setItem('token', setLoggedin(true))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        fetch('https://auth-api-jj.web.app/users/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(handleLogin)
            .catch(console.error)
    }
    return(
        <>
        <h2>Log in</h2>
        <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label htmlFor="password">
                    Password
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Log in</button>
            </form>
        </>
    )
}