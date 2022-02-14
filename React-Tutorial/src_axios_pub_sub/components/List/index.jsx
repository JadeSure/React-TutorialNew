import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    componentDidMount(){
        console.log("@");
        this.token = PubSub.subscribe('searchLogin', (msa, data) => {
            console.log("@@");
            this.setState(data)
        })
    }

    componentWillUnmount(){
       PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div>
                {
                    isFirst ? <h2>Welcome using git search</h2> :
                    isLoading ? <h2>Loading</h2>:
                    err ? <h2 style={{color: 'red'}}>{err}</h2>:
                    users.map((user)=>{
                        return (
                            <div key={user.id}>
                                <a href={user.html_url}>
                                    <img src={user.avatar_url} alt="image" />
                                </a>
                                <p>{user.login}</p>
                            </div>
                        )
                    })    
                }    

            </div>
           
               
               
           
        )
    }
}
