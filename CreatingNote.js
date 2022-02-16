import React,{ useState, useEffect } from "react";
import Axios from "axios";

function CreatingNote() {

    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[notesList, setNotesList] = useState([]);

    useEffect(()=> {
      Axios.get("http://localhost:3001/api/get").then((response)=> {
        // console.log(response);
        setNotesList(response.data);
      });
    },[]);


    function creatNewNote() {
      Axios.post("http://localhost:3001/api/insert", {
        noteTitle: title,
        noteContent: content
      });

      setNotesList([...notesList, {
        noteTitle: title,
        noteContent: content
      }]);
    }

    const deleteNote = (title) => {
        // console.log("deleted");
      Axios.delete(`http://localhost:3001/api/delete/${title}`);

    };

    return (
      <div>
        <form>
          <input onChange={(e)=> {
            setTitle(e.target.value);
          }} name="title"  placeholder="title here..." />

          <textarea onChange={(e)=> {
            setContent(e.target.value);
          }} name="content"  placeholder="contents here..." rows="3" />

          <button onClick={creatNewNote}> Add </button>
        </form>

        {notesList.map((value) => {
          return (
            <div className="note">
              <h1>{value.title}</h1>
              <p>{value.content}</p>

              <button type="submit" onClick={() => {deleteNote(value.title)}}> Delete </button>
            </div>
          );
        })}
      </div>
    );
}

export default CreatingNote;
