import { asyncHandler } from "../utils/asyncHandler.js";
import { Apierror } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/Apiresponse.js";

// Login function
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password === "password") {
    return res.status(200).json({ message: "Login successful" });
  }
  return res.status(400).json({ message: "Invalid credentials" });
});

// Register user function
const registerUser = asyncHandler(async (req, res) => {
    //get user details from frontend
    // check validation - not empty
    // chech if uder already exists: username, email
    // chek for images, check for avatar
    // upload them on cloudinary
    // create user object - create entry i db
    // remove password and refresh token field from response
    // check for user creation
    // return yes

   const { fullName, email, username, password} = req.body
   console.log("email", email);

   if(
    [fullName, email, username, password].some((field) =>
    field?.trim() === "")
   ) {
      throw new Apierror(400, " All fields are required");
   }

   const existedUser = User.findOne({
    $or: [{username}, {email}]
   })

   if(existedUser){
    throw new Apierror(409, "username with email or usernal is already existed")
   }

   const avatarLocalPath = req.file?.avatar[0]?.path;
   const coverImageLocalPAth = req.file?.coverImage[0]?.path;

   if(!avatarLocalPath) {
    throw new Apierror(400, " Avatar file is required")
   }
// uploading onc cloudinary
   const avatar = await uploadOnCloudinary(avatarLocalPath)
   const coverImage = await uploadOnCloudinary(coverImageLocalPAth)
   if(!avatar) {
    throw new Apierror(400, " Avatar file is required")
   }

   const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase()
   })

   const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
   )

   if(!createdUser) {
    throw new Apierror(500, "Something went wrong while registering the user ")
   }

   return res.status(201, createdUser, " User register Succesfully")

});

export { login, registerUser };

