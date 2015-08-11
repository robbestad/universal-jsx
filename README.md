# SVENJSX

SVENJSX is a support tool for [Svenjs](https:/github.com/svenanders/svenjs). It allows you to write JSX syntax in your _render_ code, like this:

```html
var clickyComponent = Svenjs.createComponent({
    initialState: {
        clicks: 0
    },
    render() {
    let svenFunc = () =>{
      this.setState({clicks: this.state.clicks++ });
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
```

## Related Modules

* [svenjsx-loader](https://github.com/svenanders/svenjsx-loader) - Webpack loader for SVENJSX.

## ISC Licensed
