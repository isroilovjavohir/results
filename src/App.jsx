import brain from './image/memory.svg'
import reation from './image/vector.svg'
import visual from './image/visual.svg'
import chat from '../src/image/reaction.svg';
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="app">
        <div className="app-left">
          <h2 className='title'>Your Result</h2>
          <div className='circle'>
              <h1 className='number'>76</h1>
              <span className='full-number'>of 100</span>
          </div>
          <h2 className='status'>Great</h2>
          <p>Your performance exceed 65% <br /> of the people conducting the test here!</p>
        </div>
        <div className="app-right">
                  <h2 className="title-r">Summary</h2>
                  <ul className='list'>
                    <li className='item item1'>
                      <img className='icon' src={reation} alt="brain" />
                      <h3 className="item-title color1">Reaction</h3>
                    </li>
                    <li className='item item2'>
                        <img className='icon' src={brain} alt="reation" />
                        <h3 className="item-title color2">Memory</h3>
                    </li>
                    <li className='item item3'>
                        <img className='icon' src={chat} alt="visual" />
                        <h3 className="item-title color3">Verbal</h3>
                    </li>
                    <li className='item item4'>
                        <img className='icon' src={visual} alt="chat" />
                        <h3 className="item-title color4">Visual</h3>
                    </li>
                  </ul>
                  <button className='btn' id='btn'>Continue</button>
              </div>
      </div>
    </div>
  )
}

export default App;

// const [count, setCount] = useState(0)

{/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}