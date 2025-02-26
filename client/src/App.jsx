import './App.css'
import TodoList from './components/TodoList'

function App() {
 

  return (
    <>
    
  <header className="navigation-header">
    <span className="navigation-logo">
      <img src="./static/images/todo-icon.png" alt="todo-logo"/>
    </span>
    <span className="spacer"></span>
    <span className="navigation-description">Todo List</span>
  </header>

  
  <main className="main">
    <TodoList/>
    
   
  </main>

  
  <footer className="footer">
    <p>Copyright © designed by Mihail Valkov</p>
  </footer>
    </>
  )
}

export default App
