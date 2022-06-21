const mongoose = require('mongoose');
const statsSchema = new mongoose.Schema({
    character: {
        type: mongoose.Types.ObjectId,
        ref: 'Character'
    },
    strength: {
        type: Number,
        // required: [true, 'A value for strength is required.']
    },
    dexterity: {
        type: Number,
        // required: [true, 'A value for dexterity is required.']
    },
    constitution: {
        type: Number,
        // required: [true, 'A value for constitution is required.']
    },
    intelligence: {
        type: Number,
        // required: [true, 'A value for intelligence is required.']
    },
    wisdom: {
        type: Number,
        // required: [true, 'A value for wisdom is required.']
    },
    charisma: {
        type: Number,
        // required: [true, 'A value for charisma is required.']
    }
})
const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;