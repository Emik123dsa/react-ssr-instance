const express = require("express");

const app = express();

const mongoose = require("mongoose");

const uri = "mongodb+srv://debian-thief:Rjyafqyvtyn15@cluster0-o72en.mongodb.net/__vendor?retryWrites=true&w=majority";

app.use("/api/", require("./Router"));

start = async () => {
    try {
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Mongo is listening on port 3001");
        app.listen(3001);
    } catch (e) {
        console.error(e);
        process.exit();
    }
}

start();

