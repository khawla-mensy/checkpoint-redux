import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { addTask } from "../../Action";
import { useDispatch } from "react-redux";
function AddTask() {
    const [newTask, setNewTask] = useState("");
    const handleAdd = (input) => {
        setNewTask(input);
    };
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(addTask({ newTask: newTask }));
    };
    return (
        <div>
            <div
                style={{
                    borderStyle: "solid",
                    backgroundColor: "#6495ED",
                }}
            >
                <h1 style={{ marginTop: "2%" }}>To Do App</h1>
                <input
                    type="text"
                    placeholder="Add text...."
                    style={{
                        marginBottom: "2%",
                        width: "70%",
                        height: "40px",
                        borderRadius: "5px",
                    }}
                    onChange={(e) => handleAdd(e.target.value)}
                />
                <Button
                    variant="primary"
                    style={{
                        marginLeft: "0.5%",
                    }}
                    onClick={handleSubmit}
                >
                    Add
                </Button>
            </div>
        </div>
    );
}

export default AddTask;
