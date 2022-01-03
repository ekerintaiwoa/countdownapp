import React, {useState} from "react";
import { Component } from "react/cjs/react.production.min";
import './styles.css'
import Clock from  '../components/Clock'


class Countdown extends React.Component {
 constructor(props) {

   super(props)

   this.state =  {
     deadline : 'Jul 25, 2022' ,
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

               <Clock    
               
               deadline = {this.state.deadline}
               
               
               />
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