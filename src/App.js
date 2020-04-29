import React from "react";
import LoginForm from "./components/login.jsx";
import Register from "./components/register.jsx";
import TodoLists from "./components/todoLists.jsx";
import AddTodo from "./components/addTodo.jsx";
import Menu from "./components/menu.jsx";

function App() {
  return (
    <div>
      <Menu />
      <LoginForm />
      <Register />
      {/* <TodoLists /> */}
      <AddTodo />
    </div>
  );
}

export default App;
