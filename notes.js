const fs  = require('fs');

const getNotes = () => {
return "your notes!"

}

const addNote = (title, body) => {
    
    const notes = loadNotes()

    const duplicateNotes = notes.filter((e)=> 
    {
        return e.title === title
    });

    if(duplicateNotes.length === 0){

        notes.push({
            title: title,
            body: body
        })  
    
    saveNotes(notes)
    console.log("note with title: "+title+" added successfully");
    }
    else{
        console.log("title already taken");


}
}

const saveNotes = (notes) => {
    
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
    
}




const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch(e){
    return []
    }
  }

 

const removeNote = (title) => {


}

module.exports = {

    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote

}