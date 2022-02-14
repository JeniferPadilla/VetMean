import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    
    name: String,
    phone:String,
    email:String,
    direction:String,
    password:String,
    registerDate:{type:Date, default:Date.now},
    debStatus:Boolean,
});

const user = mongoose.model("users", userSchema);
export default user;
