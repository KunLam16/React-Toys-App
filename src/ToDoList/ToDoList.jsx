import React,{useState} from 'react';
import styles from './ToDoList.module.css';


function ToDoList(){

    const[tasks,setTask] = useState([]);
    const[newTask,setNewTask] = useState("");

    function HandleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
        setTask([...tasks,newTask]);
        setNewTask("");
        }
        
    }
    function deleteTask(index){
        const updateTasks = tasks.filter((_,i) => i !== index);
        setTask(updateTasks);

    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            
            setTask(updatedTasks);
        }

    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            
            setTask(updatedTasks);
        }

    }
    return(
        <div className={styles.container}>

            <h1 className={styles.h1}>To Do Tasks:</h1>
            <div>
                <input type="text"
                    placeholder='Nhập công việc cần làm...' 
                    value={newTask}
                    onChange={HandleInputChange}
                
                />
                <button className={styles.btnadd} onClick={addTask}>
                    Thêm
                </button>
            </div>
            <ol className={styles.ol}>

                {tasks.map((task,index) => 
                    <li className={styles.li} key={index}>
                        <span className={styles.text}>{task}</span>
                        <button className={styles.btndel} onClick={()=>deleteTask(index)}><i class="bi bi-check-circle-fill"></i></button>
                        <button className={styles.btnup} onClick={()=>moveTaskUp(index)}><i class="bi bi-arrow-up-circle-fill"></i></button>
                        <button className={styles.btndown} onClick={()=>moveTaskDown(index)}><i class="bi bi-arrow-down-circle-fill"></i></button>
                    </li>
                )}
            </ol>

        </div>
    );


}
export default ToDoList;