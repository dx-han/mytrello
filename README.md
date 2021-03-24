# yetanothertrello

Trello is my favourite task management app. When I study Django and React, I use these two frameworks to reproduce my trello.

The front end code is in the `/frontend` folder. The back end code is in the `/backend` folder.

## Main Functionalities

- Register an account, and create your personal board, add task cards
- Drag cards to different lists
- Edit cards to make your comments, put additional messages, and label with colors

## Technologies

- A **RESTful** back end written in **Django**
  - Store data in **sqlite3** and **redis**
  - User authentication using **JSON Web Tokens (JWT)**
- A front end UI written using **React**.
  - Manage the state of the whole application using **Redux**.
- **Docker**
- **Nginx** for routing to front end server or back end server