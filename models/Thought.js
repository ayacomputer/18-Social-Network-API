const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'Please enter Your Thoughts.'],
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => moment(date).format('DD MMM, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: [true, 'Please enter username.'],
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getter: true,
        },
        id: false,
    }
);


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


const Thought = model('thought', thoughtSchema);

module.exports = Thought;