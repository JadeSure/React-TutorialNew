import React from "react";
import {useRef} from 'react'
import {useState} from 'react'

export default function HomePage() {
    const emailInputRef = useRef();
    const feedbackInputRef = useRef();
    const [feedbackItems, setFeedbackItems] = useState([])

    function submitFormHandler(event){
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value
        const enteredFeedback = feedbackInputRef.current.value

        const reqBody = {
            email: enteredEmail,
            text: enteredFeedback
        }

        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => console.log(data))
    }

    function loadFeedbackHandler(){
        fetch('/api/feedback', {
            method: 'GET'
        }).then(response => response.json())
        .then(data => setFeedbackItems(data))
      
    }
    console.log(feedbackItems);
    
  return <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
          <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id='email' ref={emailInputRef}/>
          </div>
          <div>
              <label htmlFor="feedback">Feedback</label>
              <textarea id="feedback" cols="5" ref={feedbackInputRef}></textarea>
          </div>
          <button>Send Feedback</button>
        </form>
        
          <button onClick={loadFeedbackHandler}>Receive Feedback</button>
        <ul>
                {feedbackItems.map(item => {
                return <li key={item.id}>{item.text}</li>
            })}
        </ul>
          

  </div>;
}
