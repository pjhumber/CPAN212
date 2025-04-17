import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h1>Task Manager</h1>
            <button onClick={() => navigate("/login")}>Log In</button>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
    );
}

export default Home;
