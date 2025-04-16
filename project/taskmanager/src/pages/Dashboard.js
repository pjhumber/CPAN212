import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  where
} from "firebase/firestore";
import TaskItem from "../components/TaskItem";
import "../App.css";

export default function Dashboard() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const db = getFirestore(); //likely redunant keepin just incase idk

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    const q = query(collection(db, "tasks"), where("uid", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(loadedTasks);
    });

    return () => unsubscribe();
  }, [user, db, navigate]);

  const addTask = async () => {
    if (taskText.trim() === "") return;
  
    await addDoc(collection(db, "tasks"), {
      uid: user.uid,
      text: taskText,
      completed: false
    });
  
    setTaskText("");
    setDropdownOpen(false);
  };
  

  const deleteTask = async (taskId) => {
    const taskDoc = doc(db, "tasks", taskId);
    await deleteDoc(taskDoc);
  };
  

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/"));
  };

  return (
    <div className="dashboard">
      <div className="top-bar">
        <button
          className="plus-button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          +
        </button>
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
            key={task.id}
            task={task}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}
