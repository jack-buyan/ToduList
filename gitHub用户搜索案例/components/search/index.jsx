import React, { Component } from 'react'

import axios from 'axios'
export default class Search extends Component {

    search = () => {
        //连续解构赋值
        const { keyWordElement: { value } } = this
        axios.get(`/api/search/users?q=${value}`).then(
            response => {
                this.props.saveUsers(response.data.items)
            },
            error => {
                console.log('失败了');
            }
        )
    }
    render() {
        return (
            <section className='jumbotron'>
                <h3 className='jumbotron-deading'> Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder='enter the name you search' name="" id="" /> &nbsp; <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
