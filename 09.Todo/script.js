let btn = document.getElementById("taskAddBtn");
let inp = document.getElementById("taskAdd");
let ul = document.getElementById("unorderList");

btn.addEventListener("click", function () {
  if (inp.value.trim() === "") {
    alert("Invalid task");
  } else {
    let task = inp.value;
    let listItem = document.createElement("li");

    let check = document.createElement("input");
    check.type = "radio";
    check.name = "taskRadio";

    let deletebtn = document.createElement("button");
    deletebtn.classList.add("delete");
    deletebtn.innerText = "Delete";

    deletebtn.addEventListener("click", function () {
      deletebtn.parentElement.remove();
    });

    listItem.innerText = task;
    listItem.appendChild(deletebtn);
    ul.appendChild(listItem);
    inp.value = "";
  }
});
