// 📦 Import multer, a middleware for handling file uploads in Node.js
import multer from "multer";

// 🧰 Define storage configuration using multer's diskStorage engine
const storage = multer.diskStorage({
  
  // 📁 'destination' defines where the uploaded files should be stored
  destination: function (req, file, cb) {
    cb(null, './public/temp'); // Store files in the 'public/temp' folder
  },

  // 🏷️ 'filename' defines how the uploaded file should be named
  filename: function (req, file, cb) {
    // Create a unique suffix using current timestamp and a random number
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    
    // Save the file using its original field name + unique suffix
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

// 🚀 Export a configured multer instance with the defined storage settings
export const upload = multer({ storage });
