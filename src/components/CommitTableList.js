import React from 'react';
import PropTypes from 'prop-types';

import CommitTable from './CommitTable';

const propTypes = {
  userNameList: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  userNameList: ['hmu332233']
};

class CommitTableList extends React.Component {
  
  constructor(props) {
    super(props);
    this.setRandomColor = this.setRandomColor.bind(this);
  }
  
  setRandomColor() {
    const color = [
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200)
    ];
    
    this.props.handleSetColor(color);
  }
  
  render() {
    
    return (
      <div className="commit_table_list">
        <CommitTable userName={this.props.userNameList[0]}/>
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