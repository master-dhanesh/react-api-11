const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

// exports.dbconfig = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO);
//         console.log("DB Connected");
//     } catch (error) {
//         console.log(error);
//     }
// };
