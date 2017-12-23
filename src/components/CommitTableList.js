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
      userNameList: props.userNameList
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
          <CommitTable userName={_userName} key={i}/>
        );
      });
    };
    
    return (
			<div className="container">
        <div className="commit-table__input-wrapper">
          <div className="form-group">
            <label className="form-control-label sr-only">User ID</label>
            <input 
							type="text"
							placeholder="User ID" 
							value={this.state.inputUserName}
							onChange={this.handleChange}
							onKeyPress={this.handleKeyPress}
							className="form-control col-2"/>
          </div>
        </div>
        <div className="commit-table-list">
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