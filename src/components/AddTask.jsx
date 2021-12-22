import { useState } from "react";

const AddTask = (props) => {

    const [addTaskValue, setAddTaskValue] = useState("");

    const onChangeAddT = (e) => {
        setAddTaskValue(e.target.value);
    }

    const addTaskList = (e) => {
        e.preventDefault();
        const newTask = {
            id: Math.floor(Math.random() * 100) + 1,
            task: addTaskValue
        }
        props.addNew(newTask);
        setAddTaskValue("");

    }

    return <div className="add-task">
             <h1 className='center'>Add Task</h1>
        <form className="form-css add-form" onSubmit={addTaskList}>
        <input type="text" value={addTaskValue} onChange={onChangeAddT} name="addTask" id="addTask" />
        <button type="submit"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg></button>
    </form>
    </div>


}

export default AddTask;