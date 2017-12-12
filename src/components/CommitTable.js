import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  userName: PropTypes.string
};

const defaultProps = {
  userName: 'hmu332233',
  
};

class CommitTable extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      commitState: [true, false, true, false, false, false, true]
    };
  }

  render() {
    
    const nodeElement = function (active, _key) {
      const _className = `node ${active}`;
     	return (
        <div className={_className} key={_key}></div>
      );
    };
    
    const convertToNode = function (commitState) {
      return commitState.map(function (state, i) {
        if (state) {
          return nodeElement('active', i);
        } else {
          return nodeElement('', i);
        }
      });
    };
    
    return (
      <div className="commit_table">
        <div className="table">
      		{convertToNode(this.state.commitState)}
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