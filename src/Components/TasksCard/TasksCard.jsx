import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { taskDone, taskEdited } from "../../Action";
import { useDispatch } from "react-redux";

function TasksCard({ tas }) {
    const [text, setText] = useState(tas.task);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(taskDone({ id: tas.id }));
    };
    const [editable, setEditable] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(taskEdited({ id: tas.id, modifiedTask: text }));
        setEditable(false);
    };

    return (
        <div>
            <Card style={{ width: "500px", marginLeft: "370px" }}>
                <Card.Body
                    style={{
                        display: "flex",
                    }}
                >
                    {editable ? (
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </form>
                    ) : (
                        <h3
                            style={{
                                textDecoration: tas.isDone
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            Task :{tas.task}
                        </h3>
                    )}
                    <Button
                        variant={tas.isDone ? "danger" : "success"}
                        style={{
                            marginRight: "20px",
                            marginLeft: "20px",
                        }}
                        onClick={handleClick}
                    >
                        {tas.isDone ? "Undo" : "Done"}
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => setEditable(!editable)}
                    >
                        Edit
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TasksCard;
