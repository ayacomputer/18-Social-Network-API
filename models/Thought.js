const { Schema, model } = require('mongoose');
const reactionSchema = require('Reaction');

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
            //need to format date
            // get:
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