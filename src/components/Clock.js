import  React ,{ Component }from 'react'


import Countdown from './Countdown';



class Clock extends Component {

    constructor(props) {

      super(props) ;

      this.state = {

        days : 0 ,
        minute : 0 ,
        hours : 0 ,
        seconds : 0


      }

    }
    componentDidMount()  {
       this.getTimeUntil(this.props.deadline) ;


      }


       leadingzero(num){

          return  num < 10 ? '0' + num : num  ;  
       }




      componentDidUpdate() {

          setInterval( ()=>this.getTimeUntil(this.props.deadline),1000) ;


      }


        
  
     getTimeUntil(deadline){

       const time = Date.parse(deadline)-Date.parse(new Date()) ;
      
       const seconds =  Math.floor((time % (1000 * 60)) / 1000);
       const minute =  Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
       const hours =  Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const days  =  Math.floor(time / (1000 * 60 * 60 * 24));

          console.log('time' ,time,  'seconds', seconds, 'minute',minute, 'hours', hours, 'days, days') ;

           this.setState({days: days, hours: hours, minute: minute, days:days, seconds: seconds}) ;
     }







    render() {
  

    return(    
        <div>  
        
        <div className=" card-data"> {this.leadingzero(this.state.days)} days </div>
        <div className=" card-data">{this.leadingzero(this.state.hours)} hours   </div>
        <div className=" card-data">{this.leadingzero(this.state.minute)}  minute  </div>
        <div className=" card-data"> {this.leadingzero(this.state.seconds)} seconds </div>
        
   </div>




    )


    }




}


export  default Clock