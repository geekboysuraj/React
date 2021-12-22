import {useState} from 'react';
import './App.css'
import ListItem from './components/ListItem';
import AddTask from './components/AddTask'

let DUMMY_DATA = [
    {
        id: 1,
        task: "Go to Gym"
    },
    {
        id: 2,
        task: "Learn React"

    },
    {
        id: 3,
        task: "Learn React by practice"

    }
];

const App = () => {

    const [tasks, setTasks] = useState(DUMMY_DATA);

    const addNew = (task) => {
        const newTasks = [task, ...tasks];
        setTasks(newTasks);

    }
    const deleteTask = (idd) => {
        const newTasks = tasks.filter(task => task.id!==idd);
        setTasks(newTasks);
    }



    return <div className='container'>
   
        <AddTask addNew={addNew}/>
        <ListItem taskList={tasks} delTask ={deleteTask}/>
    </div>

}

export default App;