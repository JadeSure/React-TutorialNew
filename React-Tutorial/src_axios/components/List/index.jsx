import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const {users, isFirst, isLoading, err} = this.props
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
