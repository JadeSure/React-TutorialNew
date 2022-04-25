import React, {forwardRef} from "react";

function Input({type, onKeyDown, placeholder}, ref) {
  return <div>
      <input ref={ref} type={type} onKeyDown={onKeyDown} placeholder={placeholder}/> </div>;
}



export default forwardRef(Input);