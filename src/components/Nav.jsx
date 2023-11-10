import { useContext } from "react"
import { UserContext } from "../App"

export default function Nav() {
    const { loggedin } = useContext(UserContext)
    return (
        <header>
            <ul>
                <li>
                    <a href='/login'>Log In</a>
                </li>
                <li>
                    <a href='/recipes'>Home</a>
                </li>
                <li>
                    <a href='/'><button onClick={localStorage.clear()}>Log out</button></a>
                </li>
            </ul>
        </header>
    )
}