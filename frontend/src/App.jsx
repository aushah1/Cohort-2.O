import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  async function fetchNotes() {
    let notes = await axios.get("http://localhost:3000/api/notes");
    setNotes(notes.data.notes);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    await axios.post("http://localhost:3000/api/create", {
      title,
      description,
    });
    e.target.reset();
    fetchNotes();
  };
  const handleNoteChange = (id, field, value) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note._id === id ? { ...note, [field]: value } : note,
      ),
    );
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/delete/${id}`);
    fetchNotes();
  };
  const handleEdit = async (e, id) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    await axios.patch(`http://localhost:3000/api/edit/${id}`, {
      title,
      description,
    });
    setEditingId(null);
    fetchNotes();
  };
  return (
    <div className="app">
      <div className="container">
        <h2 className="heading">My Notes</h2>

        <form className="note-form" onSubmit={handleSubmit}>
          <input name="title" type="text" placeholder="Note title" required />
          <textarea
            name="description"
            placeholder="Write your note..."
            required
          />
          <button>Add Note</button>
        </form>

        <div className="notes">
          {notes.map((note) => {
            const isEditing = editingId === note._id;
            return (
              <div key={note._id} className="note">
                <form
                  className="edit-form"
                  onSubmit={(e) => {
                    handleEdit(e, note._id);
                  }}>
                  <input
                    name="title"
                    className={` ${isEditing ? "active" : "non-active"}`}
                    type="text"
                    value={note.title}
                    readOnly={!isEditing}
                    onChange={(e) => {
                      handleNoteChange(note._id, "title", e.target.value);
                    }}
                  />
                  <textarea
                    name="description"
                    className={` ${isEditing ? "active" : "non-active"}`}
                    value={note.description}
                    readOnly={!isEditing}
                    onChange={(e) => {
                      handleNoteChange(note._id, "description", e.target.value);
                    }}
                  />
                  <button className={`submit ${isEditing ? "" : "hidden"}`}>
                    Submit
                  </button>
                </form>

                <div className="actions">
                  <button
                    className="edit"
                    onClick={() => {
                      if (editingId == note._id) setEditingId(null);
                      else setEditingId(note._id);
                    }}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => {
                      handleDelete(note._id);
                    }}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
