import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        console.log(this.props.users);
        return (
            <div className='row'>
                {
                    this.props.users.map((e, i) => {
                        return <div className='card' key={i}>
                            <a href={e.html_url} target="_blank" rel='noreferrer'>
                                <img src={e.avatar_url} style={{ width: '100px' }} alt="" />
                            </a>
                            <p className='card-text'>{e.login}</p>
                        </div>
                    })
                }

            </div>
        )
    }
}
