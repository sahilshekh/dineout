
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: { type: 'string', required: true },
    phone: { type: 'string', required: false },
    email: { type: 'string', required: false },
    image: { type: 'string' },
    token: { type: 'string' }

});

module.exports = mongoose.model('User', userSchema);