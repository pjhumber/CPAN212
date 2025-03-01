import { useState } from "react";
import TaskItem from "../components/TaskItem";

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const addTask = () => {
        if (taskText.trim() !== "") {
            const newTask = { text: taskText, completed: false };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setTaskText("");
            setDropdownOpen(false);
        }
    };

    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        });
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => {
            if (i !== index) {
                return true;
            } else {
                return false;
            }
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="dashboard">
            <div className="top-bar">
                <button className="plus-button" onClick={() => setDropdownOpen(!dropdownOpen)}>+</button>
                <h2 className="header-title">Notes</h2>
            </div>
            {dropdownOpen && (
                <div className="dropdown-menu">
                    <input 
                        type="text" 
                        value={taskText} 
                        onChange={(e) => setTaskText(e.target.value)} 
                        placeholder="Enter a note" 
                    />
                    <button onClick={addTask}>Create Note</button>
                </div>
            )}
            <ul>
                {tasks.map((task, index) => (
                    <TaskItem 
                        key={index} 
                        task={task} 
                        toggleComplete={() => toggleComplete(index)}
                        deleteTask={() => deleteTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;