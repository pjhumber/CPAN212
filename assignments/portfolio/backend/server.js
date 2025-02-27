const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const overview = { name: "Your Name", role: "Frontend Developer", description: "Passionate about coding." };
const projects = [{ title: "Portfolio Website", description: "React and Express-based site." }];
const skills = ["React", "JavaScript", "CSS", "Node.js"];
const experience = [{ company: "Tech Co.", role: "Developer", duration: "1 year" }];

app.get("/getOverview", (req, res) => res.json(overview));
app.get("/getProjects", (req, res) => res.json(projects));
app.get("/getSkills", (req, res) => res.json(skills));
app.get("/getExperience", (req, res) => res.json(experience));

app.listen(8000, () => console.log("Server running on port 8000"));
