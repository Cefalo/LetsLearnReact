Routing in React
=========

- [Installation](#Installation)

### Installation
```
npm install react-router-dom
```

### BrowserRouter And Route
Import will be following
```
import {BrowserRouter, Route} from 'react-router-dom'
```

We need to pass two props in the `Route` component, `path` and `component`. So, a route will be look like following
```
<Route path="/home" component={Home} />
```

And finally need to wrap all the route within `BrowserRouter` component. like following:-
```
<BrowserRouter>
	<Route ... />
	<Route ... />
</BrowserRouter>
```
