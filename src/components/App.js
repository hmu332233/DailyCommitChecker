import React from 'react';
//var React = require('react'); 와 동일
import CommitTableList from './CommitTableList';
// import '../../public/css/CommitTableList.css'; 

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
      	<CommitTableList userNameList={['hmu332233','dohun94','tkdals1119']}/>
      </div>
    );
  }
}

export default App;
//module.export = App; 와 동일