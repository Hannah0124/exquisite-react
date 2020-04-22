import React from 'react';
import PropTypes from 'prop-types';
import './ResetBtn.css';

const ResetBtn = ({reveal, ...props}) => {
  return (
    <div className="ResetBtn__reset-btn-container">
      <input 
        type="button" 
        value="Reset Game" 
        className={reveal.reset ? "ResetBtn__reset-btn" : "ResetBtn__reset-btn hidden"}
        onClick={props.onResetBtnClickCallback}
      />
    </div>
  );
};

ResetBtn.propTypes = {
  onResetBtnClickCallback: PropTypes.func.isRequired, 
  reveal: PropTypes.shape({
    recentPoem: PropTypes.bool.isRequired,
    finalPoem: PropTypes.bool.isRequired,
    submissionForm: PropTypes.bool.isRequired,
    reset: PropTypes.bool.isRequired,
  }),
}


export default ResetBtn;