const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth');
const app = express();
const PORT = config.get("serverPort");
const MongoUri = config.get("mongoUri");

app.use(express.json());
app.use('/api/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect(MongoUri);

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        throw e;
    }
}

start();