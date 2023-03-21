# Daily ToDo List
This repository contains a to-do list application designed to help users manage their daily tasks and improve productivity. The backend is built using NodeJS and Express, with MySQL as the database, whereas the frontend is built using HTML/CSS. Essentially, the API has been designed to handle CRUD operations.

## Features
- Add tasks to the to-do list
- Mark tasks as completed or uncompleted
- Edit task titles
- Delete tasks from the list

## Technologies Used
- NodeJS
- Express
- MySQL
- HTML/CSS
- JavaScript

### Frontend
The frontend code is written in JavaScript and uses the DOM to interact with the HTML elements. The application allows users to add, edit, and delete tasks from the to-do list. The frontend also allows users to mark tasks as completed or uncompleted.

### Backend
The backend code is written in NodeJS and uses Express to handle HTTP requests. The API provides endpoints for creating, reading, updating, and deleting tasks in the database.

## Getting Started
To run the application, you will need to have NodeJS and MySQL installed on your machine. Follow the steps below to set up the application:

1. Clone the repository to your local machine.
2. Create a MySQL database using the SQL file in the `db` folder.
3. Create a `.env` file in the root directory of the project and set the following environment variables:
makefile

```makefile
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=daily_todo_list
```
4. Run `npm install` to install the dependencies.
5. Run `npm start` to start the application.
