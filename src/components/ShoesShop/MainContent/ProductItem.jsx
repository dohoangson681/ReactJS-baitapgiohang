import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let text = '' ;  
    let index = this.props.gioHang.findIndex((sp)=>{
        return sp.id === this.props.shoes.id ; 
    })
    // console.log("index : " , index) ; 
    if(index > -1 && this.props.gioHang[index].inCart ) text = 'In Cart' ;
    else text = 'Add to cart'
    return (
      <div className="card col-4" style={{ width: "18rem" }}>
        <img src={this.props.shoes.image} className="card-img-top" alt={this.props.shoes.alias}/>
        <div className="card-body text-center">
          <h5 className="card-title">{this.props.shoes.name}</h5>
          <a onClick={()=>{
            this.props.addToCart(this.props.shoes) ; 
          }} href="#!" className="btn btn-primary">
            {/* Add to cart */}
            {text }
          </a>
        </div>
      </div>
    );
  }
}
