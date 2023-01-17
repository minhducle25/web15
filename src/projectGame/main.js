import React, { Component } from 'react'
import DanhsachCuoc from './danhSachCuoc'
import XucXac from './xucXac'


export default class Main extends Component {
  render() {
    return (
      <div>
        <DanhsachCuoc />
        <XucXac />
      </div>
    )
  }
}
