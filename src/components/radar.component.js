// ** create-user.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';
import './login.css';

export default class Radar extends Component {

    constructor(props) {
        super(props)
    }

    onChangeUserName(e) {
        
        axios.get('http://localhost:4000/radar')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            console.log("done");
            // always executed
        });
    }


    render() {
        return (
            
            
                <div className="wrapper">
            <title> TAKE THE FIRST STEP </title>
   <link rel="stylesheet" href="styles.css"/>
            <div id="Topcontent">
       <h1>TAKE THE FIRST STEP</h1>
       <p id="line1">Serving community by looking forward as well as back is a big picture, but the power of today's new digital capabilities is vast and growing</p>
       <p id="line2">Let's talk about how you can be part of the community...</p>
   </div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        
                        <input type="text" className="form-control" id="name" 
                        value="" onChange={this.onChangeUserName}placeholder="NAME*"/>
                    </div>
                                   </form>
            </div>
        )
    }
}