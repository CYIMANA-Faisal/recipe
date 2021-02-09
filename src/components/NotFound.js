import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <center>
            <h1>404</h1>
            <p>Sorry the page you are trying to visit does not exist</p>
            <Link to="/">Go back to home</Link>
        </center>
     );
}
 
export default NotFound;