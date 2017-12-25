import React from 'react';
import PropTypes from 'prop-types';

import CommitTable from './CommitTable';

import update from 'react-addons-update';

const propTypes = {
 
};

const defaultProps = {

};

var dump_event = {
  type: 'PushEvent',
  date: new Date(),
  repo: {
    name: 'hmu332233/DailyCommitChecker',
    url: ''
  },
  commits: [{
      message: '[Fix] font not applied',
    	url: ''
    }, {
      message: `Merge branch 'hotfix/0.1.1'`,
    	url: ''
    }
            
  ]
};

class CommitActivity extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      event: dump_event
    };

  }
  
  render() {
    
    const convertToTable = function (userNameList) {
      
    };
    
    return (
      <div className="activity-card">
        <div className="bg-white card-bg p-x-15px">
          <h6 className="activity-card__title">Activity</h6>
          <div className="activity-card__contents">
            <div className="activity-card__activity-list">
              <div className="activity-card__activity-item item__push-event">
                <div className="activity-item__info">
                  <div className="activity-item__type font-black">{this.state.event.type}</div>
                  <div className="activity-item__date font-gray">{this.state.event.date.toString()}</div>
                </div>
                <div className="activity-item__repo">
                  <h6>repoName</h6>
                  <a className="activity-item__repo-title" href="{this.state.event.repo.url}">{this.state.event.repo.name}</a>  
                </div>
                <div className="activity-item__commits">
                  <h6 className="activity-item__commits__title">Commits</h6>
                  <ul className="activity-item__commit">
                    <li><a href="#" className="activity-item__commit-message">[Fix] font not applied</a></li>
                    <li><a href="#" className="activity-item__commit-message">Merge branch 'hotfix/0.1.1'</a></li>
                  </ul>
                </div>
              </div>
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