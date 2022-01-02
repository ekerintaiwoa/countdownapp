import  React ,{useState} from 'react'

import { Component } from 'react/cjs/react.production.min'



class Clock extends React.Component {

    constructor(props) {

      super(props) ;

      this.state = {

        days : 0 ,
        minute : 0 ,
        hours : 0 ,
        seconds : 0


      }





    }
  




    render() {


    return(    
        <div>  
        <div className=" card-data"> {this.state.days} days </div>
        <div className=" card-data"> {this.state.hours} hours   </div>
        <div className=" card-data">{this.state.minute}  minute  </div>
        <div className=" card-data"> {this.state.seconds} seconds </div>
        
   </div>




    )


    }




}


export  default Clock