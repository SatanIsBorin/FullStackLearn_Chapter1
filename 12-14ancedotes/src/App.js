import { useState } from 'react';
//by Spookie0 (Weiyin Ma)
const Button = (props) => {
  const text=props.text
  const task=props.task
  return (
    <button onClick={task}>
    {text}
    </button>
  )
}

let initvotes = [
  0,0,0,0,0,0,0
];

const App = () => {
  
  const [votes, setvotes] = useState(
    initvotes
  );
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)

  const makeRandom = () => {
    setSelected(Math.floor(Math.random()*7))
  }

  function VoteAnecdote() {
    const nextvotes = votes.map((c, i) => {
      if (i === selected) {
        return c + 1;
      } else {
        return c;
      }
    });
    setvotes(nextvotes);
  }

  const ShowMost = () => {
    let maxid = 0;
    for(let i = 0; i < 7; i += 1){
        if(votes[i] > votes[maxid]){
          maxid = i;
        }
    }
    return(
      <div>
        <h1>Anecdote with the most votes</h1>
        {anecdotes[maxid]}
        <br/>
        With {votes[maxid]} votes
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      Has {votes[selected]} votes.
      <br/>
      <Button text="Vote" task={() => VoteAnecdote()}/>
      <Button text="Next Ancedote" task={() => makeRandom()}/>
      <ShowMost/>
    </div>
  )
}

export default App