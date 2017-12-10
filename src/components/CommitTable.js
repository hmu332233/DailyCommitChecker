import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  userName: PropTypes.string,
};

const defaultProps = {
  userName: ['hmu332233']
};

class CommitTable extends React.Component {
  
  constructor(props) {
    super(props);
    this.setRandomColor = this.setRandomColor.bind(this);
  }

  render() {
    
    return (
      <div className="commit_table">
        <div className="table">
          <div className="node"></div>
      		<div className="node"></div>
      		<div className="node"></div>
        </div>
        <div className="user_name">
          {this.props.userName}
        </div>
      </div>
    );
  }
}

CommitTable.propTypes = propTypes;
CommitTable.defaultProps = defaultProps;

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

export default CommitTable;