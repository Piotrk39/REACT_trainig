import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import Note from "./Note";


function App() {

    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      })
    }

    const deleteNote = (id) => {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        })
      })
    }

    return (
        <div>
            <Header />
            <Input 
             onAdd={addNote}
            />
            {notes.map((noteItem, index) => {
                return <Note
                    key={index}
                    id={index} 
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            })}
            <Footer />
        </div>
    );
};

export default App;