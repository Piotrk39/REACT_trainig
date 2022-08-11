import React, { useState } from "react";

function Input(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChangeTitle = (event) => {
        event.persist();
        setNote((note) => ({
            ...note,
            title: event.target.value
        }));
    };

    const handleChangeContent = (event) => {
        event.persist();
        setNote((note) => ({
            ...note,
            content: event.target.value
        }));
    };

    return (
        <div>
            <form>
                <input 
                 onChange={handleChangeTitle}
                 value={note.title}
                 type="text"
                 name="title" 
                 placeholder="Title"
                ></input>
                <input
                 onChange={handleChangeContent}
                 value={note.content} 
                 type="text"
                 name="content" 
                 placeholder="Take a note..."></input>
                <button
                 type="button"
                 onClick={() => {
                    props.onAdd(note);
                    setNote("");
                 }}
                >
                 <span>Add</span>
                </button>
            </form>
        </div>
    )
}

export default Input;