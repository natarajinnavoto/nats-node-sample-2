const express = require("express");

const app = express();

app.get ("/", (req, res) => {
    res.json({
        hey: "Karthik", 
        welcome: "To",
        to: "Heroku Demo",
        sample: "Deployment",

    });
});

app.listen(process.env.PORT || 6969);
