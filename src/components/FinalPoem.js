import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  console.log('final poem', props.poems)

  // Wave 2
  const FinalPoemComponents = props.poems.map((poem, i) => {
    return (
      <p key={i}>
        The {poem.adj1} {poem.noun1} {poem.adv} {poem.verb} the {poem.adj2} {poem.noun2}
      </p>
    );
  });

  return (
    <div className="FinalPoem">
      <section className={props.reveal.finalPoem ? "FinalPoem__poem" : "FinalPoem__poem hidden"}>
        <h3>Final Poem</h3>
        {FinalPoemComponents}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          className={props.reveal.finalPoem ? "FinalPoem__reveal-btn hidden" : "FinalPoem__reveal-btn"}
          onClick={props.onRevealPoemClickCallback}
        />
      </div>
    </div>
  );
};

FinalPoem.propTypes = {
  poems: PropTypes.array.isRequired,
  onRevealPoemClickCallback: PropTypes.func.isRequired,
  reveal: PropTypes.shape({
    recentPoem: PropTypes.bool.isRequired,
    finalPoem: PropTypes.bool.isRequired,
    submissionForm: PropTypes.bool.isRequired,
  }),
};

export default FinalPoem;
