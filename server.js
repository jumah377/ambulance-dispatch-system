const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ambulanceDispatch', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// User model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Ambulance model
const ambulanceSchema = new mongoose.Schema({
    ambulanceNumber: { type: String, required: true, unique: true },
    capacity: { type: Number, required: true },
    location: { type: String, required: true }
});
const Ambulance = mongoose.model('Ambulance', ambulanceSchema);

// Request model
const requestSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ambulanceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ambulance', required: true },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true },
    status: { type: String, enum: ['pending', 'in_progress', 'completed'], default: 'pending' }
});
const Request = mongoose.model('Request', requestSchema);

// Hospital model
const hospitalSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    contact: { type: String, required: true }
});
const Hospital = mongoose.model('Hospital', hospitalSchema);

// Log model
const logSchema = new mongoose.Schema({
    requestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Request', required: true },
    action: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});
const Log = mongoose.model('Log', logSchema);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});