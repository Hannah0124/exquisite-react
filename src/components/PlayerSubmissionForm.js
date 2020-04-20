import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  // console.log('fields..', props.fields);

  // test
  props.fields.forEach(field => {
    if (typeof field === "object") {
      // console.log(field.key);
      // console.log(field.placeholder);
    }
  })

  const [poem, setPoem] = useState({
    id: 1,
    adjective: '',
    noun: '',
    adverb: '',
    verb: '',
    adjective2: '',
    noun2: '',
  });

  const onAdjectiveChange = (event) => {
    console.log("changing poem..", event.target.value)

    setPoem({
      ...poem,
      adjective: event.target.value,
    });
  };

  const onNounChange = (event) => {    
    setPoem({
      ...poem,
      noun: event.target.value,
    });
  };

  const onAdverbChange = (event) => {    
    setPoem({
      ...poem,
      adverb: event.target.value,
    });
  };

  const onVerbChange = (event) => {    
    setPoem({
      ...poem,
      verb: event.target.value,
    });
  };

  const onAdjective2Change = (event) => {    
    setPoem({
      ...poem,
      adjective2: event.target.value,
    });
  };

  const onNoun2Change = (event) => {    
    setPoem({
      ...poem,
      noun2: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    console.log("submitting form...");

    
    if (poem.adjective !== '' && poem.nount !== '' && poem.adverb !== '' && poem.verb !== '' && poem.adjective2 !== '' && poem.noun2 !== '') {

      // we need to display new info
      props.updatePoemCallback(poem);

      // TODO => not working?
      setPoem({
        id: poem.id + 1,
        adjective: '',
        noun: '',
        adverb: '',
        verb: '',
        adjective2: '',
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
            
          }
          The
          <input 
            onChange={onAdjectiveChange}
            value={poem.adjective}
            placeholder="adjective" 
            type="text" 
            className={poem.adjective ? '' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <input 
            onChange={onNounChange}
            value={poem.noun}
            placeholder="noun" 
            type="text" 
            className={poem.noun ? '' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <input 
            onChange={onAdverbChange}
            value={poem.adverb}
            placeholder="adverb" 
            type="text" 
            className={poem.adverb ? '' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <input 
            onChange={onVerbChange}
            value={poem.verb}
            placeholder="verb" 
            type="text" 
            className={poem.verb ? '' : 'PlayerSubmissionFormt__input--invalid' }
          />
          the
          <input 
            onChange={onAdjective2Change}
            value={poem.adjective2}
            placeholder="adjective" 
            type="text" 
            className={poem.adjective2 ? '' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <input 
            onChange={onNoun2Change}
            value={poem.noun2}
            placeholder="noun" 
            type="text" 
            className={poem.noun2 ? '' : 'PlayerSubmissionFormt__input--invalid' }
          />
          .
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input 
            type="submit" 
            value="Submit Line" className="PlayerSubmissionForm__submit-btn"
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
  reveal: PropTypes.object.isRequired,
};

export default PlayerSubmissionForm;
