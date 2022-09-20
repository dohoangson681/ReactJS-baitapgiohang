import React, { Component } from 'react'
import ProductList from './ProductList'

export default class MainContent extends Component {
  render() {
    return (
      <div>
        <ProductList addToCart = {this.props.addToCart} phonedata = {this.props.phonedata} />
      </div>
    )
  }
}
