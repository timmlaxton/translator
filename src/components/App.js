import React from 'react';
import UserCreate from './UserCreate'
import '../index.css'

class App extends React.Component {

 state = {language: 'english'};

 onlanguageChange = language => {
    this.setState({language})
 }


  render() {
    
    return ( 
    <div className="ui container">
      <div>
        <h1 className="header"> Translator</h1>
      </div>
      <div>
        <h2>Select a language: </h2>
        <i className="flag us" onClick={() => this.onlanguageChange('english')} />
        <i className="flag nl" onClick={() => this.onlanguageChange('dutch')}/>
      </div>
      <UserCreate/>
    </div>
    )
  }
}

export default App; 