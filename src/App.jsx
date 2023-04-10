import React, { useState } from 'react';

import brain from './image/memory.svg'
import reation from './image/vector.svg'
import visual from './image/visual.svg'
import chat from '../src/image/reaction.svg';
import './App.css'

function App() {
  const [count0, setCount0] = useState(50);
  const [count1, setCount1] = useState(80);
  const [count2, setCount2] = useState(92);
  const [count3, setCount3] = useState(61);
  const [count4, setCount4] = useState(73);
  

  function click1() {
    setCount1(count1 + 1);
    if (count1 >= 99) {
      setCount1(100);
    }
  }
  function click2() {
    setCount2(count2 + 1);
    if (count2 >= 99) {
      setCount2(100);
    }
  }
  function click3() {
    setCount3(count3 + 1);
    if (count3 >= 99) {
      setCount3(100);
    }
  }
  function click4() {
    setCount4(count4 + 1);
    if (count4 >= 99) {
      setCount4(100);
    }
  }
  function click0() {
    setCount0(count0 + 1);
    if (count0 >= 99) {
      setCount0(100);
    }
  }
  return (
    <div className="container">
      <div className="app">
        <div className="app-left">
          <h2 className='title'>Your Result</h2>
          <div onClick={click0} className='circle'>
              <h1 className='number'>{count0}</h1>
              <span className='full-number'>of 100</span>
          </div>
          <h2 className='status'>Great</h2>
          <p>Your performance exceed 65% <br /> of the people conducting the test here!</p>
        </div>
        <div className="app-right">
                  <h2 className="title-r">Summary</h2>
                  <ul className='list'>
                    <li onClick={click1} className='item item1'>
                      <div  className="item-left">
                        <img className='icon' src={reation} alt="brain" />
                        <h3 className="item-title color1">Reaction</h3>
                      </div>
                      <div className='item-right'>
                        <span className='rating'>{count1}</span>/ 100
                      </div>
                    </li>
                    <li onClick={click2}  className='item item2'>
                        <div className="item-left">
                          <img className='icon' src={brain} alt="reation" />
                          <h3 className="item-title color2">Memory</h3>
                        </div>
                        <div className='item-right'>
                          <span className='rating'>{count2}</span> / 100
                        </div>
                    </li>
                    <li onClick={click3} className='item item3'>
                        <div className="item-left">
                          <img className='icon' src={chat} alt="visual" />
                          <h3 className="item-title color3">Verbal</h3>
                        </div>
                        <div className='item-right'>
                          <span className='rating'>{count3}</span>/ 100
                        </div>
                    </li>
                    <li onClick={click4} className='item item4'>
                        <div className="item-left">
                          <img className='icon' src={visual} alt="chat" />
                          <h3 className="item-title color4">Visual</h3>
                        </div>
                        <div className='item-right'>
                          <span className='rating'>{count4}</span>/ 100
                        </div>
                    </li>
                  </ul>
                  <button  className='btn' id='btn'>Continue</button>
              </div>
      </div>
    </div>
  )
}

export default App;