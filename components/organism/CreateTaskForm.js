
import React, { useState } from "react"
import AtomSelection from "../atoms/AtomSelection";
import { TASK_STATUS } from "../constant/taskStatuses";
import AtomButtonRsuite from "../atoms/AtomButton";
import { AtomInputField } from "../atoms/AtomInputField";
import TaskService from "../../services/TaskService";

export default function CreateTaskForm( {handleClose} ){

    const [id , setId] = useState("");
    const [taskName , setTaskName] = useState("");
    const [projectName , setProjectName] = useState("");
    const [status , setStatus] = useState("Not Started");

    // const [taskObject , setTaskObject] = useState({
    //     id : "",
    //     taskName : "",
    //     projectName : "",
    //     status : "Not Started"
    // })
    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setTaskObject(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    
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

    const createTaskFunc = async(event) => {
        
        event.preventDefault();

        let obj ={
            id : id,
            task_name : taskName,
            project_name : projectName,
            status : status
          }
        
       try{
            await taskService.createTask(obj); 
            handleClose();
       }
       catch(error){
            alert("Please enter values to field CORRECTLY!");
       }
       
       
    }


    return (
        <div className="popup-box">
            <div className="box">
               <form>

                <h5>Create Task</h5>
                
                 <AtomInputField 
                    className = "input-form"
                    label = "Emp Id" 
                    type="input" 
                    name="id"
                    value={id}
                    onChange= {handleChangeId}
                    placeholder="Please Enter Id Number"
                    required={true}
                    />

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
                    label = "DeparmentName" 
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
                    text="Create"
                    onClick={ createTaskFunc } />  

                <AtomButtonRsuite 
                    className="btn-close"
                    onClick={handleClose} />

               </form> 
            </div>
        </div>
    )
}



