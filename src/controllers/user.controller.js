import { asyncHandler } from "../utils/asyncHandler.js";

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
  return res.status(200).json({
    message: "User registered successfully",
  });
});

export { login, registerUser };

