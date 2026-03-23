const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secretKey = 'your-secret-key'; // Change this to a strong secret key

// Generate a JWT token
const generateToken = (userId) => {
    const payload = { userId };
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

// Hash password
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// Verify password
const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Verify JWT token
const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        return null; // Token is not valid
    }
};

module.exports = { generateToken, hashPassword, verifyPassword, verifyToken };