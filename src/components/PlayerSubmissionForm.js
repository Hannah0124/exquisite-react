import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  // console.log('fields..', props.fields);

  const [poem, setPoem] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  // test
  const filteredFileds = props.fields.filter(filed => {
    return typeof filed === "object";
  });

  const onFieldChange = (event) => {
    const { name, value } = event.target;  // destructuring

    console.log("changing poem..", event.target.value)
    const newPoem = {...poem}; 

    newPoem[name] = value;

    setPoem(newPoem);
  };

   // test(2)
   const filteredFormat = props.fields.filter((field, i) => {
    if (field.key) {
      return (
        <input 
          key={i}
          onChange={onFieldChange}
          name={field.key}
          value={poem[field.key]} // {poem.adjective}
          placeholder={field.placeholder} // e.g. "adjective" 
          type="text" 
          className={poem.adj1 ? '' : 'PlayerSubmissionFormt__input--invalid' }
        />
      );
    } else {
      return field;
    }
  });

  console.log("!!", filteredFormat)
  console.log("type!!", typeof filteredFormat)

  

  const submissionFormComponents = props.fields.map((field, i) => {

    console.log('key test', field.key);
    console.log(field.placeholder);

    if (field.key) {
      return (
        <input 
          key={i}
          onChange={onFieldChange}
          name={field.key}
          value={poem[field.key]} // {poem.adjective}
          placeholder={field.placeholder} // e.g. "adjective" 
          type="text" 
          className={poem.adj1 ? '' : 'PlayerSubmissionFormt__input--invalid' }
        />
      );
    } else {
      return field;
    };
  });


    

 

  

  // const onAdjectiveChange = (event) => {
  //   console.log("changing poem..", event.target.value)

  //   setPoem({
  //     ...poem,
  //     adj1: event.target.value,
  //   });
  // };

  // const onNounChange = (event) => {    
  //   setPoem({
  //     ...poem,
  //     noun1: event.target.value,
  //   });
  // };

  // const onAdverbChange = (event) => {    
  //   setPoem({
  //     ...poem,
  //     adv: event.target.value,
  //   });
  // };

  // const onVerbChange = (event) => {    
  //   setPoem({
  //     ...poem,
  //     verb: event.target.value,
  //   });
  // };

  // const onAdjective2Change = (event) => {    
  //   setPoem({
  //     ...poem,
  //     adj2: event.target.value,
  //   });
  // };

  // const onNoun2Change = (event) => {    
  //   setPoem({
  //     ...poem,
  //     noun2: event.target.value,
  //   });
  // };

  const onFormSubmit = (event) => {
    event.preventDefault();

    console.log("submitting form...");

    
    if (poem.adj1 !== '' && poem.noun1 !== '' && poem.adv !== '' && poem.verb !== '' && poem.adj2 !== '' && poem.noun2 !== '') {

      // we need to display new info
      props.updatePoemCallback(poem);

      // TODO => not working?
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
          {/* The
          <input 
            onChange={onAdjectiveChange}
            value={poem.adj1}
            placeholder="adjective" 
            type="text" 
            className={poem.adj1 ? '' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <input 
            onChange={onNounChange}
            value={poem.noun1}
            placeholder="noun" 
            type="text" 
            className={poem.noun1 ? '' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <input 
            onChange={onAdverbChange}
            value={poem.adv}
            placeholder="adverb" 
            type="text" 
            className={poem.adv ? '' : 'PlayerSubmissionFormt__input--invalid' }
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
            value={poem.adj2}
            placeholder="adjective" 
            type="text" 
            className={poem.adj2 ? '' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <input 
            onChange={onNoun2Change}
            value={poem.noun2}
            placeholder="noun" 
            type="text" 
            className={poem.noun2 ? '' : 'PlayerSubmissionFormt__input--invalid' }
          />
          . */}
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
