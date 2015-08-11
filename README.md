#Universal-JSX 

Universal-JSX is allows you to write JSX syntax in your JavaScript code, like this:

```html
var clickyComponent = Universal.createComponent({
    initialState: {
        clicks: 0
    },
    render() {
    let clickFunc = () =>{
      this.setState({clicks: this.state.clicks++ });
    }
    return (<div id="row">
        <div id="app">
            <h3>The Click App</h3>
            <button onClick={clickFunc}>Why not click me?</button>
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

* [universal-jsx-loader](https://github.com/svenanders/universal-jsx-loader) - Webpack loader for UniversalJS.

## ISC Licensed
