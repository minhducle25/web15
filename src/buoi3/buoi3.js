import React, { Component } from 'react'
import img2 from "../asset/3.jpg"
import img3 from "../asset/4.jpg"

export default class Buoi3 extends Component {
    //state: sự thay đổi
    state = {
        img: img3
    }
  render() {
    const changeImg = (imgs) => {
        this.setState({
            img: imgs
        })
    }
    return (
      <div>
        <h1>Hiển thị hình ảnh</h1>
        <img src={this.state.img} width={300}/>
        <button onClick={() => changeImg(img2)}>thay đổi ảnh</button>
        <button onClick={() => changeImg(img3)}>thay đổi ảnh</button>
      </div>
    )
  }
}
