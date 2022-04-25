import React, {useEffect, useRef} from "react";
import Input from './components/Input'

function App() {
  const firstNameRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(()=>{
    firstNameRef.current.focus()
  }, [])

  const keyDownHandle = (e) => {
    console.log(e);
    if (e.key === "Enter"){
      submitRef.current.focus()
    }
  }

  const handleSubmit = () => {
    firstNameRef.current.value="likui"
    firstNameRef.current.style.width="400px"
  }

  return (
    <div>
      {/* <input type="text" ref={firstNameRef} onKeyDown={keyDownHandle} placeholder="First Name"/> */}
      <Input type="text" ref={firstNameRef} onKeyDown={keyDownHandle} placeholder="First Name"/>
      <button ref={submitRef} onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
