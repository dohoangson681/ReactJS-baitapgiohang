import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Contact</a>
              </li>
            </ul>
            <div className="cartBTN">
              <button data-toggle="modal" data-target="#exampleModal" className="btn-cart">
                <img width={30}
                  src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=170667a&w=0&h=kEh5VLsTHukWc7xf2BvUs8ssqS_d7vkK0-xU3MDpO7s="
                  alt="cart pic"
                />
                </button>
                <span className="text-success">({this.props.tongSP})</span>
            </div>
          </div>
        </nav>
        {/* modal ----------------------------- */}
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
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá Sản Phẩm</th>
                            <th>Hinh Ảnh</th>
                            <th>Số Lượng</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.props.gioHang.map((shoes , index)=>{
                        let {id , name , price , image , soLuong} = shoes
                            return (
                              <tr key={index}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>
                                  <img width={40} src={image} alt="!!" />
                                </td>
                                <td>
                                  <button onClick={()=>{
                                      this.props.tangGiamSP(shoes , true) ; 
                                  }} className="btn btn-primary">+</button>
                                  <span className="text-success mx-2" style = {{fontSize : '20px' , fontWeight : 'bold'}}>{soLuong}</span>
                                  <button onClick={()=>{
                                      this.props.tangGiamSP(shoes , false) ; 
                                  }} className="btn btn-primary">-</button>
                                </td>
                                <td>
                                  <button onClick={()=> {
                                    this.props.deleteSP(shoes) ; 
                                  }} className="btn btn-danger">Delete</button>
                                </td>
                              </tr>
                            )
                       })}
                    </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <h2 className="text-primary">Tổng tiền : {this.props.tongPrice}$</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
