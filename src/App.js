import React from 'react';

class App extends React.Component {
    constructor () {
        super ()
        this.state = {
            second : "00" ,
            minute: "00",
            hour: "00" 
        }
        this.interval = null
    }
  
    startHandler = () => {
        this.interval = setInterval(() => {
          if (+this.state.minute === 9) {
            this.setState({ hour: +this.state.hour + 1, minute: 0 });
          } else if (+this.state.second === 9) {
            this.setState({ minute: +this.state.minute + 1, second: 0 });
          } else {
            this.setState({ second: +this.state.second + 1 });
            // if(this.state.second)
          }
        //   this.setState({
        //     second: String(this.state.second).padStart(2, 0),
        //     minute: String(this.state.minute).padStart(2, 0),
        //     hour: String(this.state.hour).padStart(2, 0),
        //   });
    
          // this.state.second === 59
          //   ? this.setState({ minute: this.state.minute + 1, second: 0 })
          //   : this.setState({ second: this.state.second + 1 });
          // this.state.minute === 59
          //   ? this.setState({ hour: this.state.hour + 1, minute: 0 })
          //   : this.setState({ minute: this.state.minute + 1 });
        }, 200);
      };





    pauseHandler = () => {
        clearInterval(this.interval)
        
    }

    stopHandler = () => {
        clearInterval(this.interval)
        this.setState({second:"00", minute : "00", hour:"00"})
    }

    render() {
        return (
            <div>
                <div> {this.state.hour} : {this.state.minute} : {this.state.second}</div>
                <div className='btns'>
                    <button onClick={this.startHandler}>start</button>
                    <button onClick={this.pauseHandler}>pause</button>
                    <button onClick={this.stopHandler}>stop</button>
                </div>
            </div>
        )
    }
}

export default App;
