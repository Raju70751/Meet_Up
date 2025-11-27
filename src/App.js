import { Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Context from './context/contextProvider'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import './App.css';

class App extends Component {

  state = {  
    topic: '',
    userName: '',
    isRegistered: false,
  }
 
  userNameChange = (userNameInput) => {
    this.setState({userName: userNameInput })
  }

  topicChange = (topic) => {
    this.setState({topic: topic})
  } 

  registerFunction = () => {
    this.setState(prev => ({isRegistered: !prev.isRegistered}))
  } 

  render() {
    const {topic,userName, isRegistered} = this.state
    return (
      <Context.Provider value={{topic, isRegistered ,userName , registerFunction: this.registerFunction ,topicChange:this.topicChange,userNameChange:this.userNameChange}}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route component={NotFound}/>
            </Switch>
          </BrowserRouter>  
          </Context.Provider>
    )
  }
}

export default App;
