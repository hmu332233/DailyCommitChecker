import React from 'react';
import PropTypes from 'prop-types';

import CommitActivityCard from './CommitActivityCard';

import update from 'react-addons-update';

const propTypes = {
 
};

const defaultProps = {

};


class CommitActivity extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      events: props.events
    };
    // console.log(props.event);
  }
  
  render() {
    
    const mapToCommitActivityCard = function (events) {
      return events.map(function (_event, i) {
        return (
          <CommitActivityCard event={_event} key={i} />
        );
      });
    };
    
    return (
      <div className="activity-card">
        <div className="bg-white card-bg p-x-15px">
          <h6 className="activity-card__title">Activity</h6>
          <div className="activity-card__contents">
            <div className="activity-card__activity-list">
           		{mapToCommitActivityCard(this.props.events)}
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

CommitActivity.propTypes = propTypes;
CommitActivity.defaultProps = defaultProps;

export default CommitActivity;