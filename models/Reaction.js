const { Schema, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: [true, 'Please enter your message.'],
            trim: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: [true, 'Please enter your username.']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => moment(date).format('DD MMM, YYYY [at] hh:mm a')
        },
    },
    {
        toJSON: {
            getter: true,
        },
        id: false,
    }
)


module.exports = reactionSchema;