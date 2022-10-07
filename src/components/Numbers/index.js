import React from 'react'
import './Numbers.css'

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Numbers = ({ setClickValue, selected }) => {
  return (
    <div>
      <div className="numbers">
        <div
          className={`check 
                    ${selected === 0 ? 'selected-delete' : ''} 
                    noSelect`}
          key={`key-2-${0}`}
          onClick={() => setClickValue(0)}
        >
          Clear one step
        </div>
      </div>
      <div className="numbers">
        {NUMBERS.map(check => {
          let selectedClass = check === selected ? 'selected' : ''
          return (
            <div
              className={`check ${selectedClass} noSelect `}
              key={`key-1-${check}`}
              onClick={() => setClickValue(check)}
            >
              <p className="check-text">{check}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Numbers
