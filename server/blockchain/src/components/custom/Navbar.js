import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {
    state = {
        location: ""
    }

    componentWillReceiveProps(){
        console.log(this.props)
        this.setState({
            location: this.props.history.location.pathname
        })
    }
    render(){

        return (
            <div id="top-bar">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                <img src="favicon.ico" width="30" height="30" class="d-inline-block align-top" alt=""/>E-Election</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <a class="nav-link" href="#"><NavLink to="/">Home </NavLink></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><NavLink to="/About">About</NavLink></a>
                    </li>

                </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar)