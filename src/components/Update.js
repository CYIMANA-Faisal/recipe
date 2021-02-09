import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import useFetch from './useFetch'
const Update = (props) => {
    const { id } = useParams()
    const [title, setTitle] = useState('');
    const [instruction, setInstruction] = useState('');
    const history = useHistory();

    fetch('http://localhost:8000/recipes/' + id)
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            setTitle(response.title)
            setInstruction(response.instruction)
        })
    const handleUpdate = (e) => {
        e.preventDefault()
        const recipe = { title, instruction }
        fetch('http://localhost:8000/recipes' + id, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(recipe)
        }).then(() => { 
            history.push('/')
        })
    }
    return ( 
        <div>
            <h2>{props.formTitle}</h2>
            <form onSubmit = { handleUpdate }>
                <div  className="mb-3">
                <label for="exampleFormControlInput1"  className="form-label">Recipe title</label>
                    <input type="text"  className="form-control" id="exampleFormControlInput1" 
                    value={ title } onChange = { (e) => { setTitle( e.target.value ) } }
                    />
                </div>
                <div  className="mb-3">
                    <label for="exampleFormControlTextarea1"  className="form-label">Instrictions</label>
                    <textarea  className="form-control" id="exampleFormControlTextarea1" rows="3" value = { instruction }
                    onChange = { (e) => { setInstruction( e.target.value ) } }
                    ></textarea>
                </div>
                <p>{title}</p>
                <div>
                    <input type="submit" class="btn btn-success mb-2" value={props.btnValue}/>
                </div>
            </form>
        </div>
     );
}
 
export default Update;