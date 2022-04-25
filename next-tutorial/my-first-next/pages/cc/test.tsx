import Link from 'next/link'
export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos') 
    const data = await res.json();
    
    return {
        props: {ninjas: data}
    }
}
const Likui = ({ninjas}) => {
    
    return (
        <div>
            <h2>
                fishhhhh....
            </h2>
            {ninjas.map(x => (
                <Link href={`/cc/${x.id}`} key={x.id}>
                    <h3>{x.title}</h3>
                </Link>
            ))}

        </div>
    );
}
 
export default Likui;
