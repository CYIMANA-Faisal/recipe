import useFetch from './useFetch'
import Recipe from './Recipe'
const RecipeList = (props) => {
    
    const {data: recipes, isPending, err} = useFetch('http://localhost:8000/recipes')
    return ( 
        <div className="row mt-2 mb-2 container">
            <h2 className="text-success">{props.preparedBy}</h2>
                {err && <div>{err}</div>}
                {isPending && <div>Lodding...</div>}
                { recipes && recipes.map((recipe) => <Recipe recipe = { recipe } isAuthenticated = {props.isAuthenticated}/>) }
        </div>
    );
}

export default RecipeList;