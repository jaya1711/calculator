import React,{useState} from 'react'
// import './App.css';

export const Cal =()=> {

  const [result,setResult]=useState("")

  const handleClick=(e)=>{
    setResult(result.concat(e.target.value))
  }

  const clear =()=>{
setResult("")
  }
  const backspace=()=>{
setResult(result.slice(0,result.length-1));
  }

  const Calculate=()=>{
try {
  setResult(eval(result.replace(/^0+/, '').toString()))
} catch (error) {
  setResult("Error")
}
  }


  return (
    <>
    <div className='container'>
    <form>
      <input type='text' value={result}/>

    </form>

    <div className='keypad'>
      <button onClick={clear} id='clear' className="high">Clear</button>
      <button onClick={backspace} id='backspace' className="high">C</button>
      <button value = "/" onClick={handleClick} className="high">&divide;</button>
      <button value = "7" onClick={handleClick}>7</button>
      <button value = "8" onClick={handleClick}>8</button>
      <button value = "9" onClick={handleClick}>9</button>
      <button value = "*" onClick={handleClick} className="high">&times;</button>
      <button value = "4" onClick={handleClick}>4</button>
      <button value = "5" onClick={handleClick}>5</button>
      <button value = "6" onClick={handleClick}>6</button>
      <button value = "-" onClick={handleClick} className="high">&ndash;</button>
      <button value = "1" onClick={handleClick}>1</button>
      <button value = "2" onClick={handleClick}>2</button>
      <button value = "3" onClick={handleClick}>3</button>
      <button value = "+" onClick={handleClick} className="high">+</button>
      <button value = "0" onClick={handleClick}>0</button>
      <button value = "." onClick={handleClick}>.</button>      
      <button id="result" onClick={Calculate} className="high">=</button>
    </div>







    </div>
    </>
  )
}

