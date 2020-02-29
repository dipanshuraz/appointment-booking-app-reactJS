import React, { Component } from 'react'

export class ImgBlock extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    const { img } = this.props
    console.log(img)
    return (
      <div className="col-md-6 col-sm-12 col-lg-6 p-5">
        <img src={img} className='img-fluid' alt="" />
      </div>
    )
  }
}

export default ImgBlock
