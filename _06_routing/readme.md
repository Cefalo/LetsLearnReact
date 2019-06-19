Routing in React
=========

- [Installation](#installation)
- [BrowserRouter and Route](#browserrouter-and-route)
- [Root routing](#root-routing)

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

### Root routing
We can add a root routing like following
```
<Route path="/" component={Home} />
```

Different **route** can be matched by the same url. And matching is done by kind of the following logic
```
extractedPath.contains(path)
```

Here `extractedPath` is what appeared after `.com` or `.net` or `:portNumber`

That's why `localhost:3000/home` is matching with both `/` and `/home` route.