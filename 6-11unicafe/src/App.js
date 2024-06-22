//By Spookie0(Weiyin Ma)

import { useState } from 'react'


const StatisticsLine = (props) => {
  const text=props.text
  const value=props.value
  const percent=props.percent
  
  if(percent){
    return (
      <div>
        {text} : {value} %
      </div>
    )
  }

  return (
    <div>
      {text} : {value}
    </div>
  )
}

const Button = (props) => {
  const text=props.text
  const task=props.task
  return (
    <button onClick={task}>
    {text}
    </button>
  )
}

const Statistics = (props) => {

  const good=props.good
  const neutral=props.neutral
  const bad=props.bad

  if (good+neutral+bad==0){
    return (
      <div>
        <br/>
        No feedback is given
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{bad+neutral+good}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{(good-bad)/(bad+good+neutral)}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{(good)/(bad+good+neutral)*100} %</td>
          </tr>
        </tbody>
      </table>
      <br/>
    </div>
  )
  
}

const App = () => {
  const [ counterGood, setCounterGood ] = useState(0)
  const [ counterNeutral, setCounterNeutral ] = useState(0)
  const [ counterBad, setCounterBad ] = useState(0)


  const Clicked = false

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" task={() => setCounterGood(counterGood + 1)}/>
      <Button text="Neutral" task={() => setCounterNeutral(counterNeutral + 1)}/>
      <Button text="Bad" task={() => setCounterBad(counterBad + 1)}/>
      <br/>
      <Statistics 
        good = {counterGood}
        neutral = {counterNeutral}
        bad = {counterBad}
      />
    </div>
  )
}

export default App;
