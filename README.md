📝 To-Do List Web App
A simple and lightweight web-based To-Do List application that allows users to add tasks with due dates, view them, and delete them. All data is stored in the browser using localStorage, so your tasks persist even after refreshing the page.

🚀 Features
✅ Add tasks with a due date

📅 Restricts past dates — only today and future dates allowed

🗂️ View list of tasks dynamically

🗑️ Delete individual tasks

💾 Tasks are saved using localStorage (persist even after reloads)

🎯 Simple and responsive design (customizable)

📸 Preview
(Add a screenshot of your app here if you have one)

🛠️ Tech Stack
HTML – Structure of the app

CSS – Basic styling (customizable)

JavaScript – Core logic for adding, displaying, deleting, and storing todos

📂 Folder Structure
bash
Copy
Edit
todo-app/
│
├── index.html       # Main HTML structure
├── style.css        # Optional custom styling
└── script.js        # JavaScript logic (add, display, delete, localStorage)
📌 How to Run
Download or clone this repository:

bash
Copy
Edit
git clone https://github.com/your-username/todo-app.git
Open index.html in your browser.

✅ No additional setup or dependencies needed.

🧠 How It Works
localStorage is used to store the todoList as a JSON string.

The app loads saved tasks from localStorage on page load.

When a new task is added, it is pushed into the array and saved.

Each task has a "Delete" button that removes it and updates storage.

✨ Future Improvements (Optional Ideas)
✅ Mark tasks as "completed"

✏️ Edit tasks

📅 Filter by due date

🎨 Improve styling with Tailwind/CSS frameworks

🔄 Add animations or transitions

☁️ Store tasks in a database or Firebase
