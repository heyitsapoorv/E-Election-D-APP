import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class About extends Component {



    render(){
        return (
                   <div class="about-wrapper">
                   <h1 ><b>  About</b></h1>
                   <h6><b>E-Voting DApp(Decentralized Application)</b> <br />

                    This is a simple E-voting Decentralized App using the Ethereum Blockchain, Solidity and the <b>MERN(MongoDB, Express.js, ReactJS, Node.js)</b> stack
</h6>
<img src="https://miro.medium.com/max/16000/1*AReX8uZOZKpGcvuUjogh0g.png" height="100px" width="160px"/>

<h6>
<b>Ethereum</b> is an open source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality.
</h6>
<h6>
About the D-App 
<br/>
The E-Voting app has 2 main users:<br/>
<br/>
<b>1. Admin </b><br/>
Admin can create an election and add candidates to the Ethereum Blockchain.
<br />
<b>2. Voter</b>
<br/>
Voters can select an election and vote for a candidate of their choice.


<br></br>
<br></br>

</h6>
<img  src="apoorv.jpg" alt="" widht="100px" height="500px" class="center"/>




</div>

        )
    }
}

export default About