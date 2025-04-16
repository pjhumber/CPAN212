import { useState, useEffect } from "react";
import TaskItem from "../components/TaskItem";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.currentUser) {
            navigate("/login");
        }
    }, [navigate]);

    let uid = null;
    if (auth.currentUser) {
        uid = auth.currentUser.uid;
    }

    useEffect(() => {
        const loadTasks = async () => {
            if (uid !== null) {
                const res = await fetch(`http://localhost:5000/tasks/${uid}`);
                const data = await res.json();
                setTasks(data);
            }
        };
        loadTasks();
    }, [uid]);

    const addTask = async () => {
        if (taskText.trim() !== "") {
            if (uid !== null) {
                const res = await fetch("http://localhost:5000/tasks", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ text: taskText, uid: uid })
                });
                const newTask = await res.json();
                const updatedTasks = [...tasks, newTask];
                setTasks(updatedTasks);
                setTaskText("");
                setDropdownOpen(false);
            }
        }
    };

    const deleteTask = async (taskId) => {
        if (uid !== null) {
            await fetch(`http://localhost:5000/tasks/${uid}/${taskId}`, {
                method: "DELETE"
            });
            const updated = tasks.filter((task) => {
                if (task.id !== taskId && task._id !== taskId) {
                    return true;
                } else {
                    return false;
                }
            });
            setTasks(updated);
        }
    };

    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate("/login");
        });
    };

    return (
        <div className="dashboard">
            <div className="top-bar">
                <button className="plus-button" onClick={() => setDropdownOpen(!dropdownOpen)}>+</button>
                <h2 className="header-title">Notes</h2>
                <button onClick={handleLogout}>Logout</button>
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
                {tasks.map((task) => (
                    <TaskItem
                        key={task._id || task.id}
                        task={task}
                        deleteTask={() => deleteTask(task._id || task.id)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;