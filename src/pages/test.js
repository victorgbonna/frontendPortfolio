import { useMemo, useState } from 'react';
import { QueryContainer } from 'query-container';



export default function Test() {
  const states=['loading','error','empty','filter','data']
  const [current_state, setCurrentState]= useState('loading')
  const get_next_state=()=>{
    const pos_of_current_state=states.indexOf(current_state)+1
    if(pos_of_current_state===states.length){
      return states[0]
    }
    return states[pos_of_current_state]
  }
  const next_state = useMemo(
    () => get_next_state(),
    [current_state]
  );
  return (
    <div className="App">
      <header className="App-header">
        {/* ss<img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>Current state is on {current_state}</p>
        <button onClick={()=>setCurrentState(next_state)}>Toggle to {next_state}</button>
        <QueryContainer
          isLoading={current_state==="loading"}
          isEmpty={current_state==="empty"}
          isFilter={current_state==="filter"}
          isError={current_state==="error"}
        >
          <p>There is data</p>
        </QueryContainer>
      </header>
    </div>
  );
}
