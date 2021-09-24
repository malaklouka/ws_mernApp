import './App.css';
import UserList  from "./Components/UserList";
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Add from './Components/Add';
import { Link,Route, Switch } from 'react-router-dom';
function App() {
    
return(
  <div>
    <Link to="/addUser"><Button inverted color='brown'>
        Add
      </Button></Link>
      <Switch>
        <Route exact path='/' component={UserList}/>
        <Route exact path='/addUser' component={Add}/>
      </Switch>
  </div>
)
    

}

export default App;
