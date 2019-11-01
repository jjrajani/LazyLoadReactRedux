## React and Webpack Lazy Load and Code Split Examples

[DEMO](http://envious-eggnog.surge.sh/#/)

### Webpack modifications

We need to add the output.chunkFilename option to our webpack config. This will tell webpack how to name our lazy loaded files.

```
output: {
    // ...
    chunkFilename: '[name].[chunkhash].bundle.js'
  },
```

### Babel

We need to add a plugin to our .babelrc file to allow us to use the special `import()` syntax. The `import()` syntax will allow us to chain a `.then` to the import statements. The `.then` will be our hook to inject a handler to take over after the import is complete.

```
{
  // ...
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

### React Lazy Load HOC

We will use an HOC to handle the async nature of our lazy loaded components.

```
import React, { Component } from "react";
export default function asyncComponent(getComponent) {
    class AsyncComponent extends Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

        UNSAFE_componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return <div>Loading...</div>
        }
    }
    return AsyncComponent;
}
```

## Using the AsyncComponent HOC

First we create a component like we usually do.

```
// Home.js
import React from 'react';

function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
    </div>
  );
}

export default Home;
```

The, to make our components lazy load, we will wrap them with the AsyncComponent HOC. Note: the setTimeout is to fake the time it takes to load a file.

```
// LazyHome.js
import asyncComponent from '../../hoc/AsyncComponent';

const LazyHome = asyncComponent(() => {
  return new Promise((resolve => {
    setTimeout(() => {
      import(
        /* webpackChunkName: "Home" */
        /* webpackMode: "lazy" */
        './Home'
      ).then(module => resolve(module.default))
    }, 1500)
  }))
});

export default LazyHome
```

Once we have out component wrapped with our lazy load handler, we can use it in our Routes like any other component.

```
// Routes.js
import LazyHome from './components/Home/LazyHome';
import ReactDOM from "react-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <LazyHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

document.addEventListener("DOMContentLoaded", function() {
  const wrapper = document.getElementById("root");
  wrapper ? ReactDOM.render(<App />, wrapper) : false;
});
```

## Lazy load regular files

We can lazy load any type of file using the `import()` syntax.

```
// async.js
export default "HELLO";
export const WHY = "WHY";


// file that imports async.js
import( './async.js' ).then( ( data ) => {
    console.log( data );
} );
```
