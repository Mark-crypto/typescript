// const btn = document.querySelector<HTMLButtonElement>(".test-btn")!;
// const btn = document.querySelector(".test-btn")! as HTMLButtonElement;

// if (btn) {
//   btn.disabled = true;
// }

const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    //add task to list
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    addTask(task);
    //render task
    renderTask(task);
    //update local storage
    updateStorage();
    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});

function addTask(task: Task): void {
  tasks.push(task);
}
function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;
  //checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;
  //toggle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = taskCheckbox.checked;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}
function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
