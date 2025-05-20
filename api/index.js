const express = require('express');
const app = express();

// Welcome route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to FortifyNote on Vercel!');
});

app.get("/verify", (req, res) => {
    const { userId, secret } = req.query;

    if(!userId || !secret) {
        return res.status(400).send("Invalid verify link");
    }
    const redirectUrl = `fortifynote://verify?userId=${userId}&secret=${secret}`;
    console.log(redirectUrl);
    res.redirect(redirectUrl);

})

// Reset password redirect route
app.get('/reset-password', (req, res) => {
    const { userId, secret } = req.query; // Extract userId and secret from query params
    if (!userId || !secret) {
        return res.status(400).send('Invalid recovery link');
    }
    // Redirect to FortifyNote app deep link
    const redirectUrl = `fortifynote://reset-password?userId=${userId}&secret=${secret}`;
    console.log(redirectUrl);
    res.redirect(redirectUrl);
});


app.listen(3000, (req, res) => {
    console.log(`FortifyNote Web App is running!`);
})

module.exports = app;