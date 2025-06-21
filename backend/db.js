var mongoose = require("mongoose");
mongoose
.connect(
    "mongodb+srv://EdwinBenny:edwin@cluster0.uftd2wm.mongodb.net/hoteldb?retryWrites=true&w=majority&appName=Cluster0"
).then(() => {
    console.log("Db connected")
})
.catch((err) =>{
    console.log(err)
});