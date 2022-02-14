import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import { Route, Routes, NavLink} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>This is Home</h2>
                <div>
                     <ul>
                         <li><NavLink to="news">News</NavLink></li>
                         <li><NavLink to="message">Message</NavLink></li>
                     </ul>

                    <Routes>
                        <Route path="news" element={<News/>}/>
                        <Route path="message/*" element={<Message />}/>
                        {/* <Route path="/home/*" element={<Message />}/> */}
                    </Routes>
                </div>
            </div>
        )
    }
}
