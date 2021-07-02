// Nhớ cài Mongoose
//  npm      i       --S      mongoose
const mongoose = require("mongoose");


/// Thông tin Database Collection / Tables
const userName = "more";
const userPassword = "bighirosix0705001";

const dbName = "ATN_SHOP";

const url = "mongodb+srv://" +
    userName + ":" + userPassword +
    "@cluster0.7xo7z.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";

function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}