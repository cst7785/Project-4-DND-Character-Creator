const mongoose = require('mongoose');
const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A name is required.']
    },
    class: {
        type: String,
        required: [true, 'A class is required.']
    },
    subclass: {
        type: String
    },
    race: {
        type: String,
        required: [true, 'A race is required.']
    },
    level: {
        type: Number,
        min: [1, 'The minimium is level 1.'],
        required: [true, 'A value for level is required.']
    },
    alignment: {
        type: String
    },
    experience: {
        type: Number
    },
    image: {
        type: String
    },
    armorClass: {
        type: Number,
        required: [true, 'A value for armor class is required.']
    },
    speed: {
        type: Number,
        required: [true, 'A value for speed is required.']
    },
    hitPoints: {
        type: Number,
        required: [true, 'A value for hitpoints is required.']
    }
},
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema)
const Character = mongoose.model('Character', characterSchema);

module.exports = Character;