import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [poem, setPoem] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });


  const onFieldChange = (event) => {
    console.log("changing poem..", event.target.value)

    const { name, value } = event.target;  // destructuring
    const newPoem = {...poem};  

    newPoem[name] = value; // update key-value pair (e.g. key:adj1, value: plant)

    setPoem(newPoem);
  };


  const submissionFormComponents = props.fields.map((field, i) => {
    const userInput = poem[field.key];

    if (field.key) {
      return (
        <input 
          key={i}
          onChange={onFieldChange}
          name={field.key}
          value={userInput} // e.g. user input => "green"
          placeholder={field.placeholder} // e.g. "adjective" 
          type="text" 
          className={userInput ? '' : 'PlayerSubmissionFormt__input--invalid' }
        />
      );
    } else {
      return field;
    };
  });


  const onFormSubmit = (event) => {
    event.preventDefault();

    console.log("submitting form...");

    
    if (poem.adj1 !== '' && poem.noun1 !== '' && poem.adv !== '' && poem.verb !== '' && poem.adj2 !== '' && poem.noun2 !== '') {

      // we need to display new info
      props.updatePoemCallback(poem);

      setPoem({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: '',
      });
    };
  };



  return (
    <div className={props.reveal.submissionForm ? "PlayerSubmissionForm" : "PlayerSubmissionForm hidden"}>
      <h3>Player Submission Form for Player #{props.currentPlayer}</h3>

      <form 
        className="PlayerSubmissionForm__form"
        onSubmit={onFormSubmit}
      >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
            submissionFormComponents
          }

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input 
            type="submit" 
            value="Submit Line" 
            className="PlayerSubmissionForm__submit-btn"
            onClick={props.onSubmitLineClickCallback} 
          />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  fields: PropTypes.array.isRequired,
  currentPlayer: PropTypes.number.isRequired,
  updatePoemCallback: PropTypes.func.isRequired,
  onSubmitLineClickCallback: PropTypes.func.isRequired,
  reveal: PropTypes.shape({
    recentPoem: PropTypes.bool.isRequired,
    finalPoem: PropTypes.bool.isRequired,
    submissionForm: PropTypes.bool.isRequired,
  }),
};

export default PlayerSubmissionForm;
