export class ToDoList {
  constructor(input, ul) {
    this.input = input;
    this.ul = ul;
    this.tasks = [];
  }

  addTask(e) {
    e.preventDefault();

    const text = this.input.value;
    if (text === "") return;
    const task = document.createElement("li");
    task.innerHTML = `${text}<button><i class="fas fa-trash-alt"></i></button>`;
    this.tasks.push(task);
    const button = task.querySelector("button");
    button.classList.add("removeBtn");
    button.querySelector("i").style.pointerEvents = "none";
    button.addEventListener("click", (e) => {
      this.removeTask(e);
    });

    this.renderTasks();
  }

  removeTask(e) {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    this.tasks.splice(index, 1);
    this.renderTasks();
  }

  renderTasks() {
    this.input.value = "";
    this.ul.textContent = "";
    this.tasks.forEach((task, key) => {
      task.dataset.key = key;
      this.ul.appendChild(task);
    });
  }
}
