import React from 'react';
//var React = require('react'); 와 동일
import CommitTableList from './CommitTableList';
// import '../../public/css/CommitTableList.css'; 

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      userName: e.target.value
    });
  }
  
  render() {
    return (
      <div>
      	<input
          name="user_name"
          placeholder="유저 이름"
          value={this.state.userName}
          onChange={this.handleChange}
        />
      	<CommitTableList userNameList={['hmu332233']}/>
      </div>
    );
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default App;
//module.export = App; 와 동일