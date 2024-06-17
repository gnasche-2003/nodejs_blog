const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://chuongpqc2206:Pqc220620031k@cluster0.ce39rly.mongodb.net/f8_education_dev",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        console.log("Connected to MongoDB successfully!!!");
    } catch (error) {
        console.log("Connected to MongoDB failure??? ");
    }
}

module.exports = { connect };
