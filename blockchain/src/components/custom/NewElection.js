import React, { Component } from 'react';
import axios from 'axios';




class NewElection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            election_name: '',
            election_organizer: '',
            election_password: '',
        };
    }

    handleInputChange = e => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { election_name, election_organizer, election_password } = this.state;
        console.log(election_name);
        axios.post('http://localhost:8000/api/electionName', {
            election_name: election_name,
            election_organizer: election_organizer,
            election_password: election_password
        })
        .then(function(response){ 
            window.location.assign('/adminPannel');
        })
        .catch(function(err){
            console.error(err);
        });
    }

    render(){
        return(
            <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6 login-section-wrapper">

                <div class="login-wrapper my-auto">
                  <h1 class="login-title">Create New Election</h1>

                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name" >Election Name</label><br />
                        <input type="text" id="election_name" name="election_name" placeholder="Name" onChange={this.handleInputChange} required/>
                        <br></br>
                        <label htmlFor="name" >Election Organizer</label>
                        <input type="text" id="election_organizer" name="election_organizer" placeholder="Organizer's Name" onChange={this.handleInputChange} required/>
                        <br></br>
                        <label htmlFor="name" >Election Password</label>
                        <input type="password" id="election_password" name="election_password" placeholder="Password "onChange={this.handleInputChange} required/>
                        <br></br><br></br>
                        <button className="btn btn-warning " type="submit" name="action" >Submit
                        </button>
                    </form>
                    </div>
              </div>
              <div class="col-sm-6 px-0 d-none d-sm-block">
                <img src="login.jpg" alt="login image" class="login-img"/>
              </div>
            </div>
          </div>
        )
    }
}

export default NewElection;
