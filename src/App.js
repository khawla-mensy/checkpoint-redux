import AddTask from "./Components/AddTask/AddTask";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import List from "./Components/List/List";
function App() {
    const [tasks, setTasks] = useState([
        { task: "do laundry", id: 1, isDone: false },
        { task: "do homework", id: 2, isDone: false },
        { task: "do nothing", id: 3, isDone: false },
        { task: "do laundry", id: 4, isDone: false },
    ]);

    return (
        <div className="App">
            <AddTask />
            <List tasks={tasks} />
        </div>
    );
}

export default App;
