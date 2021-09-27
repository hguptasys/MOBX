import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom'
import Todo from './components/todo/Todo'
import TodoStore from './components/todo/TodoStore'
import Index from './components/mobxStateTree/Index'
import Store from './components/mobxStateTree/Store'

function App() {
  var todoStoreData = new TodoStore()
  return (
    <Router>
      <Switch>
        <Route exact path="/todo">
          <Todo todoStoreData={todoStoreData} />
        </Route>
        <Route exact path="/mst">
          <Index Store={Store} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
