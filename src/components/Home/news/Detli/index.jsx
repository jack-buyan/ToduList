import React, { Component } from 'react'

class Detli extends Component {
  render() {
    const {params} = this.props.match

    return (
      <div>
        {params.name}
      </div>
    )
  }
}

export default Detli