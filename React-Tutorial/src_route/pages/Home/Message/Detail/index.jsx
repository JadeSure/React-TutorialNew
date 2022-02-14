// import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



export default function Detail(){
    let navigation = useNavigate();
    let {id, title} = useParams();



    const data = [
        {id:'01', content: 'love u'},
        {id:'02', content: 'hate u'},
        {id:'03', content: 'fuck u'}
    ]

    const {content} = data.find(x=> x.id===id)

    return (
        <div>
            <ul>
                <li>ID: {id}</li>
                <li>title: {title}</li>
                <li>content: {content}</li>
            </ul>
            <button onClick={()=>navigation("/home/news")}>Go back to message page</button>
        </div>
    )
}



// export default class index extends Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>22333</h1>
//             </div>
//         )
//     }
// }



