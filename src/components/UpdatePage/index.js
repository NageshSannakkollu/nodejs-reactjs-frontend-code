import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';

import "./index.css"

const UpdatePage = () => {
 
    const {id} = useParams()
    console.log(id)
    const [values,setValues] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async() => {
            axios.get(`https://super-churros-1ba7f7.netlify.app/${id}`)
            .then((response) => {
                console.log(response.data)
                setValues(response.data)
            }).catch(error => {
                console.log(error)
            })
        }
        getData()
    },[id])

    const updateTaskHandler = event=> {
        event.preventDefault()
        axios.put(`https://super-churros-1ba7f7.netlify.app/${id}`,values[0])
        .then(response => {
            navigate("/")
            console.log("Response:",response)
        }).catch(error => {
            console.log("Error:",error)
        })

    }

  return (
    <div className="update-page-container">
        <h2>Update Form</h2>
        {values.map(eachItem => {
            return(
                <form onSubmit={updateTaskHandler} className="form-container" key={values.id}>
                    <div>
                        <p>Task Name</p>
                        <input type="text" value={eachItem.task}  name="task" onChange={(e) => setValues([{...values[0],task:e.target.value}])} className="input-form"/>
                    </div>
                    <div>
                        <p>Status </p>
                        <input type="text" value={eachItem.status} name="status" onChange={(e)=> setValues([{...values[0],status:e.target.value.toUpperCase()}])} className="input-form"/>
                    </div>
                        <br/><br/>
                    <button type="submit" className="update-button">Update</button>
                </form>
            )
        })}
           
    </div>
  )
}

export default UpdatePage