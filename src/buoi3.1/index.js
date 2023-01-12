import React, { Component } from 'react'
import img from "../asset/1.jpg"
import img1 from "../asset/2.png"
import img2 from "../asset/3.jpg"
import img3 from "../asset/4.jpg"
import Child from './child'
export default class Index extends Component {
    listArray = {
        mangSP: [
            {maSP: 1, tenSP: "iphoneX", gia: 100, hinhAnh: img},
            {maSP: 2, tenSP: "iphoneXs", gia: 100, hinhAnh: img1},
            {maSP: 3, tenSP: "iphone11", gia: 100, hinhAnh: img2},
            {maSP: 4, tenSP: "iphone12", gia: 100, hinhAnh: img3},
        ]
    }
    //truyền dữ liệu từ component con sang dữ liệu component cha
    render() {
    return (
      <div>
        {/* <tenComPonent tenbienTuDat = {gia tri can truyen}*/}
        <Child demo = {this.listArray}/>
      </div>
    )
  }
}
