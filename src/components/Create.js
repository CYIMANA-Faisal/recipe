import {useState} from 'react'
import {useHistory} from 'react-router-dom'
const Create = (props) => {
    const [title, setTitle] = useState('');
    const [instruction, setInstruction] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        const recipe = { title, image, instruction }
        fetch('http://localhost:8000/recipes', {
            method: 'POST',
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
            <form onSubmit = { handleSubmit }>
                <div  className="mb-3">
                <label for="exampleFormControlInput1"  className="form-label">Recipe title</label>
                    <input type="text"  className="form-control" id="exampleFormControlInput1" 
                    value={ title } onChange = { (e) => { setTitle( e.target.value ) } }
                    />
                </div>
                <div  className="mb-3">
                <label for="exampleFormControlInput2"  className="form-label">Image</label>
                    <input type="text"  className="form-control" id="exampleFormControlInput2" value = { image }
                    onChange = { (e) => { setImage( e.target.value ) } }
                    />
                </div>
                <div  className="mb-3">
                    <label for="exampleFormControlTextarea1"  className="form-label">Instrictions</label>
                    <textarea  className="form-control" id="exampleFormControlTextarea1" rows="3" value = { instruction }
                    onChange = { (e) => { setInstruction( e.target.value ) } }
                    ></textarea>
                </div>
                <div>
                    <input type="submit" class="btn btn-success mb-2" value={props.btnValue}/>
                </div>
            </form>
        </div>
     );
}
 
export default Create;