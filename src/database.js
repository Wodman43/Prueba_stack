const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-tasks'
// const URI = 'mongodb://127.0.0.1/mern-tasks'
mongoose.connect(URI)
    .then(db=> console.log('DB si conecta'))
    .catch(err => console.error(err));

    module.exports = mongoose;