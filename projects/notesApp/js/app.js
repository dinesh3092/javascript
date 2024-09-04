const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");




addBtn.addEventListener("click", function(){
    // alert("Clicked");
    addNote();
})



const saveNotes = () => {
    //alert("clicked");
    const notes = document.querySelectorAll(".note textarea");
    //console.log(notes);
    const data = [];
    notes.forEach((note)=> data.push(note.value));
    //console.log(data);

    if(data.length === 0){
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
}








// <div class="note">
    //         <div class="tool">
    //             <i class="fas fa-save"></i>
    //             <i class="fas fa-trash"></i>
    //         </div>
    //         <textarea></textarea>
    //     </div>
    


const addNote = (text = "") => {
    // alert("Add Note");
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <i class="save fas fa-save"></i>
            <i class="trash fas fa-trash"></i>
        </div>
        <textarea>${text}</textarea>
    `;

    // to delete note
    note.querySelector(".trash").addEventListener("click",function(){
        note.remove();
        saveNotes();
    });

    // to save note
    note.querySelector(".save").addEventListener("click", function(){
        saveNotes();
    });

   
    note.querySelector("textarea").addEventListener("focusout", function(){
        saveNotes();
    })
    
    main.appendChild(note);
    saveNotes();
}



// self calling function
(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        //console.log(lsNotes);

        if(lsNotes === null)
        {
            addNote();
        }
        else{
            lsNotes.forEach((lsNote) => {
                addNote(lsNote);
            })
        }
    }
)()