import React, {useState, useRef, useEffect} from 'react'

export default function TryRef() {

    console.log('order -1');
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)
    const inputE1 = useRef('')
    const preCount = useRef('')
    console.log('order 0');

    const resetName =() =>{
        console.log(inputE1);
        inputE1.current.focus();
        setName('')
    }
    console.log('order 1');

    useEffect(()=>{
        console.log('order 2');
        console.log('in useRef', preCount);
        preCount.current = count
    }, [])

    return (
       
        <div>
            <input ref = {inputE1} type="text" onChange={e=> setName(e.target.value)} value={name}/>
            <button onClick={resetName}>Reset</button>
            <h2>input name is {name}</h2>
            <div>
                <h1>Random Counter: {count}</h1>
                <button ref={preCount} onClick={e=>setCount(Math.ceil(Math.random()*100))}>Gnenerate Number</button>
                {typeof preCount.current !=='' && (
                    <h2>Previous Counter: {preCount.current}</h2>
                )}
            </div>
        </div>
    )
}
