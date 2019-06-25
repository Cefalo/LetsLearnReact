import React from 'react';
import Search from './Search';
import Card from './Card';
import items from '../data';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="display-4">Thinking in React!</h1>
                        <p className="lead">React makes it painless to create interactive UIs. Design simple views for
                            each
                            state in
                            your application, and React will efficiently update and render just the right components
                            when
                            your data
                            changes.</p>
                    </div>
                </div>
                <Search/>
                <hr className="my-4"/>
                <div className="row">
                    {items.map((item, i) => <Card key={i} item={item}/>)}
                </div>
            </div>
        );
    }
};

export default Home;