import React from 'react';
import PropTypes from 'prop-types';
import * as githubApi from '../api/githubApi';
import * as ArrayMath from '../utils/ArrayMath';

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
      commitState: [0,0,0,0,0,0,0],
      commitCount: 0,
      userAvatarUrl: ''
    };
    
  }
  
  componentDidMount() {
    const currentDate = new Date();
    console.log(currentDate);
    const newdate = new Date(currentDate);
    newdate.setDate(newdate.getDate() - 6); // minus the date
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
        
      	const commitState = [];


        for(var i = 0; i < 7; i++) {
            commitState.push(0);
        }
      	events.forEach(function (event) {
          const date = new Date(event.created_at);
          const day = date.getDay();
          console.log(date);
          console.log(day);
          if (commitState[day]) {
            commitState[day] += 1;
          } else {
            commitState[day] = 1;
          }
        });
      
      	console.log(commitState);
      	this.setState({
          commitState: commitState,
          commitCount: ArrayMath.sum(commitState),
          userAvatarUrl: events[0].actor.avatar_url
        });
      });
  }

  render() {
    const nodeElement = function (active, commitSize, _key) {
      const _className = `node ${active}`;
     	return (
        <div className={_className} key={_key}>{commitSize}</div>
      );
    };
    
    const convertToNode = function (commitState) {
      return commitState.map(function (state, i) {
        if (state && state > 0) {
          return nodeElement('active', state, i);
        } else {
          return nodeElement('', state,i);
        }
      });
    };
    
    return (
      <div className="commit-table">
        <div className="row bg-white">
          <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
            <div className="commit-table__user-profile d-flex align-items-center">
              <div className="commit-table__user-image-wrapper"><img src={this.state.userAvatarUrl} alt="img" className="img-fluid"/></div>
              <div className="commit-table__user-id">
                <h6>{this.props.userName}</h6>
              </div>
            </div>
            <div className="commit-table__check">Today Commit: <span>O</span></div>
          </div>
          <div className="right-col col-lg-6 d-flex align-items-center">
            <div className="commit-table__date">12:00 PM </div>
            <div className="commit-table__count">count: <span>{this.state.commitCount}</span></div>
            <div className="commit-table__commits ml-auto">
              {convertToNode(this.state.commitState)}
            </div>
          </div>
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