const Svenjs = require('svenjs');

var clickyApp = Svenjs.createComponent({
    displayName: "Clicky App",
    initialState: {
        clicks: 0
    },
    render(){
      "use strict";
      var state=this.state;
      let svenFunc = () =>{
        this.setState({clicks: (this.state.clicks ? ++this.state.clicks : 1)});
      }
      return (<div id="row">
              <div id="app">
                  <h3>The Click App</h3>
                  <button onClick={svenFunc}>Why not click me?</button>
              </div>
              <div id="time-travel">
                  <h3>Click stats</h3>
                <p>You have clicked on the button {this.state.clicks} times</p>
              </div>
          </div>)

    }
});
module.exports = clickyApp;
