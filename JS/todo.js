const formElement = document.getElementById("toDoForm");
console.log(formElement)
const toDoList = document.getElementById("toDoList")

formElement.addEventListener(
    "submit", 
    (event) => {
        // Stopper default-funksjoner til HTML-elementer
        event.preventDefault();
        
        const form = event.target

    // Lese av form-feltene
    const taskInput = document.getElementById("newTask");
    // const assignInput = document.getElementById("assign-form");
    
    console.log(taskInput.value)
    
    // Finn elementet

    // Lagre verdien

    //Mock data
    const data = {
    task: taskInput.value,
    // assignedTo: assignInput.value
    }

    // Nullstill form-elementet event.target.reset()
    
    createToDoCard(data);
    event.target.reset()
    }
)

function createToDoCard(toDoData){
console.log(toDoData)
const toDoCard = document.createElement("li")
const toDoName = document.createElement("h3")
// const assignedTask = document.createElement("p")
const btnDone = document.createElement("button")
const btnDelete = document.createElement("button")

toDoCard.className = "toDoCard"
toDoName.textContent = toDoData.task
// assignedTask.textContent = toDoData.assignedTo
btnDone.className = "done, toDoBtn"
btnDone.textContent = "Done"
btnDelete.className = "remove, toDoBtn"
btnDelete.textContent = "Delete"


toDoCard.appendChild(toDoName)
// toDoCard.appendChild(assignedTask)
toDoCard.appendChild(btnDone)
toDoCard.appendChild(btnDelete)

toDoCard.addEventListener(
    "click", (event) => {
    const card = toDoCard
    card.classList.toggle("completed")
    btnDone.classList.toggle("activated")
    })

btnDelete.addEventListener("click", () => toDoCard.remove())

toDoList.appendChild(toDoCard)

console.log(toDoData.task)
// console.log(toDoData.assignedTo)

}