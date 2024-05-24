const express = require("express");

const app = express();

const errormiddleware = (err, req, res, next) => {

    res.status(400).json({
        "status": false,
        "message": err.message || "Invalid information format"
    })

}

app.use(express.json());

// app.use(errormiddleware);

app.post("/user", (req, res, next) => {

    const { fname, lname, email, password, phone } = req.body;

    try {
        const passregx = /[!@#$%^&*(),.?":{}|<>]/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numericRegex = /[0-9]/;

        if (fname.charAt(0) !== fname.charAt(0).toUpperCase() || lname.charAt(0) !== lname.charAt(0).toUpperCase()) {
            throw new Error("First letter of first name/Last name should be capitalized.")
        }

        if (password.length < 8 || !passregx.test(password) || !uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !numericRegex.test(password)) {
            throw new Error("Password does not contains at least one special character, one uppercase letter, and one numeric character.")
        }

        if (!email.includes("@")) {
            throw new Error("email address provided must contain the @ symbol.")
        }


        if (phone.length < 10) {
            throw new Error("the phone number is too short")
        }

        res.status(200).json({
            status: true,
            "message": "valid Credentials"
        })

    } catch (error) {
        next(error)
    }
    
})

app.use(errormiddleware);

app.listen(8000, () => {
    console.log("server running");
})