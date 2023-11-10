import { UserContext } from "../App.js"
import { useContext } from "react"

export default function Signup() {
    const { token, setToken, loggedin, setLoggedin } = useContext(UserContext)

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
            .then(token => setToken(token.token))
            .catch(console.error)
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">
                    Email:
                    <input type="text" name="email" />
                </label>
                <br />
                <label htmlFor="password">
                    Password
                    <input type="text" name="password" />
                </label>
                <br />
                <button type="submit">Sign up</button>
            </form>
        </>
    )
}