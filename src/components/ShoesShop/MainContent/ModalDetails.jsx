import React, { Component } from "react";

export default class ModalDetails extends Component {
  render() {
    let {id , name , alias , price , quantity , image , shortDescription } = this.props.currentProduct
    return (
      <div
        className="modal fade"
        id="modalDetail"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Product Details
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
            <div className="modal-body row container-fluid">
                <div className="col-6 text-center">
                    <h2 className="text-danger">
                        {this.props.currentProduct.name}
                    </h2>
                    <img className="img-fluid" src={this.props.currentProduct.image} alt="shoes details" />
                </div>
                <div className="col-6">
                      <table className="table">
                        <tbody>
                        <tr>
                            <td>Mã sản phẩm</td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>Tên sản phẩm</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Giá sản phẩm</td>
                            <td>{price}</td>
                        </tr>
                        <tr>
                            <td>Mô tả</td>
                            <td>{shortDescription}</td>
                        </tr>
                        <tr>
                            <td>Tồn kho</td>
                            <td>{quantity}</td>
                        </tr>
                        </tbody>
                      </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
