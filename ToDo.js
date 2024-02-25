let textInput = document.getElementById('taskInput');
let list = document.getElementById("todoList")

//Event Listener for pressing enter key to add task
textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    console.log(textInput.value);
    // Perform desired actions here

    //Add new item to list
    let addItem = (textInput) => {
      let listItem = document.createElement("li") //Create new list item
      listItem.innerHTML = `${textInput}<i>`//Add text from input to list item

      //Adds check mark and changes color of list item
      listItem.addEventListener("click", function(){
        this.classList.toggle('done')
      })

      //Remove list item when "x" is clicked
      listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
      })

      list.appendChild(listItem)//Append list item to list
    }

    addItem(textInput.value)
    //Clear textbox
    textInput.value=""

  }
}); 