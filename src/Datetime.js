import React, {Component} from 'react';

class Datetime extends Component{

  d = new Date();

  state = {
    totalSeconds:(this.d.getHours() * 3600) + (this.d.getMinutes() * 60) + this.d.getSeconds(),
    seconds: 0,
    minutes: 0,
    hour:0,
    day: this.d.getDay(),
    mon: this.d.getMonth(),
    weekday : ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthname : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct","Nov","Dec"]
  }
  
  timerVar = setInterval(()=>{

    const {totalSeconds, seconds, minutes, hour} = this.state
      
    this.setState(({ totalSeconds }) => ({
      totalSeconds: totalSeconds + 1
    }))

      this.setState(({ hour }) => ({
        hour : Math.floor(totalSeconds /3600)
    }))

    this.setState(({ minutes }) => ({
      minutes : Math.floor((totalSeconds - hour*3600)/60)
    }))

  this.setState(({ seconds }) => ({
    seconds :totalSeconds - (hour*3600 + minutes*60)
    }))

  }, 1000);
  

  render(){
    
    const {totalSeconds, seconds, minutes} = this.state 
    const date = this.d.getDate();

      return (
        
        
        <div className="App">
                  
          <h1>{date}:{this.state.weekday[this.state.day]}:{this.state.monthname[this.state.mon]}</h1>
          <h1>{this.state.hour}:{this.state.minutes}:{this.state.seconds}</h1>
        </div>
      );

  }
}

export default Datetime;
