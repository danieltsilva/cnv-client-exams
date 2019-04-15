import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
  
import Menu from './Menu';
import history from '../history';
import QuestionShow from './questions/QuestionShow';
import QuestionList from './questions/QuestionList';
import QuestionCreate from './questions/QuestionCreate';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Menu />
            <Switch>
              <Route path="/" exact component={QuestionList} />
              <Route path="/questions/new" exact component={QuestionCreate} />
              <Route path="/question/:id" exact component={QuestionShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;