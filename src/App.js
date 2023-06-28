  
  
  
  //useReducer controls the change in state, does the same as useState()
  //it is easier to use when you are working with larger objects, or
  // when your next state depends on the previous state.
  // Generally used for more complicated bigger apps. It is easier to test.

import { useReducer } from 'react';
import './App.css';
//reducer function has to return the state based on type of action taken
//reducer does not change the state directly, it creates a new object with a new state
//Action.type - type of action required, it tells us how to update thew state
//using switch case from JS instead of if else
/*function reducer(state, action){
  switch(action.type){
    case "ADD": return{count: state.count+1};
    case "SUBSTRACT": return{count: state.count-1}
    default:return state;
  }
}*/

//Example 2

function reducer(state, action){
  switch(action.type){
    case "DIVIDE": return {count: state.count/5};
    case "MULTIPLY": return {count: state.count*5};
    default:return state;
  }
}

function App() {
  //Example 1
  //First, initializing state
 // const [state, dispatch] =useReducer(reducer,{ count:0}) //UseReducer takes 2 arguments:reducer(function), and initial state.
                                                          // state - initial state, dispatch is a function
                                                          //dispatch is a part of this hook.
                                                          //it's telling the button what type of action needs to be done
  //Example 2

  const [state, dispatch] = useReducer(reducer, {count: 5})
  
    return (
    <div className="App">
      <br></br>
      <p>{state.count}</p>
   <button onClick={()=>dispatch({type: 'ADD'})}>++++</button>
   <button onClick={()=>dispatch({type: 'SUBSTRACT'})}>----</button>

<br></br><br></br>

<button onClick={()=>dispatch({type: "DIVIDE"})}>DIVIDE</button>
<button onClick={()=>dispatch({type: "MULTIPLY"})}>MULTIPLY</button>
    </div>
  );
}

export default App;
