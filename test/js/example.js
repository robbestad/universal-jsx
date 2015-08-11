const Svenjs = require('svenjs');

var clickyApp = Svenjs.createComponent({
    displayName: "Clicky App",
    initialState: {
        clicks: 0
    },
    render:function(){
      "use strict";
      var state=this.state;
      let svenFunc = function() {
        this.setState({clicks: (this.state.clicks ? ++this.state.clicks : 1)});
      }.bind(this)
      return ({tag: "div", attrs: {id:"row"}, children: [
              {tag: "div", attrs: {id:"app"}, children: [
                  {tag: "h3", attrs: {}, children: ["The Click App"]}, 
                  {tag: "button", attrs: {onClick:svenFunc}, children: ["Why not click me?"]}
              ]}, 
              {tag: "div", attrs: {id:"time-travel"}, children: [
                  {tag: "h3", attrs: {}, children: ["Click stats"]}, 
                {tag: "p", attrs: {}, children: ["You have clicked on the button ", this.state.clicks, " times"]}
              ]}
          ]})

    }
});
module.exports = clickyApp;
