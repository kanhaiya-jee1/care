import mongoose, { connect } from "mongoose";    // library

const  ConnectDB = async ()  => {

     mongoose.connection.on('connected', () => console.log("Database Connected"))
     await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)  

}

export default  ConnectDB;