import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Today’s Wordle? Solved in {turn}.</h1>
          <p className="solution">{solution}</p>
          <p>Next step: monetizing this into a course on ‘Strategic Workdle Thinking’.</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Another day, another defeat. This one did not even come with a paycheck.</h1>
          
          <p>Solution:</p>
          <p className="solution">{solution}</p>
        </div>
      )}
    </div>
  )
}