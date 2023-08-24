//make requires
const express = require("express");
const path = require("path");
const fs = require("fs");
const {v4: uuidv4 } = require('uuid')

// express and middleware
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Aces your server is jammin' on port ${PORT}`);
});
//api routing app.get
app.get("/", (req, res) => {
    res.sendFile("./public/index.html", { root: __dirname });
  });
  
  app.get("/note", (req, res) => {
    res.sendFile("./public/note.html", { root: __dirname });
  });

  app.get("/api/note", (req, res) => {
    const db = path.join(__dirname, "./db/db.json");
    const notes = JSON.parse(fs.readFileSync(db, "utf8"));
    res.json(notes);
  });
//app.post
app.post("/api/note", (req, res) => {
    try {
      const db = path.join(__dirname, "./db/db.json");
      const notes = JSON.parse(fs.readFileSync(db, "utf8"));
      const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
      };
      notes.push(newNote);
      fs.writeFileSync(db, JSON.stringify(notes));
      res.json(newNote);
    } catch (err) {
      console.log("Note was not deleted", err);
      res.status(500).send("Server unable to implement delete.");
    }
  });
//app.delete

//connection
//note delete

//add event listener
//view note