const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");


const saveNotes = () => {
    // alert("clicked");
    const notes = document.querySelectorAll(".note textarea");
    // console.log(notes);
    const data = [];
    notes.forEach((note)=> data.push(note.value))
    // console.log(data);

    localStorage.setItem("notes",JSON.stringify(data));
}


addBtn.addEventListener("click", function(){
    // alert("Clicked");
    addNote();
})


// <div class="note">
    //         <div class="tool">
    //             <i class="fas fa-save"></i>
    //             <i class="fas fa-trash"></i>
    //         </div>
    //         <textarea></textarea>
    //     </div>
    


const addNote = () => {
    // alert("Add Note");
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <i class="save fas fa-save"></i>
            <i class="trash fas fa-trash"></i>
        </div>
        <textarea></textarea>
    `;

    // to delete note
    note.querySelector(".trash").addEventListener("click",function(){
        note.remove();
    });

    // to save note
    note.querySelector(".save").addEventListener("click", function(){
        saveNotes();
    });

    main.appendChild(note);
    saveNotes();
}

