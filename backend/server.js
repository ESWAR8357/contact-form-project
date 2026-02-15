const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    if (!validateEmail(email)) {
        return res.status(400).json({ error: "Invalid email address" });
    }

    console.log(`Contact Form Submission:`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('---');

    res.json({ message: "Thank you for contacting us! We'll get back to you soon." });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});