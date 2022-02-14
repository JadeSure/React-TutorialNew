import React, {useState}from 'react'


export default function TryState() {
    const [name, setName] = useState('Sure')
    const [names, setNames] = useState([])
    const [value, setValue] = useState(0)

    function changeName(){
        setName('Shawn')
    }

    function submitName(e){
        e.preventDefault()
        setNames([...names, {id: names.length, name}])
        setName('')
    }

    const increment =()=>{
        setValue(value+1)
        setValue(value+4)
    }

    const decrement =()=>{
        setValue((state)=>{
            return state -1
        })
        setValue((state)=>{
            return state -1
        })
    }

    return (
        
        <div>
            <h1 >Hello, {name}</h1>
            <button onClick={changeName}>Change Name</button>
            <hr />

            <form onSubmit={submitName}>
                <input type="text" placeholder='add names' value={name} onChange={e => setName(e.target.value)} />
                <button>Submit</button>
            </form>
           
            <hr />
            <ul>
                {names.map((item)=> <li key={item.id}>{item.name}</li>)}
            </ul>
            <br />
                <h2>{value}</h2>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
        </div>
    )
}
