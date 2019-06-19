Routing in React
=========

- [Installation](#installation)
- [BrowserRouter and Route](#browserrouter-and-route)
- [Root routing](#root-routing)
- [Switch](#switch)
- [Exact](#exact)
- [Link](#link)
- [Dynamic Link](#dynamic-link)
- [Official Documentation](https://reacttraining.com/react-router/web/guides/quick-start)

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

### Switch
If we want to match only one route at a time, we need to wrap the routes in `Switch` component.

Importing is following:-
```
import {Switch} from 'react-router-dom'
```

And sample usages:-
```
<BrowserRouter>
	<Switch>
		<Route ... />
		<Route ... />
	</Switch
</BrowserRouter>
```

It will start matching from the top, if one matches, leave the remaining.

### Exact
We can use `exact` as props in the `Route` component. Usages will be following:-
```
<Route path="/home" exact component={Home} />
```

presence of `exact` props will change the matching logic like below:-
```
extractedPath === path
```

### Link 
`Link` component is kind of analogous to `anchor` tag. 

importing will be following:-
```
import {Link} from 'react-router-dom'
```

and usages will be following
```
<Link to={path}>
	...
</Link>
```
important to note that, the component that is using `Link`, need to be wrapped inside `BrowserRouter` component. Otherwise it will throw error

### Dynamic Link
This is more of how to genarate dynamic link based on api response & navigate to that.

First we need to define a **route** to handle dynamic link like following:-
```
<Route path="/card/:id" component={component} />
```

There's no change in the use of `Link` component, we can use string interpolation to generate the **to** props.
```
<Link to={`/card/${id}`}> ... </Link>
```

The component of the dynamic link will receive a props name `match`. We can get the **pathVariables** inside `match.params`

For the example above, we can extract the **id** of card in the component like following:-
```
const cardId = match.params.id
```
