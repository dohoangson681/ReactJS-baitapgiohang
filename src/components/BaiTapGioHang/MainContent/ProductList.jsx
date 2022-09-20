import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
    return (
      <div className='row container mx-auto my-4'>
            {this.props.phonedata.map((phone , index)=>{
                return <ProductItem addToCart = {this.props.addToCart} key = {index} phone = {phone} />
            })}
      </div>
    )
  }
}
