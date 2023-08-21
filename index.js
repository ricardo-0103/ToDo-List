import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let dayTasks = [];
let workTasks = [];

app.get("/", (req, res) => {
  //today's date
  var date = new Date();
  let dayOfWeek = date.toLocaleDateString("en", { weekday: "long" });
  let day = date.getDate();
  let month = date.toLocaleString("en", { month: "long" });
  let year = date.getFullYear();

  res.render("index.ejs", {
    dayOfWeek: dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1),
    month: month[0].toUpperCase() + month.slice(1),
    day: day,
    year: year,
    //send the day tasks to the user
    dayTasks: dayTasks,
  });
});

app.get("/work", (req, res) => {
  res.render("workList.ejs", { workTasks: workTasks });
});

app.post("/submitDayTasks", (req, res) => {
  //add DayTask to the list
  dayTasks.push(req.body["task"]);
  res.redirect("/");
});

app.post("/submitWorkTasks", (req, res) => {
  //add WorkTask to the list
  workTasks.push(req.body["task"]);
  res.redirect("/work");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
