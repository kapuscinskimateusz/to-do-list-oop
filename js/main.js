import { ToDoList } from "./ToDoList.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const toDoList = new ToDoList(input, ul);

form.addEventListener("submit", (e) => {
  toDoList.addTask(e);
});
