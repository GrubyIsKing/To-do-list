const submit = document.getElementById("submit");
const notes = document.getElementById("notes");
const noteToAdd = document.getElementById("note");
const descriptionToAdd = document.getElementById("description");

function AddNote (){
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
    noteAdded.innerHTML = `<div class="noteValue"> ${noteToAdd.value} </div> <div class="noteDes">${descriptionToAdd.value} </div>`;
    if(noteToAdd.value == ""){
        alert("Notatka jest pusta!");
    }
    else{
        notesDiv.appendChild(noteAdded);
        notesDiv.appendChild(deleteNote);
        noteWrapper.appendChild(notesDiv);
        noteWrapper.appendChild(brake);
        notes.appendChild(noteWrapper);
    }
    const DeleteNote =()=>{
        notes.removeChild(noteWrapper);
    }
    deleteNote.addEventListener("click", DeleteNote);
    noteToAdd.value = "";
    descriptionToAdd.value = "";
}

submit.addEventListener("click", AddNote);

document.addEventListener('keyup', function(e) {
    if(e.key == "Enter"){
        AddNote();
    }
});