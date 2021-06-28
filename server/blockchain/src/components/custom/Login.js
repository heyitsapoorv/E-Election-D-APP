import React, { Component } from 'react'
import axios from 'axios'


class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            'username': null,
            'password': null
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        console.log(username);
        console.log(password);
        // axios.post('http://localhost:8000/api/adminLogin', {
        //     username: username,
        //     password: password,
        // })
        // .then(function(response){ 
        //     if(response.data){
        //         window.location.assign("/newelection")
        //     }else{
        //         alert('Incorrect Username or Password');
        //     }
        // })
        // .catch(function(err){
        //     console.error(err);
        // });
        if(username =="Lakshit" && password =="Lakshit"){
            window.location.assign("/adminPannel");
        }

        else{
            alert('Incorrect username and password');
        }
    }


    render(){
        return(

        <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 login-section-wrapper">
                        <div class="login-wrapper my-auto">
                            <h1 class="login-title">Log in</h1>
                            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label htmlFor="name">Username</label>
                <input type="text" id="username" name="username" class="form-control" placeholder="Enter Username" onChange={this.handleInputChange}required />
              </div>
              <div class="form-group mb-4">
                <label htmlFor="name">Password</label>
                <input type="password" id="password" name="password" class="form-control" placeholder=" Enter Password"  onChange={this.handleInputChange}required />
              </div>
               <button class="btn btn-warning " type="submit" name="action">Login</button>
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

export default Login;
