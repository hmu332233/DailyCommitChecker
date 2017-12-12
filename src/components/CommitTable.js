import React from 'react';
import PropTypes from 'prop-types';
import * as githubApi from '../api/githubApi';

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
  
  componentDidMount() {
    const currentDate = new Date();
    console.log(currentDate);
    const newdate = new Date(currentDate);
    newdate.setDate(newdate.getDate() - 7); // minus the date
    const dateAWeekAgo = new Date(newdate);
    console.log(dateAWeekAgo);
  	
    githubApi.getEvents(this.props.userName)
      .then(eventsData => {
      	
      	//현재 날짜로부터 일주일전까지의 event만을 가져온다.
        const events = eventsData.data.filter(function (event) {
        	const eventDate = new Date(event.created_at);
       		return eventDate.getTime() > dateAWeekAgo.getTime();
        });
      	console.log(events);
        
      	events.forEach(function (event) {
          console.log(event.created_at);
        });
      });
    
    
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