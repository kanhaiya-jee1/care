import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,  // name is required
      trim: true
    },
    email: {
      type: String,
      required: true,  // email is required
      unique: true,    // email must be unique
      lowercase: true
    },
    password: {
      type: String,
      required: true   // password is required
    },
    specialization: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
