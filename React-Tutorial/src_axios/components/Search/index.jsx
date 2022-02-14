import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search =()=>{

       
        // 连续解构赋值 + 重命名
        const {keyWordElement:{value:renameVariable}} = this
        this.props.updateAppState({isFirst:false, isLoading:true})
        const url = `https://api.github.com/search/users?q=${renameVariable}`
        axios.get(url).then(
            response => {
                this.props.updateAppState({isLoading:false, users: response.data.items});
            },
            error => { 
                this.props.updateAppState({isLoading:false, err:error.message});
            }
        )
        
    }

    render() {
        return (
            <section>
                <h3>Search Github Users</h3>
                <div>
                    <input ref={c=>this.keyWordElement = c} type="text" placeholder="enter the name your search"/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
