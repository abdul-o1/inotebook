const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/inotebook';

const connectToMongo = () => {
    mongoose
        .connect(mongoURI)
        .then(() => {
            console.log('connected to mongo');
        })
        .catch((err) => {
            console.log('Error connecting to mongo:', err);
        });
};

module.exports = connectToMongo;
