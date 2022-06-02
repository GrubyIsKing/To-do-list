const submit = document.getElementById("submit");
const notes = document.getElementById("notes");
const noteToAdd = document.getElementById("note");

const AddNote =()=>{
    let noteAdded = document.createElement("div");
    let deleteNote = document.createElement("button");
    let notesDiv = document.createElement("div");
    let noteWrapper = document.createElement("div");
    let brake = document.createElement("hr");
    noteWrapper.classList.add("noteWrapper");
    notesDiv.classList.add("noteChild");
    noteAdded.classList.add("note");
    deleteNote.classList.add("noteDelete");
    deleteNote.innerHTML = "usuń";
    noteAdded.innerHTML = noteToAdd.value;
    notesDiv.appendChild(noteAdded);
    notesDiv.appendChild(deleteNote);
    noteWrapper.appendChild(notesDiv);
    noteWrapper.appendChild(brake);
    notes.appendChild(noteWrapper);
    const DeleteNote =()=>{
        notes.removeChild(noteWrapper);
    }
    deleteNote.addEventListener("click", DeleteNote);
}

submit.addEventListener("click", AddNote);