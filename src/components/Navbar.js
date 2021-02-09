import {useState} from 'react'
import {Link} from 'react-router-dom';
import useFetch from './useFetch'
const Navbar = ({isAuthenticated, setIsAuthenticated}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invalid, setInvalid] = useState('')
    const {data: login} = useFetch('http://localhost:8000/user');
    const handeLogin = (inputData, dbData) => {
        if (inputData.email === dbData.email && inputData.password === dbData.password) {
            setIsAuthenticated(true)
        }else{
            setInvalid('Invalid login credentials')
        }
    }
    const handeLogout = () =>{
        setIsAuthenticated(false)
    }
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark  bg-warning">
            <div className="container ">
                <a className="navbar-brand text-success logo" href="home">حياة جيدة</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            {isAuthenticated ? (<Link className="nav-link text-white" to="/add">Add recipe</Link>) : ('')}
                            
                        </li>
                        <li className="nav-item">
                            {
                                isAuthenticated ? (
                                    <Link onClick={handeLogout} className="btn btn-success" to="/">Logout</Link>
                                ):(
                                    <form>
                                    <div class="input-group mb-3">
                                        <input onChange={ (e) => { setEmail(e.target.value) } } type="email" class="form-control" placeholder="Email" aria-label="Email"/>
                                        <span className="input-group-text text-danger">{ invalid }</span>
                                        <input onChange={ (e) => { setPassword(e.target.value) } } type="password" className="form-control" placeholder="Password" aria-label="Server"/>
                                        <Link onClick={() => handeLogin({email, password}, login)} className="btn btn-success" to="/">Login</Link>
                                    </div>

                                        {/* <input type="email" onChange={ (e) => { setEmail(e.target.value) } } className="form-control"placeholder="name@example.com"/>
                                        <input type="password" onChange={ (e) => { setPassword(e.target.value) } } className="form-control"/>
                                        {<p className="text-danger">{ invalid }</p>}
                                        <Link onClick={() => handeLogin({email, password}, login)} className="btn btn-success" to="/">Login</Link> */}
                                    </form>
                                )
                            }    
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;