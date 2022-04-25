import React, {useState, useRef, useEffect} from "react";

const users = [
    {name: 'Shawn', age: 20},
    {name: 'Mandy', age: 24},
    {name: 'CC', age: 23}
]
// export default function UserSearch: React.FC {
//   return <div>UserSearch</div>;
// }

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name:string, age: number} | undefined>();

    useEffect(()=>{
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus()
    }, [])

    const onClick = () => {
        const foundUser = users.find(user=> user.name === name)
        setUser(foundUser);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setName(event.target.value)
    }
    
    return <div>
        User search
        <input ref={inputRef} type="text" value={name} onChange={event=> setName(event.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
 } 
 export default UserSearch;