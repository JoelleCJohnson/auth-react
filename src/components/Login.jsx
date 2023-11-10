import { useContext } from "react"
import { UserContext } from "../App.js"


export default function Login(){
    const {token, setToken, loggedin, setLoggedin} = useContext(UserContext)
    return(
        <>
        <h2>This is login</h2>
        </>
    )
}