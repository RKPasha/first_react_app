import './App.css'
import { Navbar } from './Components/Navbar'
import { Body } from './Components/Body'
import { Footer } from './Components/Footer'
import { Table } from './Components/Table'
import TodoState from './Context/TodoState'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchBars from './Components/SearchBars'

function App() {

  return (
    <>
      <TodoState>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/edit'>
            <Body
              updateBtn={true}
              actionBtn={false}
            />
          </Route>
          <Route
            exact
            path='/'
            render={() => {
              return (
                <>
                  <Body updateBtn={false} actionBtn={true} />
                  <SearchBars/>
                  <Table/>
                </>
              )
            }}
          ></Route>
        </Switch>
        {/* <Edit todoObj={todoObj}/> */}
        <Footer />
        </Router>
        </TodoState>
    </>
  )
}

export default App
