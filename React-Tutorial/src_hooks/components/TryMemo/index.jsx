import React, { useState, useMemo } from 'react'

export default function TryMemo() {

    const [counter, setCounter] = useState(1);
    const [name, setName] = useState("");
    const result = useMemo(() => {
        return factorial(counter)
    }, [counter])

    const passName = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <h2>Factorial of {counter} is: {result}</h2>
            <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
            <button onClick={() => { setCounter(counter - 1) }}>decrement</button>

            <h2>Enter Name</h2>
            <input type="text" onChange={passName} />
            <h2>My name is {name}</h2>
            <hr />
            <DisplayName name={'likui'} />

        </div>
    )
}

const DisplayName = React.memo((name) => {
    console.log('render');
    return <p>{`My name is ${name}`}</p>
})

function factorial(n) {
    let i = 0;
    while (i < 90000000) i++

    if (n < 0) {
        return -1;
    }

    if (n === 0) {
        return 1
    }

    return n * factorial(n - 1);
}

