import { FaTrash } from "react-icons/fa";

function TaskItem({ task, deleteTask }) {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button className="delete-button" onClick={deleteTask}>
        <FaTrash />
      </button>
    </li>
  );
}

export default TaskItem;
