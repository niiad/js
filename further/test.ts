import { TodoItem } from "./data";
import { TodoCollection } from "./collection";

let todos = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Joe", true)
];

let collection = new TodoCollection("Adam", todos);

console.clear();
console.log(`${collection.username}'s Todo List`);

let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);

console.log(JSON.stringify(todoItem));

collection.getTodoItems(true).forEach(item => item.printDetails());
collection.removeComplete();