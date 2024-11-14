# TodoList Application

A simple and dynamic To-Do application built using React and Material-UI (MUI) that allows users to manage their tasks efficiently. This app includes features like dark and light theme toggling, task filtering, and real-time date and time updates. The tasks are stored in `localStorage` to persist between page reloads.

## Preview

https://sujan2332.github.io/TODO/

## Features

- **Dark/Light Mode Toggle**: Switch between dark and light themes dynamically.
- **Task Management**: Add, filter, and manage tasks. Tasks are persisted in `localStorage` for persistence across sessions.
- **Task Filtering**: Filter tasks based on their status (Completed, Pending, or All).
- **Real-Time Date & Time**: The current date and time are displayed at the top and updated every second.
- **Material-UI Components**: Utilizes Material-UI components for modern, responsive UI design.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI (MUI)**: A popular React UI framework for responsive and customizable components.
- **CSS Baseline**: Ensures consistent styling across browsers.
- **LocalStorage**: Used for storing tasks so that the data persists even after page refresh.
- **JavaScript**: Used for managing the logic and interactions of the app.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```bash
   git clone https://github.com/Sujan2332/TODO.git
   
2. **Navigate into the project directory:**

   ```bash
   cd todo-mui
   
3. **Install dependencies:**

   ```bash
   npm install

4. **Run the application:**

   ```bash
   npm start
   
This will start the development server and open the app in your default browser.

## Usage

- **Adding a Task**: Enter a task in the input field and click "Add Task". The task will be saved and displayed in the task list.
- **Filtering Tasks**: Use the filter buttons (All, Completed, Pending) to filter the tasks by their status.
- **Switching Themes**: Click the theme toggle button in the AppBar to switch between dark and light mode.
- **View Real-Time Date and Time**: The current date and time will be displayed in the AppBar and updated every second.

## Components

### `Todo_MUI`
The main component that renders the entire application. It manages the theme state, tasks state, and current date/time. It also integrates all other components such as `TaskFormComponent`, `TaskFilters`, and `ProgressIndicator`.

### `AppBarComponent`
Displays the top navigation bar with the theme toggle button and the real-time date and time.

### `TaskFormComponent`
Provides the form for adding new tasks to the list. It includes an input field and a button to submit the task.

### `TaskFilters`
Allows users to filter tasks based on their completion status (Completed, Pending, or All).

### `ProgressIndicator`
Shows the progress of tasks, e.g., how many tasks are completed vs. total tasks.

## Theme Configuration

The app uses Material-UI's theme system to manage the dark and light mode settings. The primary and secondary colors are dynamically updated based on the selected mode.

- **Primary color**: `#90caf9` for dark mode and `#1976d2` for light mode.
- **Secondary color**: `#f48fb1` for dark mode and `#d32f2f` for light mode.
- **Typography**: Custom font family: `Edu AU VIC WA NT Hand`.

## File Structure

todo-mui/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── AppBarComponent.js
│   │   ├── ProgressIndicator.js
│   │   ├── TaskFilters.js
│   │   ├── TaskFormComponent.js
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
└── .gitignore



# License
This project is licensed under the MIT License - see the LICENSE file for details.

## Instructions for Uploading to GitHub:

1. Create a `README.md` file in the root directory of your project.
2. Copy the above content into the `README.md` file.
3. Commit and push the file to your GitHub repository.

```bash
git add README.md
git commit -m "Add README file"
git push origin main
