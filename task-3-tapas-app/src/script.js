const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const checkboxes = document.querySelectorAll("[name=checkbox]");

let store = localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList"))
  : [];

renderList(store);

const AddToList = (event) => {
  event.preventDefault();

  const item = document.querySelector('[name="item"]').value.trim();

  if (item) {
    const list = { text: item, isChecked: false };
    store = [...store, list];
    renderList(store);
    localStorage.setItem("todoList", JSON.stringify(store));
  }
  addItems.reset();
};

function renderList(lists = []) {
  itemsList.innerHTML = lists
    .map(
      (list, i) =>
        `
    <li>
    <input onclick ='checkItem(${i})' type="checkbox" ${
          list.isChecked ? "checked" : ""
        } id=${i} />
    <label for=${i}> <span>${list.text}</span></label>
    <button onclick ='deleteItem(${i})' class ='delete' id=${i}>X</button>
    </li>
    `
    )
    .join("");
}

function deleteItem(index) {
  const storeCopy = [...store];

  storeCopy.splice(index, 1);
  0;

  store = storeCopy;
  localStorage.setItem("todoList", JSON.stringify(store));
  renderList(store);
}

function checkItem(index) {
  const storeCopy = [...store];

  storeCopy[index].isChecked = !storeCopy[index].isChecked;
  store = storeCopy;
  localStorage.setItem("todoList", JSON.stringify(store));
  renderList(store);
}

addItems.addEventListener("submit", AddToList);
