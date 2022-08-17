import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Input(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [expand, setExpand] = useState(false)

    const handleZoom = () => {
        setExpand(true);
    }

    const handleZoomOut = () => {
        setExpand(false);
    }

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
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form
             className="create-note"
            >
                <textarea 
                 onClick={handleZoom}
                 onChange={handleChange}
                 value={note.title}
                 type="text"
                 name="title" 
                 placeholder="Title"
                 rows={1}
                >
                </textarea>
                {expand &&
                <textarea
                 onClick={handleZoom}
                 onChange={handleChange}
                 value={note.content} 
                 type="text"
                 name="content" 
                 placeholder="Take a note..."
                 rows={expand ? "2" : "1"}
                >
                </textarea>
                }
                <Zoom in={expand}>
                 <Fab sx={{ backgroundColor: "#f5ba13" }} onClick={submitNote} onBlur={handleZoomOut}>
                  <AddIcon sx={{ color: "black" }}/>
                 </Fab>  
                </Zoom>             
            </form>
        </div>
    )
}

export default Input;