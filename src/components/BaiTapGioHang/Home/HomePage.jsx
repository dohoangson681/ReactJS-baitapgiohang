import React, { Component } from 'react' ; 
import Header from '../Header/Header' ; 
import MainContent from '../MainContent/MainContent' ; 
import phonedata from '../../../data/phoneData.json' ; 

export default class HomePage extends Component {
    state = {
        gioHang : [] ,
    }
    // them san pham 
    addToCart = (spGH) => {
        console.log(spGH);
        let gioHangUpdate = [...this.state.gioHang]
        let spFind = this.state.gioHang.find((sp)=>{
            return sp.maSP === spGH.maSP ; 
        });
        if(spFind){
            ++spFind.soLuong ; 
            console.log('gioHangUpdate : ' , gioHangUpdate) ; 
        }else {
          let spGHNew = {...spGH , soLuong : 1} ; 
          gioHangUpdate = [...gioHangUpdate , spGHNew] ;
          console.log('gioHangUpdate : ' , gioHangUpdate) ; 
        }
        this.setState({
          gioHang : gioHangUpdate , 
        })
    }
    // xoa san pham
    deleteProduct = (spGH) => {
      let index = this.state.gioHang.findIndex((sp)=>{
        return sp.maSP === spGH.maSP ; 
      })
      if(index > -1 ){
        let gioHangUpdate = [...this.state.gioHang] ; 
        gioHangUpdate.splice(index , 1 ) ; 
  
        this.setState({
            gioHang : gioHangUpdate , 
        })
      }else {
        console.log("Not found to delete !") ; 
      }
      
    }
    // tang giam san pham
    tangGiamSP = (spGH , x ) => {
      console.log(spGH) ;
      let gioHangMoi = [...this.state.gioHang] ; 
      let index = gioHangMoi.findIndex((sp)=>{
        return sp.maSP === spGH.maSP ; 
      })
      if(index > -1 ){ // tim thay
        if(x) ++gioHangMoi[index].soLuong ; 
        else --gioHangMoi[index].soLuong ; 
        if(gioHangMoi[index].soLuong === 0 ){
          gioHangMoi.splice(index ,  1 ) ; 
        }
      }else {
        alert("Not found !") ; 
      }
      this.setState({
        gioHang : gioHangMoi , 
      })
    }
  render() {
    let tongSP  = 0 ; 
    this.state.gioHang.map((spGH )=>{
        tongSP +=  spGH.soLuong ; 
    })
    let tongTien = 0 ; 
    this.state.gioHang.map((spGH )=>{
      tongTien +=  spGH.soLuong * spGH.giaBan ; 
  })
    return (
      <div>
        <Header tongTien = {tongTien} tangGiamSP = {this.tangGiamSP} tongSP = {tongSP} gioHang  = {this.state.gioHang} deleteProduct = {this.deleteProduct} />
        <MainContent addToCart = {this.addToCart} phonedata = {phonedata}/>
      </div>
    )
  }
}
