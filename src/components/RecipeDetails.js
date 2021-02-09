import {useParams} from 'react-router-dom'
import useFetch from './useFetch'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
const Detail = () => {
    const { id } = useParams()
    const history = useHistory()
    const {data: recipe, isPending, err} = useFetch('http://localhost:8000/recipes/' + id)
    const handleDelete = () => {
        fetch('http://localhost:8000/recipes/' + recipe.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    return ( 
        <div>
            {err && <div>{err}</div>}
            {isPending && <div>Lodding...</div>}
            <div className="card mb-3">
                <button type="button" className="btn btn-danger" onClick = { handleDelete }>Delete</button>
                <Link type="button" className="btn btn-success" to={`/update/${id}`}>Update</Link>
                <img src={recipe && recipe.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{recipe && recipe.title}</h5>
                    <p className="card-text">{recipe && recipe.instructions}</p>
                </div>
            </div>
        </div>    
     );
}
 
export default Detail;
