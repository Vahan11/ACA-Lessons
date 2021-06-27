// Select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let listArray;
let id;

//Get item from local storage
let data = localStorage.getItem("TASK");

if (data) {
  listArray = JSON.parse(data);
  id = listArray.length;
  loadList(listArray);
} else {
  listArray = [];
  id = 0;
}

function loadList(array) {
  array.forEach(function (item) {
    addTask(item.name, item.id, item.done, item.deleted);
  });
}

// Show todays date
const today = new Date();
const options = {
  day: "numeric",
  weekday: "long",
  month: "short",
};

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addTask(text, id, done, deleted) {
  if (deleted) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const item = `<li class="item" job="element">
					<i class="fa ${DONE} co" job="complete" id="${id}"></i>
					<p class="text ${LINE}" job="taskname">${text}</p>
					<i class="fa fa-pencil-square-o pen" job="edit" id="${id}"></i>
					<i class="fa fa-floppy-o save hide" job="save" id="${id}"></i>
					<i class="fa fa-trash-o de" job="delete" id="${id}"></i>
				  </li>`;

  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

// Add item to the list
document.addEventListener("keyup", function (e) {
  const text = input.value;

  if (e.keyCode === 13) {
    if (text) {
      addTask(text, id, false, false);

      listArray.push({
        name: text,
        id: id,
        done: false,
        deleted: false,
      });

      // Set item to local storage
      localStorage.setItem("TASK", JSON.stringify(listArray));

      id++;
    }
    input.value = "";
  }
});

// Complete task
function completeTask(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  listArray[element.id].done = listArray[element.id].done ? false : true;
}

//Edit task
function editTask(element) {
  if (listArray[element.id].done) {
    return;
  }

  element.classList.add("hide");
  element.parentNode.querySelector(".fa-floppy-o").classList.remove("hide");
  element.parentNode
    .querySelector(".text")
    .setAttribute("contenteditable", true);
  setCaret(element.parentNode.querySelector(".text"));
}

// Save edited task
function saveTask(element) {
  element.classList.add("hide");
  element.parentNode
    .querySelector(".fa-pencil-square-o")
    .classList.remove("hide");
  element.parentNode
    .querySelector(".text")
    .setAttribute("contenteditable", false);

  let text = element.parentNode.querySelector(".text").innerHTML;

  listArray[element.id].name = text;
}

// Delete task
function deleteTask(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  listArray[element.id].deleted = true;
}

// Target the elements created dynamically
list.addEventListener("click", function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if (elementJob === "complete") {
    completeTask(element);
  } else if (elementJob === "edit") {
    editTask(element);
  } else if (elementJob === "delete") {
    deleteTask(element);
  } else if (elementJob === "save") {
    saveTask(element);
  }

  // Set item to local storage
  localStorage.setItem("TASK", JSON.stringify(listArray));
});

//Clear the local storage
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// Filter
const select = document.getElementById("filter-select");

select.addEventListener("change", function () {
  let value = this.value;
  let elements = document.getElementById("list").children;

  if (value === "active") {
    listArray.forEach(function (item) {
      if (item.done) {
        elements[item.id].classList.add("hide");
      } else if (elements[item.id].classList.contains("hide")) {
        elements[item.id].classList.remove("hide");
      }
    });
  }

  if (value === "done") {
    listArray.forEach(function (item) {
      if (!item.done) {
        elements[item.id].classList.add("hide");
      } else if (elements[item.id].classList.contains("hide")) {
        elements[item.id].classList.remove("hide");
      }
    });
  }

  if (value === "all") {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("hide")) {
        elements[i].classList.remove("hide");
      }
    }
  }
});

// Setting the caret to editable area
function setCaret(element) {
  var range = document.createRange();
  var sel = window.getSelection();

  range.setStart(element.childNodes[0], 3);
  range.collapse(true);

  sel.removeAllRanges();
  sel.addRange(range);
}
