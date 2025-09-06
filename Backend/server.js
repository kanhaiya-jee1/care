import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import connectDB from "./config/mongodb.js";

dotenv.config({
  path: "./.env",
});

// app config
const app = express();

connectCloudinary()


// middlewares
app.use(express.json());
app.use(cors());

  //  api endpoints
app.use('/api/admin' ,adminRouter)
// localhost:4000/api/admin


app.get("/", (req, res) => {
  res.send("API WORKING  Greate");
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running on port ${process.env.PORT || 4000}`);
    });
  })
  .catch((error) => {
    console.log("mongoDB connection failed !!!", error);
  });