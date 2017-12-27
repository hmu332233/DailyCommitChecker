import React from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';

const propTypes = {
 
};

const defaultProps = {

};

class CommitActivityCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      repoUrl: 'https://github.com/' + props.event.repo.name
    };
    // console.log(props.event);
  }
  
  render() {
    const mapToCommitListItem = function (commits, repoUrl) {
      return commits.map(function (commit, i) {
        return (
          <li key={i}>
          	<a href={repoUrl + '/commit/' + commit.sha} className="activity-item__commit-message">{commit.message}</a>
          </li>
        );
      });
    };
    
    return (
      <div className="activity-card__activity-item item__push-event">
        <div className="activity-item__info">
          <div className="activity-item__type font-black">{this.props.event.type}</div>
          <div className="activity-item__date font-gray">{new Date(this.props.event.date).format("MM-DD hh:mm", 9)}</div>
        </div>
        <div className="activity-item__repo">
          <h6>repoName</h6>
          <a className="activity-item__repo-title" href={this.state.repoUrl}>{this.props.event.repo.name}</a>
          <span> - {this.props.event.branch}</span>
        </div>
        <div className="activity-item__commits">
          <h6 className="activity-item__commits__title">Commits</h6>
          <ul className="activity-item__commit">
            {mapToCommitListItem(this.props.event.commits, this.state.repoUrl)}
          </ul>
        </div>
      </div>
    );
  }
}

CommitActivityCard.propTypes = propTypes;
CommitActivityCard.defaultProps = defaultProps;

export default CommitActivityCard;