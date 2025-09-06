import validator from "validator"
import bcrypt from "bcrypt"
import {v2 as cloudinary}  from "cloudinary"
import doctorModel from "../models/docterModel.js"


/// API   for adding doctor
const addDoctor = async (req,res ) => {
     try{
         
         const {name, email , password, speciality, degree, experience, about, fees, address }  = req.body    //Client se jo data aaya (req.body) usme se sab details nikal liye.
         const imageFile = req.file  //   Doctor ki photo file (req.file) se mili.
        
        //  console.log({name, email , password, speciality, degree, experience, about, fees, address})

        //  checking for all data to add doctor
       
        if(!name || !email || !password || !speciality || !degree || !experience  ||  !about || !address ){
             return  res.json({success:false, messege:"Missing Details"})
        }

        //   validating email format
        if(!validator.isEmail(email)){
             return  res.json({success:false, messege:"Please enter a Valid email"})
        }

        //   validating strong password

        if(password.length<8){
            return res.json({success:false, messege: "Please enter a Strong password"})
        }
      
        //   hashing doctor   password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //   upload image to cloudniary

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {     // to create object
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()

        }

         const newDoctor = new doctorModel(doctorData)
         await newDoctor.save()
     
         res.json({success:true,messege: "Doctor Added"})


     } catch (error) {

        console.log(error )
        res.json({success:false,messege:error.messege})
     }
}
 
export   {addDoctor}