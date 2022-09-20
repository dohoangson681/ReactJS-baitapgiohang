import React, { Component } from 'react'
import ProductList from './ProductList'

export default class MainContent extends Component {
  render() {
    return (
      <ProductList addToCart = {this.props.addToCart} gioHang = {this.props.gioHang} shoesdata = {this.props.shoesdata} />
    )
  }
}
