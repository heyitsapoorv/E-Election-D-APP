import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




class ElectionData extends Component {

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
                // election_name: data[0],
                // election_organizer: data[1],
                // election_id: data[2],
                final: data
            })
        })
        .catch(function(err){
            console.error(err);
        });

    }

    handleInputChange = (e) => {
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
                <div className="contact" key={election.election_id} class="container" >
                    <li >
                        {/* <i className="material-icons circle blue darken-2">ballot</i> */}
                        <p><b>{election.election_name}</b></p>
                        <Link to={"/candidates/" + election.election_id} className="title" onClick={this.handleInputChange}><button id={election.election_id} class="btn btn-warning " >Add Candidate</button></Link>
<br />
<br />
                        <Link to={"/voteCount/" + election.election_id} className="title" onClick={this.handleInputChange}><button id={election.election_id}  class="btn btn-warning ">View Vote Count</button></Link>
                    </li>
                    <br />
                </div>
            )
        }) 
        return(
            <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6 login-section-wrapper">

                <div class="login-wrapper my-auto">
            {/* <div className="container"> */}
                <ul className="collection">
                    {/* <li className="collection-item avatar" style ={divStyle}> */}
                        <h3>Elections</h3>
                    {/* </li> */}
                        {electionList}
                </ul>
            {/* </div> */}
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

export default ElectionData;
