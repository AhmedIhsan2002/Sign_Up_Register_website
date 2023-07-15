import React, { Component } from 'react'

export default class TitleGroup extends Component {
  render() {
    const {cildern} = this.props
    return (
      <div>
        <div>
            {cildern}
        </div>
      </div>
    )
  }
}
