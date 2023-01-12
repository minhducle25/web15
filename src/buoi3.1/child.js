import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        {this.props.demo.mangSP.map((item,key) =>{
            return(
                <div key={key}>
                    <img src={item.hinhAnh}/>
                </div>
            )
        })}
      </div>
    )
  }
}
