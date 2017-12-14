import React from 'react';
import PropTypes from 'prop-types';

import CommitTable from './CommitTable';

const propTypes = {
  userNameList: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  userNameList: ['hmu332233', 'tkdals1119', 'dohun94', 'lainrose']
};

class CommitTableList extends React.Component {
  
  constructor(props) {
    super(props);
  }
  

  
  render() {
    
    const convertToTable = function (userNameList) {
      return userNameList.map(function (_userName, i) {
        return (
          <CommitTable userName={_userName}/>
        );
      });
    };
    
    return (
      <div className="commit_table_list">
        {convertToTable(this.props.userNameList)}
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