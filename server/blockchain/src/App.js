import React, { Component } from 'react';
import NewElection from './components/custom/NewElection';
import NavBar from './components/custom/Navbar';
import Home from './components/custom/Home';
import Vote from './components/custom/Vote';
import About from './components/custom/About';
import VoteCount from './components/custom/VoteCount';
import ElectionData from './components/custom/ElectionData';
import Choose from './components/custom/Choose';
import { BrowserRouter, Route } from 'react-router-dom';
import NewCandidate from './components/custom/NewCandidate';
import Login from './components/custom/Login';
import AdminPannel from './components/custom/AdminPannel';

class App extends Component {

    getVal = () => {
        console.log('Test!')
    }

    render(){
        return (
        <BrowserRouter>
            <div className="App">
                <NavBar getVal={this.getVal}/>
                <Route exact path="/" component={Home} />
                <Route exact path="/NewElection" component={NewElection} />
                <Route exact path="/About" component={About} />
                <Route exact path="/elections" component={ElectionData} />
                <Route exact path="/candidates/:id" component={NewCandidate} />
                <Route exact path="/vote/:id" component={Vote} />
                <Route exact path="/choose" component={Choose} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/voteCount/:id" component={VoteCount}/>
                <Route exact path="/adminPannel" component={AdminPannel}/>
            </div>
        </BrowserRouter>
        );
    }
}

export default App;
