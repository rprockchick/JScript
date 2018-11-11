    const notes = [{
        title: 'My next trip',
        body: 'Would like to go to France'
    },
    {
        title: 'Habbits',
        body: 'Stop letting your boss get to you'
    },
    {
        title: 'Home improve',
        body: 'Bring more green plants'
    }
    ]


    //find note by passing args to a function
    const findNote = function(notes,noteTitle) {
        const index = notes.findIndex(function(note, index){
            return note.title === noteTitle
        })
        return notes[index]
    }
    
    const notetofind = findNote(notes,'Habbits')
    console.log(notetofind)