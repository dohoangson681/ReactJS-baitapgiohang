import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar container navbar-expand-lg  bg-dark text-white ">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="cart">
            <button
              data-toggle="modal"
              data-target="#exampleModal"
              className="btn btn-primary"
            >
              <img
                width={30}
                src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317"
                alt="cart"
              />
              <span>({this.props.tongSP})</span>
            </button>
          </div>
        </nav>
        {/* MODAL  */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  My Cart
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Ma SP</th>
                      <th>Ten SP</th>
                      <th>So luong SP</th>
                      <th>Gia San Pham</th>
                      <th>Thanh tien</th>
                      <th>Hinh anh SP </th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.props.gioHang.map((sp)=>{
                          return (
                            <tr key = {sp.maSP}>
                              <td>{sp.maSP}</td>
                              <td>{sp.tenSP}</td>
                              <td>
                                <button onClick={() => {
                                    this.props.tangGiamSP(sp, true) ; 
                                }} className="btn btn-success h-25">+</button>
                                <span>{sp.soLuong}</span>
                                <button onClick={()=>{
                                  this.props.tangGiamSP(sp , false) ; 
                                }} className="btn btn-success h-25">-</button>
                              </td>
                              <td>{sp.giaBan.toLocaleString()}</td>
                              <td>{(sp.soLuong * sp.giaBan).toLocaleString()}</td>
                              <td>
                                <img width={40} src={sp.hinhAnh} alt="anh" />
                              </td>
                              <td>
                                <button onClick={()=>{
                                    this.props.deleteProduct(sp) ; 
                                }} className="btn btn-primary">Delete</button>
                              </td>
                            </tr>
                          )
                      })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <h1 className="text-success text-center">Tong tien : {this.props.tongTien}$</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
