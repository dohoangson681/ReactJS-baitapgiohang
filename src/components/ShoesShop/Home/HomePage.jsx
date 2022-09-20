import React, { Component } from 'react' ; 
import Header from '../Header/Header' ; 
import MainContent from '../MainContent/MainContent' ; 
import shoesdata from '../../../data/shoes.json' ; 

export default class HomePage extends Component {
    state = {
        gioHang : [
            {...shoesdata[0] , soLuong : 1 , inCart : true } , 
        ] 
    }
    // them san pham vao gio hang
    addToCart = (spGH) => {
        let gioHangMoi = [...this.state.gioHang] ; 
        let spFind = gioHangMoi.find((sp) => {
            return sp.id === spGH.id ; 
        })
        if(spFind){
            ++spFind.soLuong ; 
        }else {
            let spGHMoi = {...spGH , soLuong : 1 , inCart : true } ; 
            gioHangMoi = [...gioHangMoi , spGHMoi] ; 
        }
        this.setState({
            gioHang : gioHangMoi , 
        })
    }
    // delete sp
    deleteSP = (spGH) => {
        let gioHangMoi = [...this.state.gioHang] ; 
        let index = gioHangMoi.findIndex((sp)=> {
            return sp.id === spGH.id ; 
        })
        if(index > -1) {
            gioHangMoi.splice(index , 1) ; 
        }else {
            alert("Product not found !") ; 
        }
        this.setState({
            gioHang : gioHangMoi , 
        })
    }
    // tang giam sp
    tangGiamSP = (spGH , status) => {
        let gioHangMoi = [...this.state.gioHang]
        let index = gioHangMoi.findIndex((sp)=>{
            return sp.id === spGH.id ; 
        })
        if(index > -1){
            if(status) {
                // increase
                ++gioHangMoi[index].soLuong ; 
            }else{
                //decrease
                --gioHangMoi[index].soLuong ;
                if(gioHangMoi[index].soLuong === 0 )  {
                    gioHangMoi.splice(index , 1) ; 
                }
            } 
        }else {
            alert("Something went wrong , opps !") ; 
        }
        this.setState({
            gioHang : gioHangMoi , 
        })
    }
  render() {
    let tongSP = 0 ;
    this.state.gioHang.map((sp)=>{
        tongSP += sp.soLuong ; 
    }) ; 
    let tongPrice = 0 ; 
    this.state.gioHang.map((sp)=>{
        tongPrice += sp.soLuong * sp.price ; 
    }) ; 
    return (
      <div>
        <Header tongPrice = {tongPrice} tangGiamSP = {this.tangGiamSP} deleteSP = {this.deleteSP} tongSP = {tongSP} gioHang = {this.state.gioHang} />
        <MainContent gioHang = {this.state.gioHang} shoesdata = {shoesdata} addToCart = {this.addToCart} />
      </div>
    )
  }
}
