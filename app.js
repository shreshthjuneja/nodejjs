//document parsing with yargs

const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');// customize yargs version/


//add, remove, read, list;

yargs.command({

    command: 'add',
    describe: 'add a new note',
    builder:{

        body:{

            describe: "the shopping list of items to buy",
            demandOption: true,
            type: 'string'

        },

        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }

    },

    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }

});

yargs.command({

    command: 'remove',
    describe: 'remove a note',
    builder:{

        title:{
            describe: 'title name to be removed',
            demandOption: true,
            type:'string'
        }
,
        body:{
            describe: 'the body od deleted title',
            demandOption: false,
            type: 'string'
        }
    },
    
    handler: function(argv){
        notes.removeNote(argv.title);    
    }

});

yargs.command({

    command: 'list',
    describe: 'listing all notes',
    handler: function(){
        console.log('listing all notes');
    }

});

yargs.command({

    command: 'read',
    describe: 'reading a note',
    handler: function(){
        console.log('reading a note');
    }

});


yargs.parse() ;