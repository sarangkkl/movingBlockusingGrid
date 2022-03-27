import React,{ useState } from 'react'
import './App.css';
import './scripts/logic.js';
import Player from './components/Player'
function App() {

  const [xcor,setXcor] = useState(2)
  const [ycor,setYcor] = useState(2)

  const tagStyle = {
    gridRowStart: xcor,
    gridColumnStart: ycor ,

}

  function moveRight(){
    if(xcor>=10 || xcor<=0){
      setXcor(10)

    }else{
      setXcor(xcor+1)
    }
    
  }
  function moveDown(){
    if(ycor>=10 || ycor<=0){
      setYcor(10)
    }else{
      setYcor(ycor+1)
    }
}
  return (
    <div className="App">
      <div className="container">
          <div className="board" id="board">
              <Player style={tagStyle}/>
          </div>
          <button onClick={()=>{moveRight()}}>Move Right {xcor}</button>
          <button onClick={()=>{moveDown()}}>Move Down {ycor}</button>
      </div>
    </div>
  );
}

export default App;
