import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from '../utils/apiErrors.js'
import { User } from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import { upload } from "../middlewares/multer.middleware.js";
import { apiResponse } from "../utils/apiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, username, password } = req.body
    console.log(email);
    if ([email, fullName, username, password].some((values) => {
        if (values.trim() === "") {
            return true;
        }
    })) {
        throw new apiError(400, "some fields are empty")
    }

    const existedUser = User.findOne({
        $or: [{ email }, { fullName }]
    })
    if (existedUser) throw new apiError(409, "user already exists")
        const avatarLocalPath=req.files?.avatar[0]?.path
        const coverImageLocalPath= req.files?.coverImage[0]?.path
    if(!avatarLocalPath){
        throw new apiError(400,"avatar is required")
    }
    const avatar= await uploadOnCloudinary(avatarLocalPath);
    const coverImage=await uploadOnCloudinary(cover)
    if(!avatar){
        throw new apiError(400,"avatar is required")
    }  
   const user= await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    }) 
    const createdUser= await user.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new apiError(500,"user nahi bana bhai ")
    }
    return res.status(201).json(new apiResponse(200,createdUser,"user registered successfully"))
})
export { registerUser }