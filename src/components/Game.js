import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [poems, setPoems] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [reveal, setReveal] = useState({
    recentPoem: false,
    finalPoem: false,
    submissionForm: true,
  });

  const lastId = poems.length;

  const updatePoem = (poem) => {
    const newPoems = [...poems]; 

    newPoems.push(poem);
    setCurrentPlayer(currentPlayer + 1);

    // Change status 
    setPoems(newPoems);
  };

  // test
  console.log('update poem?', poems);

  const getRecentSubmission = () => {
    const recentPoem = poems[lastId - 1];
    if (recentPoem) {
      return `The ${recentPoem.adjective} ${recentPoem.noun} ${recentPoem.adverb} ${recentPoem.verb} the ${recentPoem.adjective2} ${recentPoem.noun2}`;
    };
  };

  const onSubmitLineClick = () => {
    console.log('you just clicked submit line!')
    setReveal({
      ...reveal, 
      recentPoem: true,
      // submissionForm: true,
    });
  };

  const onRevealPoemClick = () => {
    console.log('you just clicked reveal the poem button!');
    setReveal({
      recentPoem: false,
      finalPoem: true,
      submissionForm: false,
    });
  }

  


  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission 
        getRecentPoemCallback={getRecentSubmission}
        reveal={reveal}
        // className={reveal.recentPoem ? "show" : "hidden"}
      />

      <PlayerSubmissionForm 
        fields={FIELDS}
        currentPlayer={currentPlayer}
        updatePoemCallback={updatePoem}
        onSubmitLineClickCallback={onSubmitLineClick}
        reveal={reveal}
      />

      <FinalPoem 
        poems={poems}
        onRevealPoemClickCallback={onRevealPoemClick}
        reveal={reveal}
      />

    </div>
  );
}


const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
