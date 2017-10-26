$(function(){

    let model = {
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function(obj) {
            let data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };


    let octopus = {
        addNewNote: function(noteStr) {
            model.add({
                content: noteStr,
                date: this.getTime()
            });
            view.render();
        },

        getNotes: function() {
            return model.getAllNotes().reverse();
        },

        getTime: function() {
          let date = (new Date()).toString(); //Thu Oct 26 2017 07:11:55 GMT+0530 (India Standard Time)
          return date.substr(4,20); //Oct 26 2017 07:11:55
        },

        init: function() {
            model.init();
            view.init();
        }
    };


    let view = {
        init: function() {
            this.noteList = $('#notes');
            let newNoteForm = $('#new-note-form');
            let newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function(){
            let htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content + '<span class="note-date">'+ note.date+'</span>'
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

    octopus.init();
});
