var checkDayList = document.getElementsByClassName("checkDayTask");
//iterate for every checkbox and add them the event listener
for (const checkDay of checkDayList) {
  checkDay.addEventListener("click", function () {
    //use the id of the checkbox to look for the id of the task and cross it-off
    let idDayTask = this.id;
    idDayTask = idDayTask.slice(idDayTask.length - 1);
    let dayTask = document.getElementById("dayTask" + idDayTask);
    dayTask.classList.toggle("cross_ofTask");
  });
}

var checkWorkList = document.getElementsByClassName("checkWorkTask");
for (const checkWork of checkWorkList) {
  console.log("hola");
  checkWork.addEventListener("click", function () {
    let idWorkTask = this.id;
    idWorkTask = idWorkTask.slice(idWorkTask.length - 1);
    let workTask = document.getElementById("workTask" + idWorkTask);
    workTask.classList.toggle("cross_ofTask");
  });
}
