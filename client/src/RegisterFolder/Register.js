import React, {useState} from 'react'
import axios from 'axios'
import '../index.css'
import './register.css'

function Register(){
    const[values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })
    const handleChange = (event) =>{
        setValues({...values, [event.target.name]:event.target.value})
    }
    const handleSubmit = (event) => {
        if (!values.name || !values.surname || !values.email || !values.password) {
            console.log('Všetky polia musia byť vyplnené!');
            return;
          }
        event.preventDefault();
        axios.post('http://localhost:7000/api/auth/register', values)
        .then(res => console.log('Registration Successful', res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div>
             <form onSubmit={handleSubmit}>
                <label htmlFor='name'></label>
                <input type="text" placeholder='Meno' name='name' value={values.name} onChange={handleChange} />
                <label htmlFor='surname'></label>
                <input type="text" placeholder='Priezvisko' name='surname' value={values.surname} onChange={handleChange}/>
                <label htmlFor='email'></label>
                <input type="text" placeholder='Email' name='email' value={values.email} onChange={handleChange}/>
                <label htmlFor='password'></label>
                <input type="password" placeholder='Heslo' name='password' value={values.password} onChange={handleChange}/>
                <button type='submit'>Registrovať</button>  
                </form> 
                </div>
                

        </div>

    )
}
export default Register