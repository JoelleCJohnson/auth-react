import { useNavigate } from "react-router-dom"
import { UserContext } from "../App.js"
import { useContext } from "react"

export default function Signup() {
    const { token, setToken, loggedin, setLoggedin } = useContext(UserContext)
    const nav = useNavigate()

    const handleSignup = (token) => {
        setToken(token.token)
        localStorage.setItem('login', setLoggedin(true))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        fetch('https://auth-api-jj.web.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(handleSignup)
            .catch(console.error)
            nav('/')
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <h2>Sign up</h2>
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
                <button type="submit">Sign up</button>
            </form>
            <h2>Already have an account?</h2>
            <button onClick={() => nav('/login')}>Log in here!</button>
        </>
    )
}