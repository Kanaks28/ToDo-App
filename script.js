let todoList = JSON.parse(localStorage.getItem('todoList')) || [
    { item: 'Buy Milk', dueDate: '2025-12-29' },
    { item: 'Go to College', dueDate: '2025-12-29' }
  ];

  function saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
  displayItems();


function addToDo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate= dateElement.value;

    const today = new Date().toISOString().split('T')[0];
    if (todoDate < today) {
        alert("Please select today or a future date.");
        return;
    }
    
    if(todoItem!='' && todoDate!=''
    ){
        todoList.push({item:todoItem, dueDate:todoDate});
        saveToLocalStorage(); 

    }
    
    inputElement.value=''; 
    dateElement.value=''; 
    displayItems();
}
function displayItems(){
    let element = document.querySelector('.todo-container');

    let newHtml = '';
    for(let i=0;i<todoList.length;i++){
        let Item = todoList[i].item;
        let dueDate = todoList[i].dueDate;
        newHtml += `
        <span>${Item}</span>
        <span>${dueDate}</span>
        <button id='delete-button' onClick = "
        todoList.splice(${i},1);
        saveToLocalStorage(); 
        displayItems();">Done</button>
        
        
        `;
    }
    element.innerHTML = newHtml;
    
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Optional: Save preference
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
}

// Optional: Load saved preference on page load
window.onload = function () {
  const dateInput = document.getElementById('todo-date');
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;

  // Load dark mode preference
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    document.body.classList.add('dark-mode');
  }

  displayItems();
};
