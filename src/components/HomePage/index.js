import {useEffect,useState} from 'react'
import Header from "../Header"
import TaskItem from "../TaskItem" 
import axios from 'axios'
import "./index.css"
import { Link } from 'react-router-dom'

const HomePage = () => {
 const [taskList,setTaskList] = useState([])
 const [deleted,setDeleted] = useState(true)

  useEffect(() => {
    if(deleted){
      setDeleted(false)
    const getTaskData = async() => {
      const response = await fetch("https://super-churros-1ba7f7.netlify.app/task");
      const data = await response.json()
      setTaskList(data)
    }
    getTaskData()
  }
  },[deleted])
  const clickOnDelete = (id) => {
    axios.delete(`https://super-churros-1ba7f7.netlify.app/${id}`)
    .then(response => {
      console.log(response)
      setDeleted(true)
    }).catch(err => {
      console.log(err)
    })
  }

const taskListLength = taskList.length;
console.log("Length:",taskListLength)

  return (
    <div className='main-app-container'>
      <Header/>
      <div>
      <div className='task-list-tile-add-button-container'>
        <h1 className='task-list-title'>{`Task List: ${taskListLength}`}</h1>
        <Link to="/add_task">
            <button type='button' className='add-button'>Add Task</button>
        </Link>
        </div>
        <ul className='task-un-order-list-container'>
        {taskList.map(eachTask => (
          <TaskItem taskDetails={eachTask} key={eachTask.id} clickOnDelete = {clickOnDelete}/>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default HomePage