import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = ({getRecentPoemCallback, reveal}) => {

  const recentSubmissionComponent = getRecentPoemCallback();

  return (
    <div className={reveal.recentPoem ? "RecentSubmission" : "RecentSubmission hidden"}>
      <h3>The Most Recent Submission</h3>
      <section className="RecentSubmission__submission">    
        {recentSubmissionComponent}
      </section>
    </div>
  );
};

RecentSubmission.propTypes = {
  getRecentPoemCallback: PropTypes.func.isRequired,
  reveal: PropTypes.shape({
    recentPoem: PropTypes.bool.isRequired,
    finalPoem: PropTypes.bool.isRequired,
    submissionForm: PropTypes.bool.isRequired,
    reset: PropTypes.bool.isRequired,
  }),
};

export default RecentSubmission;
