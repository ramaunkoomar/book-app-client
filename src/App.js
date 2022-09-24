import React, { useState } from 'react'
import './App.less'
import BookTable from './components/Screens/BookTable'
import CreateNewBook from './components/Screens/CreateNewBook';

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
        <Route exact path='/books/create'>
          <CreateNewBook books={books} setBooks={setBooks} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
