
import React, {useState} from "react";
import CreateTaskForm from "../components/organism/CreateTaskForm";
import UpdateTaskForm from "../components/organism/UpdateTaskForm";
import AtomButtonRsuite from "../components/atoms/AtomButton";
import AtomTable from "../components/atoms/AtomTable";
import TaskService from "../services/TaskService";


export default function MainPage(){
  
    const [isShown , setIsShown] = useState(false);
    const [isCreate , setIsCreate] = useState(false);
    const [isUpdate , setIsUpdate] = useState(false);
    
    const [state , setState] = useState({
        selected : []
    })
    
    const taskService = new TaskService();

    
    
    const togglePopupUpdate = () => {
        setIsUpdate( update => !update);
    }


    const deleteTaskFromTable = () => {
        if(state?.selected?.length >0){
            console.log(state.selected," are deleted");
            taskService.deleteTask( state.selected );
            handleOnSelect([] , false)
            handleOnSelectAll(false , [])
        }
        else{
            alert("There is no selected task to delete");
        }
    }

    
    const updateTable = (row) => {
        
        if(state.selected.length === 1){
            togglePopupUpdate();

        }
        else if(state.selected.length === 0){
          alert("There is no selected task to update");

       }
        else{
            alert("Please select only one task to update");
        }
    }

    let handleOnSelect = (row, isSelect) => {
        if (isSelect) {
          setState(() => ({
            selected: [...state.selected, row.id]
          }));
          console.log("selected:", state.selected);
        } else {
          setState(() => ({
            selected: state.selected.filter(x => x !== row.id)
          }));
        }
      }
      
    let  handleOnSelectAll = (isSelect, rows) => {
        const ids = rows.map(r => r.id);
        if (isSelect) {
          setState(() => ({
            selected: ids
          }));
        } else {
          setState(() => ({
            selected: []
          }));
        }
      }
    const selectRow = {
        mode : "checkbox",
        clickToSelect : true ,
        selected: state.selected,
        style: { backgroundColor: '#D3D3D3' },
        onSelect: handleOnSelect,
        onSelectAll: handleOnSelectAll

    }
    return (
        <div >
            {
                    <header >
                
                        <p>
                            <AtomButtonRsuite 
                                appearance='primary'
                                className="btn" 
                                text ="Show Tasks"
                                onClick = {() =>  setIsShown(cur => !cur)}/>
                            
                            <AtomButtonRsuite 
                                className="btn"
                                text = "Create Task" 
                                onClick={() => setIsCreate(!isCreate)}/>  
                            
                            <AtomButtonRsuite 
                                 className="btn"  
                                 text ="Update Tasks" 
                                 onClick = {updateTable }/>

                            <AtomButtonRsuite 
                                 className="btn"  
                                 text ="Delete Tasks" 
                                 onClick = {deleteTaskFromTable}/>
                            
                        </p>
                        
                            { isUpdate && (
                                        <UpdateTaskForm
                                            dataId = {state.selected[0]}
                                            handleClose = {togglePopupUpdate}/>
                                )
                            }

                            <br></br>
                            
                            { isShown && (
                                    <AtomTable 
                                        selectRow = {selectRow}/>
                            )}
            
                            { isCreate && (            
                                    <CreateTaskForm
                                        handleClose = {() => setIsCreate(!isCreate)}/>
                                
                            )}
                        
                    </header>
                     
            } 
        </div>
    );
}
