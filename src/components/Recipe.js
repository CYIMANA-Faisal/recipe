import {Link} from 'react-router-dom';
const Recipe = (props) => {
    return ( 
        <div className="col-sm-3 mt-3" key={ props.recipe.id }>
            <div className="card" style={{width: "18rem"}} >
                <img src={props.recipe.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h3>{props.recipe.title}</h3>
                    <p className="card-text">{ props.recipe.desc }</p>
                    {/* {props.isAuthenticated ? (<Link type="button" className="btn btn-success" to={`/dish/${props.recipe.id}`}>Learn to prepare it</Link>) : ('')} */}
                    <Link type="button" className="btn btn-success" to={`/dish/${props.recipe.id}`}>Learn to prepare it</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Recipe;