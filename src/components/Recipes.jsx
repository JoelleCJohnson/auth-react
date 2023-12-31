import { useContext, useEffect, useState } from "react"
import { UserContext } from "../App"


export default function Recipes() {
    const [recipes, setRecipes] = useState([])
    const { token } = useContext(UserContext)


    useEffect(() => {
        fetch("https://auth-api-jj.web.app/recipes")
            .then(res => res.json())
            .then(recipes => setRecipes(recipes))
            .catch(console.error)
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: e.target.title.value,
            recipe: e.target.recipe.value
        }
        fetch('https://auth-api-jj.web.app/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(recipes => setRecipes(recipes))
            .catch(console.error)
    }

    return (
        <>
            <h1> Welcome to the recipe app!</h1>
            <form onSubmit={handleFormSubmit}>
                <h2>Add a recipe:</h2>
                <label htmlFor="title">
                    Title:
                    <input type="text" name="title" />
                </label>
                <br />
                <label htmlFor="recipe">
                    Recipe:
                    <input type="text" name="recipe" />
                </label>
                <br />
                <button type="submit">Add Recipe!</button>
            </form>
            {recipes ?
                recipes?.map(recipe => {
                    return (
                        <div className="container">
                            <h2>{recipe.title}</h2>
                            <p>{recipe.recipe}</p>
                        </div>
                    )
                })
                :
                "Loading..."
            }
        </>
    )
}