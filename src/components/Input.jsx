import React, { useState } from "react";

function Input(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            };
        });
    };

    const submitNote = (event) => {
        props.onAdd(note);
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input 
                 onChange={handleChange}
                 value={note.title}
                 type="text"
                 name="title" 
                 placeholder="Title"
                ></input>
                <textarea
                 onChange={handleChange}
                 value={note.content} 
                 type="text"
                 name="content" 
                 placeholder="Take a note...">
                </textarea>
                <button
                 type="button"
                 onClick={submitNote}>
                 <span>Add</span>
                </button>
            </form>
        </div>
    )
}

export default Input;