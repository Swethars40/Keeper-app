// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const _ = require('lodash');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extened: true}));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sskr1112',
  database: 'keeper-app-db'
});

db.connect((err)=> {
  if(err)
    console.log(err);
  else
    console.log("connected");
});

app.get('/api/get', (req, res)=> {
  // res.send("Helloo Swetha!!");
  const sqlInsert = "SELECT * FROM notes";
  db.query(sqlInsert, (err, result)=> {
    // console.log(result);
    // res.send("hiii")
    res.send(result);
  });
});

app.post('/api/insert', (req, res)=> {
  const title = req.body.noteTitle;
  const content = req.body.noteContent;
  console.log(title);
  console.log(content);
  const sqlInsert = "INSERT INTO notes (title,content) VALUES(?,?)";
  db.query(sqlInsert, [title, content], (err, result)=> {
    console.log("inserted successfully");
    if(err) {
      console.log(err);
    }
  });
});

app.delete("/api/delete/:noteTitle", (req, res)=> {
  console.log("delete");
  const ntitle = req.params.noteTitle;
  const sqlDelete = "DELETE FROM notes WHERE title=?";
  db.query(sqlDelete, ntitle, (err, result)=> {
    if(err)
      console.log(err);
    console.log("deleted successfully!");
  });
});

app.listen(3001, (req, res)=> {
  console.log("server started on port 3001");
});
