import { FaTrash } from "react-icons/fa";

function TaskItem({ task, toggleComplete, deleteTask }) {
    let taskClass = "";
    if (task.completed === true) {
        taskClass = "completed";
    } else {
        taskClass = "";
    }

    return (
        <li className={taskClass}>
            <span onClick={toggleComplete}>{task.text}</span>
            <button className="delete-button" onClick={deleteTask}>
                <FaTrash />
            </button>
        </li>
    );
}

export default TaskItem;