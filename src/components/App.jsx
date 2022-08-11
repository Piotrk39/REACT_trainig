import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import Note from "./Note";


function App() {

    const [items, setItems] = useState([]);

    const addItem = (note) => {
      setItems(prevItems => {
        return [...prevItems, note];
      });
      console.log(note);
    }

    const deleteItem = (id) => {
        setItems(prevItems => {
          return prevItems.filter((item, index) => {
            return index !== id;
          });
        });
    }

    return (
        <div>
            <Header />
            <Input 
             onAdd={addItem}
            />
            {items.map((note, index) => (
                <Note 
                    key={index}
                    id={index}
                    text={note}
                    onClick={deleteItem}
                />
            ))}
            <Footer />
        </div>
    );
};

export default App;