import {extractFeedback} from '../api/feedback'
import {useState} from 'react'

function FeedbackPage(props){
    const [feedbackData, setFeedbackData] = useState()
    function loadFeedbackHandler(id){
        return () => {
            fetch(`/api/feedback/${id}`).then(response => response.json()).then(data => setFeedbackData(data.feedback))
        }
    }


    return <>
           {feedbackData && <p>{feedbackData.email}</p>}
           <ul>
        {props.feedbackItems.map(item => {
            return <li key={item.id}>{item.text}
            <button onClick={loadFeedbackHandler(item.id)}>Show Details</button>
     
            </li>
        })}
    </ul>
    </>
}

export async function getStaticProps(){
    const {data} = extractFeedback();
    return {
        props:{
            feedbackItems: data
        }
    }
}

export default FeedbackPage;
