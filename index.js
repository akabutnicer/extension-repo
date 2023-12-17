const express = require("express");
const app = express();
const port = 3000;
app.use("./exploit/");
/*
  */
app.get("./gtag/js", (req, res) => {
   if (!req.params.id) return;
   res.sendFile("xss.js");
});

app.listen(process.env.port || port, () => {
   console.log('listening on', port);
});
