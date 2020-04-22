import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const EMPTY_POEM = {
  adj1: '',
  noun1: '',
  adv: '',
  verb: '',
  adj2: '',
  noun2: '',
};

const PlayerSubmissionForm = (props) => {

  const [poem, setPoem] = useState(EMPTY_POEM);

  const [valid, setValid] = useState(true);


  // helper function for detecting if individual userinput is valid or not
  const userInputValid = userInput => {
    if (userInput.match(/[^a-zA-Z]/g)) {
      return false; 
    } else {
      return true;
    }
  };

  // field validation reference: https://www.freecodecamp.org/news/how-to-use-reacts-controlled-inputs-for-instant-form-field-validation-b1c7b033527e/
  // Helper function for "onFormSubmit" function
  const isValid = () => {
    for (let key in poem) {
      if (!userInputValid(poem[key]) || poem[key] === "") {
        return false; 
      }
    };
    return true;
  };



  // Wave 1 & optional (a Dynamically-Generated Form)
  const onFieldChange = (event) => {
    console.log("changing poem..", event.target.value)

    const { name, value } = event.target;  // destructuring
    const newPoem = {...poem};  

    newPoem[name] = value; // update key-value pair (e.g. key:adj1, value: plant)

    setPoem(newPoem);
  };


  // Wave 1
  const onFormSubmit = (event) => {
    event.preventDefault();

    console.log("submitting form...");


    if (isValid()) {

    // test
    // if (poem.adj1 !== '' && poem.noun1 !== '' && poem.adv !== '' && poem.verb !== '' && poem.adj2 !== '' && poem.noun2 !== '') {

      props.updatePoemCallback(poem); // update 'poem' in 'poems' state (App.js)

      setPoem(EMPTY_POEM);

      setValid(true);
    } 
    
    else {
      setValid(false);
      console.log("you cannot enter empty input!!!")

      // After 3 seconds, make sure that a user can try to enter new input! (The submit line button will be able again)
       setTimeout(() => {
        setValid(true);
       }, 3000);
    };
  };


  // Wave 1 & optional (a Dynamically-Generated Form)
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
          className={userInputValid(userInput) ? 'PlayerSubmissionFormt__input--valid' : 'PlayerSubmissionFormt__input--invalid' } // wave 3
        />
      );
    } else {
      return field;
    };
  });


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
            disabled={valid ? false : true}  
            type="submit" 
            value="Submit Line" 
            className={valid ? "PlayerSubmissionForm__submit-btn" : "PlayerSubmissionForm__submit-btn--invalid"}
            onClick={props.onSubmitLineClickCallback} 
          />
        </div>

        <p 
          className={valid ? "hidden" : "PlayerSubmissionForm__p--invalid-message"}>
            <span role="img" aria-label="warning">⚠️ </span>
            Invalid input❗️
        </p>
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
    reset: PropTypes.bool.isRequired,
  }),
};

export default PlayerSubmissionForm;
