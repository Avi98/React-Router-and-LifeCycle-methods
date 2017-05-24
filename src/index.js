import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Router,Route,browserHistory,Link} from 'react-router';
// import createHistory from 'history/createBrowserHistory'


const App2 = () => {
    
    return(<div>
    <h1>Home</h1>
    <Link to="/World">About</Link>
    </div>);
}
const World= (props) =>{
        return(<div>
    <Link to="/">Home</Link>
    <h3>about</h3>
    <Link>{ props.children } </Link>
    <Link activeClassName="active" to="/world/flemigo" alt-text="image">flemigo</Link>
    {' '}
    <Link  activeClassName="active" to="/world/potrait" alt-text="image">potrait</Link>
    </div>);
}
const flemigo=()=>{
    return(
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" height="200" width="200"/>
    );

}
const potrait=()=>{
    return(
        <img src="http://lorempixel.com/400/200/"/>
    );
}
ReactDOM.render( 
    <Router history={browserHistory} >
        <Route path="/" component={App2}/>
        <Route path="/World" component={World}>
            <Route path="flemigo" component={flemigo}/>
            <Route path="potrait" component={potrait}/>
        </Route>
    </Router>
    ,document.getElementById('root'));
registerServiceWorker();
