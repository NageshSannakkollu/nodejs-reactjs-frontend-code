import {Link} from 'react-router-dom'
import "./index.css"

const TaskItem = (props) => {
    const {taskDetails,clickOnDelete} = props
    const{id,task,status} = taskDetails;

    const deleteButtonHandler = () => {
        clickOnDelete(id)
    }

  return (
    <div className='task-item-list' key={id}>
        <p className='id'>{id}</p>
        <h4 className='task-name'>{task}</h4>
        <p className='task-status'>{status}</p>
        <Link to={`/update/${id}`}>
            <button type='button' className='add-button'>Update</button>
        </Link>
            <button type='button' className='delete-button' onClick={deleteButtonHandler}>Delete</button>
    </div>
  )
}

export default TaskItem