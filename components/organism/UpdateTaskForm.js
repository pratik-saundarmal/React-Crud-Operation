
import React, { useState } from "react";
import { AtomInputField } from "../atoms/AtomInputField";
import AtomSelection from "../atoms/AtomSelection";
import AtomButtonRsuite from "../atoms/AtomButton";
import { tasks } from "../constant/tasks";
import { TASK_STATUS } from "../constant/taskStatuses";
import TaskService from "../../services/TaskService";

export default function UpdateTaskForm( { dataId , handleClose  } ){
    const prevObject = tasks.find( task => task.id === dataId);
    console.log("prevObject: ",prevObject);

    const [id , setId] = useState(prevObject.id);
    const [taskName , setTaskName] = useState(prevObject.task_name);
    const [projectName , setProjectName] = useState(prevObject.project_name);
    const [status , setStatus] = useState(prevObject.status);

    const taskService = new TaskService();

    
    const handleChangeId = (event) => {
        setId( () =>  event.target.value )
    }

    const handleChangeTaskName = (event) => {
        setTaskName( () => event.target.value)
    }
    
    const handleChangeProjectName = (event) => {
        setProjectName( () =>  event.target.value)
    }

    const handleChangeStatus = (event) => {
        setStatus( () => event.target.value)
    }

    
    const updateTaskFunc = async(event) => {

        event.preventDefault();
        
        await taskService.updateTask(prevObject , {
            id : id,
            task_name : taskName,
            project_name : projectName,
            status : status
        })

        handleClose()
        
    }


    return (
        <div className="popup-box">
            <div className="box">
               <form>

               <h5>Update Task</h5>
                {console.log("data in updatTask: ",dataId)}
                
                 <AtomInputField 
                    className = "input-form"
                    label = "EmpId" 
                    type="input" 
                    name="id"
                    value={id}
                    onChange= {handleChangeId}
                    placeholder="Please Enter Id Number"
                    required={true}
                    defaultValue={prevObject.id}/>

                <AtomInputField 
                    className = "input-form"
                    label = "FName" 
                    type="input"
                    name="task_name"
                    value={taskName}
                    onChange= {handleChangeTaskName}
                    placeholder="Please Enter Task Name"
                    required={true}/>
                    
                <AtomInputField 
                    className = "input-form"
                    label = "LName" 
                    type="input" 
                    name="project_name"
                    value={projectName}
                    onChange= {handleChangeProjectName}
                    placeholder="Please Enter Id Number"
                    required={true}/>
                    <AtomInputField 
                    className = "input-form"
                    label = "EmailId" 
                    type="input" 
                    name="project_name"
                    value={projectName}
                    onChange= {handleChangeProjectName}
                    placeholder="Please Enter Id Number"
                    required={true}/>
                    <AtomInputField 
                    className = "input-form"
                    label = "ContactNo" 
                    type="input" 
                    name="project_name"
                    value={projectName}
                    onChange= {handleChangeProjectName}
                    placeholder="Please Enter Id Number"
                    required={true}/>
                    <AtomInputField 
                    className = "input-form"
                    label = "DepartmentId" 
                    type="input" 
                    name="project_name"
                    value={projectName}
                    onChange= {handleChangeProjectName}
                    placeholder="Please Enter Id Number"
                    required={true}/>
                    <AtomInputField 
                    className = "input-form"
                    label = "salary" 
                    type="input" 
                    name="project_name"
                    value={projectName}
                    onChange= {handleChangeProjectName}
                    placeholder="Please Enter Id Number"
                    required={true}/>
                    <AtomInputField 
                    className = "input-form"
                    label = "DepartmentName" 
                    type="input" 
                    name="project_name"
                    value={projectName}
                    onChange= {handleChangeProjectName}
                    placeholder="Please Enter Id Number"
                    required={true}/>
                <AtomSelection
                    className="selection-form"
                    id = "selection_task"
                    label="Status:"
                    name="status"
                    value={status}
                    onChange= {handleChangeStatus}
                    options = { TASK_STATUS } />
                
                <AtomButtonRsuite 
                    className = "btn-create-update"
                    text="Update"
                    onClick={ updateTaskFunc } />

                <AtomButtonRsuite 
                    className="btn-close"
                    onClick={handleClose} 
                    />    
                  
               </form>
            </div>
        </div>
    )
}






