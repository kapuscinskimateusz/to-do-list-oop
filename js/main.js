import { ToDoList } from "./ToDoList.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const span = document.querySelector("span");
const ul = document.querySelector("ul");

const toDoList = new ToDoList(input, span, ul);

form.addEventListener("submit", (e) => {
  toDoList.addTask(e);
});
