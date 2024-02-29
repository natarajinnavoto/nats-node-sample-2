const express = require("express");

const app = express();

app.get ("/", (req, res) => {
    res.json({
        Hey: "Karthik", 
        Welcome: "To",
        Heroku: "Demo",
        Sample: "Deployment",

    });
});

app.listen(process.env.PORT || 6969);
