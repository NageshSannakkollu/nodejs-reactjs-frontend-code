import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddPage = () => {
    const [values,setValues] = useState({
        task:'',
        status:''
    })

    const navigate = useNavigate()
    const addTaskHandler = e => {
        e.preventDefault()
        console.log("Values:",values)
        axios.post(`https://super-churros-1ba7f7.netlify.app/task`,values)
        .then((response)=> {
            console.log(response)
            navigate("/")
        }).catch(error => {
            console.log(error)
        })
    }

    

  return (
    <div className='update-page-container'>
        <form onSubmit={addTaskHandler} className="form-container" >
        <div>
            <h4>Task Name:</h4>
            <input type='text' name="task" placeholder='Enter task...' className="input-form" onChange={e => setValues({...values,task:e.target.value})} required/>
        </div>
        <div>
            <h4>Status Name:</h4>
            <input type='text' name="status" placeholder='Enter status...' className="input-form" onChange={e => setValues({...values,status:e.target.value.toUpperCase()})} required/>
        </div>
            <br/><br/>
            <button type='submit' className="update-button">Add</button>
        </form>
    </div>
  )
}

export default AddPage