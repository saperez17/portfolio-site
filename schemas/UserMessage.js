const mongoose = require('mongoose');

const userMessageSchema = new mongoose.Schema({
    fullname: String,
    email_address: String,
    content: String
});

// const UserMessage = mongoose.model('UserMessage', userMessageSchema);

// module.exports = mongoose.model('UserMessage', userMessageSchema)
module.exports = userMessageSchema;
