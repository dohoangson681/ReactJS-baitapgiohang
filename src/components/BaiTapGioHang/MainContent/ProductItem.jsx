import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div className="card col-4" style={{ width: "18rem" }}>
        <img src={this.props.phone.hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{this.props.phone.tenSP}</h5>
          <a onClick={ () => { this.props.addToCart(this.props.phone) } } href="#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    );
  }
}
