import React, {useState} from "react";
import { Component } from "react/cjs/react.production.min";
import './styles.css'


class Countdown extends React.Component {
 constructor(props) {

   super(props)

   this.state =  {
     deadline : "February 28, 2022" ,
     newDeadLine : ""



   } ;


     

 }

 changeDeadLine() {

 
  this.setState({deadline : this.state.newDeadLine})

  }








  render() {


    return (

        <div className="card">
                <div >  <p>  count down to {this.state.deadline}</p> </div>

                <div>  
                    <div className=" card-data"> 14 days     </div>
                    <div className=" card-data"> 14 hours    </div>
                    <div className=" card-data"> 14minute     </div>
                    <div className=" card-data"> 14 seconds  </div>
                    
               </div>
               <div className="card-form">
               <input 
               placeholder="new Date"
               onChange={ event=>this.setState({newDeadLine:event.target.value})}
               
               />
               <button onClick={()=>this.changeDeadLine()}> Submit</button>
               </div>


               
        </div>
           
        





     ) ;


  }





}

export default Countdown