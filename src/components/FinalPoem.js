import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  console.log(props.poems)

  const FinalPoemComponents = props.poems.map(poem => {
    return (
      <> 
        <p>
          The {poem.adjective} {poem.noun} {poem.adverb} {poem.verb} the {poem.adjective1} {poem.noun1}
        </p>
      </>
    )
  });

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {FinalPoemComponents}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
};

FinalPoem.propTypes = {
  poems: PropTypes.array.isRequired,
};

export default FinalPoem;
