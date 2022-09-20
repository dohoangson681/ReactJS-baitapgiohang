import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
    return (
      <div className="row container mx-auto my-4">
        {this.props.shoesdata.map((shoes) => {
            return <ProductItem addToCart = {this.props.addToCart} gioHang = {this.props.gioHang} key = {shoes.alias} shoes = {shoes} />
        })}
      </div>
    )
  }
}
