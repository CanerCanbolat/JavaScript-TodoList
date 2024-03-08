let input = prompt("What would you like todo?");
const todos = ["Collect Chicken Eggs", "Clean Letter Box"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
  } else if (input === "new") {
    const newtodo = prompt("Ok, What is the new todo?");
    todos.push(newtodo);
    console.log(`${newtodo} added to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete:"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("What would you like todo?");
}
console.log("Ok.Quit the app!!!");
