import React, { Component , Fragment } from 'react' ; 
import ModalDetails from './ModalDetails' ; 
import ProductList from './ProductList' ;

export default class MainContent extends Component {
  render() {
    return (
      <Fragment>
      <ProductList detailSP = {this.props.detailSP} addToCart = {this.props.addToCart} gioHang = {this.props.gioHang} shoesdata = {this.props.shoesdata} />
      
      <ModalDetails currentProduct = {this.props.currentProduct} />
      </Fragment>
    )
  }
}
