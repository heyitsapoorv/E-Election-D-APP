import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// window.onload = function () {
//     /* Cache the popup. */
//     var popup = document.getElementById("popup");

//     /* Show the popup. */
//     popup.classList.remove("hidden");
//     /* Fade the popup in */

//     setTimeout(()=>popup.classList.add("fade-in"));
//     /* Close the popup when a city is selected. */

//     document.getElementById("close").onclick = function () {

//        /* Fade the popup out */
//        popup.classList.remove("fade-in");

//        /* Hide the popup. */

//        setTimeout(()=>popup.classList.add("hidden"), 300);

//     };

//   };


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {value: 'Choose'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) 
    {
      this.setState({value: event.target.value});
    }
    handleSubmit(event)
    {
          // event.preventDefault()
          if(this.state.value=='Choose')
          {
          this.props.history.push('/Choose');
          event.preventDefault();
          }
          else{
               this.props.history.push('/Login');
               event.preventDefault();
              }
    }





    render(){
        return (


        <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 login-section-wrapper">
                        <div class="login-wrapper my-auto">
                            <h1 class="login-title">Choose Below</h1>
                 <form onSubmit={this.handleSubmit}>
                     <div class="form-group"  >
                             <label>
                               The type of User  :
                              </label>
                              <br />
                              <select  class="form-control form-control-lg" value={this.state.value} onChange={this.handleChange}>
                                  <option value="Choose" >Voter</option>
                              <option value="Login" >Admin</option>
                         </select>
                         <br />
                        <button type="submit" class="btn btn-warning " onClick={this.props.onSubmit} >Submit</button>
                     </div>
                 </form>
                        </div>
                    </div>
                    <div class="col-sm-6 px-0 d-none d-sm-block">
                        <img src="login.jpg" alt="login image" class="login-img" />

                    </div>
                </div>
            </div>

        )
    }
}

export default Home