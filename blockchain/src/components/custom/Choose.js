import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Choose extends Component {

    constructor(props) {
        super(props);
        this.state = {
            election_name: [],
            election_organizer: [],
            election_id: [],
            final: [],
            id: null,
        };
    }

    componentDidMount(){
        let currentComponent = this;
      
        axios.get('http://localhost:8000/api/electionName', {})
        .then(function(response){ 
            var data = response.data;
            currentComponent.setState({
                final: data
            })
        })
        .catch(function(err){
            console.error(err);
        });

    }

    handleInputChange = (e) => {
        // console.log(e.target.innerHTML);
        var name = e.target.innerHTML;
        var index = 0;
        for(let i = 0; i < this.state.election_name.length; i++){
            if(name === this.state.election_name[i]){
                index = i;
                break;
            }
        }
        var id = this.state.election_id[index];
        this.setState({
            id : id
        })
    };


    render(){
        const electionList = this.state.final.map(election => {
            return (
                <div className="contact" key={election.election_id}>
                    <li className="collection-item avatar">
                        {/* <i className="material-icons circle blue darken-2">ballot</i> */}
                        <Link to={"/vote/" + election.election_id} className="title" onClick={this.handleInputChange}>{election.election_name}</Link>
                    </li>
                </div>

            )
        }) 
        return(
            <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6 login-section-wrapper">

                <div class="login-wrapper my-auto">
                  <h1 class="login-title"> Ongoing Elections </h1>
                <ul className="collection">
                        {electionList}
                </ul>
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

export default Choose;