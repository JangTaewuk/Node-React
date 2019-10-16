import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Main from './Ex4/pages/Main'
import TodoList from './Ex4/pages/Todo/TodoList'
import MyPage from './Ex4/pages/MyPage'


export default class App extends Component {

  constructor(){
    super()
  }

  render(){
    return (
      <Router>
        <div>
  
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/myPage/">MyPage</Link>
            </li>
            <li>
              <Link to="/todoList/1">TodoList</Link>
            </li>
          </ul>
        </nav>
        
        <Route path="/" exact component={Main}></Route>
        <Route path="/myPage" exact component={MyPage}></Route>
        <Route path="/todoList/:page" component={TodoList} />
        </div>
      </Router>
    );
  }
}

