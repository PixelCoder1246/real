const newNote = document.querySelector(".new-note-card");
const mainGrid = document.querySelector(".grid");
const textArea = document.querySelector("textarea");

function openNote() {
    newNote.classList.remove("hidden");
    newNote.classList.add("scale");
    mainGrid.classList.add("blur");
}


function closeNote() {
    newNote.classList.add('hidden-animate');
    setTimeout(() => {
        textArea.value = "";
        newNote.classList.add('hidden');
        newNote.classList.remove('hidden-animate');
        mainGrid.classList.remove("blur");
    }, 500);
}


function confirmAdd() {
    closeNote();
    const addedNote = document.createElement("div");
    addedNote.setAttribute("class", "added-note");

    const configButton = document.createElement("div");
    configButton.setAttribute("class", "config-button");
    configButton.setAttribute("class", "config-btn")

    const editNote = document.createElement("button");
    editNote.setAttribute("class", "edit-note");
    editNote.innerHTML = "Edit";
    
    const deleteNote = document.createElement("button");
    deleteNote.setAttribute("class", "delete-note");
    deleteNote.innerHTML = "Delete";

    const noteText = document.createElement("p");
    noteText.setAttribute("class", "note-text");

    addedNote.appendChild(configButton);
    configButton.appendChild(editNote);
    configButton.appendChild(deleteNote);
    addedNote.appendChild(noteText);

    noteText.innerHTML = textArea.value;

    setTimeout(() => {
        const noteDiv = document.querySelector(".note-div");
        noteDiv.appendChild(addedNote);
        noteDiv.classList.remove("hidden");
        noteDiv.classList.add("scale");
    }, 500);
}
function cancelAdd() {
    closeNote();
    setTimeout(() => {
        textArea.value = "";
    }, 500);
}

const plusButton = document.querySelector("#add-task");
plusButton.addEventListener('click', openNote);
const cancelButton = document.querySelector(".cancel-add");
cancelButton.addEventListener('click', cancelAdd);
const saveButton = document.querySelector(".save-add");
saveButton.addEventListener('click', confirmAdd); 