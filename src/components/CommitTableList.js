import React from 'react';
import PropTypes from 'prop-types';

import CommitTable from './CommitTable';

import update from 'react-addons-update';

const propTypes = {
 
};

const defaultProps = {

};

class CommitTableList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputUserName: '',
      userNameList: ['hmu332233', 'tkdals1119', 'dohun94']
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  addNewUser(userName) {
    const newUserNameList = update(
      this.state.userNameList,
      {
        $push: [userName]
      }
    );
    this.setState({
      userNameList: newUserNameList,
      inputUserName: ''
    });
  }
  
  handleChange(e) {
  	this.setState({
      inputUserName: e.target.value
    });
  }
  
  handleKeyPress(e) {
    if(e.charCode==13){
      this.addNewUser(this.state.inputUserName);
    }
  };
  
  render() {
    
    const convertToTable = function (userNameList) {
      return userNameList.map(function (_userName, i) {
        return (
          <CommitTable userName={_userName}/>
        );
      });
    };
    
    return (
      <div className="container">
      	<div className="row">
      		<input
            name="user_name"
            placeholder="유저 이름"
            value={this.state.inputUserName}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
      	</div>
      	<div className="row commit_table_list">
          {convertToTable(this.state.userNameList)}
        </div>
      </div>
      
    );
  }
}

CommitTableList.propTypes = propTypes;
CommitTableList.defaultProps = defaultProps;

// const mapStateToProps = function (state) {
//   return {
//     number: state.counter.number,
//     color: state.ui.color
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleIncrement: () => { dispatch(actions.increment()) },
//     handleDecrement: () => { dispatch(actions.decrement()) },
//     handleSetColor: (color) => { dispatch(actions.setColor(color)) }
//   };
// }

export default CommitTableList;