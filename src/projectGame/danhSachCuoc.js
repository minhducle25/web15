import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from "../redux/action/action"
class DanhsachCuoc extends Component {
  renderDanhSachCuoc = () => {
    console.log(this.props.danhSachCuoc);
  }
  render() {
    return (
      <div>
        {this.renderDanhSachCuoc()}
      </div>
    )
  }
}
//hàm lấy giá trị state trong danh sách cược từ baucuatomcareducer
//tạo thành props.danhsachcuoc cho component 
const mapStateToProps = (state) => {
    return {
        danhsachCuoc: state.bauCuaTomCaReducer.tongTien
    }
}
export default connect(mapStateToProps, null)(DanhsachCuoc)