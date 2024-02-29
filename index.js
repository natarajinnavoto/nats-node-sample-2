const express = require("express");

const app = express();

app.get ("/", (req, res) => {
    res.json({
        hey: "This", 
        welcome: "To",
        to: "Heroku",
        deployment: "Sample",

    });
});

app.listen(process.env.PORT || 6969);
