import React, { Component } from 'react'

export class TextBlock extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { text, text1 } = this.props
    return (
      <div className="col-md-6 col-sm-12 col-lg-6 p-5 d-flex justify-content-center align-items-center">
        <div className="p-1">
          <h1>{text}</h1>
          <p className="lead">
            {text1}
          </p>
        </div>
      </div>
    )
  }
}

export default TextBlock
