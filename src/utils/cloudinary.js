// Import the cloudinary SDK (v2 version) and the Node.js 'fs' module to work with file system
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// 🔧 Configure cloudinary with your account credentials using environment variables
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET, 
});

// 📤 Async function to upload a file to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
    try {
        // 🚫 If no file path is provided, return null
        if (!localFilePath) return null;

        // ✅ Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto", // Automatically detect the file type (image, video, etc.)
        });

        // ✅ File uploaded successfully, log the URL
        console.log("File is uploaded on Cloudinary:", response.url);

        // 🧾 Return the full response object containing Cloudinary details
        return response;

    } catch (error) {
        // ❌ If upload fails, delete the file from the local system
        fs.unlinkSync(localFilePath); // Remove the temporary file
        console.error("Upload failed:", error.message);
        return null;
    }
}

// 🚀 Export the function so it can be used in other parts of your project
export { uploadOnCloudinary };


    