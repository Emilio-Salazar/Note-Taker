const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

app.use(express.json());
app.use(express.static("public"));

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });