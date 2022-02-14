import React, { Component } from 'react'
import {NavLink, Routes, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            {id: '01', title:'message661'},
            {id: '02', title:'message662'},
            {id: '03', title: 'message663'}
        ]
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj)=>{
                            return (
                                <li key={msgObj.id}>
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                                    <NavLink to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
           
                    {/* <Route path="/home/message/detail/:id/:title" element={<Detail/>}/> */}
                    <Routes>
                        <Route path="detail/:id/:title" element={<Detail/>}/>
                     
                    </Routes>
            </div>
        )
    }
}
