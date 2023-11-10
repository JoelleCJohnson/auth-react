import { useContext } from "react"
import { UserContext } from "../App.js"
import { useNavigate } from "react-router-dom"


export default function Login(){
    const {token, setToken, loggedin, setLoggedin} = useContext(UserContext)
    const nav = useNavigate()
  

    const handleLogin = (token) => {
        setToken(token.token)
        // setLoggedin(true)
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

        nav('/recipes')
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