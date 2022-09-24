import React, { useState } from 'react'
import './App.less'
import BookTable from './components/Screens/BookTable'
import {
  BrowserRouter as Router,
  Switch, Route,
} from 'react-router-dom'

const App = () => {
  const [books, setBooks] = useState([])
  return (
    <Router>
      <Switch>
        <Route exact path='/books'>
          <BookTable books={books} setBooks={setBooks} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
